import { useState, useEffect, useContext } from "react";
import ItemLists from "./ItemLists";
import TaskCompleted from "./TaskCompleted";
const AddInput = () =>{
  const [newTask, setNewTask] = useState('');
  const [addTask, setAddTask] = useState([]);
  const [filter, setFilter] = useState('all');

  const handleNewItems = (e) =>{
    setNewTask(e.target.value);
  }
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks) {
      setAddTask(storedTasks);
    }
  }, []);

  useEffect(() => {
    if (addTask.length > 0) {
      localStorage.setItem('tasks', JSON.stringify(addTask));
    }
  }, [addTask]);
  
  const clickOnAdditems = () =>{
      if(newTask.trim()){
        setAddTask([...addTask, { text: newTask, completed: false }]);
        setNewTask('');
      }
  };

  const filteredTasks = addTask.filter(task => {
    if (filter === 'completed') return task.completed;
    if (filter === 'pending') return !task.completed;
    return true; 
  });

  return(
   <div className="container p-1">
        <div className="row align-items-center">
            <div className="col-md-10">
            <input type="text" className="form-control form-control-lg border-0" 
              id="newText"
              value={newTask}
              placeholder="Add your new task" 
              onChange={handleNewItems} />
            </div>
            <div className="col-md-2">
              <button className="btn  btn-lg btn-primary"
              onClick={clickOnAdditems}>add</button>
            </div>
            <TaskCompleted filter={filter} setFilter={setFilter}/>
        </div>
        <div className="row">
         <div className="col-md-12">
             {/* <ItemLists addTask={addTask} setAddTask={setAddTask}/> */}
             <ItemLists addTaskfil={filteredTasks} setAddTask={setAddTask} />
         </div>
      </div>
   </div>
    
  );
}

export default AddInput;