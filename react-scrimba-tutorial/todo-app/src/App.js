import React from 'react';
import './App.css';
import TodoItem from './TodoItem';
import todosData from './todoData';

class App extends React.Component {
	constructor(){
		super();
		this.state = {
			todos: todosData
		}
	}

	handleChange = (id) => {
		console.log(id);
		this.setState(prevState => {
			const updatedTodos = this.state.todos.map(item => {
				if(id === item.id){
					return{
						...item,
						completed: !item.completed
					}
				}
				return item;
			})
			return {todos: updatedTodos};
		})
	}

	render()
	{
			const todoItems = this.state.todos.map(item => {
				return <TodoItem key={item.id} item={item} handleChange={this.handleChange}/>
			})
		return (
			<div className="todo-list">
				{todoItems}
			</div>
		  )
	}
}

export default App;
