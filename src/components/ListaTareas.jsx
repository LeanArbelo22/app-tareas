import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { Link } from 'react-router-dom';

function ListaTareas() {
    const { tasks, deleteTasks, deleteTask, toggleTaskDone } = useContext(GlobalContext);
    

    return (
        <div className="list">
            
            <button className="delete-all"
                    onClick={() => deleteTasks()}>
                Eliminar todo
            </button>

            <div className="task">
                {tasks.map((task, index) => (
                    
                    <div className="task-content"
                        key={index} >
                            <div>
                                <h1 className='padd'><strong>{task.title}</strong></h1>
                                <p className='padd'>{task.description}</p>
                                <p className='extra-small'>ID: {task.id}</p> 
                                <button className='done' onClick={() => toggleTaskDone(task.id)}>{
                                    task.done ? 'Rehacer' : 'Completar'
                                }</button>
                            </div>
                            <div>
                                <Link to={`/edit/${task.id}`} className='marg edit-btn'>
                                    Editar
                                </Link>
                                <br />
                                <button className='marg delete-one-btn'
                                onClick={() => deleteTask(task.id)}
                                >
                                    Eliminar
                                </button>
                            </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ListaTareas;
