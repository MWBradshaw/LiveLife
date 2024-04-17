import './SearchBar.css';

const url = 'https://real-time-amazon-data.p.rapidapi.com/search?query=Phone&page=1&country=US&category_id=aps';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c78ae4dfe7msheb0295c0d413df2p16b2c0jsn7e73dbe83f69',
		'X-RapidAPI-Host': 'real-time-amazon-data.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}


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