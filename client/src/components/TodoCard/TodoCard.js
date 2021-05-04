import React, { useEffect, useContext } from 'react';
import todoContext from '../../utils/todoContext/todoContext'
import TodoItem from '../TodoItem/TodoItem'
import './TodoCard.scss'
import {useDispatch, useSelector} from 'react-redux'


function TodoCard(props) {

  const dispatch = useDispatch()
  const store = useSelector(store=>store)

  useEffect(()=>{
    fetch(`${process.env.REACT_APP_TODO}/findAll`)
    .then(res=>res.json())
    .then(data=> dispatch({type:"ADDALL", payload:data.allTodo}))
  },[])

  
  
  return (
    <div className="todoCard-box">
      {
        store && store.list.map(el=> <TodoItem key={el._id} todo={el}/>)
      }
    </div>
  );
}

export default TodoCard;
