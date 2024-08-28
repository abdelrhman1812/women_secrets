import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import folia from '../../assets/images/folia-transferowa-silver-01.webp.svg';
import newDuoGabkiDoOmbre from '../../assets/images/new-duo-gabki-do-ombre.webp.svg';
import newDuoSugarLemon from '../../assets/images/new-duo-sugar-lemon.webp.svg';
import paintGelBarbie from '../../assets/images/paint-gel-5g-063-barbie.webp.svg';

const Products = () => {

    const settings = {
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        centerPadding: '50px',
        arrows: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: '10px',
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerPadding: '20px',
                },
            },
        ],
    };

    return (
        <Slider {...settings}>
            <div className="product px-2">
                <div className="item py-4">
                    <figure>
                        <img src={folia} className='w-100 d-block mx-auto' alt="Folia Transferowa Silver 01" />
                    </figure>
                    <p className="text-black">Folia Transferowa Silver 01</p>
                </div>
            </div>
            <div className="product px-2">
                <div className="item py-4">
                    <figure>
                        <img src={newDuoSugarLemon} className='w-100 d-block mx-auto' alt="New Duo Sugar Lemon" />
                    </figure>
                    <p className="text-black">New Duo Sugar Lemon 5g</p>
                </div>
            </div>
            <div className="product px-2">
                <div className="item py-4">
                    <figure>
                        <img src={newDuoGabkiDoOmbre} className='w-100 d-block mx-auto' alt="New Duo Gabki Do Ombre" />
                    </figure>
                    <p className="text-black">New Duo Gabki Do Ombre</p>
                </div>
            </div>
            <div className="product px-2">
                <div className="item py-4">
                    <figure>
                        <img src={paintGelBarbie} className='w-100 d-block mx-auto' alt="Paint Gel Barbie" />
                    </figure>
                    <p className="text-black">Paint 5g -063 Gel Barbie</p>
                </div>
            </div>
        </Slider>
    );
}

export default Products;
