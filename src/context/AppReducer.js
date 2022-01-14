export default function appReducer (state, action) {
    console.log(state, action) // state: task[], action: ADD_TASK

    switch (action.type) {
        case 'ADD_TASK':
            return { 
                tasks: [...state.tasks, action.payload]
             };
        case 'DELETE_TASKS':
            return {
                tasks: []
            }
        case 'DELETE_TASK':
            console.log(state); // estado del array
            console.log(action.payload); // id del elemento
            return {
                tasks: state.tasks.filter(task => task.id !== action.payload)
                /* filter crea un nuevo array con todos los elementos que cumplan la condición implementada,
                en este caso crea un array con todos los elementos en que el id NO coincida con el payload (y el que coincide
                    ya no se encuentra en el array = es borrado) */
            }
        case 'UPDATE_TASK':
            const updatedTask = action.payload;
            const updatedTasks= state.tasks.map(task => {
                if(task.id === updatedTask.id){
                    task.title = updatedTask.title;
                    task.description = updatedTask.description;
                }
                return task
            })
            return {
                tasks: updatedTasks
            }
        case 'TOGGLE_TASK_DONE':            
            return {
                tasks: state.tasks.map((task) => 
                task.id === action.payload ? {...task, done: !task.done} : task)
                }
        default:
            return state
            //break;
    }

    
}