

const TaskCompleted = ({filter, setFilter}) => {

 const changeFilter = (newFilter) =>{
     setFilter(newFilter);
  }
 return (
    <div className="row mt-3">
      <div className="col-md-12">
      <button
        className={`btn btn-md  me-3 py-1 px-3 fw-700
          
         ${filter === 'all' ? 'btn-primary' : 'btn-light'}`}
        onClick={() => changeFilter('all')}
      >
        All
      </button>
      <button
        className={`btn btn-md me-3 py-1 px-3 
        ${filter === 'completed' ? 'btn-success' : 'btn-light'}`}
        onClick={() => changeFilter('completed')}
      >
        Completed
      </button>
      <button
        className={`btn btn-md py-1 px-2 ${filter === 'pending' ? 'btn-warning' : 'btn-light'}`}
        onClick={() => changeFilter('pending')}
      >
        Pending
      </button>
    </div>
    </div>
  );
};

export default TaskCompleted;
