import woman from "./assests/img/woman.jpg";
import "./App.css";

import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <div className="box"> 
      <Form />
        <div>
          <img src={woman} className="img" alt="woman" />
        </div>
      </div>
    </div>
  );
}

export default App;
