"use client";
import React, { useState } from "react";
import Nav from "../nav";
import Footer from "../footer";
import { forumData } from "./data";
import { ForumModal } from "./forumModal";

const PostsPerPage = 8;

const ForumPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPost, setCurrentPost] = useState(forumData[0]);

  const indexOfLastPost = currentPage * PostsPerPage;
  const indexOfFirstPost = indexOfLastPost - PostsPerPage;
  const currentPosts = forumData.slice(indexOfFirstPost, indexOfLastPost);

  const openModal = (post: (typeof forumData)[0]) => {
    setCurrentPost(post);
    setIsModalOpen(true);
  };

  const trimContent = (content: string, maxLength: number = 10) =>
    content.length > maxLength
      ? `${content.substring(0, maxLength)}...`
      : content;

  return (
    <div className="min-h-screen bg-white">
      <Nav />
      <main className="py-12 mt-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {currentPosts.map((post, index) => (
              <div
                key={index}
                className="cursor-pointer max-w-lg w-full bg-gray-200 p-4 shadow-lg rounded-lg"
                onClick={() => openModal(post)}
              >
                <h3 className="text-lg font-bold text-black">{post.title}</h3>
                <p className="text-black">{trimContent(post.content)}</p>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    openModal(post);
                  }}
                  className="mt-2 px-4 py-2 bg-green-700 text-white rounded hover:bg-green-500 transition-colors duration-150"
                >
                  Read More
                </button>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            {Array.from(
              { length: Math.ceil(forumData.length / PostsPerPage) },
              (_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`mx-2 px-4 py-2 border rounded ${
                    currentPage === i + 1
                      ? "bg-green-500 text-white"
                      : "bg-white text-black"
                  }`}
                >
                  {i + 1}
                </button>
              )
            )}
          </div>
        </div>
        {isModalOpen && (
          <ForumModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            post={currentPost}
          />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default ForumPage;
