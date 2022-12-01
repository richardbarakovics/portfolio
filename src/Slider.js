import React, { Component } from "react";
import Slider from "react-slick";

// import screeshot1 from "./images/screenshots/screenshot-1.png";
// import screeshot2 from "./images/screenshots/screenshot-2.png";
// import screeshot3 from "./images/screenshots/screenshot-3.png";
// import screeshot4 from "./images/screenshots/screenshot-4.png";
// import screeshot5 from "./images/screenshots/screenshot-5.png";
// import screeshot6 from "./images/screenshots/screenshot-6.png";
// import screeshot7 from "./images/screenshots/screenshot-7.png";
// import screeshot8 from "./images/screenshots/screenshot-8.png";
// import screeshot9 from "./images/screenshots/screenshot-9.png";
// import screeshot10 from "./images/screenshots/screenshot-10.png";


export default class MultipleItems extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3
        };
        return (
            <div>
                <h3 className="section--title">Projects</h3>
                <Slider {...settings}>
                    <div className="slider--image-1 backgr--img">
                    </div>
                    <div className="slider--image-2 backgr--img">
                    </div>
                    <div className="slider--image-3 backgr--img">
                    </div>
                    <div className="slider--image-4 backgr--img">
                    </div>
                    <div className="slider--image-5 backgr--img">
                    </div>
                    <div className="slider--image-6 backgr--img">
                    </div>
                    <div className="slider--image-7 backgr--img">
                    </div>
                    <div className="slider--image-8 backgr--img">
                    </div>
                    <div className="slider--image-9 backgr--img">
                    </div>
                    <div className="slider--image-10 backgr--img">
                    </div>
                </Slider>
            </div>
        );
    }
}