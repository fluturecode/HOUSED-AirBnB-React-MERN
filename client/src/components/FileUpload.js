import React, { useState } from 'react'
import axios from 'axios'
import '../styles/upload.css'


const FileUpload = () => {
    const [image, setImage] = useState('');
    const [loading, setLoading] = useState(false);

    const uploadImage = e => {
        const files = e.target.files[0];
        const formData = new FormData();
                formData.append("upload_preset", "licenses");
                formData.append("file", files);
                setLoading(true);

                axios.post('https://api.cloudinary.com/v1_1/jagoshi/upload', formData)
                .then(res => setImage(res.data.secure_url))
             
    }


    return (
        <>
            <div className="custom-file mb-2">

                    <input type="file" name="file"  onChange={uploadImage} />
                   
            </div>
        </>
    )
}

export default FileUpload
