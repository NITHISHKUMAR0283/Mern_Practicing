import  {useState} from 'react';
function App() {
  const [ name,setname]=useState("");
  const [ count , setCount]=useState(0);

  return (
    <div style={{
      textAlign:'center',marginTop:'50px'
    }}>
      <h1>useState Example</h1>
      <input
        type="text"
        value={name}
        onChange={(e)=>setname(e.target.value)}
        placeholder="Enter your name"
        style={{padding:'10px',fontSize:'16px'}}/>
      <p style={{padding:'10px',fontSize:'16px'}}></p>
      <p style = {{marginTop:'20px',fontSize:'18px'}}>
        Hello,{name||'Guest'}!
      </p>
      <button style={{height:"50px",width:"100px",border:"5px solid black",borderRadius:"50px",fontSize:"20px"}}
        onClick={(e)=>setCount(count+1)
        }
        value = {count}>+1</button>
      <button style={{height:"50px",width:"100px",border:"5px solid black",borderRadius:"50px",fontSize:"20px",margin:"10px"}}
        onClick={(e)=>setCount(count-1)
        }
        value = {count}>-1</button>
      <p>{count}</p>
    </div>
  );
}
export default App;