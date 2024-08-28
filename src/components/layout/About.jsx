import aboutImg from '../../assets/images/about.svg';

const About = () => {
    return (
        <section className='about'>
            <div className="row m-0 g-5">
                <div className="col-md-6 about-img p-0">
                    <figure>
                        <img src={aboutImg} className='w-100' alt="Illustration representing women's empowerment" />
                    </figure>
                </div>
                <div className="col-md-6">
                    <div className="data p-1 px-md-5">
                        <h2>About Us</h2>
                        <p className='text-capitalize'>
                            From ancient times to the present day, our journey continues to bring the best to the modern woman.
                            We draw inspiration from our rich heritage and blend it with contemporary touches to offer you a diverse range of products that reflect the elegance and sophistication of the past with a modern twist.
                        </p>
                        <h3>Values</h3>
                        <div className='d-flex gap-3 flex-column mt-3'>
                            <span>Sustainability</span>
                            <span>Women's Empowerment</span>
                            <span>Innovation and Creativity</span>
                            <span>Excellent Customer Service</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
