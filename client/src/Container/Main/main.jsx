import "./style/scss_main.scss";

import Banner from "../../Components/Banner/banner";
import Usluga from "../../Components/Usluga/usluga";
import Media from "../../Components/Media/media";
import Worth from "../../Components/Worth/worth";
import Gallery from "../../Components/Gallery/gallery";
import Manager from "../../Components/Manager/manager";
import Counter from "../../Components/Counter/counter";

function Main() {
    return (
        <>
            <Banner />
            <Usluga />
            <Media />
            <Worth />
            <Gallery />
            <Manager />
            <Counter />
        </>
    );
}

export default Main;
