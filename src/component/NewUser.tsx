
import React, { ChangeEvent, useState ,FormEvent} from 'react';

const NewUser = () => {
  const[name,setName]=useState('');
  const[email,setEmail]=useState('');

const handleNAme=(event:ChangeEvent<HTMLInputElement>)=>{
setName(event.target.value);
}
const handleEmail=(e:ChangeEvent<HTMLInputElement>)=>{
  setEmail(e.target.value)
}


const handleSubmit=(event:FormEvent<HTMLFormElement>)=>{
event.preventDefault();

const newUser={
  name:name,
  email:email,
}
console.log(newUser)

setName('');
setEmail('');
}

  return (
    <div>
      <h2>Create User</h2>
      <form  onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">
            Name:
            <input type="name" value={name} required placeholder='add your name' onChange={handleNAme}/>
          </label>
        </div>

        <div>
          <label htmlFor="email">
            Email:
            <input type="email" value={email} id='email' onChange={handleEmail} placeholder='add ypur email' required/>
          </label>
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default NewUser;