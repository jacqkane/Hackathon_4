import { useEffect, useState } from 'react'
import { key } from './keys.js'
import { useParams } from 'react-router-dom'



export default function AuthorDetails() {

    // const [authorInfo, setAuthorInfo] = useState(null)
    // const [authorImages, setAuthorImages] = useState(null)
    // const { name } = useParams();


    // const loadAuthorDetails = async () => {
    //     if (!searchQuery) return;
    //     const response = await fetch("https://api.unsplash.com/users/" + `${name}` + `?client_id=${key}`)
    //     const data = await response.json();

    //     console.log(data)

    //     setAuthorInfo(data);
    // }

    // const loadAuthorImages = async () => {
    //     if (!searchQuery) return;
    //     const response = await fetch("https://api.unsplash.com/users/" + `${name}` + `/photos?client_id=${key}`)
    //     const data = await response.json();

    //     console.log(data)
    //     setAuthorImages(data)
    // }

    // useEffect(() => {
    //     loadAuthorDetails()
    //     loadAuthorImages()
    // }, []);


    return (
        <p>delete it</p>
        // <div className="authorCard">
        //     <div className="authorInfo">
        //         <h2>{'First Name ' + authorInfo.user.first_name + ' - ' + 'Last Name ' + authorInfo.user.last_name}</h2>
        //         <p>{authorInfo.user.bio}</p>
        //         {/* <p>{authorInfo.downloads}</p> */}
        //         <p>{authorInfo.likes}</p>
        //     </div>

        //     <div className="authorImages">
        //         <h3>Author's photos</h3>
        //         <ul>
        //             {
        //                 // authorImages.map(photo => (
        //                 //     <li key={photo.id}>
        //                 //         <img src={photo.url} alt={photo.alt_description} />
        //                 //     </li>
        //                 // ))

        //             }


        //         </ul>
        //     </div>
        // </div>





    )
}