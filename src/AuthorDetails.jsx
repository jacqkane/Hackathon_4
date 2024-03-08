// import { useEffect, useState } from "react";
// import { key } from "./keys.js";
// import { Link, useParams } from "react-router-dom";
// import './AuthorDetails.css'; 

// export default function AuthorDetails() {
//   const [authorInfo, setAuthorInfo] = useState(null);
//   const [authorImages, setAuthorImages] = useState(null);
//   const { name } = useParams();

//   const loadAuthorDetails = async () => {
//     const response = await fetch(
//       `https://api.unsplash.com/users/${name}?client_id=${key}`
//     );
//     const data = await response.json();
//     setAuthorInfo(data);
//   };

//   const loadAuthorImages = async () => {
//     const response = await fetch(
//       `https://api.unsplash.com/users/${name}/photos?client_id=${key}`
//     );
//     const data = await response.json();
//     setAuthorImages(data);
//   };

//   useEffect(() => {
//     loadAuthorDetails();
//     loadAuthorImages();
//   }, []);
// console.log(authorInfo);
//   return (
//     <div className="authorCard">

//       {authorInfo && authorInfo ? (
//         <div>
//           <div className="authorInfo">
//             <h2>{(authorInfo.name || "N/A")}</h2>
//             <p className="motto">{authorInfo.bio || "No bio available."}</p>
//             <p className="likes">Likes: {authorInfo.total_likes}</p>
//           </div>
//         </div>
//       ) : (
//         <p>Loading...</p>
//       )}

//       <div className="authorImages">
//         <h3>Author's photos</h3>
//         <ul>
//           {authorImages ? (
//             authorImages.map((photo) => (
//               <li key={photo.id}>
//                 <img src={photo.urls.small} alt={"No description"} />
//               </li>
//             ))
//           ) : (
//             <p>No photos available.</p>
//           )}
//         </ul>
//         <Link className="backButton" to="/">Back to Search</Link>
//       </div>
//     </div>
//   );
// }

import { useEffect, useState } from "react";
import { key } from "./keys.js";
import { Link, useParams } from "react-router-dom";
import './AuthorDetails.css';
import ImageDetails from './ImageDetails.jsx';
export default function AuthorDetails() {
  const [authorInfo, setAuthorInfo] = useState(null);
  const [authorImages, setAuthorImages] = useState(null);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const { name } = useParams();
  const loadAuthorDetails = async () => {
    const response = await fetch(
      `https://api.unsplash.com/users/${name}?client_id=${key}`
    );
    const data = await response.json();
    setAuthorInfo(data);
  };
  const loadAuthorImages = async () => {
    const response = await fetch(
      `https://api.unsplash.com/users/${name}/photos?client_id=${key}`
    );
    const data = await response.json();
    setAuthorImages(data);
  };
  useEffect(() => {
    loadAuthorDetails();
    loadAuthorImages();
  }, []);
  const handlePhotoClick = (photo) => {
    setSelectedPhoto(photo);
  };
  return (
    <div className="authorCard">
      {authorInfo ? (
        <div>
          <div className="authorInfo">
            <h2>{(authorInfo.name || "N/A")}</h2>
            <p className="motto">{authorInfo.bio || "No bio available."}</p>
            <p className="likes">Likes: {authorInfo.total_likes}</p>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <div className="authorImages">
        <h3>Author's photos</h3>
        <ul>
          {authorImages ? (
            authorImages.map((photo) => (
              <li key={photo.id}>
                <Link to={`/photo/${photo.id}`} onClick={(event) => {
                  event.preventDefault()
                  handlePhotoClick(photo)
                }
                }
                >
                  <img src={photo.urls.small} alt={"No description"} />
                </Link>
              </li>
            ))
          ) : (
            <p>No photos available.</p>
          )}
        </ul>
        <Link className="backButton" to="/">Back to Search</Link>
      </div>
      {selectedPhoto && <ImageDetails photo={selectedPhoto} />}
    </div>
  );
}












