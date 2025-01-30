import './App.css';
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import TodoHeader from './assets/Components/TodoHeader';
import AddInput from './assets/Components/AddInput';
import QuotesAPI from './assets/Components/QuotesAPI';

function App() {
 
  return (
    <>
    <div className='container-fluid'>
        <div className='row main-container bg-dark shadow-sm p-4'>
          <TodoHeader />
          <QuotesAPI />
          <AddInput />
        </div>
    </div>
    </>
  )
}

export default App
