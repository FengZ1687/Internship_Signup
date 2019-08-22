import React from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Thank from './components/Thank';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
     this.state={
       submitted:false
       

     }
     
    

   }

   submitform = ()=>{
     this.setState(state=>({
      submitted: !state.submitted

     }));

   }
  

   render(){

  return (
    <div className="App">
       <Header />
       { this.state.submitted
      ? <Thank /> 
      : <Form  submitform = {this.submitform}/>
      }
       
      </div>
  );
}
}

export default App;
