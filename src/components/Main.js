import Quote from "./Quote";
import Services from "./Services";
import '../css/normalize.css';
import '../css/style.css';

const Main = () => {
  return(
    <main>
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <span className="hero-subtitle">Место где</span>
            <h1 className="hero-title">Lorem Ipsum is&nbsp;simply dummy text of&nbsp;the printing and typesetting industry. Lorem Ipsum has been the industry&rsquo;s standard.</h1>
            <p className="hero-descr">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece</p>
            <button className="btn-reset hero-btn">Оставить заявку</button>
          </div>
        </div>
      </section>
      <Services/>
      <Quote/>
    </main>
  )
}

export default Main;