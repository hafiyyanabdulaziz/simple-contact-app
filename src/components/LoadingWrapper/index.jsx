import React from "react";

const LoadingWrapper = ({ children, isLoading }) => {
  if (!isLoading) {
    return children;
  }
  return (
    <div className='relative'>
      {children}
      <div className='absolute top-0 w-full h-full z-40 bg-black bg-opacity-30 flex items-center justify-center'>
        <span className='loading loading-spinner loading-md'></span>
      </div>
    </div>
  );
};

export default LoadingWrapper;
