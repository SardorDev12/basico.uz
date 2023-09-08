import { memo } from "react";
import "../Sass/header.scss";

function CallBtn({ typeBtn }) {
  return (
    <a href="#footer">
      <button type="button" className={`call-btn ${typeBtn}`}>
        Хочу заказать!
      </button>
    </a>
  );
}
export default memo(CallBtn);
