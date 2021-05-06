import "./App.css"
import { Switch, Route, BrowserRouter } from "react-router-dom";
import NavBar from "../navBar/NavBar";
import Registration from "../Registration/Registration";
import Login from '../Login/Login'
import Todo from "../Todo/Todo";
import {Provider,useDispatch, useSelector} from 'react-redux'
import { useEffect } from "react";
import {setUser,logOut } from '../../redux/actionCreators'
// import store from '../../redux/store'
import {useHistory } from 'react-router'
function App() {
  // const [state, dispatch] = useReducer(reducer, { list: [] });
  // const isAutn = useSelector(store=>store.state.User.isAutn)
  const store = useSelector(store=>store)
  const isAuth = store?.isAuth
  // console.log(isAuth.token);
  const histori = useHistory()
  const dispatch = useDispatch()
  
  console.log(localStorage.getItem('token'))
  ;

  useEffect(async()=>{
    
    try {
      const response = await fetch(`${process.env.REACT_APP_AUTH}/auth`,{
        headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}
      })
      const rezult = await response.json()
      rezult.success ? dispatch(setUser(rezult.user)):
      localStorage.removeItem('token')
      localStorage.setItem('token',rezult.token)
    } catch (error) {
      localStorage.removeItem('token')
    }
    
  },[])




  return (
    <>
    {/* <Provider store={store}> */}
    {/* <todoContext.Provider value={{ state, dispatch }}> */}
      <BrowserRouter>
        <div className="App">
          <NavBar />
          auth
          <Switch>
            {!isAuth &&( 
            <>
            <Route path="/" exact>
              <Registration />
            </Route>
            <Route path="/auth" exact>
            <Login />
          </Route>
           </>)
              }
              {
                isAuth &&
             
            <Route path="/todo">
              <Todo />
            </Route>
             }
          </Switch>
        </div>
      </BrowserRouter>
    {/* </todoContext.Provider> */}
     {/* </Provider> */}
    </>
  );
}

export default App;
