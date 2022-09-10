import React from 'react'

const Page = ({postsPerPage,totalPosts,paginate}) => {
        const pageNuber=[];


        for(let i=1; i<=Math.ceil(totalPosts / postsPerPage); i++){
            pageNuber.push(i)
        }

  return (
    <div>
      {pageNuber.map((number)=>(
        <button onClick={()=>paginate(number)} key={number}>{number}</button>
      ))}
    </div>
  )
}

export default Page
