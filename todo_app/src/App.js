import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import './App.css';

function App() {

  const [todos, setTodos] = useState(['panama boys', 'panama girls']);
  const [input, setInput] = useState('');
  //console.log(input);

  const addTodo = (event) => {
    event.preventDefault(); // will stop th REFRESH
    setTodos([...todos, input]);
    setInput(''); // clear up the input after clicking add todo button
  }

  return (
    <div className="App">
      <h1>Hello Clever Programmer</h1>
      <form>
        <input value={input} onChange={event => setInput(event.target.value)} />
        <Button disabled={!input} variant="contained" color="primary" type="submit" onClick={addTodo}>
          Add Todo
        </Button>
        { /*<button type="submit" onClick={addTodo}>Add Todo</button> */}
      </form>

      <ul>
       {todos.map(todo => (
         <li>{todo}</li>
       ))}
      </ul>

    </div>
  );
}

export default App;
