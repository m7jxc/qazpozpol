import '../css/normalize.css';
import '../css/style.css';

const Services = () => {
  return(
    <section className="services">
      <div className="container">
        <h2 className="site-title services-title">
          Наши преимущества:
        </h2>
        <ul className="services-list list-reset">
          <li className="services-item">
            <h3 className="services-subtitle">Высокое качество материалов</h3>
            <p className="services-descr">Материалы от проверенных поставщиков по оптовым ценам</p>
          </li>
          <li className="services-item">
            <h3 className="services-subtitle">Качественная работа</h3>
            <p className="services-descr">Используем современную технику в работе</p>
          </li>
          <li className="services-item">
            <h3 className="services-subtitle">Разные варианты оплаты</h3>
            <p className="services-descr">Наличные и безналичные расчеты</p>
          </li>
          <li className="services-item">
            <h3 className="services-subtitle">Гарантии от 10 лет</h3>
            <p className="services-descr">Предоставляем гарантии на все наши проекты</p>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Services;