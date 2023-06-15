import './TodoItem.css';
import { BsFillFileEarmarkExcelFill } from "react-icons/bs";
import { VscClose, VscCheck, VscCheckAll, VscCircleLarge, VscCircleLargeFilled } from "react-icons/vsc";


function TodoItem(props) {
  let content;
  if (props.completed) {
    content = <VscCheckAll />;
  } else {
    content = <VscCheck />;
  }

  return (
    <li className="TodoItem">
      <span
        className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
        onClick={props.onComplete}
      >
        {content}
      </span>
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      <span
        className="Icon Icon-delete"
        onClick={props.deleteTodo}
      >
        <VscClose />
      </span>
    </li>);
}

export default TodoItem;