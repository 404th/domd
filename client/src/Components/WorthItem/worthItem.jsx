import "./style/scss_worthItem.scss";

function WorthItem(props) {
    return (
        <div className={"worthItem_wrapper"}>
            <div className={"worthItem_container"}>
                <div className="worthItem_container_first-div">
                    <img
                        className="worthItem_container_first-div_img"
                        src={props.img_url}
                        alt={props.img_alt}
                        width={"43px"}
                        height={"43px"}
                    />
                </div>
                <div className="worthItem_container_second-div">
                    <h2 className={"worthItem_container_second-div_h3"}>
                        {props.title}
                    </h2>
                    <p className={"worthItem_container_second-div_p"}>
                        {props.info}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default WorthItem;
