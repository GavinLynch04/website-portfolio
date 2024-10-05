import './Styles/App.css'
import MenuBar from './MenuBar';
import NameAnimation from "./NameAnimation.jsx";
import About from './About.jsx';
import Experience from './Experience.jsx';
import Projects from './Projects.jsx';
import ChessGame from "./Chess.jsx";

function App() {

    return (
        <div>
            <MenuBar/>
            <NameAnimation/>
            <About/>
            <Experience/>
            <Projects/>
            <ChessGame/>
        </div>
    );
}

export default App
