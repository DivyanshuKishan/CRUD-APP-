import { ADD_Task, Edit_Task, Delete_Task, Get_Task} from "../constants"

export const addTask=(data)=>{
    return {
        type: ADD_Task,
        data:data
    }
}

export const editTask=(data)=>{
    return {
        type: Edit_Task,
        data:data
    }
}

export const deleteTask=(data)=>{
    return {
        type: Delete_Task,
        data:data
    }
}

export const getTask=(data)=>{
    return{
        type: Get_Task,
        data:data
    }
}