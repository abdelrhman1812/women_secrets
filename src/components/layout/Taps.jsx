import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const tapsArray = [
    "Devices",
    "UV Gel Nail Polishes",
    "Nail Art",
    "UV Gels",
    "Liquids / Preparations",
    "Disinfection / Hygiene",
    "Acrylics",
    "Outlet",
    "Collections"
];

const Taps = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const handleButtonClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <section className="taps py-3">
            <div className="buttons-wrapper">
                {tapsArray.map((item, index) => (
                    <button
                        key={index}
                        onClick={() => handleButtonClick(index)}
                        className={activeIndex === index ? "active" : ""}
                    >
                        {item}
                    </button>
                ))}
            </div>
            <div className="slider-wrapper">
                <Slider {...settings}>
                    {tapsArray.map((item, index) => (
                        <button
                            key={index}
                            onClick={() => handleButtonClick(index)}
                            className={activeIndex === index ? "active" : ""}
                        >
                            {item}
                        </button>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default Taps;
