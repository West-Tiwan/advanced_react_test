"use client"
import React, {useState} from 'react'
import axios from "axios";

const index = () => {
  const [user, setUser] = useState([]);
  const getdata = async ()=>{
    const res =  await axios.get("https://jsonplaceholder.typicode.com/users")
    setUser(res.data)
    console.log(res.data)
  }
  return (
      <>
          <div className={"flex justify-center items-center m-4"}>
              <button onClick={getdata} className={"border-2 border-blue-300"}>Get Data</button>
          </div>
          <div className={"flex justify-center items-center"}>
          <ol className={"list-decimal"}>{user.map((e, index) => {
              return <li key={index}>{e.username}  ------  <a href={info}>get data</a></li>
          })}</ol>
          </div>
      </>
  )
}
export default index
