import { Link } from 'react-router-dom';
import facebook from '../../assets/images/facebook.svg';
import instgram from '../../assets/images/instagram.svg';
import logo from '../../assets/images/logo.svg';
import twitter from '../../assets/images/twitter.svg';

const Footer = () => {
    return (
        <footer className="footer pt-5">
            <div className="container-footer">
                <div className="row g-4">
                    <div className="col-lg-2 col-md-6 mb-4">
                        <div className="item">
                            <h3 className="h5">Informations</h3>
                            <ul className="list-unstyled">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/">About Us</Link></li>
                                <li><Link to="/">Our Service</Link></li>
                                <li><Link to="/">Our Product</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-6 mb-4">
                        <div className="item">
                            <h3 className="h5">Support</h3>
                            <ul className="list-unstyled">
                                <li><Link to="/">FAQs</Link></li>
                                <li><Link to="/">Terms</Link></li>
                                <li><Link to="/">Privacy Policy</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4 text-center">
                        <div className="item d-flex justify-content-center align-items-center h-100">
                            <img src={logo} alt="Logo" className="w-100" />
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4">
                        <div className="item">
                            <h3 className="h5">Contacts</h3>
                            <p>01008034761</p>
                            <p><a href="mailto:abdelrhmanali1812@gmail.com" className="text-black text-decoration-none">abdelrhman@gmail.com</a></p>
                            <div className="d-flex justify-content-start">
                                <Link to="/" className="me-2"><img src={facebook} alt="facebook" width="20" height="20" /></Link>
                                <Link to="/" className="me-2"><img src={instgram} alt="instagram" width="20" height="20" /></Link>
                                <Link to="/"><img src={twitter} alt="twitter" width="20" height="20" /></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-6 mb-4">
                        <div className="item">
                            <h3 className="h5">Subscribe For More</h3>
                            <form className="d-flex flex-column">
                                <input type="email" className="form-control mb-2" placeholder="Enter your email" />
                                <button type="submit" className="btn btn-light">Send</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright border-top pt-4 text-end">
                <p>Copyright © 2022 All Rights Reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
