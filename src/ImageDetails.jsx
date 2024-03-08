import './ImageDetails.scss';
export default function ImageDetails({ photo }) {
    return (
        <div className="photoDetail">
            <h3>Photo Detail</h3>
            <img src={photo.urls.full} alt={photo.alt_description || "No description"} />
            <p>Author: {photo.user.name}</p>
            <p>Likes: {photo.likes}</p>
        </div>
    );
}