import React from 'react';
import { Link } from 'react-router-dom';
import { IoMdAdd } from 'react-icons/io';

function Header() {
    return (
        <div>
            <div className="header">
                <Link to="/">
                    <h5 className="list-title">Listado de tareas</h5>
                </Link>
                <div className="add-title">
                    <Link to="/add">
                        <button className="add-button">
                            <IoMdAdd className='plus' />
                            Agregar tarea
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header;
