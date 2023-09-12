import "../Sass/statistics.scss";

function Statistics() {
  return (
    <section className="statistics-section nomargin">
      <h2 className="section-title ">статистика</h2>
      <div className="statistics">
        <div className="statistic">
          <h4>8</h4>
          <p className="statistics-text">Лет Опыта</p>
        </div>
        <div className="statistic">
          <h4>10</h4>
          <p className="statistics-text">Профессионалов в команде</p>
        </div>
        <div className="statistic">
          <h4>200</h4>
          <p className="statistics-text">Более Партнеров</p>
        </div>
      </div>
    </section>
  );
}
export default Statistics;
