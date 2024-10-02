import React, { useState, useEffect } from 'react';
import '../dashboard.css';
import { AiOutlineDelete } from 'react-icons/ai';
import { BsCheckLg } from 'react-icons/bs';
import { StarsCanvas } from './canvas';
import Nav from './Navbar';
function Dashboard() {
  const [allTodos, setAllTodos] = useState([]);
  const [newTodoTitle, setNewTodoTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [completedTodos, setCompletedTodos] = useState([]);
  const [isCompletedScreen, setIsCompletedScreen] = useState(false);

  const handleAddNewToDo = () => {
    let newToDoObj = {
      title: newTodoTitle,
      description: newDescription,
    };
    let updatedTodoArr = [...allTodos];
    updatedTodoArr.push(newToDoObj);
    setAllTodos(updatedTodoArr);
    localStorage.setItem('todolist', JSON.stringify(updatedTodoArr));
    setNewDescription('');
    setNewTodoTitle('');
  };

  useEffect(() => {
    let savedTodos = JSON.parse(localStorage.getItem('todolist'));
    let savedCompletedToDos = JSON.parse(
      localStorage.getItem('completedTodos')
    );
    if (savedTodos) {
      setAllTodos(savedTodos);
    }

    if (savedCompletedToDos) {
      setCompletedTodos(savedCompletedToDos);
    }
  }, []);

  const handleToDoDelete = index => {
    let reducedTodos = [...allTodos];
    reducedTodos.splice(index, 1);

    localStorage.setItem('todolist', JSON.stringify(reducedTodos));
    setAllTodos(reducedTodos);
  };

  const handleCompletedTodoDelete = index => {
    let reducedCompletedTodos = [...completedTodos];
    reducedCompletedTodos.splice(index);
    localStorage.setItem(
      'completedTodos',
      JSON.stringify(reducedCompletedTodos)
    );
    setCompletedTodos(reducedCompletedTodos);
  };

  const handleComplete = index => {
    const date = new Date();
    var dd = date.getDate();
    var mm = date.getMonth() + 1;
    var yyyy = date.getFullYear();
    var hh = date.getHours();
    var minutes = date.getMinutes();
    var ss = date.getSeconds();
    var finalDate =
      dd + '-' + mm + '-' + yyyy + ' at ' + hh + ':' + minutes + ':' + ss;

    let filteredTodo = {
      ...allTodos[index],
      completedOn: finalDate,
    };


    let updatedCompletedList = [...completedTodos, filteredTodo];
    console.log(updatedCompletedList);
    setCompletedTodos(updatedCompletedList);
    localStorage.setItem(
      'completedTodos',
      JSON.stringify(updatedCompletedList)
    );

    handleToDoDelete(index);
  };

  return (
    <div className='main'>
      <Nav/>
      <div className="App flex items-center justify-center flex-col ">
        <h1 className='text-[50px] text-white pt-16 font-bold ' >Schedule</h1>

        <div className="todo-wrapper m-8 bg-[#461ca7] border-4 rounded-xl w-fit border-[#ae09dc9f] bg-opacity-[0.9] ">

          <div className="todo-input flex sm:flex-row flex-col ">
            <div className=" todo-input-item">
              <label className='text-white' >Title:</label>
              <input
                type="text"
                className='rounded'
                value={newTodoTitle}
                onChange={e => setNewTodoTitle(e.target.value)}
                placeholder="What's the title of your To Do?"
              />
            </div>
            <div className="todo-input-item">
              <label className='text-white'>Description:</label>
              <input
                type="text"
                className='rounded'
                value={newDescription}
                onChange={e => setNewDescription(e.target.value)}
                placeholder="What's the description of your To Do?"
              />
            </div>
            <div className="todo-input-item">
              <button
                className="primary-btn rounded "
                type="button"
                onClick={handleAddNewToDo}
              >
                Add
              </button>
            </div>
          </div>
          <div className="btn-area">
            <button
              className={` rounded secondaryBtn ${isCompletedScreen === false && 'active'}`}
              onClick={() => setIsCompletedScreen(false)}
            >
              To Do
            </button>
            <button
              className={` rounded m-4 secondaryBtn ${isCompletedScreen === true && 'active'}`}
              onClick={() => setIsCompletedScreen(true)}
            >
              Completed
            </button>
          </div>
          <div className="todo-list">

            {isCompletedScreen === false &&
              allTodos.map((item, index) => (
                <div className="todo-list-item rounded " key={index}>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>

                  </div>
                  <div>
                    <AiOutlineDelete
                      title="Delete?"
                      className="icon "
                      onClick={() => handleToDoDelete(index)}
                    />
                    <BsCheckLg
                      title="Completed?"
                      className=" rounded check-icon"
                      onClick={() => handleComplete(index)}
                    />
                  </div>
                </div>
              ))}

            {isCompletedScreen === true &&
              completedTodos.map((item, index) => (
                <div className="todo-list-item" key={index}>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <p> <i>Completed at: {item.completedOn}</i></p>
                  </div>
                  <div>
                    <AiOutlineDelete
                      className="icon rounded "
                      onClick={() => handleCompletedTodoDelete(index)}
                    />
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      <StarsCanvas />
    </div>
  );
}

export default Dashboard;