const initialState = {list:[]}
const reducer = (state=initialState, action) => {
  switch (action.type) {
    case "ADDONE":
      return {
        ...state,
        list: [...state.list, action.payload],
      };
    case "ADDALL":
      return {
        ...state,
        list: action.payload,
      };
    case "CHECK":
      return {
        ...state,
        list: state.list.map((el) => {
          return el._id === action.payload
            ? { ...el, todoadd: !el.todoadd }
            : el;
        }),
      };
    case "UPDATETODO":
      console.log(action.payload);
      return {
        ...state,
        list: state.list.map((el) => {
          return el._id === action.payload._id ? { ...action.payload } : el;
        }),
      };
    case "DELETE":
      // console.log(action.payload);
      return {
       ...state,
       list:
       state.list.filter(el=>{
         return el._id !== action.payload 
       })
      };  

    default:
      break;
  }
};


export default reducer;
