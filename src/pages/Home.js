import React,{useEffect, useState} from 'react'
import ShowData from '../components/ShowData'
import {dataset} from '../dataset/data'
import DataSet from '../components/DataSet'

const Home = () => {
  const [randomNumber,setRandomNumber]=useState(1)
  const [data,setData]=useState([])
  const [mean,setMean]=useState(0)
  const [median,setMedian]=useState(0)
  const [StdDev,setStdDev]=useState(0)
  const [mode,setMode]=useState([])
  const [inputvalue,setInputValue]=useState(0)


  useEffect(()=>{
    calculateMean()
    calculateMedian()
    calculateDeviation()
    calculateMode()
    setData(dataset[randomNumber].data)
    },[data,randomNumber])


// Mean

  const calculateMean=()=>{
    let m=data.reduce((sum,a)=>sum+a,0)
    setMean(Math.floor(m/data.length).toFixed(5))
  }


//calculatin median

  const calculateMedian=()=>{
    if(data.length % 2 ===0){
      let l=(data.length/2)-1
      let m=(data[l]) + (data[l+1])
      setMedian(Math.floor(m/2).toFixed(5))
    
    }else{
      setMedian(Math.floor(data[Math.floor(data.length/2)]).toFixed(5))
    }
  }

  //calculating deviation
  const calculateDeviation=()=>{
    let sum=data.reduce((m,a)=>m+a,0)
    let sumOfSquare=(sum-mean)
    let len=data.length
    let deviation=(sumOfSquare*sumOfSquare)/len-1
    setStdDev(parseFloat(Math.sqrt(deviation)).toFixed(5))
  }


  //calculationg mode
  const calculateMode=()=>{
     var mo=[]
     for(let i =0;i<data.length;i++){
       for(let j = i+1;j<data.length;j++){
         if(data[i]===data[j]){
           if(mo.indexOf(data[i]) === -1 ){
             mo.push(data[i])
           }
         }
       }
     }
     if(mo.length){
       setMode(mo)
     }
     else{
       setMode(data)
     }
  }


  const handleSubmit=(e)=>{
      e.preventDefault()
      setData([...data,inputvalue])
      setInputValue("")
  }
 
  const handleClick=()=>{
     if(randomNumber<8){
       setRandomNumber(randomNumber+1)
       console.log(randomNumber)
     }
     else if(randomNumber>=7){
       setRandomNumber(0)
       console.log(randomNumber)
     }
  }
 
  console.log(data)
  return (
    <div className='stat'>
      <div className='stat-wrapper'>
        <div className='show-data'>
        <DataSet data={data}  />
        <button className='change-btn' onClick={handleClick}>Change</button>
        </div>
        <ShowData 
        mean={mean}
        median={median}
        StdDev={StdDev}
        mode={mode}
        
        />
        <div className='update-dataset'>
           <form onSubmit={handleSubmit}>
               <input
               type="number"
               value={inputvalue}
               placeholder="0"
               onChange={(e)=>setInputValue(parseInt(e.target.value))}
               />
               <input
               type="submit"
               />
           </form>
       </div>
       </div>
    </div>
  )
}

export default Home