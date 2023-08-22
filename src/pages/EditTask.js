import React from 'react'
import { useParams } from 'react-router-dom';
import { useSelector , useDispatch} from 'react-redux';
import { useState } from 'react';
import { editTask } from '../service/Action/action';
import { useNavigate } from 'react-router-dom';

const EditTask = () =>{
    const {id} = useParams();
    const tasks = useSelector((state) => state.reducer.taskData);
    const existingTask = tasks.filter(f => f.id==id);
    const {name, description,status} = existingTask[0];
    const [uname, setName] = useState(name);
    const [udescription, setDescription] = useState(description);
    const [ustatus, setStatus] = useState('Pending');
    const dispatch = useDispatch();
    const navigate = useNavigate();
  

    const handleStatus = (event) => {
  
        if(event.target.value=='on'){
            setStatus('Completed');
        }
    }
    
    const handleUpdate = (event) => {
        event.preventDefault();
        dispatch(editTask({
            id:id,
            name:uname,
            description:udescription,
            status: ustatus
        }))
        navigate('/');
    }

    return (
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
        <div className='w-50 border bg-secondary text-white p-5'>
            <h3>Edit Task</h3>
            <form onSubmit={handleUpdate}>
                <div>
                    <label htmlFor='name'>Name:</label>
                    <input type='text' name='name' className='form-control'  placeholder='Enter name' value={uname} onChange={e=> setName(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor='description'>Description:</label>
                    <input type='description' name='description' className='form-control' placeholder='Enter description' value={udescription} onChange={e=> setDescription(e.target.value)} />
                </div>
                <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox"  onChange={handleStatus} defaultChecked={status === 'Completed' ? true  : false}/>
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault" >complete</label>
                </div>
                <br/>
                <button className='btn btn-info'>Update</button>
            </form>
        </div>
    </div>
    );
}

export default EditTask;