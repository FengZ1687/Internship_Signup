import React from 'react';
import './header.css';


class Form extends React.Component {
    constructor(props){
     super(props);
      this.state={
        
        show:false,
        email:'',
        selector:'DEFAULT',
        buttontext: 'Sign Up Now' + String.fromCharCode(9656)

      }
      
      this.handleSelectChange = this.handleSelectChange.bind(this);
      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);

    }
    

    handleSelectChange(event){

     this.setState({selector:event.target.value})

    }
    handleInputChange(event) {
        this.setState({email: event.target.value});
      }
    
      handleSubmit(event) {
        var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test(String(this.state.email).toLowerCase())){
           this.setState({
               show:false,
               buttontext: "Submitting..."
           });
           console.log('New submission email :' + this.state.email + " Interests:" + this.state.selector);

           setTimeout(() => {
            this.props.submitform();

            
          }, 2000);
          
        }
        else{
            this.setState({
                show: true
            });
        }
        
        event.preventDefault();
      }

      


  render() {
    var inputclass = this.state.show ? "invalid" : null;
    
  return (
    
    <div>
      <p>Preapre your career with a project Management, Web-Development, Graphic design, or Digital Marketing Internship at Northern.</p>
      <div className = "info">
      { this.state.show
      ? <p className = "error">Please enter a valid email address.</p>  
      : null 
      }
      <input className = {inputclass} type="text" value={this.state.email} onChange={this.handleInputChange} placeholder="Your Email Address *"></input>
      <select value={this.state.selector} onChange={this.handleSelectChange}>
      <option value="DEFAULT" disabled>Your interests</option>
      <option value="development">Development</option>
      <option value="managment">Managment</option>
      <option value="graphicdeisgn">Graphic Design</option>
      <option value="digitalmarketing">Digital Marketing</option>
      </select>
      </div>
      
      <button type="button" onClick= {this.handleSubmit}>{this.state.buttontext}</button>
    </div>
  );
}
}

export default Form;