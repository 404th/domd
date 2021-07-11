import React from "react";
import "./style/scss_usluga.scss";

import Ucard from "../Ucard/ucard";

import Carousel from "react-elastic-carousel";

function Usluga() {
    const state = {
        items: [
            { id: 1, title: <Ucard /> },
            { id: 2, title: <Ucard /> },
            { id: 3, title: <Ucard /> },
            { id: 4, title: <Ucard /> },
            { id: 5, title: <Ucard /> },
        ],
    };

    let [wSize, setWSize] = React.useState(window.innerWidth);

    window.addEventListener("resize", () => {
        setWSize(window.innerWidth);
    });

    return (
        <div className={"usluga_wrapper"}>
            <div className="usluga_container">
                <div className="usluga_container_content">
                    <p className={"usluga_container_content_p"}>
                        <span className={"usluga_container_content_p_span"}>
                            Оказываем услуги комплексно,
                        </span>{" "}
                        совмещая отдельные виды работ
                    </p>
                </div>
                <div className="usluga_container_cards">
                    {wSize > 855 ? (
                        <>
                            <Ucard />
                            <Ucard />
                            <Ucard />
                            <Ucard />
                            <Ucard />
                            <Ucard />
                        </>
                    ) : (
                        <Carousel>
                            {state.items.map((item) => (
                                <div key={item.id}>{item.title}</div>
                            ))}
                        </Carousel>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Usluga;
