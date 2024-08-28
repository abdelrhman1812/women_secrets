import hero_2 from '../../assets/images/hero 2.svg';
import hero_1 from '../../assets/images/hero_1.svg';

const Hero = () => {
    return (
        <section className="hero">
            <div className="row m-0">
                {/* Left Image */}
                <div className="d-none d-sm-block col-sm-4 p-0">
                    <figure>
                        <img src={hero_1} className='w-100' alt="Hero Left" />
                    </figure>
                </div>

                {/* Center Text */}
                <div className="col-sm-4 d-flex align-items-center text-center">
                    <div className="data">
                        <p className='fw-semibold'>
                            Enhancing everything related to women’s charm and allure is our mission.
                        </p>
                        <button className='btn'>Contact us</button>
                    </div>
                </div>

                {/* Right Image */}
                <div className="d-none d-sm-block col-sm-4 p-0">
                    <figure>
                        <img src={hero_2} className='w-100' alt="Hero Right" />
                    </figure>
                </div>
            </div>
        </section>
    );
}

export default Hero;
