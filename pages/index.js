import Router, { useRouter } from 'next/router'
import { useAuthState } from 'react-firebase-hooks/auth';
import {auth} from '../lib/firebase';

import { Loading } from '../components/Loading';

const App = () => {  
  const [user, loading, error] = useAuthState(auth);
  const router = useRouter();

  if(loading) return <Loading type="spinner" />
  if(!user || error) return router.push("/login")
  if(user) return router.push('/dashboard')
}

export default App