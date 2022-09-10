import React from 'react'

const Post = ({posts,loading}) => {

    if(loading){
        return <h2>loading....</h2>
    }

  return (
    <table>
            {posts.map((ele)=>(
                <tr key={ele.id}>{ele.title}</tr>
            ))}
      
    </table>
  )
}

export default Post
