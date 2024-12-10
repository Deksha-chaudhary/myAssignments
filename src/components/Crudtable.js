import React, { useState, useEffect } from 'react'

const Crudtable = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [number, setNumber] = useState('')
    const [data, setData] = useState([])
    const [editIndex, setEditIndex] = useState(null);

    useEffect(() => {
        const savedData = localStorage.getItem('data');
        if (savedData) {
            setData(JSON.parse(savedData));
        }
    }, []);

    
    useEffect(() => {
        if (data.length > 0) {
            localStorage.setItem('data', JSON.stringify(data));
        }
    }, [data]);


    const saveData = (e) => {
       
        if (name && email && number) {
          if (editIndex !== null) {
           
            const updatedData = [...data];
            updatedData[editIndex] = { name, email, number };
            setData(updatedData);
            setEditIndex(null); 
          } else {
           
            setData([...data, { name, email, number }]);
          }
         
          setName('');
          setEmail('');
          setNumber('');
        } else {
          alert('Please fill all fields!');
        }
      };

    const editData = (index) => {
        const item = data[index];
        setName(item.name);
        setEmail(item.email);
        setNumber(item.number);
        setEditIndex(index);

    }
    const deleteData = (index) => {
        const updatedData = [...data];  
        updatedData.splice(index, 1);   
        setData(updatedData);           
      };
    return (
        <>
            <form>
                Name <input type='name' placeholder='enter name' value={name} onChange={(e) => setName(e.target.value)} />
                Email <input type='email' placeholder='enter mail' value={email} onChange={(e) => setEmail(e.target.value)} />
                Number <input type='number' placeholder='enter phone no.' value={number} onChange={(e) => setNumber(e.target.value)} />
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
                    data.map((item, index) => {

                        return <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.number}</td>
                            <td><button onClick={()=>deleteData(index)}>delete</button>
                                <button onClick={()=>editData(index)}> edit</button></td>
                        </tr>
                    })
                }

                </tbody>
            </table>
        </>
    )
}

export default Crudtable


