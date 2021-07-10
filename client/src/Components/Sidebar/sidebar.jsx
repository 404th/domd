import React from "react";
import "./style/scss_sidebar.scss";
import CheeseburgerMenu from "cheeseburger-menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { library } from "@fortawesome/fontawesome-svg-core";
// import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Accordion from "../Accordion/accordion";

function Sidebar(props) {
    // library.add(faTimes);
    return (
        <CheeseburgerMenu
            isOpen={props.menuIsOpen}
            closeCallback={props.closeMenu}
            backgroundColor={"rgba(255, 255, 255, 0.87)"}
        >
            <div className="sidebar_content">
                <div className="sidebar_content_header">
                    <FontAwesomeIcon
                        className={"sidebar_content_header_icon"}
                        icon={"times"}
                        onClick={props.closeMenu}
                    />
                    <img
                        className={"sidebar_content_header_img"}
                        src="./images/sidebar/brandd.jpg"
                        alt="for sidebar"
                        width={"170px"}
                        height={"50px"}
                    />
                </div>
                <div className="sidebar_content_navigator">
                    <Accordion />
                </div>
            </div>
        </CheeseburgerMenu>
    );
}

export default Sidebar;
