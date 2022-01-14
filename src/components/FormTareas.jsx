import React, { useState, useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { useNavigate, useParams } from 'react-router-dom';

function FormTareas() {
    const navigate = useNavigate();
    const {addTask, tasks, updateTask} = useContext(GlobalContext);
    const params = useParams();

    const [task, setTask] = useState({
        id: '',
        title: '',
        description: ''
    });

    const handleChange = e => {
        //console.log(e.target.name, e.target.value);
        setTask({...task, [e.target.name]: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault();
        
        if(task.id){
            updateTask(task)
        } else {
            addTask(task)
        }
        
        navigate('/');
    }

    useEffect(() => {
        const taskFound = tasks.find((task) => task.id === params.id);
        console.log(taskFound);

        if(taskFound){
            //console.log('editando');
            setTask(taskFound)
        }
    }, [params.id, tasks])

    return (
        <div className="form-tareas">
            <form className="form-style" onSubmit={handleSubmit}>
                <h2 className="margins">{

                    task.id ? 'Editar Tarea' : 'Crear Tarea'

                }</h2>
                <div className="margins">
                     <input type="text" 
                            name='title' 
                            placeholder='Titulo de la tarea'
                            className='inputs'
                            onChange={handleChange}
                            value={task.title}
                    />
                </div>
                <div className="margins mb-5">
                    <textarea name="description" 
                              rows="2"
                              placeholder="Descripcion"
                              className="inputs"
                              onChange={handleChange} 
                              value={task.description}
                              />
                              
                </div>
                <button className="boton-crear">
                    {task.id ? 'Modificar' : 'Crear'}
                </button>
            </form>
        </div>
    )
}

export default FormTareas;
