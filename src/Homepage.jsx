import { useEffect, useState } from 'react';
import { key } from './key'
import SearchBar from './SearchBar';
import PicturesList from './PicturesList';

export default function Homepage() {
    const [pictures, setPictures] = useState(null);
    const [searchKeyword, setSearchKeyword] = useState('')
    const [searchButton, setSearchButton] = useState(0)
    // console.log(searchKeyword);
    // console.log(pictures);

    const loadPicuters = async () => {
        const response = await fetch('https://api.unsplash.com/search/photos?query="' + searchKeyword + '"&client_id=' + key + '&per_page=12');
        const data = await response.json();
        setPictures(data);
    }

    useEffect(() => {
        loadPicuters()

    }, [searchButton])


    return (
        <div>
            <h3>Homepage</h3>
            <SearchBar searchKeyword={searchKeyword} setSearchKeyword={setSearchKeyword} searchButton={searchButton} setSearchButton={setSearchButton} />
            <PicturesList pictures={pictures} />
        </div>
    )
}