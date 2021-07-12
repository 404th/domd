import "./style/scss_managerInfo.scss";

function ManagerInfo(props) {
    return (
        <div className={"managerInfo_container"}>
            <div className={"managerInfo_container_check"}>
                <span className={"managerInfo_container_check_span"}>
                    &#10003;
                </span>
            </div>
            <div className="managerInfo_container_info">
                <p className="managerInfo_container_info_p">{props.info}</p>
            </div>
        </div>
    );
}

export default ManagerInfo;
