import { ADD_Task, Edit_Task, Delete_Task, Get_Task } from "../constants";
const initialState={
    taskData:[]
};
export default function reducer (state=initialState, action){
    switch(action.type){
        case ADD_Task: {
            return {
                ...state,
                taskData:[...state.taskData, action.data]
            }}
           
        case Edit_Task:{
            const {id, name, description, status} = action.data;
            const ut = state.taskData.find(task => task.id == id);
            if(ut){
                ut.name=name;
                ut.description=description;
                ut.status=status
            }
            return {
                ...state,
                taskData: [...state.taskData]
            }}
            
        case Delete_Task:{
            const {id} = action.data;
            const uu = state.taskData.find(task => task.id == id);
            if(uu){
                state.taskData=state.taskData.filter(f => f.id !==id);
            }
            return {
                ...state,
                taskData:[...state.taskData]
            }}
        case Get_Task:{
 
        break;
        }
        default:
            return state
    }
}

