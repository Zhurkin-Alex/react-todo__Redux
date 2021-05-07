import "./todo.scss";
// import todoContext from '../../utils/todoContext/todoContext'
import TodoCard from '../TodoCard/TodoCard'
import {useDispatch, useSelector} from 'react-redux'

function Todo(props) {
  // const { dispatch} = useContext(todoContext)

  const dispatch = useDispatch()
  const store = useSelector(store=>store)
  const userEmail = store.userReducer.currentUser?.email

  const formhandler = (e) => {
    const form = e.target
    e.preventDefault();
    const{
      todoName:{value:todoName},
      todoTextarea:{value:todoTextarea},
    }= e.target
    formhandler && fetch(`${process.env.REACT_APP_TODO}/addTodo`,{
      method:"POST",
      headers:{
        "Content-type": "Application/json", 
      },
      body: JSON.stringify({
        todoName,
        todoTextarea,
         userEmail
      })
    })
    .then(res=>res.json())
    // .then(data=>console.log(data.newTodo))
    .then(data=>dispatch({type:"ADDONE", payload:data.newTodo}))
    form.reset()
  };


  return (
    <section className="Todo">
      <div className="container">
        <div className="Todo-box">
          <form className="form" onSubmit={formhandler}>
            <div className="form-input">
              <input className="form-control" name="todoName" type="text" placeholder="todo-required" />
              <div className="form-textarea">
                <textarea

                  className="form-control form-textarea"
                  type="text"
                  name="todoTextarea"
                  placeholder="about - required"
                  rows="3"
                />
              </div>
            </div>

            <button type="submit" className="btn btn-primary todo-btn">
              Добавить
            </button>
          </form>
          <div className="todo-card">
            <TodoCard />
          </div>
        </div>
       
      </div>
    </section>
  );
}

export default Todo;
