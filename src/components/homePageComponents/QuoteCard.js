import React from 'react';

const QuoteCard = () => (
        <div className="quoteCard__container">
            <div className="quote__container">
                <p>Come, my friends,</p>
                <p>'Tis not too late to seek a newer world.</p>
                <p>Push off, and sitting well in order smite</p>
                <p>The sounding furrows; for my purpose holds</p>
                <p>To sail beyond the sunset, and the baths</p>
                <p>Of all the western stars, until I die.</p>
                <p>It may be that the gulfs will wash us down;</p>
                <p>It may be we shall touch the Happy Isles,</p>
                <p>And see the great Achilles, whom we knew</p>
                <p>Though much is taken, much abides; and though</p>
                <p>We are not now that strength which in old days</p>
                <p>Moved earth and heaven; that which we are, we are;</p>
                <p>One equal temper of heroic hearts,</p>
                <p>Made weak by time and fate, but strong in will</p>
                <p>To strive, to seek, to find, and not to yield.</p>
                <p className="quote__author">- Ulysees, Alfred Lord Tennyson</p>
            </div>
            <div className="img__container">
                <img className="quote__pic" src="/images/quotePic.jpg" />
            </div>
        </div>
);

export default QuoteCard;