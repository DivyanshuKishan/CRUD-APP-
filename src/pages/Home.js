import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import ErrorBoundary from '../component/ErrorBoundary';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask } from '../service/Action/action';
import { addTask } from '../service/Action/action';
function Home(){
    const tasks = useSelector((state) => state.reducer.taskData);
    const [search, setSearch]= useState('');
    const dispatch  = useDispatch();
    const handleDelete = (id) => {
        dispatch(deleteTask({id:id}))
    }

     // Load tasks from local storage on component mount
     useEffect(() => {
        const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        // Get a list of task IDs that are already in the Redux store
        const existingTaskIds = tasks.map((task) => task.id);

        // Filter out tasks from local storage that are not already in the Redux store
        const newTasks = savedTasks.filter((task) => !existingTaskIds.includes(task.id));

        // Dispatch an action to add tasks to Redux store
        newTasks.forEach((task) => dispatch(addTask(task)));
    }, []);


    // Save tasks to local storage whenever tasks change
    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);


    return(
        <>
        <div className='container-fluid'>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link  className="nav-link active" to='/'>Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link  className="nav-link " to='/addTask'>AddTask</Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
        </div>
        <div className='container'>
            <ErrorBoundary>
            <form>
                <div className="mb-3 mt-5">
                    <input type="search" className="form-control" id="exampleFormControlInput1" placeholder="search" onChange={(e)=>setSearch(e.target.value)}/>
                </div>
            </form>
            <h2>Crud App</h2>
            <table className='table table-dark table-hover'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.filter((task)=>{
                        return search.toLowerCase() === '' ? task : task.name.toLowerCase().includes(search) || task.description.toLowerCase().includes(search)
                    }).map((task, index) => (
                        <tr key={index}>
                            <td>{task.id}</td>
                            <td>{task.name}</td>
                            <td>{task.description}</td>
                            <td>{task.status}</td>
                            
                            <td>
                                <Link to={`/edit/${task.id}`} className='btn btn-sm btn-primary'>Edit</Link>
                                <button onClick={() => handleDelete(task.id)} className='btn btn-sm btn-danger ms-2'>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </ErrorBoundary>
        </div>
        </>
    )
}

export default Home;