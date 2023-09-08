import logo from "../assets/Images/logo.svg";
import "../Sass/footer.scss";
function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="map_form">
        <div className="map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d6004.503657329822…ExJzQwLjEiTiA2OcKwMTInNTAuNyJF!5e0!3m2!1sru!2s!4v1693471780175!5m2!1sru!2s"></iframe>
        </div>
        <form action="" className="form" id="form">
          <input
            autoComplete="off"
            placeholder="Имя"
            type="text"
            name="name"
            id="name"
          />
          <input
            placeholder="Номер телефона"
            type="number"
            autoComplete="off"
            name="number"
            id="number"
          />
          <textarea
            placeholder="Сообщение"
            autoComplete="off"
            name="message"
            id="message"
          ></textarea>
        </form>
      </div>
      <div className="footer-info">
        <div className="info-item">
          <h2>Адрес</h2>
          <p>Янгихаётский район, Квартал Дустлик 1, 4 Дом Город Ташкент</p>
        </div>
        <div className="info-item">
          <h2>Электронная Почта</h2>
          <p>
            <a href="mailto:Info@Basico.Uz">Info@Basico.Uz</a>
          </p>
        </div>
        <div className="info-item">
          <h2>Телефон</h2>
          <p className="tel">
            <a href="tel:+99890 945-03-00">+998-90 945-03-00</a>
            <a href="tel:+99890 174-10-90">+998-90 174-10-90</a>
          </p>
          <p></p>
        </div>

        <div className="info-item">
          <h2>Время Работы</h2>
          <p>Понедельник - Суббота</p>
          <p>9:00 -18:00</p>
        </div>
      </div>
      <div className="developer">
        <p>©Разработала команда Supersite.uz</p>
      </div>
    </footer>
  );
}
export default Footer;
