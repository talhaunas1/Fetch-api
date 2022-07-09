// import logo from './logo.svg';
// import './App.css';
// import { useSelector } from "react-redux"
// import { useDispatch } from 'react-redux'
// import { addItem, deleteItem } from './store/actions/TodosAction';
import Products from "./components/products/Products";
function App() {
  // const allTodos = useSelector((store)=> store.TodosReducer.state.todos)
  // console.log(allTodos);
  
  // const dispatch = useDispatch()

  // const deleteHandler = (id)=>{
  //   console.log("Delete Handler");
  //   dispatch(deleteItem(id, allTodos))
  // }

  // let value = ""
  // const todoGetter = (e)=>{
  //   value = e.target.value
  //   console.log(value);
  // }

  // const submitHandler = ()=> {
  //   dispatch(addItem(value))
  // }

  return (
    <div>

      {/* <h2>hello</h2> */}
      <Products/>


      {/* <input type={"text"} onChange={(e)=>todoGetter(e)}/>
      <button onClick={submitHandler}>submit</button>
      <table border={1}>
      <thead>
        <tr>
          <th>sr#</th>
          <th>TODOS</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {allTodos?.map((item, index) => {
          return <tr>
            <td>{index + 1}</td>
            <td>{item.todo}</td>
            <td><button onClick={()=>deleteHandler(item.id)}>Delete</button></td>
          </tr>
        })}
      </tbody>

    </table> */}
    </div>
  );
}

export default App;
