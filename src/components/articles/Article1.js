import React from 'react';

const Article1 = () => (
    <div className="article__container">

        <div className="article__article">

            <span className="title">Landing in London</span>

            

            <div className="imgDiv">
                <img src="/images/a1-pic1.jpg" className="wideImg"/>
            </div>

            <p>Well, technically I landed at Heathrow Airport, which it turns out
            is something like 30 minutes outside of London. Close enough, though.</p>
            
            <p>I had finally arrived at that place across the pond. After what felt like
            years of planning and looking forward, I was in this moment.</p>
            
            <p>I started the trip by grabbing a cab and heading into the city. Lucky for me,
            I had landed at about 7:30am local time and was immediately met with
            London's morning traffic. The cab ride was probably over 45 minutes, but
            it felt shorter just because I was really soaking in the views of my first
            foray into Europe.
            </p>

            <p>After arriving at the hostel, however, I was hit with the overwhelming
            feeling of what I came to later realize was a  particularly brutal episode
            of 'jetlag.'
            </p>

            <p>Thus, the first day in London, I'm ashamed to say, was spent mostly on a 
            monster nap which I desperately needed.
            </p>

            <div className="imgDiv">
                <img src="/images/a1-pic2.jpg" className="wideImg"/>
            </div>

            <p>The next day, I got to take in the pretty typical sights of which London is
            known for. It turns out that Buckinham Palace, Big Ben, the House of Parliament, 
            Westminster Abbey, and the London Eye are all really close to each other. This
            is pretty nice considering I would be walking a ton over the course of this trip.
            </p>

            <div className="doubleImgDiv">

                <img src="/images/a1-pic3.jpg" className="longImg"/>
                <img src="/images/a1-pic4.jpg" className="longImg"/>
                
            </div>

            
            <p>Well, technically I landed at Heathrow Airport, which it turns out
            is something like 30 minutes outside of London. Close enough, though.</p>
            
            <p>I had finally arrived at that place across the pond. After what felt like
            years of planning and looking forward, I was in this moment.</p>
            
            <p>I started the trip by grabbing a cab and heading into the city. Lucky for me,
            I had landed at about 7:30am local time and was immediately met with
            London's morning traffic. The cab ride was probably over 45 minutes, but
            it felt shorter just because I was really soaking in the views of my first
            foray into Europe.
            </p>

            <p>After arriving at the hostel, however, I was hit with the overwhelming
            feeling of what I came to later realize was a  particularly brutal episode
            of 'jetlag.'
            </p>

            <p>Thus, the first day in London, I'm ashamed to say, was spent mostly on a 
            monster nap which I desperately needed.
            </p>

        </div>

        <div className="article__sideBar">

            {/*<div className="article__socialBar">
                <span>Follow me for more!</span>

            </div>*/}

            <div className="article__ad" style={{ border: '1px black solid', height: '200px', marginBottom: '40px' }}>
                <p style={{ textAlign: 'center' }}>Ad would go here</p>
            </div>
            <div className="article__ad" style={{ border: '1px black solid', height: '200px', marginBottom: '40px' }}>
                <p style={{ textAlign: 'center' }}>Ad would go here</p>
            </div>
            <div className="article__ad" style={{ border: '1px black solid', height: '200px', marginBottom: '40px' }}>
                <p style={{ textAlign: 'center' }}>Ad would go here</p>
            </div>

        </div>

        
    </div>
);

export default Article1;