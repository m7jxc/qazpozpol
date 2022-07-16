import '../css/normalize.css';
import '../css/style.css';
import '../css/media.css';

const Footer = () => {
  return (
    <footer className="footer" id='footer'>
      <div className="container">
        <div className="footer-top">
          <div className="footer-contacts-item">
            <span className="footer-contacts-text">Телефоны</span>
            <a href="tel:+77756720505" className="footer-contacts-value">+7 775 672 0505</a>
          </div>
          <div className="footer-contacts-item">
            <span className="footer-contacts-text">Адрес</span>
            <address className="footer-contacts-value">Almaty, hz kakoi street</address>
          </div>
        </div>
        <div className="footer-middle">
          <div className="footer-column">
            <h3 className="footer-title">Преимущества</h3>
            <ul className="footer-list list-reset">
              <li className="footer-item">
                <a src='../' />
                <p className="footer-link">Качественная работа</p>
              </li>
              <li className="footer-item">
                <p className="footer-link">Материалы высокого качества</p>
              </li>
              <li className="footer-item">
                <p className="footer-link">Быстрый монтаж покрытия</p>
              </li>
              <li className="footer-item">
                <p className="footer-link">Гарантии от&nbsp;10&nbsp;лет</p>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h3 className="footer-title">Компания</h3>
            <ul className="footer-list list-reset">
              <li className="footer-item">
                <a href="/#" className="footer-link">О нас</a>
              </li>
              <li className="footer-item">
                <a href="/#" className="footer-link">Контакты</a>
              </li>
              <li className="footer-item">
                <a href="/#" className="footer-link">Наши работы</a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h3 className="footer-title">Социальные сети</h3>
            <a href="mailto:qazmozpol@gmail.com" className="footer-mail">qazmozpol@gmail.com</a>
            <ul className="social list-reset">
              <li className="social-item">
                <a
                  href="https://www.instagram.com/qazmozpol/"
                  target="_blank"
                  rel="noreferrer"
                  className="social-link">Instagram</a>
              </li>
              <li className="social-item">
                <a
                  href="https://wa.me/77012685959"
                  target="_blank"
                  rel="noreferrer"
                  className="social-link">WhatsApp</a>
              </li>
            </ul>
          </div>

        </div>
        <div className="footer-bottom">
          <a href="/#" className="logo">QAZMOZPOL</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer;