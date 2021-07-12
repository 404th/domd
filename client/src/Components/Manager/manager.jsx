import React from "react";
import "./style/scss_manager.scss";
import ManagerInfo from "../ManagerInfo/managerInfo";
import Carousel from "react-elastic-carousel";

function Manager() {
    let [wSize, setWSize] = React.useState(window.innerWidth);

    window.addEventListener("resize", () => {
        setWSize(window.innerWidth);
    });

    const state = {
        items: [
            {
                id: 1,
                title: (
                    <ManagerInfo
                        info={
                            "Мы не просто предоставляем услуги мы отвечаем за весь комплекс работ от проектирования до гарантийного обслуживания. "
                        }
                    />
                ),
            },
            {
                id: 2,
                title: (
                    <ManagerInfo
                        info={
                            "Наша команда стремится к полной прозрачности в работе, поэтому мы с удовольствием показываем каждый процесс строительства, без прикрас."
                        }
                    />
                ),
            },
            {
                id: 3,
                title: (
                    <ManagerInfo
                        info={
                            "Мы знаем все о строительстве деревянных домов и строительных работах"
                        }
                    />
                ),
            },
            {
                id: 4,
                title: (
                    <ManagerInfo
                        info={
                            "Мы не просто предоставляем услуги мы отвечаем за весь комплекс работ от проектирования до гарантийного обслуживания. "
                        }
                    />
                ),
            },
            {
                id: 5,
                title: (
                    <ManagerInfo
                        info={
                            "Мы гарантируем Ваше минимальное вовлечение в рутину строительства, беря на себя весь комплекс строительных работ"
                        }
                    />
                ),
            },
            {
                id: 6,
                title: (
                    <ManagerInfo
                        info={
                            "Проектируем и строим авторские дома из дерева и клееного бруса"
                        }
                    />
                ),
            },
        ],
    };

    return (
        <div className={"manager_wrapper"}>
            <div className="manager_container">
                <div className="manager_container_title">
                    <p className={"manager_container_title_p"}>
                        Готовы{" "}
                        <span className={"manager_container_title_p_span"}>
                            начать строить дом
                        </span>{" "}
                        с надежной компанией?
                    </p>
                </div>
                <div className="manager_container_objective">
                    <div className="manager_container_objective_img-cover">
                        <div className="manager_container_objective_img-cover_div">
                            <h2 className="manager_container_objective_img-cover_div_h2">
                                Здравствуйте, меня зовут Ярослав Доля.
                            </h2>
                            <p className="manager_container_objective_img-cover_div_p">
                                Я руководитель компании <b>DOM-D</b>
                            </p>
                        </div>
                    </div>
                    <div className="manager_container_objective_info-cover">
                        {wSize > 768 ? (
                            <>
                                <ManagerInfo
                                    info={
                                        "Мы не просто предоставляем услуги мы отвечаем за весь комплекс работ от проектирования до гарантийного обслуживания. "
                                    }
                                />
                                <ManagerInfo
                                    info={
                                        "Наша команда стремится к полной прозрачности в работе, поэтому мы с удовольствием показываем каждый процесс строительства, без прикрас."
                                    }
                                />
                                <ManagerInfo
                                    info={
                                        "Мы знаем все о строительстве деревянных домов и строительных работах"
                                    }
                                />
                                <ManagerInfo
                                    info={
                                        " Вы не рискуете своими деньгами, нервами и временем. Мы берем на себя полную материальную ответственность по договору за дом, работы, сроки выполнения каждого этапа работы"
                                    }
                                />
                                <ManagerInfo
                                    info={
                                        "Мы гарантируем Ваше минимальное вовлечение в рутину строительства, беря на себя весь комплекс строительных работ"
                                    }
                                />

                                <ManagerInfo
                                    info={
                                        "Проектируем и строим авторские дома из дерева и клееного бруса"
                                    }
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
                </div>
            </div>
        </div>
    );
}

export default Manager;
