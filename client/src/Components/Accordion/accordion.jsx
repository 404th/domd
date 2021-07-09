import "./style/scss_accordion.scss";
import { Link } from "react-router-dom";

function Accordion() {
    function panelEntrance(e) {
        let { id } = e.target;
        let panel = document.querySelector(`#${id}panel`);

        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    }

    return (
        <>
            <button
                className="accordion"
                id={"accordion1"}
                onClick={(e) => {
                    panelEntrance(e);
                }}
            >
                Каркасные дома
            </button>
            <div
                className="panel1 panel"
                id={"accordion1panel"}
                style={{ display: "none" }}
            >
                <ul className={"accordion_container_panel_ul"}>
                    <li className={"accordion_container_panel_ul_li"}>
                        <Link
                            className={"accordion_container_panel_ul_li_link"}
                            to={"/"}
                        >
                            Link 1
                        </Link>
                    </li>
                    <li className={"accordion_container_panel_ul_li"}>
                        <Link
                            className={"accordion_container_panel_ul_li_link"}
                            to={"/"}
                        >
                            Link 1
                        </Link>
                    </li>
                    <li className={"accordion_container_panel_ul_li"}>
                        <Link
                            className={"accordion_container_panel_ul_li_link"}
                            to={"/"}
                        >
                            Link 1
                        </Link>
                    </li>
                    <li className={"accordion_container_panel_ul_li"}>
                        <Link
                            className={"accordion_container_panel_ul_li_link"}
                            to={"/"}
                        >
                            Link 1
                        </Link>
                    </li>
                </ul>
            </div>

            <button
                className="accordion"
                id={"accordion2"}
                onClick={(e) => {
                    panelEntrance(e);
                }}
            >
                Дома из клеёного бруса
            </button>
            <div
                className="panel2 panel"
                id={"accordion2panel"}
                style={{ display: "none" }}
            >
                <ul className={"accordion_container_panel_ul"}>
                    <li className={"accordion_container_panel_ul_li"}>
                        <Link
                            className={"accordion_container_panel_ul_li_link"}
                            to={"/"}
                        >
                            Link 1
                        </Link>
                    </li>
                    <li className={"accordion_container_panel_ul_li"}>
                        <Link
                            className={"accordion_container_panel_ul_li_link"}
                            to={"/"}
                        >
                            Link 1
                        </Link>
                    </li>
                    <li className={"accordion_container_panel_ul_li"}>
                        <Link
                            className={"accordion_container_panel_ul_li_link"}
                            to={"/"}
                        >
                            Link 1
                        </Link>
                    </li>
                    <li className={"accordion_container_panel_ul_li"}>
                        <Link
                            className={"accordion_container_panel_ul_li_link"}
                            to={"/"}
                        >
                            Link 1
                        </Link>
                    </li>
                </ul>
            </div>

            <button
                className="accordion"
                id={"accordion3"}
                onClick={(e) => {
                    panelEntrance(e);
                }}
            >
                Фахверковые дома
            </button>
            <div
                className="panel3 panel"
                id={"accordion3panel"}
                style={{ display: "none" }}
            >
                <ul className={"accordion_container_panel_ul"}>
                    <li className={"accordion_container_panel_ul_li"}>
                        <Link
                            className={"accordion_container_panel_ul_li_link"}
                            to={"/"}
                        >
                            Link 1
                        </Link>
                    </li>
                    <li className={"accordion_container_panel_ul_li"}>
                        <Link
                            className={"accordion_container_panel_ul_li_link"}
                            to={"/"}
                        >
                            Link 1
                        </Link>
                    </li>
                    <li className={"accordion_container_panel_ul_li"}>
                        <Link
                            className={"accordion_container_panel_ul_li_link"}
                            to={"/"}
                        >
                            Link 1
                        </Link>
                    </li>
                    <li className={"accordion_container_panel_ul_li"}>
                        <Link
                            className={"accordion_container_panel_ul_li_link"}
                            to={"/"}
                        >
                            Link 1
                        </Link>
                    </li>
                </ul>
            </div>

            <button
                className="accordion"
                id={"accordion4"}
                onClick={(e) => {
                    panelEntrance(e);
                }}
            >
                Дома из брёвен
            </button>
            <div
                className="panel4 panel"
                id={"accordion4panel"}
                style={{ display: "none" }}
            >
                <ul className={"accordion_container_panel_ul"}>
                    <li className={"accordion_container_panel_ul_li"}>
                        <Link
                            className={"accordion_container_panel_ul_li_link"}
                            to={"/"}
                        >
                            Link 1
                        </Link>
                    </li>
                    <li className={"accordion_container_panel_ul_li"}>
                        <Link
                            className={"accordion_container_panel_ul_li_link"}
                            to={"/"}
                        >
                            Link 1
                        </Link>
                    </li>
                    <li className={"accordion_container_panel_ul_li"}>
                        <Link
                            className={"accordion_container_panel_ul_li_link"}
                            to={"/"}
                        >
                            Link 1
                        </Link>
                    </li>
                    <li className={"accordion_container_panel_ul_li"}>
                        <Link
                            className={"accordion_container_panel_ul_li_link"}
                            to={"/"}
                        >
                            Link 1
                        </Link>
                    </li>
                </ul>
            </div>

            <button
                className="accordion"
                id={"accordion5"}
                onClick={(e) => {
                    panelEntrance(e);
                }}
            >
                Беседки
            </button>
            <div
                className="panel5 panel"
                id={"accordion5panel"}
                style={{ display: "none" }}
            >
                <ul className={"accordion_container_panel_ul"}>
                    <li className={"accordion_container_panel_ul_li"}>
                        <Link
                            className={"accordion_container_panel_ul_li_link"}
                            to={"/"}
                        >
                            Link 1
                        </Link>
                    </li>
                    <li className={"accordion_container_panel_ul_li"}>
                        <Link
                            className={"accordion_container_panel_ul_li_link"}
                            to={"/"}
                        >
                            Link 1
                        </Link>
                    </li>
                    <li className={"accordion_container_panel_ul_li"}>
                        <Link
                            className={"accordion_container_panel_ul_li_link"}
                            to={"/"}
                        >
                            Link 1
                        </Link>
                    </li>
                    <li className={"accordion_container_panel_ul_li"}>
                        <Link
                            className={"accordion_container_panel_ul_li_link"}
                            to={"/"}
                        >
                            Link 1
                        </Link>
                    </li>
                </ul>
            </div>

            <button
                className="accordion"
                id={"accordion6"}
                onClick={(e) => {
                    panelEntrance(e);
                }}
            >
                Ремонт и отделка
            </button>
            <div
                className="panel6 panel"
                id={"accordion6panel"}
                style={{ display: "none" }}
            >
                <ul className={"accordion_container_panel_ul"}>
                    <li className={"accordion_container_panel_ul_li"}>
                        <Link
                            className={"accordion_container_panel_ul_li_link"}
                            to={"/"}
                        >
                            Link 1
                        </Link>
                    </li>
                    <li className={"accordion_container_panel_ul_li"}>
                        <Link
                            className={"accordion_container_panel_ul_li_link"}
                            to={"/"}
                        >
                            Link 1
                        </Link>
                    </li>
                    <li className={"accordion_container_panel_ul_li"}>
                        <Link
                            className={"accordion_container_panel_ul_li_link"}
                            to={"/"}
                        >
                            Link 1
                        </Link>
                    </li>
                    <li className={"accordion_container_panel_ul_li"}>
                        <Link
                            className={"accordion_container_panel_ul_li_link"}
                            to={"/"}
                        >
                            Link 1
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default Accordion;
