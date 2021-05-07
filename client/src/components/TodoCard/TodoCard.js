import React, { useEffect, useContext } from 'react';
// import todoContext from '../../utils/todoContext/todoContext'
import TodoItem from '../TodoItem/TodoItem'
import './TodoCard.scss'
import {useDispatch, useSelector} from 'react-redux'


function TodoCard(props) {
  const dispatch = useDispatch()
  const store = useSelector(store=>store)
  const userEmail = store.currentUser?.email
  // console.log(userEmail);
  // console.log("store.list>>>>>>>",store.list);
  useEffect(()=>{
    fetch(`${process.env.REACT_APP_TODO}/findAll`,{
      method:"POST",
      headers:{
        "Content-type": "Application/json", 
      },
      body: JSON.stringify({
         userEmail
      })
    })
    .then(res=>res.json())
    // .then(data=>console.log(data.allTodo))
    .then(data=> dispatch({type:"ADDALL", payload:data.allTodo}))
  },[])

  
  
  return (
    <div className="todoCard-box">
      {
        store.list && store.list.map(el=> <TodoItem key={el?._id} todo={el}/>)
      }
    </div>
  );
}

export default TodoCard;
