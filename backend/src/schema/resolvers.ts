import { AuthenticationError } from 'apollo-server';
import Post from '../models/Post';
import User from '../models/User';
import fetch_marketplace from '../scripts/marketplace';
import getPlaylistVideos from '../scripts/videos';
import * as jwt from 'jsonwebtoken';

const privateKey = 'rootroute'; // Replace with a secure secret key

const generateToken = (user: any) => {
  const token = jwt.sign(
    {
      userId: user.id,
    },
    privateKey,
    { expiresIn: '24h' }
  );
  return token;
};

const verifyToken = (token: any) => {
  try {
    if (!token) {
      throw new AuthenticationError('Token not provided');
    }
    const decoded = jwt.verify(token, privateKey);
    return decoded;
  } catch (error) {
    console.error(error);
    throw new AuthenticationError('Invalid token');
  }
};

const resolvers = {
  Query: {
    posts: async () => {
      try {
        const posts = await Post.find().populate("author");
        return posts;
      } catch (error) {
        console.error(error);
        throw new Error("Failed to fetch posts");
      }
    },
    videos: async () => {
      try {
        const videos = getPlaylistVideos();
        return videos;
      } catch (error) {
        console.error(error);
        throw new Error("Failed to fetch videos");
      }
    },
    marketplace: async (_: any, { number }: any) => {
      try {
        const marketplace = await fetch_marketplace(number);
        return marketplace;
      } catch (error) {
        console.error(error);
        throw new Error("Failed to fetch marketplace items");
      }
    },
    authenticate: async (_: any, { token }: any) => {
      return verifyToken(token);
    },
  },
  Mutation: {
    signup: async (_: any, { username, email, password }: any) => {
      const already_present = await User.findOne({ email, password });
      if (already_present) {
        throw new AuthenticationError("User already exists");
      }
      try {
        const newUser = new User({ username, email, password });
        await newUser.save();
        const token = generateToken(newUser);
        return { user: newUser, token };
      } catch (error) {
        console.error(error);
        throw new Error("Failed to create user");
      }
    },
    login: async (_: any, { email, password }: any) => {
      try {
        const user = await User.findOne({ email, password });
        if (!user) {
          throw new AuthenticationError("Invalid login credentials");
        }
        const token = generateToken(user);
        return { user, token};
      } catch (error) {
        console.error(error);
        throw new AuthenticationError("Failed to authenticate user");
      }
    },
     createPost: async (_: any, { title, content, token }: any) => {
      try {
        console.log(token)

        const user = verifyToken(token);
        if (!user) {
          throw new AuthenticationError('Authentication required');
        }
        // @ts-ignore
        const author = await User.findById({_id: user.userId});
        console.log(author);
        if (!author) {
          throw new Error('User not found');
        }

        const newPost = new Post({
          title,
          content,
          author: author.id,
          createdAt: new Date().toISOString(),
        });

        await newPost.save();
        await author.posts.push(newPost.title);
        await author.save();

        return newPost;
      } catch (error) {
        console.error(error);
        throw new Error('Failed to create post');
      }
    },
  } 
  
};

export default resolvers;
