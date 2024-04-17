import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar.jsx';
import './Navbar.css';

const Navbar = () => {
    return(
        <div id="navbar">
            <Link to="/">
                <div id="navbar-brand">
                    <img src="src/assets/NavbarBrand.png" />
                    <p className="nav-link-text">LiveLife</p>
                </div>
            </Link>
            <div>
                <SearchBar />
            </div>
            <div id="nav-link-container">
                <Link to="/"><p className="nav-link-text">Shop Now</p></Link>
                <Link to="/"><p className="nav-link-text">New Deals</p></Link>
                <Link to="/categories"><p className="nav-link-text">Categories</p></Link>
                <Link to="/orders"><p className="nav-link-text">Returns & Orders</p></Link>
                <Link to="/cart"><p className="nav-link-text">Cart</p></Link>
            </div>
        </div>
    )
}

export default Navbar