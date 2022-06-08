import React from 'react';
import './Header.css'

import logo from '../../images/logo.svg'

function Header({ sticky }) {

    return (
        <header className={sticky ? 'header_sticky header ' : 'header'}>
            {/* <header className='header__sticky header '> */}
            <div className='header__wrapper'>
                <a href='/' className='header__link'>
                    <img src={logo} alt='logo' className='header__logo' />
                </a>
                <select className='header__selection'>
                    <option className='header__selected-item' value='GBP'>GBP</option>
                    <option className='header__selected-item' value='EUR'>EUR</option>
                    <option className='header__selected-item' value='USD'>USD</option>
                </select>
            </div>
        </header>
    );
}

export default Header;