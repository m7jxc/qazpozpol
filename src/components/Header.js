import { useState } from 'react';

import '../css/normalize.css';
import '../css/style.css';
import '../css/media.css'


import FeedbackForm from './FeedbackForm';

const Header = () => {
    const [showForm, setShowForm] = useState(false)

    function setShow () {
        setShowForm (!showForm)
    } 

    return (
        <header className="header">
            <div className="container header__container">
                <div className='header__left'>
                    <a href='/#' className="logo">QAZMOZPOL</a>
                    <a href="tel:+77756720505" className="phone">+7 775 672 0505</a>
                    <button
                        className="btn-reset header-btn"
                        onClick={() => {setShowForm(true)}}
                    >Заказать звонок</button>
                </div>
                <div className="header__right">
                    <nav className="header__nav nav">
                        <ul className="list-reset nav__list">
                            <li className="nav__item">
                                <a href="#about" className="nav__link">О нас</a>
                            </li>
                            <li className="nav__item">
                                <a href="#services" className="nav__link">Наши работы</a>
                            </li>
                            <li className="nav__item">
                                <a href="#blog" className="nav__link">Блог</a>
                            </li>
                            <li className="nav__item">
                                <a href="#footer" className="nav__link">Контакты</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            {showForm && <FeedbackForm setShow={setShow} />}
        </header>
    )
}

export default Header;