
import { FaTrashAlt } from "react-icons/fa";
import { FaEdit, FaCheckCircle } from "react-icons/fa";
import { FaExclamationCircle } from "react-icons/fa";

const DeleteButton = ({items, index, addTask, setAddTask, setEditingTask, setUpdatedText}) => {

  const clickOnEdit = (index) => {
    setEditingTask(index);
    setUpdatedText(addTask[index].text);
   }
  const ClickOnDelete = (index) =>{
    const updatedTasks = addTask.filter((_, taskIndex) => taskIndex !== index);
      setAddTask(updatedTasks);
   }
  const toggleTaskCompletion = (taskIndex) => {
    const updatedTasks = [...addTask];
    updatedTasks[taskIndex].completed = !updatedTasks[taskIndex].completed;
    setAddTask(updatedTasks);
    
  };
  return(
    <div className="d-flex justify-content-between align-items-center">
      <span className="d-block fw-900" 
        style={{
            textDecoration: items.completed ? 'line-through' : 'none',
            
          }}>
        {index+1} . {items.text}
      </span>
      <span className="d-block">
      <button className="btn btn-primary me-2 edit-icon"
        onClick={()=>{clickOnEdit(index)}}>
        <FaEdit />
      </button>
      <button className="btn btn-danger me-2 delete-icon"
        onClick={()=>{ClickOnDelete(index)}}>
        <FaTrashAlt />
      </button>
      <button
        className={`btn btn-${items.completed ? 'success' : 'warning'} 
        btn-${items.pending ? 'warning' : 'success'}`}
        onClick={() => toggleTaskCompletion(index)}>
        {items.completed ? <FaCheckCircle /> : <FaExclamationCircle />}
      </button>
      </span> 
  </div>
  );
}

export default DeleteButton;