import { BrowserRouter } from "react-router-dom";
import s from "./App.css";
import Content from "./components/content/Content.jsx";
import Footer from "./components/footer/Footer.jsx";
import Header from "./components/header/Header.jsx";



function App() {
    
    return (
    <BrowserRouter>
        <div className={s.App}>
            {/*<Header/>*/}
            <Content/>
            <Footer/>
        </div>
    </BrowserRouter>
    );
}


export default App;
