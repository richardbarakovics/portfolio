import React, { Component } from "react";
import Slider from "react-slick";

import screeshot1 from "./images/screenshots/screenshot-1.png";
import screeshot2 from "./images/screenshots/screenshot-2.png";
import screeshot3 from "./images/screenshots/screenshot-3.png";
import screeshot4 from "./images/screenshots/screenshot-4.png";
import screeshot5 from "./images/screenshots/screenshot-5.png";
import screeshot6 from "./images/screenshots/screenshot-6.png";
import screeshot7 from "./images/screenshots/screenshot-7.png";
import screeshot8 from "./images/screenshots/screenshot-8.png";
import screeshot9 from "./images/screenshots/screenshot-9.png";
import screeshot10 from "./images/screenshots/screenshot-10.png";


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
                    <div>
                        <img src={screeshot1} alt="" className="slider--image" />
                    </div>
                    <div>
                        <img src={screeshot2} alt="" className="slider--image" />
                    </div>
                    <div>
                        <img src={screeshot3} alt="" className="slider--image" />
                    </div>
                    <div>
                        <img src={screeshot4} alt="" className="slider--image" />
                    </div>
                    <div>
                        <img src={screeshot5} alt="" className="slider--image" />
                    </div>
                    <div>
                        <img src={screeshot6} alt="" className="slider--image" />
                    </div>
                    <div>
                        <img src={screeshot7} alt="" className="slider--image" />
                    </div>
                    <div>
                        <img src={screeshot8} alt="" className="slider--image" />
                    </div>
                    <div>
                        <img src={screeshot9} alt="" className="slider--image" />
                    </div>
                    <div>
                        <img src={screeshot10} alt="" className="slider--image" />
                    </div>
                </Slider>
            </div>
        );
    }
}