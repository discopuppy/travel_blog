import React from 'react';
import ArticleCard from './homePageComponents/ArticleCard';
import CardGroup from './homePageComponents/CardGroup';
import AboutMeCard from './homePageComponents/AboutMeCard';
import Slider from './homePageComponents/Slider';
import TweetMe from './homePageComponents/TweetMe';
import QuoteCard from './homePageComponents/QuoteCard';

const HomePage = () => (
    <div>
        <Slider />
        {/*<ArticleCard />*/}
        <AboutMeCard />
        <CardGroup />
        <TweetMe />
        <QuoteCard />
    </div>
);

export default HomePage;