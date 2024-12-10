import React, { useState } from 'react'

const Crudtable = () => {
    const[name,setName]=useState('')
    const[email,setEmail]=useState('')
    const[number,setNumber]=useState('')
    const[data,setData]=useState([])
    const saveData=(e)=>{
       
        if (name && email && number) {
            
            setData([...data, { name, email, number }]);
          
            
        } else {
            alert('Please fill all fields!');
        }
       
    }
  return (
   <>
   <form>
   Name <input type='name'placeholder='enter name'value={name} onChange={(e)=>setName(e.target.value)}/>
   Email <input type='email' placeholder='enter mail'value={email} onChange={(e)=>setEmail(e.target.value)}  />
   Number <input type='number' placeholder='enter phone no.'value={number} onChange={(e)=>setNumber(e.target.value)}/>
   <button onClick={saveData}>click me</button>
   </form>
<hr></hr>

   <table border={1}>
    <thead>
    <tr>
        <th>name</th>
        <th>email</th>
        <th>phone</th>
        <th>buttons</th>
    </tr>
    </thead>
<tbody>{
    data.map((item,index)=>{

        return <tr key={index}>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.number}</td>

        </tr>
    })
}

    </tbody>
   </table>
   </>
  )
}

export default Crudtable


