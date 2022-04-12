import React from 'react'



const DataSet = ({data}) => {
  console.log(data)
  return (
    <div className='data-wrapper'>
        <h3 style={{marginRight:"10px",fontStyle:"italic"}}>DATA SET :</h3>
        <div>
            {data && data?.map((data,index)=>(<span key={index}> {data}</span>))}
        </div>
    </div>
  )
}

export default DataSet