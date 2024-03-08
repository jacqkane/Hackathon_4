import { useEffect, useState } from 'react';
import { key } from './keys'
import SearchBar from './SearchBar';
import PicturesList from './PicturesList';
import './Homepage.css';

export default function Homepage() {
    const [pictures, setPictures] = useState(null);
    const [searchKeyword, setSearchKeyword] = useState('')
    const [searchButton, setSearchButton] = useState(0)
    const [currentPage, setCurrentPage] = useState(1)
    // console.log(searchKeyword);
    // console.log(pictures);

    const loadPicuters = async (page = 1) => {
        const response = await fetch(`https://api.unsplash.com/search/photos?query="${searchKeyword}"&client_id=${key}&per_page=12&page=${page}`);
        const data = await response.json();
        setPictures(data);
    }

    useEffect(() => {
        loadPicuters(currentPage);

    }, [searchButton, currentPage]);


    return (
        <div className='body'>
            <h3 className='title'>Take a look at our list!</h3>
            <SearchBar searchKeyword={searchKeyword} setSearchKeyword={setSearchKeyword} searchButton={searchButton} setSearchButton={setSearchButton} />
            <button className='previous' onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
            <button className='next' onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
            <PicturesList pictures={pictures} />
        </div>
    )
}