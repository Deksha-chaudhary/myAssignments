import React, { useEffect, useState } from "react";
import axios from "axios";

const TableApi = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => setData(res.data))
            .catch(err => console.log(err));



    }, [])

    return (
        <>
            <p style={{color:'red',textAlign:'center',fontSize:'20px'}}>print table </p>
            <table border={1}>
           
                    <tr>
                        <th>id</th>
                        <th>title</th>
                        <th>body</th>
                        
                    </tr>
               
                {
                    data.map((user, index) => {
                        return <tr key={index}>
                            <td>{user.id}</td>
                            <td>{user.title}</td>
                            <td>{user.body}</td>

                        </tr>
                    })}
                
            </table>

        </>
    )
}

export default TableApi