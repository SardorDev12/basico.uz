import "../Sass/footer.scss";
import { FaInstagram, FaTelegram, FaFacebook } from "react-icons/fa";
function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="form-title">Свяжитесь с нами</div>
      <div className="map_form">
        <div className="map">
          <iframe
            id="gmap_canvas"
            src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d6004.503657329822!2d69.214077!3d41.194483!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDExJzQwLjEiTiA2OcKwMTInNTAuNyJF!5e0!3m2!1sru!2s!4v1694168959842!5m2!1sru!2s"
          ></iframe>
        </div>
        <form action="" className="form" id="contact">
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
          <button type="submit" className="submit-btn">
            ОТПРАВИТЬ ЗАЯВКУ
          </button>
        </form>
      </div>
      <div className="footer-info">
        <div className="info-item">
          <h2>Адрес</h2>
          <p className="address">
            Янгихаётский район, Квартал Дустлик 1, 4 Дом Город Ташкент
          </p>
        </div>
        <div className="info-item">
          <h2>Электронная Почта</h2>
          <p>
            <a href="mailto:Info@Basico.Uz">Info@Basico.Uz</a>
          </p>
          <ul className="social-network">
            <li>
              <a href="" className="social-icon">
                <FaTelegram />
              </a>
            </li>
            <li>
              <a href="" className="social-icon">
                <FaInstagram />
              </a>
            </li>
            <li>
              <a href="" className="social-icon">
                <FaFacebook />
              </a>
            </li>
          </ul>
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
