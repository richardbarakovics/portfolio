import React, { Component } from "react";
import Slider from "react-slick";

import screenshot1 from "./images/screenshots/screenshot-1.png";
import screenshot2 from "./images/screenshots/screenshot-2.png";
import screenshot3 from "./images/screenshots/screenshot-3.png";
import screenshot4 from "./images/screenshots/screenshot-4.png";
import screenshot5 from "./images/screenshots/screenshot-5.png";
import screenshot6 from "./images/screenshots/screenshot-6.png";
import screenshot7 from "./images/screenshots/screenshot-7.png";
import screenshot8 from "./images/screenshots/screenshot-8.png";
import screenshot9 from "./images/screenshots/screenshot-9.png";
import screenshot10 from "./images/screenshots/screenshot-10.png";


export default class MultipleItems extends Component {
    render() {
        var settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <div>
                <h3 className="section--title">Projects</h3>
                <Slider {...settings}>
                    <div>
                        <img src={screenshot1} alt="" />
                    </div>
                    <div>
                        <img src={screenshot2} alt="" />

                    </div>
                    <div>
                        <img src={screenshot3} alt="" />

                    </div>
                    <div>
                        <img src={screenshot4} alt="" />

                    </div>
                    <div>
                        <img src={screenshot5} alt="" />

                    </div>
                    <div>
                        <img src={screenshot6} alt="" />

                    </div>
                    <div>
                        <img src={screenshot7} alt="" />

                    </div>
                    <div>
                        <img src={screenshot8} alt="" />

                    </div>
                    <div>
                        <img src={screenshot9} alt="" />

                    </div>
                    <div>
                        <img src={screenshot10} alt="" />

                    </div>
                </Slider>
            </div>
        );
    }
}