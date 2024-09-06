import React, { useEffect, useState } from 'react'
import getProtectedData from '../../../services/api';

const Products = () => {
    const [lists,setLists]=useState();
    const [error,setError]=useState("");

    useEffect(()=>{
        const getFetchData = async()=>{
            try {
                const result = await getProtectedData();
                setLists(result.data)
            } catch (err) {
                setError("Error fetching data")
            }
        }
        getFetchData();
    },[])
  return (
    <div>
{
    lists && (
        <>
        {lists.map((list)=>(
            <li key={list.id}>{list.name}</li>
        ))}
        </>
    )
}
    </div>
  )
}

export default Products
