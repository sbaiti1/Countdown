import { useState , useEffect } from 'react'
import './App.css'


function App() {
  const [count, setCount] = useState({hour:1 , min:10 , sec:5 , isrunning:false , end : false})
  
  function increase(){
    setCount(function(prev){
      let new_count = {...prev , end : false}
      new_count = {
        ...prev , 
        sec : prev.sec + 1 
        
      }
      if(prev.sec >=59){
        new_count = {
          ...prev , 
          min : prev.min + 1 ,
          sec : 0 


        }
      }
      if(prev.min>=59){
        new_count = {
          ...new_count , 
          hour : prev.hour + 1 ,
          min : 0
        }
      }
      

      return new_count
    }
      
      
      )
  }

  function decrease(){
    setCount(function(prev){
      let new_count
      if(prev.sec ==0 && prev.hour ==0 && prev.min == 0){
        new_count = {...prev}
      }

      else{
          
        // bsh n9es une sec
          // if(prev.sec >0 && prev.min >=0 && prev.hour >=0){
            new_count = {
              ...prev , 
              sec : prev.sec - 1 
              
            }
          
         
        
        //bsh n9es une min
        if(prev.sec ==0 && prev.min >=0  ){
          new_count = {
            ...prev , 
            min : prev.min - 1 ,
            sec : 59 
  
  
          }
        }
        //bsh n9es une heure
        if(prev.min == 0 && prev.sec ==0 && prev.hour >0 ){
          new_count = {
            ...new_count , 
            hour : prev.hour - 1 ,
            min : 59
          }
        }
      }

      return new_count
    }
    )
    
  }

  //end of fucntion (-)
  function timer(){
    //change value of btn
    setCount(prev =>(
      {
        ...prev , 
        isrunning : !prev.isrunning
      }
    ))

    if(!count.isrunning && count.sec>=0 ){
        let interval 
        
          interval = setInterval(decrease , 1000)
      }
      else{
        console.log(count.sec);
      }
      

      // }
      
    }

    
  
 
  return (
    <div className="App">
      <h1>counter</h1>
      <div> 
          <span>{`heure : ${count.hour}`}</span>
          <span>{` minutes : ${count.min}`}</span>
            <span>{` secondes : ${count.sec}`}</span>
       </div>
       <br /> <br />
      {
        !count.isrunning && 

       <>
         <button onClick={increase}>+</button>
      <button onClick={timer}>start</button>
      <button onClick={decrease}>-</button>
       </>
      }
    </div>
  )
}

export default App
