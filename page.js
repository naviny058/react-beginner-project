'use client'
import React, { useState } from 'react';

const page = () =>{
  const [title, settile] = useState("")
  const [desc , setdesc] = useState('')
  const [mainTask, setMainTask] = useState([])
  const submitHandler =(e)=>{
    e.preventDefault();
    setMainTask([...mainTask, { title, desc}])
    settile('')
    setdesc('')
    console.log(mainTask);
  }
  const deleteHandler = (i) =>{
    let copyTask = [...mainTask]
    copyTask.splice(i,1)
    setMainTask(copyTask)
  }

  const updateHandler = (i) =>{
    console.log(setMainTask.title(i));
    
  }

  let renderTask = <h2>No task Available</h2>

  if(mainTask.length >0){
    renderTask = mainTask.map((t,i) => {
      return (
        <li key={i} className='flex items-center justify-between mb-5'>
          <div className='flex items-center justify-between mb-5 w-2/3'>
          <h2 className='text-2xl font-semibold'>{t.title}</h2>
          <h2 className='text-xl font-medium'>{t.desc}</h2>
      </div>
      <button
      onClick={() =>{
        updateHandler(i)
      }}
      className='bg-green-400 rounded font-bold text-white'>Update</button>
      <button 
      onClick={()=>{
        deleteHandler(i)
      }}
      className='bg-red-400 rounded font-bold text-white'>Delete</button>
    </li>
    );
  });
}
  return (
    <>
      <h1 className='
      bg-black text-white
      p-5 text-5xl font-bold
      text-center'
      >Navin Todo List</h1>
      <form onSubmit={submitHandler}>
        <input type="text" 
        className='text-2xl border-zinc-800
        border-4 m-5 px-4 py-0' 
        placeholder='Enter title here'
        value={title}
        onChange={(e)=>{
          settile(e.target.value)
        }}
        />
        <input 
          type="text" 
          className='text-2xl border-zinc-800
          border-4 m-5 px-4 py-0' 
          placeholder='Enter your Description here'
          value={desc}
          onChange={(e) =>{
            setdesc(e.target.value)
          }}
        />
        <button
        className='bg-black text-white px-4 py-2 text-2xl
        font-bold rounded'>Add Task</button>  
      </form>
      <hr/>
      <div className='p-8 bg-slate-200 '>
        <ul>
          {renderTask}
        </ul>
      </div>
    </>
  )
}
export default page