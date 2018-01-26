import React from 'react';

const LeftArrow = (props) => {
    return (
        <div onClick={props.previousSlide} className="arrowDiv">
            <img src="/images/whiteleftarrow.png" className="backArrow"/>
        </div>
    );
}

export default LeftArrow;