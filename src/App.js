import { BrowserRouter } from "react-router-dom";
import SectionCategories from "./components/sectionCategories/SectionCategories.jsx";


function App() {
    
    return (
    <BrowserRouter>
        <div>
            <SectionCategories/>
        </div>
    </BrowserRouter>
    );
}

export default App;
