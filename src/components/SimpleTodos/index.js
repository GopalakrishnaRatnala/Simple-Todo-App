import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

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
  state = {TodoList: initialTodosList, inputTodo: ''}

  deleteTodo = id => {
    const {TodoList} = this.state
    const filteredTodo = TodoList.filter(eachTodo => eachTodo.id !== id)
    this.setState({TodoList: filteredTodo})
  }

  onClickSaveTodo = id => {
    const {inputTodo} = this.state
    console.log(id)

    this.setState(prevState => ({
      TodoList: prevState.TodoList.map(eachItem => {
        if (eachItem.id === id) {
          return {
            ...eachItem,
            title: inputTodo,
          }
        }
        return eachItem
      }),
      inputTodo: '',
    }))
  }

  onClickEditTodo = (id, title) => {
    console.log(id)

    this.setState({
      inputTodo: title,
    })
  }

  addTodo = () => {
    const {inputTodo} = this.state

    const wordListTodo = inputTodo.split(' ')
    console.log(wordListTodo)

    let num = 1

    wordListTodo.forEach(word => {
      const repetitionValue = parseInt(word)
      if (!Number.isNaN(repetitionValue)) {
        console.log(repetitionValue)
        num = repetitionValue
      }
    })

    const Index = wordListTodo.indexOf(num.toString())
    if (Index !== -1) {
      wordListTodo.splice(Index, 1)
    }

    console.log(wordListTodo)

    for (let i = 0; i < num; i += 1) {
      const newTodo = {
        id: uuidv4(),
        title: wordListTodo.join(' '),
      }
      this.setState(prevState => ({
        TodoList: [...prevState.TodoList, newTodo],
        inputTodo: '',
      }))
    }
  }

  onChangeTodo = event => {
    this.setState({inputTodo: event.target.value})
  }

  render() {
    const {TodoList, inputTodo} = this.state
    return (
      <div className="bg_container">
        <div className="todos_container">
          <h1 className="main_heading">Simple Todos</h1>
          <div className="input-container">
            <input
              type="text"
              className="input-element"
              onChange={this.onChangeTodo}
              value={inputTodo}
              placeholder="Enter Your Todo Item"
            />
            <button type="button" className="add-button" onClick={this.addTodo}>
              Add
            </button>
          </div>

          <ul className="todos-list-container">
            {TodoList.map(eachTodo => (
              <TodoItem
                todoItem={eachTodo}
                deleteTodo={this.deleteTodo}
                key={eachTodo.id}
                onClickEditTodo={this.onClickEditTodo}
                onClickSaveTodo={this.onClickSaveTodo}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
