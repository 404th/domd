import React from "react";
import "./style/scss_navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { library } from "@fortawesome/fontawesome-svg-core";
// import { faBars } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "../Sidebar/sidebar";

function Navbar() {
    // library.add(faBars);

    const [menuIsOpenB, setMenuIsOpenB] = React.useState(false);

    const closeMenuFunc = () => {
        setMenuIsOpenB(!menuIsOpenB);
    };

    return (
        <nav className={"navbar"}>
            <div className={"navbar_toggle"}>
                <FontAwesomeIcon
                    className={"navbar_toggle_icon"}
                    icon="bars"
                    onClick={() => {
                        setMenuIsOpenB(true);
                    }}
                />
            </div>
            <div className={"navbar_brand"}>
                <img
                    className={"navbar_brand_img"}
                    src="./images/navbar/brand.png"
                    alt="domd"
                    width={"174px"}
                    height={"45px"}
                />
                <span className={"navbar_brand_span"}>
                    Строительство деревянных домов
                    <span className={"navbar_brand_span_span"}>
                        {" "}
                        за{" "}
                        <span className={"navbar_brand_span_span_span"}>
                            45
                        </span>{" "}
                        дней
                    </span>
                </span>
            </div>
            <div className={"navbar_buttons"}>
                <span className={"navbar_buttons_span"}>
                    Нажмите, чтобы начать общение
                </span>
                <div className={"navbar_buttons_div"}>
                    <button className={"navbar_buttons_div_button"} to={"/"}>
                        <img
                            className={"navbar_buttons_div_button_img"}
                            width={"32px"}
                            src="./images/navbar/viber.png"
                            alt="viber"
                        />
                        <span className={"navbar_buttons_div_button_span"}>
                            Viber
                        </span>
                    </button>
                    <button className={"navbar_buttons_div_button"} to={"/"}>
                        <img
                            className={"navbar_buttons_div_button_img"}
                            width={"32px"}
                            src="./images/navbar/telegram.png"
                            alt="telegram"
                        />
                        <span className={"navbar_buttons_div_button_span"}>
                            Telegram
                        </span>
                    </button>
                </div>
            </div>
            <div className={"navbar_contact"}>
                <div className="navbar_contact_phone">
                    <FontAwesomeIcon
                        className={"navbar_contact_phone_icon"}
                        icon={"phone-volume"}
                    />
                    <span className={"navbar_contact_phone_span"}>
                        +38 (098) 271-50-35
                    </span>
                </div>
                <div className="navbar_contact_button">
                    <button className="navbat_contact_button_button">
                        ПЕРЕЗВОНИТЬ МНЕ
                    </button>
                </div>
            </div>
            <Sidebar menuIsOpen={menuIsOpenB} closeMenu={closeMenuFunc} />
        </nav>
    );
}

export default Navbar;
