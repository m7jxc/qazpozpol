import { Routes, Route, Link } from 'react-router-dom';
import '../css/normalize.css';
import '../css/style.css';
import Footer from './Footer';
import Main from './Main';
import Services from './Services';

const Header = () => {
  return(
    <header className="header">
      <div className="container header__container">
        <div>
          <a className="logo">QAZMOZPOL</a>
          <a href="tel:+77756720505" className="phone">+7 775 672 0505</a>
          <button className="btn-reset header-btn">Заказать звонок</button> 
        </div>
        <div className="header__right">
          <nav className="header__nav nav">
            <ul className="list-reset nav__list">
              <li className="nav__item">
                <a href="/" className="nav__link">О нас</a>
              </li>
              <li className="nav__item">
                <a href="/services" className="nav__link">Наши работы</a>
              </li>
              <li className="nav__item">
                <a href="/footer" className="nav__link">Контакты</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      {/* <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/footer' element={<Footer/>}/>
      </Routes> */}
    </header>
  )
}

export default Header;