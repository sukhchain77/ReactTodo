import React, { useState } from 'react';
import todo from './images/Logo.png';



const Todo = ()=>{

    const [inputData,setInputdata] = useState();
    const [items,setItems] = useState([]);

    const addItem = () =>{
        setItems(...items,setItems)

    }
    return (
        <>
        <div className='main-div'>
            <div className='child-div'>
                <figure>
                    <img src={todo} alt='' />
                    <figcaption>Add Your List here</figcaption>
                    
                </figure>
                <div className='addItem'>
                    <input type="text" name='' id='' placeholder='Add Items..' value={inputData} 
                    onChange= {(e) => setInputdata(e.target.value) }/>
                    <i className="fa fa-plus add-btn" title='Add Items' onClick={addItem}></i>

                </div>
                <div className='showItem'>
                  <div className='eachItem'>
                     <h1>Apple</h1>
                     <i className="fa fa-trash add-btn" title='Delete Items'></i>
                  </div>
                </div>

                <div className='showItem'>
                    <button className='btn'> Check list</button>

                </div>

            </div>
             
        </div>
        </>
        
    )}

export default Todo;