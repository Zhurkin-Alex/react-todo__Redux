import {ADDALL, CHECK, ADDONE, UPDATETODO, DELETE } from '../redux/actionType'


export const addAllAC = (payload)=>{
  return {
    type: ADDALL,
    payload
  }
}

export const checkAC = (payload)=>{
  return {
    type: CHECK,
    payload
  }
}

export const addOneAC = (payload)=>{
  return {
    type: ADDONE,
    payload
  }
}

export const updateAC = (payload)=>{
  return {
    type: UPDATETODO,
    payload
  }
}

export const deleteAC = (payload)=>{
  return {
    type: DELETE,
    payload
  }
}
