import LoginForm from './Components/LoginForm/LoginForm';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignupForm from './Components/SignupForm/SignupForm';

function App() {
  return (

    <div className="App">
      <link rel="stylesheet" href={`${process.env.PUBLIC_URL}/main.5039ef67.css`} />
      <Router>
        <Switch>
          <Route path="/" exact component={LoginForm} />
          <Route path="/signup" component={SignupForm} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
