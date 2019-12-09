import React from 'react'
import js from '../components/js.jpg'
class Todo extends React.Component {
    state = {
      todos: [
       
      ],
      newInput: '',
      isComplete: false
    }
    changeHandler = e => this.setState({
      newInput: e.target.value
    })

  addTodo=()=>this.setState({
  
    todos:[...this.state.todos,{
      text:this.state.newInput,
      
    }]
  })  

  completeTodo=(x)=>{
   this.setState({
    todos: this.state.todos.map((el,i)=>i===x?{...el, isComplete: true}:el)

   })
  
  }  

  

  delete=(x)=>{   this.setState({
    todos:this.state.todos.filter((el,i)=>x!==i)
    
  })}
 

  render() {
      return (
        <div>
          <div className="header">
            <h1 className="textDoUp">To-Do App</h1>
            <h5 className="textDoUp">Add New To-Do</h5>
            <input type='text' name='newInput' id="textTODO"  placeholder="Title..."onChange={this.changeHandler}/>
            <button className="btn" onClick={this.addTodo}>Add</button>
            
          </div>
          <h2 className="textlist">Let's get some work done!</h2>
        
          {this.state.todos.map(((el,i)=>
          
          <li className="ListTodos">
             <button className="btnlist" onClick={()=>this.completeTodo(i)}>Comlete</button>
             <button className="btnlist"onClick={()=>this.delete(i)}>Delete</button>
          <span style={{textDecoration:el.isComplete?'line-through':''}} >{i} : {el.text}</span>
          
          </li>
          )
          )}
          <div className="bordrLogo">
            <img className="logotoDo" src={js}/>
          </div>
        </div>
      )
    }
  }
  export default Todo