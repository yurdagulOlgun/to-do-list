import React from 'react';
// import {useState} from "react"
function Form(props) {
  const { formSubmit,onChangeInput} = props;
  const {value } =props;
    // const [clear,setClear]=useState("")
  

  return (
    <>
      <form method="get" onSubmit={formSubmit}>
        <div className="mb-3">
          <label htmlFor="todo" className="form-label mt-3 text-light">
            Add Task:
          </label>
          <input name="todo" type="text" className="form-control " id="todo" onChange={onChangeInput} value={value}/>
        </div>

        <button type="submit" className="btn btn-success" >
          Add
        </button>
      </form>
    </>
  );
}

export default Form;
