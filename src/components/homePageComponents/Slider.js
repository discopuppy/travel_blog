import React from 'react';
import SlideOne from './sliderComponents/SlideOne';
import SlideTwo from './sliderComponents/SlideTwo';
import SlideThree from './sliderComponents/SlideThree';
import RightArrow from './sliderComponents/RightArrow';
import LeftArrow from './sliderComponents/LeftArrow';

export default class Slider extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            slideCount: 1
        }

        this.nextSlide = this.nextSlide.bind(this);
        this.previousSlide = this.previousSlide.bind(this);
    }

    nextSlide() {

        if (this.state.slideCount === 3) {
            this.setState({ slideCount: 1});
        } else {
            this.setState({ slideCount: this.state.slideCount + 1 });
        }
    }

    previousSlide() {

        if (this.state.slideCount === 1) {
            this.setState({ slideCount: 3});
        } else {
            this.setState({ slideCount: this.state.slideCount -1 });
        }
    }

    render() {

        return (
            <div className="slider">

                { this.state.slideCount === 1 ? <SlideOne /> : null }
                { this.state.slideCount === 2 ? <SlideTwo /> : null }
                { this.state.slideCount === 3 ? <SlideThree /> : null }

                <RightArrow nextSlide={this.nextSlide} />
                <LeftArrow previousSlide={this.previousSlide} />
                
            </div>
        );
    }
}


// {this.state.slideCount < 3 ? <RightArrow nextSlide={this.nextSlide} /> : null }
// {this.state.slideCount > 1 ? <LeftArrow previousSlide={this.previousSlide} /> : null}
