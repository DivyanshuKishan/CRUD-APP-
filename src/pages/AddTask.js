import React, { useState } from 'react'
import { addTask } from '../service/Action/action';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ErrorBoundary from '../component/ErrorBoundary';
import { connect } from 'react-redux';
function AddTask() {
    
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('Pending');
    const tasks = useSelector((state) => state.reducer.taskData);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (event)=>{
        event.preventDefault();
        dispatch(addTask({id: tasks.length>0?tasks[tasks.length-1].id+1 : 1, name, description, status}));
        navigate('/');
    }

    const handleStatus = (event) => {
        if(event.target.value=='on'){
            setStatus('Completed');
        }
    }

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
        <div className='w-50 border bg-secondary text-white p-5'>
            <h3>Add New Task</h3>
            <ErrorBoundary>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='name'>Name:</label>
                    <input type='text' name='name' className='form-control'  placeholder='Enter name' onChange={e=> setName(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor='description'>Description:</label>
                    <input type='description' name='description' className='form-control' placeholder='Enter description' onChange={e=> setDescription(e.target.value)} />
                </div>
                <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onChange={handleStatus}/>
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault" >complete</label>
                </div>
                <br/>
                <button className='btn btn-info'>Submit</button>
            </form>
            </ErrorBoundary>
        </div>
    </div>
  )
}

const mapStateToProps = (state)=>({
    taskData: state.taskData,
})

export default connect(mapStateToProps,{addTask})(AddTask);