import "./App.scss";
import Navbar from "./Components/Navbar/navbar";
import Main from "./Container/Main/main";
import Sidebar from "./Components/Sidebar/sidebar";

function App() {

    return (
        <div className="App">
            <div className="container">
                <Navbar />
                <Sidebar />
                <Main />
            </div>
        </div>
    );
}

export default App;
