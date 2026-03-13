import  {useState,useEffect} from 'react';
function App() {
  // const [ name,setname]=useState("");
  // const [ count , setCount]=useState(0);
  // useEffect(()=>{
  //   console.log("page reloaded successfully");
  // },[])
  
  // useEffect(()=>{
  //   const timer = setInterval(()=>{
  //   console.log("timer")
  // },1000);
  //   return ()=>clearInterval(timer);
    
  // },[])
  // useEffect(()=>{
  //       document.title="Count"+count;
      
  //   },[count]);
  // return (
  //   <div style={{
  //     textAlign:'center',marginTop:'50px'
  //   }}>
  //     <h1>useState Example</h1>
  //     <input
  //       type="text"
  //       value={name}
  //       onChange={(e)=>setname(e.target.value)}
  //       placeholder="Enter your name"
  //       style={{padding:'10px',fontSize:'16px'}}/>
  //     <p style={{padding:'10px',fontSize:'16px'}}></p>
  //     <p style = {{marginTop:'20px',fontSize:'18px'}}>
  //       Hello,{name||'Guest'}!
  //     </p>
  //     <button style={{height:"50px",width:"100px",border:"5px solid black",borderRadius:"50px",fontSize:"20px"}}
  //       onClick={(e)=>setCount(count+1)
  //       }
  //       value = {count}>+1</button>
  //     <button style={{height:"50px",width:"100px",border:"5px solid black",borderRadius:"50px",fontSize:"20px",margin:"10px"}}
  //       onClick={(e)=>setCount(count-1)
  //       }
  //       value = {count}>-1</button>
  //     <p>{count}</p>
      
  //   </div>
    
  // );

  const [form , setform]=useState({
    name:"",
    email:"",
    password:""
  })
  function handleChange(e){
    const {name,value} = e.target;
  
    setform({
    ...form,
    [name]:value
  })}
  return (
    <div>

    <input  name="email" value={form.email} 
    placeholder = "Enter your email" onChange = {handleChange}/>

    <input type="text"value={form.password} name="password" placeholder="Enter your pass"onChange={handleChange} />

    <input type="text" name="name" value = {form.name}placeholder='Enter your name'onChange={handleChange}/>
    <p>`name :{form.name}`</p>
    <p>`email:{form.email}`</p>
    <p>`password:{form.password}`</p>
    </div>
);}

export default App;