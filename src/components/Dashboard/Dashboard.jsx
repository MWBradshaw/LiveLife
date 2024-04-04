import Carousel from 'react-bootstrap/Carousel';
import './Dashboard.css';

const Dashboard = () => {
    return(
        <div>
            <div>
                <Carousel id="dashboard-carousel" fade interval={3000} pause='hover'>
                    <Carousel.Item>
                        <img className="dashboard-carousel-image" src="src/assets/IphoneCarousel.png" />
                        <Carousel.Caption>
                        <h3>Find your next companion</h3>
                        <p>Apple iPhone 13, 128GB</p>
                        <p>Starting at $599.99</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                    <img className="dashboard-carousel-image" src="src/assets/MacbookCarousel.jpeg" />
                        <Carousel.Caption>
                        <h3>A New Way to Surf the Web</h3>
                        <p>Apple 2022 MacBook Air M2 Chip</p>
                        <p>Starting at $899.99</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="dashboard-carousel-image" src="src/assets/PetFoodCarousel.jpeg" />
                        <Carousel.Caption>
                        <h3>Give Your Pets the Best</h3>
                        <p>Hill's Science Diet Adult Perfect Weight Chicken Recipe Dry Dog Food, 25 lb. Bag</p>
                        <p>Starting at $79.99</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>

            <div id="dashboard-select-items-container">
                <div className="dashboard-select-item">
                    <p>Buy Again</p>
                    <img className="selection-image" src="src/assets/MacbookSelection.png" />
                    <p>Macbook Air (M2, 13.3 in.)</p>
                </div>

                <div className="dashboard-select-item">
                    <p>Top Deals</p>
                    <img className="selection-image" src="src/assets/RemoteSelection.png" />
                    <div className="limited-time-text-container">
                        <p>Up to 49% off</p>
                        <p>Limited Time Deal</p>
                    </div>
                </div>

                <div className="dashboard-select-item">
                    <p>Cart Items</p>
                    <img className="selection-image" src="src/assets/YogaPantsSelection.png" />
                    <p>CrossFit Yoga Pants</p>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;