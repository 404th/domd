import "./style/scss_worth.scss";
import WorthItem from "../WorthItem/worthItem";

function Worth() {
    return (
        <div className={"worth_wrapper"}>
            <div className={"worth_container"}>
                <div className="worth_container_first-div">
                    <p className="worth_container_first-div_p">
                        Заботимся о Вашем{" "}
                        <span className={"worth_container_first-div_p_span"}>
                            спокойствии
                        </span>
                    </p>
                </div>
                <div className="worth_container_second-div">
                    <WorthItem
                        img_url={"./images/worthItem/icon1.svg"}
                        img_alt={"./images/worthItem/icon1.svg"}
                        title={"Не поднимаем стоимость"}
                        info={"Фиксируем стоимость работ в договоре"}
                    />
                    <WorthItem
                        img_url={"./images/worthItem/icon1.svg"}
                        img_alt={"./images/worthItem/icon1.svg"}
                        title={"Поэтапная оплата"}
                        info={
                            "Оплата каждого вида работ разбита на 2 части (50% аванс 50% по завершению)"
                        }
                    />
                    <WorthItem
                        img_url={"./images/worthItem/icon1.svg"}
                        img_alt={"./images/worthItem/icon1.svg"}
                        title={"Соблюдаем сроки"}
                        info={"Несем ответственность за соблюдение сроков."}
                    />
                    <WorthItem
                        img_url={"./images/worthItem/icon1.svg"}
                        img_alt={"./images/worthItem/icon1.svg"}
                        title={"Экологичность"}
                        info={"Дом строится из натуральных материалов"}
                    />
                    <WorthItem
                        img_url={"./images/worthItem/icon1.svg"}
                        img_alt={"./images/worthItem/icon1.svg"}
                        title={"Самостоятельно"}
                        info={
                            "Закупаем и доставляем на объект, качественные материалы и расходники"
                        }
                    />
                    <WorthItem
                        img_url={"./images/worthItem/icon1.svg"}
                        img_alt={"./images/worthItem/icon1.svg"}
                        title={"Проводим уборку"}
                        info={
                            "В процессе работ и вывозим мусор после завершения работ. "
                        }
                    />
                </div>
            </div>
        </div>
    );
}

export default Worth;
