import React, { useState, useEffect } from 'react';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import './App.css';
import Todo from './Todo';
import db from './firebase';
import firebase from 'firebase';

function App() {

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  //console.log(input);

  // when the app loads, we need to listen to the database  and fetch new todos as the
  useEffect(() => {

    // this code here... fires when the app.js loads
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map( doc => ({id: doc.id, todo: doc.data().todo}) )) 
    })
  },[]) 


  const addTodo = (event) => {
    event.preventDefault(); // will stop th REFRESH
    
    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    setInput(''); // clear up the input after clicking add todo button
  }

  return (
    <div className="App">
      <h1>Hello Clever Programmer</h1>
      <form>
        <FormControl>
          <InputLabel>:: Write a Todo ::</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)}/>
        </FormControl>
        <Button disabled={!input} variant="contained" color="primary" type="submit" onClick={addTodo}>
          Add Todo
        </Button>
        
      </form>

      <ul>
       {todos.map(todo => (
         <Todo text={todo}/>
       ))}
      </ul>

    </div>
  );
}

export default App;
