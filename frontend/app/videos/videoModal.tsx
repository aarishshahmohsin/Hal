export const VideoModal = ({
  isOpen,
  onClose,
  videoUrl,
}: {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
}) => {
  if (!isOpen) return null;

  const embedUrl = videoUrl.replace("watch?v=", "embed/");

  const handleBackgroundClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };


  console.log(embedUrl);
  return (
    <div
      className="fixed inset-0 w-full text-red-600 bg-black bg-opacity-50 z-50 flex justify-center items-center"
      onClick={handleBackgroundClick}
    >
      <div
        className="bg-white p-4 w-full rounded-lg max-w-xl max-h-full overflow-auto flex flex-col justify-between"
        onClick={(e) => e.stopPropagation()}
      >
        <iframe
          className="w-full mb-4"
          height="315"
          src={embedUrl}
          title="Video Player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <button
          onClick={onClose}
          className="px-4 py-2 bg-red-500 text-white self-center rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};
