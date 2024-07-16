import React from 'react';

const UploadButton = () => {
  const handleUpload = () => {
    alert('Image is being uploaded...');
  };

  return <button onClick={handleUpload}>Upload Image</button>;
};

export default UploadButton;