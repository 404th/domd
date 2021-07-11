import "./style/scss_ucard.scss";

function Ucard() {
    return (
        <div className={"ucard_container"}>
            <h2 className={"ucard_container_p"}>
                Дома из клеёного бруса{" "}
                <aside className={"ucard_container_p_div"}></aside>
            </h2>
            <button className={"ucard_container_btn"}>
                Подробнее{" "}
                <span className={"ucard_container_btn_span"}>
                    {" "}
                    <i className="fas fa-long-arrow-alt-right"></i>
                </span>
            </button>
            <img
                className={"ucard_container_img"}
                src="./images/usluga/karkas1.svg"
                alt="karkas 1"
                height={"248px"}
            />
        </div>
    );
}

export default Ucard;
