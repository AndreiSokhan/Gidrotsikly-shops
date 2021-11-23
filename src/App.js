import { BrowserRouter } from "react-router-dom";
import s from "./App.css";
import Header from "./components/header/Header.jsx";
//import Content from "./components/content/Content.jsx";
import Footer from "./components/footer/Footer.jsx";
//import Content2 from "./content2/Content2";
import Content3 from "./content3/Content3";



function App() {
    
    return (
    <BrowserRouter>
        <div className={s.App}>
            <Header/>
            {/*<Content/>*/}

            
            {/* Content2 это контент со втрой страницы макета. Решение безусловно странное, но пока нестал сильно думать куда его всунуть */}
            {/*<Content2/>*/}
            <Content3/>
            <Footer/>
        </div>
    </BrowserRouter>
    );
}


export default App;
