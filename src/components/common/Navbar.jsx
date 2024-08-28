import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import facebook from '../../assets/images/facebook.svg';
import instgram from '../../assets/images/instagram.svg';
import twitter from '../../assets/images/twitter.svg';
import TopNav from './TopNav';
const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);


    /* Convert nav to fixed top */
    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <nav className={`navbar navbar-expand-lg py-2 border flex-column ${scrolled ? "fixed-top bg-white" : ""}   `}>
            <TopNav />
            <div className='container-xxl p-lg-0 justify-content-end   my-2 pb-1'>
                <span className=" d-block d-lg-none  fa fa-bars  fs-4" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"></span>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav position-relative me-auto py-0">
                        {/* Home */}
                        <NavLink
                            to="home"
                            className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                        >
                            Home
                        </NavLink>
                        {/* About */}
                        <NavLink
                            to="/"
                            className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                        >
                            About Us
                        </NavLink>
                        {/* Services */}
                        <NavLink
                            to="/"
                            className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                        >
                            Our Services
                        </NavLink>
                        {/* Partener Brands */}
                        <NavLink
                            to="/"
                            className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                        >
                            Partener Brands
                        </NavLink>

                        {/* Contact Us */}
                        <NavLink
                            to="/"
                            className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                        >
                            Contact Us
                        </NavLink>
                    </div>
                    <div className="d-flex justify-content-start pe-4">
                        <Link to="/" className="me-2"><img src={facebook} alt="facebook" width="20" height="20" /></Link>
                        <Link to="/" className="me-2"><img src={instgram} alt="instagram" width="20" height="20" /></Link>
                        <Link to="/"><img src={twitter} alt="twitter" width="20" height="20" /></Link>
                    </div>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;