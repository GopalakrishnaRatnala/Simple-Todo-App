import './index.css'

const TodoItem = props => {
  const {todoItem, deleteTodo} = props
  const {title, id} = todoItem
  const onDelete = () => {
    deleteTodo(id)
  }
  return (
    <li>
      <p>{title}</p>
      <button type="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
