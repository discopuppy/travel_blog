import React from 'react';
import { Link } from 'react-router-dom';

const SlideThree = () => {
    let background = {
        backgroundImage: 'url("/images/slide3.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }

    return <div style={background} className="slide">
        <div className="articleCard__background">
            <div className="slide__container">
                <div className="articleCard__content">
                    <Link to="/construction" style={{ textDecoration: 'none', color: 'black' }}>
                        <div className="articleCard__title">
                            <h1>When in Rome</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Pellentesque eros nunc, dapibus ut sem ac, tristique 
                                facilisis velit.</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    </div>
}

export default SlideThree;