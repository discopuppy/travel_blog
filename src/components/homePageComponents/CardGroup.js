import React from 'react';

const CardGroup = () => (
    <div className="content__container">
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
                    {/* <h2>Ascending the mountain</h2>
                    <p>View of the Matterhorn, truly a sight to behold...</p>*/}
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
        {/*<div className="card__row">
            <div className="card__container">
                <div className="card__image card3"></div>
                <div>
                    <h2>Paris for the single</h2>
                    <p>A non-romantic guide to the city of love...</p>
                </div>
            </div>
            <div className="card__container">
                <div className="card__image card4"></div>
                <div>
                    <h2>Budapest and Beyond</h2>
                    <p>A quick journey through Budapest, Vienna, and Prague.</p>
                </div>
            </div>
        </div>*/}
    </div>
);

export default CardGroup;