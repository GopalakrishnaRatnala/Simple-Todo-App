import {useState} from 'react'
import './index.css'

const TodoItem = props => {
  const [isEditing, toggleEditSaveButton] = useState(true)
  const {todoItem, deleteTodo, onClickEditTodo, onClickSaveTodo} = props
  const {title, id} = todoItem
  const onDelete = () => {
    deleteTodo(id)
  }
  const onEdit = () => {
    toggleEditSaveButton(false)
    onClickEditTodo(id, title)
  }
  const onSave = () => {
    toggleEditSaveButton(true)
    onClickSaveTodo(id)
  }
  return (
    <li className="todo-list-item">
      <p className="todo-title">{title}</p>
      <div className="buttons-container">
        {isEditing ? (
          <button type="button" onClick={onEdit} className="button">
            Edit
          </button>
        ) : (
          <button type="button" onClick={onSave} className="button">
            Save
          </button>
        )}

        <button type="button" onClick={onDelete} className="button">
          Delete
        </button>
      </div>
    </li>
  )
}

export default TodoItem
