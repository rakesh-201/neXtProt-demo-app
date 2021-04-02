import './App.css';
import FeatureViewerComp from './Components/FeatureViewerComp';
import Navbar from './Components/Navbar';
import TableComp from './Components/TableComp';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Chart from './Components/ChartJs'

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Route path="/" exact component={FeatureViewerComp} />
                <Route path="/table" component={TableComp} />
                <Route path="/other" component={Chart} />
            </div>
        </Router>
    );
}

export default App;
