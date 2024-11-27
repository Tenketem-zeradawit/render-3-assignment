

 import react, {useState} from 'react';
 function MyComponent() {
  const[name, setName]=useState();


   function handleNameChange(event) {
    setName(event.target.value)
    console.log(event.target.value)
    
   }

return (
<>
<input value={name} onChange={handleNameChange} />
<p>name: {name}</p>
</>

)


 }
export default MyComponent;
