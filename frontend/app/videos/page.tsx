"use client";
import React, { useState, useEffect } from "react";
import { fetchData } from "./data";
import { VideoModal } from "./videoModal";
import Nav from "../nav";
import Footer from "../footer";

interface Video {
  title: string;
  thumbnailUrl: string;
  videoUrl: string;
}

const Videos: React.FC = () => {
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
    const getData = async () => {
      const response = await fetchData();
      setVideos(response.data.videos[0].data.videos);
    };

    getData();
  }, []);

  const trimTitle = (title: string, maxLength: number = 50) =>
    title.length > maxLength ? `${title.substring(0, maxLength)}...` : title;

  const indexOfLastVideo = currentPage * videosPerPage;
  const indexOfFirstVideo = indexOfLastVideo - videosPerPage;
  const currentVideos = videos.slice(indexOfFirstVideo, indexOfLastVideo);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="min-h-screen bg-white">
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
                className="w-full h-auto"
              />
              <p className="text-black text-sm mt-2">
                {trimTitle(video.title)}
              </p>
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
