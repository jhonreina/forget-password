import "./components/recoverPassword/App.css";

import Form from "./components/recoverPassword/Form";
import Login from './components/loginProcess/Login';
import Who from './components/WhoProcess/Who';

function App() {
  return (
    <div className="App">
      <Form />
      <Login />
      <Who />
    </div>
  );
}

export default App;
