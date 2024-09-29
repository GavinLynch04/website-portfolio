import './Styles/App.css'
import MenuBar from './MenuBar';
import NameAnimation from "./NameAnimation.jsx";
import About from './About.jsx';
import Experience from './Experience.jsx';

function App() {

    return (
        <div>
            <MenuBar/>
            <NameAnimation/>
            <About/>
            <Experience/>
        </div>
    );
}

export default App
