import React from "react";

const Loader: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-white bg-opacity-90 z-50">
      <div className="w-24 h-24 border-t-4 border-blue-500 rounded-full animate-spin"></div>
    </div>
  );
};

export default Loader;
