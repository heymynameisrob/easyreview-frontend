import React, {useState} from 'react';
import { useRouter } from 'next/router';
import toast, { Toaster } from 'react-hot-toast';
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import {auth} from '../lib/firebase';

import { TextField } from '../components/Form';
import {Layout} from '../components/Containers'
import {PrimaryButton} from '../components/Buttons';
import { Loading } from '../components/Loading';

const LoginForm = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
    
  if(error) {
    toast.error('Woops')
  } 

  const login = () => {
    signInWithEmailAndPassword(email, password)
  }

  return (
    <>
      <Toaster />
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
          {loading ? <Loading type="spinner" colour={'#fff'} size={16} /> : 'Login'}
        </PrimaryButton>
      </div>
    </>
  )
}

const Login = () => { 
  const router = useRouter();
  const [user, loading, error] = useAuthState(auth);

  if(loading) return <Loading type="spinner" />
  if(user) {
    router.push('/dashboard')
    return
  }

  return(
    <Layout>      
      <div className="block w-full p-8 bg-white mt-16 shadow rounded-md">
        <LoginForm />
      </div>
    </Layout>
  )
}


export default Login