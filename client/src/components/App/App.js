import "./App.css"
import { Switch, Route, BrowserRouter } from "react-router-dom";
import NavBar from "../navBar/NavBar";
import Registration from "../Registration/Registration";
import Todo from "../Todo/Todo";
import {Provider} from 'react-redux'
import store from '../../redux/store'

function App() {
  // const [state, dispatch] = useReducer(reducer, { list: [] });

  return (
    <Provider store={store}>
    {/* <todoContext.Provider value={{ state, dispatch }}> */}
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Switch>
            <Route path="/" exact>
              <Registration />
            </Route>
            <Route path="/todo">
              <Todo />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    {/* </todoContext.Provider> */}
    </Provider>
  );
}

export default App;
