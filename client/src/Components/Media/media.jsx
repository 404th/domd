import React from "react";
import "./style/scss_media.scss";
import ReactPlayer from "react-player/youtube";

function Media() {
    let [wSize, setWSize] = React.useState(window.innerWidth);

    window.addEventListener("resize", () => {
        setWSize(window.innerWidth);
    });

    return (
        <div className="media_wrapper">
            <div className="media_container">
                <div className="media_container_content">
                    <p className={"media_container_content_first-p"}>
                        Приступим cегодня
                    </p>
                    <p className={"media_container_content_second-p"}>
                        Напишите нам, чтобы получить персональное предложение
                    </p>
                </div>
                <div className="media_container_media">
                    <div className="media_container_media_title">
                        <p className="media_container_media_title_first-p">
                            Cтроительство дома, не покажешь картинкой
                        </p>
                        <p className="media_container_media_title_second-p">
                            За каждым домом стоит целая история, смотри полезные
                            презентации у нас на канале.{" "}
                        </p>
                    </div>
                    <div className="media_container_media_button">
                        <button className="media_container_media_button_btn">
                            Заказать расчет
                        </button>
                    </div>
                    <div className="media_container_media_video">
                        <ReactPlayer
                            className={"media_container_media_video_ifr"}
                            url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
                            playing={true}
                            width={wSize > 856 ? "100%" : "320px"}
                            height={wSize > 856 ? "100%" : "274px"}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Media;
