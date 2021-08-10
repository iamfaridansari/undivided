import Expense from './Expense/Expense';
import Footer from './Footer/Footer';
import Form from './Form/Form';
import Login from './Form/Login';
import Signup from './Form/Signup';
import NavBar from './NavBar/NavBar';
import Quiz from './Quiz/Quiz';
import Random from './Random/Random';
import ToDo from './ToDo/ToDo';
import Crypto from './Crypto/Crypto';

import { Route, Switch } from "react-router-dom"

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/expense" component={Expense} />
        <Route exact path="/todo" component={ToDo} />
        <Route exact path="/crypto" component={Crypto} />
        <Route exact path="/quiz" component={Quiz} />

        <Route exact path="/" component={Form} />
        <Route exact path="/form/signup" component={Signup} />
        <Route exact path="/form/login" component={Login} />

        <Route exact path="/random" component={Random} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
