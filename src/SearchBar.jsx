import './SearchBar.scss'


export default function SearchBar(props) {


    const handleSearchPictures = (e) => {
        props.setSearchKeyword(e.target.value);

    }

    const handleButtonClick = () => {
        if (props.searchButton === 0) {
            props.setSearchButton(1)
        } else {
            props.setSearchButton(0)
        }

    }

    return (
        <div className="searchbar">
            <h3 className='title'>Search Author Info</h3>
            {/* <label >Type in {'>>'} */}
                <input type="text" name=" " placeholder='search here' onChange={handleSearchPictures} value={props.searchKeyword} />
                <button onClick={handleButtonClick}>Click to search</button>
            {/* </label> */}
        </div >
    )
}