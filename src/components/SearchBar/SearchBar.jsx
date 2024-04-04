import './SearchBar.css';

const SearchBar = () => {
    return(
        <div id="search-bar">
            <input type="text" placeholder="Search" id="search-bar-text" />
            <button id="search-bar-button">
                <img src="src/assets/icon _magnifying glass_.png" />
            </button>
        </div>
    )
}

export default SearchBar;