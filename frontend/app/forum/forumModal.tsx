"use client";
import React, { useEffect } from "react";

interface ForumModalProps {
  isOpen: boolean;
  onClose: () => void;
  post: {
    title: string;
    content: string;
    date: string;
    avatar: string;
  };
}

export const ForumModal: React.FC<ForumModalProps> = ({
  isOpen,
  onClose,
  post,
}) => {
  if (!isOpen) return null;

  const handleBackdropClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center"
      onClick={handleBackdropClick}
    >
      <div className="bg-white p-4 rounded-lg max-w-xl max-h-full overflow-auto">
        <div className="flex flex-col items-center">
          <img
            src={post.avatar}
            alt="Post Avatar"
            className="w-32 h-32 rounded-full"
          />
          <h2 className="text-lg font-bold text-black mt-4">{post.title}</h2>
          <p className="text-black mt-2">{post.content}</p>
          <button
            onClick={onClose}
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
