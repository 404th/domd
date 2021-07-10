import "./style/scss_banner.scss";

function Banner() {
    return (
        <div className={"banner_wrapper"}>
            <div className={"banner_container"}>
                <div className={"banner_container_title"}>
                    <p className={"banner_container_title_p"}>
                        Сделаем ваш{" "}
                        <span className={"banner_container_title_p_span"}>
                            Дом
                        </span>
                    </p>
                    <p className={"banner_container_title_pp"}>
                        готовым к комфортному проживанию
                    </p>
                </div>
                <div className={"banner_container_content"}>
                    <p className={"banner_container_content_p"}>
                        Строительство деревянных домов «под ключ»: коттеджи,
                        беседки, бани, дома из клееного бруса
                    </p>
                </div>
                <div className={"banner_container_buttons"}>
                    <button className="banner_container_buttons_btn">
                        Бетонные работы
                    </button>
                    <button className="banner_container_buttons_btn">
                        Бетонные работы
                    </button>
                    <button className="banner_container_buttons_btn">
                        Бетонные работы
                    </button>
                    <button className="banner_container_buttons_btn">
                        Бетонные работы
                    </button>
                    <button className="banner_container_buttons_btn">
                        Бетонные работы
                    </button>
                    <button className="banner_container_buttons_btn">
                        Бетонные работы
                    </button>
                </div>
                <div className={"banner_container_card"}>
                    <div className="banner_container_card_cover">
                        <p className="banner_container_card_cover_p-heading">
                            Заказать расчет
                        </p>
                        <p className="banner_container_card_cover_p-content">
                            Оказываем услуги комплексно, совмещая отдельные виды
                            работ
                        </p>
                        <img
                            className="banner_container_card_cover_img"
                            src="./images/banner/card_Book.png"
                            alt="book im"
                            width={"246px"}
                            height={"166px"}
                        />
                        <button className="banner_container_card_cover_button">
                            Заказать расчет
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;
