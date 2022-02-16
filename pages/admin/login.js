import React, {useState} from 'react';
import { ClipLoader } from 'react-spinners';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { TextField } from '../../components/Form';
import {auth} from '../../lib/firebase';
import {Layout} from '../../components/Containers'
import {PrimaryButton} from '../../components/Buttons'

const LoginForm = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  const login = () => {
    signInWithEmailAndPassword(email, password);    
  };

  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }
  return (
    <div className="block space-y-4">
      <TextField 
      name="Email" 
      type="email" 
      onChange={(e) => setEmail(e.target.value)} 
      placeholder={'Email'}
      value={email} />
      <TextField 
      name="Password" 
      type="password" 
      onChange={(e) => setPassword(e.target.value)} 
      placeholder={'Password'}
      value={password} />
      <PrimaryButton onClick={() => login()}>
        {loading ? <ClipLoader color={'#fff'} size={16} /> : 'Login'}
      </PrimaryButton>
    </div>
   
  )
}

const Login = () => (
  <Layout>
    <div className="block w-full p-8 bg-white mt-16 shadow rounded-md">
      <LoginForm />
    </div>
  </Layout>
)

export default Login