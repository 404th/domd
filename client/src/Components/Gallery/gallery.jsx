import React from "react";
import "./style/scss_gallery.scss";
import Carousel from "react-elastic-carousel";

function Gallery() {
    const state = {
        items: [
            {
                id: 1,
                title: (
                    <img
                        className={"gallery_container_images_img"}
                        src="./images/gallery/uy1.png"
                        alt="uy1"
                        width={"455px"}
                    />
                ),
            },
            {
                id: 2,
                title: (
                    <img
                        className={"gallery_container_images_img"}
                        src="./images/gallery/uy2.png"
                        alt="uy2"
                        width={"455px"}
                    />
                ),
            },
            {
                id: 3,
                title: (
                    <img
                        className={"gallery_container_images_img"}
                        src="./images/gallery/uy3.png"
                        alt="uy3"
                        width={"455px"}
                    />
                ),
            },
            {
                id: 4,
                title: (
                    <img
                        className={"gallery_container_images_img"}
                        src="./images/gallery/uy4.png"
                        alt="uy4"
                        width={"455px"}
                    />
                ),
            },
            {
                id: 5,
                title: (
                    <img
                        className={"gallery_container_images_img"}
                        src="./images/gallery/uy5.png"
                        alt="uy5"
                        width={"455px"}
                    />
                ),
            },
            {
                id: 6,
                title: (
                    <img
                        className={"gallery_container_images_img"}
                        src="./images/gallery/uy6.png"
                        alt="uy6"
                        width={"455px"}
                    />
                ),
            },
        ],
    };

    let [wSize, setWSize] = React.useState(window.innerWidth);

    window.addEventListener("resize", () => {
        setWSize(window.innerWidth);
    });

    return (
        <div className={"gallery_wrapper"}>
            <div className="gallery_container">
                <div className="gallery_container_title">
                    <p className={"gallery_container_title_p"}>
                        <span className={"gallery_container_title_p_span"}>
                            Посмотрите на готовые дома
                        </span>{" "}
                        с комплексом отделки и прокладки коммуникаций.{" "}
                    </p>
                </div>
                <div className="gallery_container_images">
                    {wSize > 865 ? (
                        <>
                            <img
                                className={"gallery_container_images_img"}
                                src="./images/gallery/uy1.png"
                                alt="uy1"
                                width={"455px"}
                            />
                            <img
                                className={"gallery_container_images_img"}
                                src="./images/gallery/uy2.png"
                                alt="uy2"
                                width={"455px"}
                            />
                            <img
                                className={"gallery_container_images_img"}
                                src="./images/gallery/uy3.png"
                                alt="uy3"
                                width={"455px"}
                            />
                            <img
                                className={"gallery_container_images_img"}
                                src="./images/gallery/uy4.png"
                                alt="uy4"
                                width={"455px"}
                            />
                            <img
                                className={"gallery_container_images_img"}
                                src="./images/gallery/uy5.png"
                                alt="uy5"
                                width={"455px"}
                            />
                            <img
                                className={"gallery_container_images_img"}
                                src="./images/gallery/uy6.png"
                                alt="uy6"
                                width={"455px"}
                            />
                        </>
                    ) : (
                        <Carousel>
                            {state.items.map((item) => (
                                <div key={item.id}>{item.title}</div>
                            ))}
                        </Carousel>
                    )}
                </div>
                <div className="gallery_container_button">
                    <button className="gallery_container_button_btn">
                        Смотреть все
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Gallery;
