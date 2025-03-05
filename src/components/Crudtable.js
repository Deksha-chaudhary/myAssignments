import React, { useState, useEffect } from 'react'

const Crudtable = () => {
    const[formInfo,setFormInfo]=useState({name:'',email:'',number:''})
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [number, setNumber] = useState('')
    const [data, setData] = useState([])
    const [editIndex, setEditIndex] = useState(null);
    console.log(formInfo);
    

    useEffect(() => {
        fetchData()
    }, []);

    
    

const fetchData=()=>{
    let formdata=sessionStorage.getItem("formdata")
    setData(JSON.parse(formdata))
}

    const saveData = (e) => {
       if(formInfo.name==undefined ||formInfo.name==null ||formInfo.name==''){
        alert("name can't be blank")
        return ;
       }

       if(formInfo.email==undefined ||formInfo.email==null ||formInfo.email==''){
        alert("email can't be blank")
        return ;
       }
       if(formInfo.number==undefined ||formInfo.number==null ||formInfo.number==''){
        alert("number can't be blank")
        return ;
       }
         let alldata=[formInfo]
         
if(data?.length >0){
alldata=[...data,formInfo]
}
         sessionStorage.setItem('formdata',JSON.stringify(alldata))
         fetchData()
         setFormInfo({name:'',email:'',number:''})
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

      const handleChange=(e)=>{
      const val= e.target.value
      const idval= e.target.id
      console.log(e.target.id);
      setFormInfo((prevFormInfo) => ({
        ...prevFormInfo,  // Spread the existing state
        [idval]: val, // Update the specific field
      }));
      

      }

    return (
        <>
            <form>
                Name <input type='name' placeholder='enter name'id='name' value={formInfo.name} onChange={(e) => handleChange(e)} /><br/><br/>
                Email <input type='email' placeholder='enter mail'id='email' value={formInfo.email} onChange={(e) => handleChange(e)} /><br/><br/>
                Number <input type='number' placeholder='enter phone no.'id='number' value={formInfo.number} onChange={(e) => handleChange(e)} /><br/><br/>
                <button onClick={saveData}>save</button>
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
                    data?.map((item, index) => {

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


