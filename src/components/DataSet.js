import React from 'react'



const DataSet = ({data}) => {
  return (
    <div className='data-wrapper'>
        <h3 style={{marginRight:"10px",fontStyle:"italic"}}>DATA SET :</h3>
        <div>
            {data?.map((data,index)=>(<span key={index}> {data}</span>))}
        </div>
    </div>
  )
}

export default DataSet