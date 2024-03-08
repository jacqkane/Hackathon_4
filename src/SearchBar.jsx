


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
        <div>
            <h3>This is Searchbar</h3>
            <label >Search
                <input type="text" name=" " onChange={handleSearchPictures} value={props.searchKeyword} />
                <button onClick={handleButtonClick}>Click search</button>
            </label>
        </div >
    )
}