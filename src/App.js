import logo from './logo.svg';
import './App.css';
import FeatureViewerComp from './Components/FeatureViewerComp';
import Navbar from './Components/Navbar';

function App() {
    return (
        <div className="App">
            <Navbar />
            <FeatureViewerComp />
        </div>
    );
}

export default App;
