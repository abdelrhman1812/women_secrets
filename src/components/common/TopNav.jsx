import { useState } from 'react';

import logo from '../../assets/images/logo.svg';
const TopNav = () => {
    const [selectedLanguage, setSelectedLanguage] = useState('English');


    /* Select lang  */
    const handleLanguageChange = (language) => {
        setSelectedLanguage(language);
    };

    return (
        <div className=" container-xxl top-nav d-flex justify-content-between  w-100   align-items-center py-2">
            <figure className='m-0'>
                <img src={logo} alt="Globe Icon" className="icon" />
            </figure>
            <div className="dropdown  ">
                <button
                    className="btn border-0 out-line-0 dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    <i className='fa fa-earth mx-2'></i>
                    <span>{selectedLanguage}</span>
                </button>
                <ul className="dropdown-menu bg-white  text-center" aria-labelledby="dropdownMenuButton">
                    <li onClick={() => handleLanguageChange('English')}>English</li>
                    <li onClick={() => handleLanguageChange('Arabic')}>Arabic</li>
                    <li onClick={() => handleLanguageChange('French')}>French</li>
                    <li onClick={() => handleLanguageChange('Spanish')}>Spanish</li>
                    <li onClick={() => handleLanguageChange('German')}>German</li>
                </ul>
            </div>
        </div>
    );
};

export default TopNav;
