import  React,{useState} from 'react';
function App() {
  const [ name,setname]=useState("");

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

    </div>
  );
}
export default App;