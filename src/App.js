import LoginForm from './Components/LoginForm/LoginForm';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignupForm from './Components/SignupForm/SignupForm';
import { Toaster } from "react-hot-toast";

function App() {
  return (

    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={LoginForm} />
          <Route path="/signup" component={SignupForm} />
        </Switch>
        <Toaster
          position="top-right"
          reverseOrder={false}
          toastOptions={{
            style: {
              border: "1px solid #4ac1bd",
              padding: "16px",
              color: "#4ac1bd",
            },
            iconTheme: { primary: "#4ac1bd", secondary: "#FFFAEE" },
          }}
        />
      </Router>
    </div>
  );
}

export default App;
