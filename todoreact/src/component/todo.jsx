import React, { useState } from 'react';
import todo from './images/Logo.png';
import '../App.css';



const Todo = ()=>{

    const [inputData,setInputdata] = useState();
    const [items,setItems] = useState([]);

    const addItem = () =>{
        if(!inputData){

        }else{
        setItems([...items,inputData])
        setInputdata('')
        }

    }

    const deleteItem =(id) =>{
       console.log(id);
       const updatedItem = items.filter((ele,index) =>{
           return index != id;
       })
       setItems(updatedItem)
    } 

    const removeItem = () =>{
        setItems([])
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
                    <input type="text" name='' className='inputrecord' placeholder='Add Items..' value={inputData} 
                    onChange= {(e) => setInputdata(e.target.value) }/>
                    <i className="fa fa-plus add-btn" title='Add Items' onClick={addItem}></i>

                </div>
                <div className='showItem'>
                    {
                      items.map((ele,index) =>{
                        return (
                            <div className='eachItem' key={index}>
                            <h3>{ele}</h3>
                            <i className="fa fa-trash add-btn" title='Delete Items' onClick={() => deleteItem(index)}></i>
                            </div>
                        )
                      })
                    }
                  
                </div>

                <div className='showItem'>
                    <button className='btn' onClick={removeItem}> Check list</button>

                </div>

            </div>
             
        </div>
        </>
        
    )}

export default Todo;