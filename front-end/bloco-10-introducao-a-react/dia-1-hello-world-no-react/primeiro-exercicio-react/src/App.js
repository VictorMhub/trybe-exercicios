import React from 'react';
    import './App.css';

    const Task = (value) => {
      return (
        <li key={value}>{value}</li>
      );
    }

    const tasks = ['Wake up', 'Take a breakfast', 'Brush teeth', 'Go to work'];

    class App extends React.Component {
      render() {
        return (
          <ul>{ tasks.map(tarefa => Task(tarefa)) }</ul>
        );
      }
    }

    export default App;