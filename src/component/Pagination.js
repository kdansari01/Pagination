import axios from "axios";
import React, { useEffect, useState } from "react";
import Page from "./Page";
import Post from "./Post";

import "./style.css"

const Pagination = () => {
  const [currentPage,setCurrentPage]=useState(1)
  const [loading,setLoading]=useState(false)
  const [postPerPage]=useState(10)
  const [posts,setPost]=useState([])
  const headers = ["Name", "Type", "Company"];
 

  useEffect(()=>{
    const fetchApi = async ()=>{
      setLoading(true)
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
      setPost(res.data)
      setLoading(false)

    }
    fetchApi()
  },[])


  const indexOfLastPage=currentPage * postPerPage
  const indexOffirstPost = indexOfLastPage - postPerPage
  const currentPost = posts.slice(indexOffirstPost,indexOfLastPage)
  
  const paginate=pageNumber=>setCurrentPage(pageNumber)
  // console.log(posts)
  return (
    <div>
      <table>
        <thead>
          <tr>
            {headers.map((ele, index) => (
              <th key={index}>{ele}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <Post posts={currentPost} loading={loading}/>
          </tbody>
      </table>
      <Page postsPerPage={postPerPage} totalPosts={posts.length} paginate={paginate}/>

    
    </div>
  );
};

export default Pagination;
