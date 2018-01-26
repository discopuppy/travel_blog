import React from 'react';
import { Link } from 'react-router-dom';

const CardGroup = () => (
    <div className="articles__container">
        <h1 style={{ marginLeft: '2rem', fontFamily: 'Garamond, serif' }}>Recent Articles</h1>
        <div className="articles__row">
            <div className="articles__card">
                <Link to="/construction"><img src="/images/card1.jpg" className="articles__img" width="4032" height="3024" /></Link>
                <div className="articles__text">
                    <Link to="/construction" style={{ textDecoration: 'none', color: 'black' }}><span>Trek to Neuschwanstein</span></Link>
                </div>
            </div>
            <div className="articles__card">
                <Link to="/construction"><img src="/images/card5.jpg" className="articles__img" width="4032" height="3024" /></Link>
                <div className="articles__text">
                    <Link to="/construction" style={{ textDecoration: 'none', color: 'black' }}><span>Roman Holiday</span></Link>
                </div>
            </div>
            <div className="articles__card">
                <Link to="/construction"><img src="/images/card3.jpg" className="articles__img" width="4032" height="3024"/></Link>
                <div className="articles__text">
                    <Link to="/construction" style={{ textDecoration: 'none', color: 'black' }}><span>Paris for the single</span></Link>
                </div>
            </div>
        </div>
        <Link to="/articles" style={{ float: 'right', fontSize: '75%', marginRight: '2rem' }}>More articles</Link>
    </div>
    /*<div className="content__container">
        <div className="card__row">
            <div className="card__container">
                <img className="card__image card1"></img>
                <div>
                    <h2>Trek to Neuschwanstein</h2>
                    <p>I went, I saw, I conquered?</p>
                </div>
            </div>
            <div className="card__container">
                <img className="card__image card2"></img>
                <div>
                    <h2>Roman Holiday</h2>
                    <p>Tips on getting around Rome during the busy season.</p>
                </div>
            </div>
            <div className="card__container">
                <img className="card__image card3"></img>
                <div>
                    <h2>Paris for the single</h2>
                    <p>A non-romantic guide to the city of love...</p>
                </div>
            </div>
        </div>
    </div>*/
);

export default CardGroup;