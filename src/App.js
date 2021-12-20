import './App.css';
import {HashRouter} from 'react-router-dom';
import General from "./components/general/general";

function App() {
  return (
      <HashRouter>
        <General/>
      </HashRouter>
  );
}

export default App;
