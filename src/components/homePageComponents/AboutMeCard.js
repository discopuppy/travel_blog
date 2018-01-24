import React from 'react';

const AboutMeCard = () => (
    <div className="content__container">
        <div className="aboutMeCard__row">
            <div className="aboutMeCard__text">
                <hr className="top"/>
                <h2>Hey, I'm Zac.</h2>
                <p>I'm a big believer in the power of kindness and compassion.
                I see these raw human qualities in strangers everywhere
                    I go. Those brief interactions give me hope that we can
                    build a better world together. One that's inclusive to everyone. Maybe
                    I'll run into you somewhere out there. Til then, Cheers!
                </p>
                <hr className="bottom"/>
            </div>
            <img className="aboutMeCard__img" src="/images/me.jpg" />
        </div>
    </div>
);

export default AboutMeCard;