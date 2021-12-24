export default function ToDoItem(props) {
  const { item, handleToggle } = props;
  return <>
    <li
      onClick={() => handleToggle(item)}
      // onClick={handleClick}
      className={`list-group-item  ${item.isCompleted ? 'bg-success text-decoration-line-through  ' : null}`}
    >
      {props.item.title}
    </li>
  </>
}