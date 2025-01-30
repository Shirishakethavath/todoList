
import { useState } from "react";

import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";

const ItemLists = ({addTaskfil , setAddTask}) => {
    const [editingTask, setEditingTask] = useState(null);
    const [updatedText, setUpdatedText] = useState(''); 
  return(

     <ul className="list-group">
              {addTaskfil.map((items, index)=>(
              <li key={index} 
                  className={`list-group-item card shadow mt-3 ${items.completed ? 'success' : ''}`}>
                {editingTask === index ? (
                  <> 
                    <EditButton setEditingTask={setEditingTask} 
                    addTask={addTaskfil} setAddTask={setAddTask} index={index} 
                    updatedText={updatedText} setUpdatedText={setUpdatedText}
                    />
                  </>
                ):(
                  <>
                    <DeleteButton items={items} index={index} 
                        addTask={addTaskfil} setAddTask={setAddTask} 
                        setEditingTask={setEditingTask}
                        setUpdatedText={setUpdatedText}
                        />
                  </>   
                )}
                
              </li>
              ))}
            </ul>
  );
}

export default ItemLists;