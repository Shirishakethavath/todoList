
import { FaSave } from "react-icons/fa";
import { FaTimesCircle } from "react-icons/fa";

const EditButton = ({setEditingTask, setAddTask, addTask, updatedText, setUpdatedText, index}) => {
  

  const changeOnEdit = (e) =>{
      setUpdatedText(e.target.value)
   }

   const saveEdit = (index) => {
    setAddTask(
      addTask.map((task, taskIndex) =>
        taskIndex === index ? { ...task, text: updatedText } : task
      )
    );
    setEditingTask(null); 
    setUpdatedText('');
  };
  
   const cancelEdit = () => {
    setEditingTask(null);
    setUpdatedText('');
  };

  return(
    <div className="d-flex justify-content-between align-items-center">
      <span className="d-block col-md-9">
        <input type="text" className="form-control" 
            value={updatedText} onChange={changeOnEdit}>
        </input>
      </span>
      <span className="d-block">
        <button className="btn btn-primary me-3 save-icon" onClick={()=>saveEdit(index)}>
          <FaSave />
        </button>
        <button className="btn btn-danger" onClick={cancelEdit}>
          <FaTimesCircle />
        </button>
      </span>
    </div> 
  )
}

export default EditButton;