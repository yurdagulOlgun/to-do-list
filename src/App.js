import './App.css';
import Form from "./components/Form"
import ToDoItem from "./components/ToDoItem"
import toDoItems from "./data/toDoItems"
import {useState} from "react"

function App() {
  const [todos,setTodos] = useState(toDoItems)
  const [value, setValue] = useState('');

  function onChangeInput(event) {
    setValue(event.target.value);
  }
  function formSubmit(event) {
    event.preventDefault();
    
    if (!!event.target[0].value.length) {
      
      setTodos((prev) => {
        const item = {
          id: prev.length + 1,
          title: event.target[0].value,
          isCompleted: false,
        };
        
        return [...prev, item]; 
        
      });
      setValue("")
    }
  }
  function handleToggle(item){
    setTodos(
      todos.map((newItem)=>
        item.id === newItem.id 
        ? {...newItem, isCompleted: !newItem.isCompleted}
        :newItem
      )
    )
  }
  function handleDelete(){
    setTodos(
      todos.filter((task)=>{
        return !task.isCompleted
      })
    )
  }
  return (
    <>
      <div className="container  mt-5 ">
      <div className="row">
        <div className="col-sm-6 offset-sm-2 bg-secondary">
          <Form formSubmit={formSubmit} value={value} onChangeInput={onChangeInput}/>
          <label htmlFor="todo" className="form-label mt-3 text-light">
            To Do List:
          </label>
          <ul className="list-group mt-2">
            {todos.map((item) => (
              <ToDoItem item={item} key={item.id} handleToggle={handleToggle} />
            ))}
          </ul>
          <button className="btn btn-danger mt-3 mb-3" onClick={handleDelete}>
            Delete Completed
          </button>
        </div>
      </div>
    </div>
    </>
  );
}
export default App;
