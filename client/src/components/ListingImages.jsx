import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';

const ListingImages = () => {
  const [image, setImage] = useState('');
  const [loading, setLoading] = useState(false);

  const uploadImage = e => {
    const files = e.target.files[0];
    const formData = new FormData();
    formData.append('upload_preset', 'FinalProjectHoused');
    formData.append('file', files);
    setLoading(true);

    axios
      .post('https://api.cloudinary.com/v1_1/housed', formData)
      .then(res => setImage(res.data.secure_url))
      .then(setLoading(false))
      .catch(err => console.log(err));
  };

  return (
    <div>
      <input type="file" name="file" onChange={uploadImage} />

      {loading ? (
        <h3> loading... </h3>
      ) : (
        <img className="settings-image" src={image} />
      )}
    </div>
  );
};

export default ListingImages;
