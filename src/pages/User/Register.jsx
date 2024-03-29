import React,{useState} from 'react';
import './user.css';
import { useNavigate } from 'react-router-dom';

import { TextField, Button } from '@mui/material';

import registerApi from '../../api/user/registerApi';

export default function Register() {
  const [name, setName] =useState('');
  const [email, setEmail] =useState('');
  const [password,setPassword] = useState('');
  const [confirm, setConfirm] = useState('');

  const navigate = useNavigate();
  const redirectToLogin = () => {
    navigate("/login");
  }
 
  const submitHandler = async () => {
    console.log("hii3")
    if(password != confirm) {
      alert("Password and confirm password must be same");
      return;
    }
    console.log("hii4")
    let res = await registerApi({
      name: name,
      email: email,
      password: password
    });
    if(res) navigate("/login");
  }
  return (
     <div className="register-container user">
        <div className="form-container">
          <h1>SignUp</h1>
          <hr />
          <div className="form">
            <div className="text-field-container">
              <TextField onChange={(e)=>setName(e.target.value)} value={name} className='text-field' label='Name' variant='filled' />
              <TextField onChange={(e)=>setEmail(e.target.value)} value={email} className='text-field' label='Email' variant='filled' />
              <TextField onChange={(e)=>setPassword(e.target.value)} value={password} type="password" className='text-field' label='Password' variant='filled' />
              <TextField onChange={(e)=>setConfirm(e.target.value)} value={confirm} type="password" className='text-field' label='Confirm Password' variant='filled' />
            </div>
            <div className="btn-container">
              <Button className='btn' onClick={submitHandler} variant='standard'>Submmit</Button>
              <Button className='btn' onClick={redirectToLogin} variant='standard'>Login</Button>
            </div>
          </div>
        </div>
     </div>
  );
}
