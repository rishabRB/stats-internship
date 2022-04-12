import React from 'react'

const ShowData = ({mean,median,StdDev,mode}) => {
  return (
<div className='data-stats'>
             <div className='data-stat'>
               <h2>Mean</h2>
               <span>{mean}</span>
             </div>
             <div className='data-stat'>
               <h2>Median</h2>
               <span>{median}</span>
             </div>
             <div className='data-stat'>
               <h2>Std Dev</h2>
               <span>{StdDev}</span>
             </div>
             <div className='data-stat'>
               <h2>Mode</h2>
               {mode.map((m,index)=>(<span key={index}>{m}</span>))}
             </div>
        </div>
  )
}

export default ShowData