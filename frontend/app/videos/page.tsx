"use client"; 
import React, { useState, useEffect } from "react";
import { fetchData } from "./data";
import { VideoModal } from "./videoModal";
import Nav from "../nav";
import Footer from "../footer";
import { gql, useQuery } from "@apollo/client";


// const GET_VIDEOS = gql`
//   query {
//     videos {
//       data {
//         videos {
//           title
//           thumbnailUrl
//           videoUrl
//         }
//       }
//     }
//   }
// `;


interface Video {
  title: string;
  thumbnailUrl: string;
  videoUrl: string;
}

const Videos: React.FC = () => {

  // const {loading, error, data} = useQuery(GET_VIDEOS);

  



  
  const [videos, setVideos] = useState<Video[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [videosPerPage] = useState(8);

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [currentVideoUrl, setCurrentVideoUrl] = useState<string>("");

  const openModal = (videoUrl: string) => {
    setCurrentVideoUrl(videoUrl);
    setIsModalOpen(true);
  };

  useEffect(() => {
    async function fetchVideos() {
  const query = `
    query {
      videos {
        title
        thumbnailUrl
        videoUrl
      }
    }
  `;

  try {
    const response = await fetch("http://localhost:8080/graphql/", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    });

    const data = await response.json();
    console.log(data.data.videos);
    setVideos(data.data.videos)
  } catch (error) {
    console.error('Error fetching videos:', error);
    setVideos([]);
  }
}
    fetchVideos();
  }, []);

  const trimTitle = (title: string, maxLength: number = 50) =>
    title.length > maxLength ? `${title.substring(0, maxLength)}...` : title;

  const indexOfLastVideo = currentPage * videosPerPage;
  const indexOfFirstVideo = indexOfLastVideo - videosPerPage;
  const currentVideos = videos.slice(indexOfFirstVideo, indexOfLastVideo);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="min-h-screen bg-white text-black">
      <Nav />
      <main className="py-12 mt-8 px-4 bg-gray-100">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {currentVideos.map((video, index) => (
            <div
              key={index}
              className="cursor-pointer p-4 shadow-lg rounded-lg"
            >
              <img
                src={video.thumbnailUrl}
                alt={video.title}
                className="w-full rounded mb-2"
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <p className="text-sm mt-2">{trimTitle(video.title)}</p>
              <button
                onClick={() => openModal(video.videoUrl)}
                className="mt-2 px-4 py-1 bg-green-600 text-white rounded hover:bg-green-700 transition-colors duration-150"
              >
                Watch
              </button>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          {Array.from(
            { length: Math.ceil(videos.length / videosPerPage) },
            (_, i) => (
              <button
                key={i + 1}
                onClick={() => paginate(i + 1)}
                className={`mx-1 px-4 py-2 rounded-lg ${
                  currentPage === i + 1
                    ? "bg-green-500 text-white"
                    : "bg-gray-200"
                }`}
              >
                {i + 1}
              </button>
            )
          )}
        </div>
      </main>
      <Footer />
      {isModalOpen && (
        <VideoModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          videoUrl={currentVideoUrl}
        />
      )}
    </div>
  );
};

export default Videos;
