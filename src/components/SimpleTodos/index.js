import {Component} from 'react'
import './index.css'
import TodoItem from '../TodoItem'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

class SimpleTodos extends Component {
  state = {TodoList: initialTodosList}

  deleteTodo = id => {
    const {TodoList} = this.state
    const filteredTodo = TodoList.filter(eachTodo => eachTodo.id !== id)
    this.setState({TodoList: filteredTodo})
  }

  render() {
    const {TodoList} = this.state
    return (
      <div className="bg_container">
        <div className="todos_container">
          <h1 className="main_heading">Simple Todos</h1>
          <ul>
            {TodoList.map(eachTodo => (
              <TodoItem
                todoItem={eachTodo}
                deleteTodo={this.deleteTodo}
                key={eachTodo.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
