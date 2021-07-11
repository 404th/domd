import "./style/scss_main.scss";

import Banner from "../../Components/Banner/banner";
import Usluga from "../../Components/Usluga/usluga";
import Media from "../../Components/Media/media";

function Main() {
    return (
        <>
            <Banner />
            <Usluga />
            <Media />
        </>
    );
}

export default Main;
