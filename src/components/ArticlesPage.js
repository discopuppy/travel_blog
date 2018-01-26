import React from 'react';
import { Link } from 'react-router-dom';


const ArticlesPage = () => (
    <div>
        <div className="articles__container">
            <div className="articles__row">
                <div className="articles__card">
                    <Link to="/article1"><img src="/images/paris.jpg" className="articles__img" width="4032" height="3024" /></Link>
                    <div className="articles__text">
                        <Link to="/article1" style={{ textDecoration: 'none', color: 'black' }}><span>Euro Trip</span></Link>
                    </div>
                </div>
                <div className="articles__card">
                    <Link to="/construction"><img src="/images/matterhorn.jpg" className="articles__img" width="4032" height="3024" /></Link>
                    <div className="articles__text">
                        <Link to="/construction" style={{ textDecoration: 'none', color: 'black' }}><span>Journey to the Matterhorn</span></Link>
                    </div>
                </div>
                <div className="articles__card">
                    <Link to="/construction"><img src="/images/venice.jpg" className="articles__img" width="4032" height="3024"/></Link>
                    <div className="articles__text">
                        <Link to="/construction" style={{ textDecoration: 'none', color: 'black' }}><span>Getting lost in Venice</span></Link>
                    </div>
                </div>
            </div>

            <div className="articles__row">
                <div className="articles__card">
                    <Link to="/construction"><img src="/images/neuschwanstein.jpg" className="articles__img" width="4032" height="3024" /></Link>
                    <div className="articles__text">
                        <Link to="/" style={{ textDecoration: 'none', color: 'black' }}><span>The trek to Neuschwanstein Castle</span></Link>
                    </div>
                </div>
                <div className="articles__card">
                    <Link to="/construction"><img src="/images/rome.jpg" className="articles__img" width="4032" height="3024" /></Link>
                    <div className="articles__text">
                        <Link to="/construction" style={{ textDecoration: 'none', color: 'black' }}><span>A walking tour of Rome</span></Link>
                    </div>
                </div>
                <div className="articles__card">
                    <Link to="/construction"><img src="/images/montstmichel.jpg" className="articles__img" width="4032" height="3024"/></Link>
                    <div className="articles__text">
                        <Link to="/construction" style={{ textDecoration: 'none', color: 'black' }}><span>Just a town on a rock in the Ocean</span></Link>
                    </div>
                </div>
            </div>

            <div className="articles__row">
                <div className="articles__card">
                    <Link to="/construction"><img src="/images/prague.jpg" className="articles__img" width="4032" height="3024" /></Link>
                    <div className="articles__text">
                        <Link to="/construction" style={{ textDecoration: 'none', color: 'black' }}><span>The magic city that is Prague</span></Link>
                    </div>
                </div>
                <div className="articles__card">
                    <Link to="/construction"><img src="/images/vienna.jpg" className="articles__img" width="4032" height="3024" /></Link>
                    <div className="articles__text">
                        <Link to="/" style={{ textDecoration: 'none', color: 'black' }}><span>A city of a thousand palaces, Vienna</span></Link>
                    </div>
                </div>
                <div className="articles__card">
                    <Link to="/construction"><img src="/images/budapest.jpg" className="articles__img" width="4032" height="3024"/></Link>
                    <div className="articles__text">
                        <Link to="/construction" style={{ textDecoration: 'none', color: 'black' }}><span>Beauty of the East, Budapest</span></Link>
                    </div>
                </div>
            </div>            
            
        </div>
    </div>
);

export default ArticlesPage;