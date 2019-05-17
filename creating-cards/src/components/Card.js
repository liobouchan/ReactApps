import React, {Component} from 'react';

class Card extends Component{
    constructor(){
        super();
    }

    renderCards(){
        console.log(this.props);
        
        this.props.todos.map((todo, i) => {
            return (
               <div className="col-md-4" key={i}>
                 <div className="card mt-4">
                   <div className="card-title text-center">
                     <h3>{todo.title}</h3>
                     <span className="badge badge-pill badge-danger ml-2">
                       {todo.priority}
                     </span>
                   </div>
                   <div className="card-body">
                     {todo.description}
                   </div>
                   <div className="card-footer">
                     <button
                       className="btn btn-danger"
                       onClick={this.props.remove.bind(this, i)}
                    >
                       Delete
                     </button>
                   </div>
                 </div>
               </div>
            )
        });
    }

    render(){
        // this.props.todos.map((todo, i) => {
        const lala =         this.props.todos.map((todo, i) => {
            return (
               <div className="col-md-4" key={i}>
                 <div className="card mt-4">
                   <div className="card-title text-center">
                     <h3>{todo.title}</h3>
                     <span className="badge badge-pill badge-danger ml-2">
                       {todo.priority}
                     </span>
                   </div>
                   <div className="card-body">
                     {todo.description}
                   </div>
                   <div className="card-footer">
                     <button
                       className="btn btn-danger"
                       onClick={this.props.remove.bind(this, i)}
                    >
                       Delete
                     </button>
                   </div>
                 </div>
               </div>
            )
        });
        console.log(lala)
            return (
                <div className="row">
                {lala}
                </div>
                    
                
            )
        // });
    }
}
export default Card 