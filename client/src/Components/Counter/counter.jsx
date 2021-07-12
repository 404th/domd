import "./style/scss_counter.scss";

function Counter() {
    return (
        <div className={"counter_wrapper"}>
            <div className="counter_container">
                <div className="counter_container_div">
                    <h3 className={"counter_container_div_h3"}>25</h3>
                    <p className={"counter_container_div_p"}>
                        построенных домов
                    </p>
                </div>
                <div className="counter_container_div">
                    <h3 className={"counter_container_div_h3"}>15</h3>
                    <p className={"counter_container_div_p"}>
                        построенных домов
                    </p>
                </div>
                <div className="counter_container_div">
                    <h3 className={"counter_container_div_h3"}>41</h3>
                    <p className={"counter_container_div_p"}>
                        построенных домов
                    </p>
                </div>
                <div className="counter_container_div counter_container_div_youtube">
                    <img
                        className={"counter_container_div_youtube_img"}
                        src="./images/counter/ytube.svg"
                        alt="youtubeni rasmi"
                        height={"60px"}
                    />
                    <p className={"counter_container_div_p"}>
                        Наши ВИДЕО об отделке и устройстве смотрите на канале
                        DOM-D
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Counter;
