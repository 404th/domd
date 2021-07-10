import "./App.scss";
import Navbar from "./Components/Navbar/navbar";
import Main from "./Container/Main/main";

function App() {
    return (
        <div className="App">
            <div className="container">
                <Navbar />
                <Main />
            </div>
        </div>
    );
}

export default App;
