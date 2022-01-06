import React from 'react';
import FieldSetUser from './Components/FieldSetUser';
import FieldSetResume from './Components/FiledSetResume';

class App extends React.Component {
  render(){
    return(
      <main>
        <h1>Formulário</h1>
        <FieldSetUser />
        <FieldSetResume />
      </main>
    )
  }
}

export default App;
