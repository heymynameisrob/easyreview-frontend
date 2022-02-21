import { useRouter } from 'next/router';
import { doc } from 'firebase/firestore';
import { useDocument } from 'react-firebase-hooks/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';
import {auth, db} from '../../lib/firebase';

import { PrimaryButton } from '../../components/Buttons';
import { Loading } from '../../components/Loading';

const App = () => {  
  const [user, loading, error] = useAuthState(auth);
  const router = useRouter();

  if(loading) return <Loading type="skeleton" />
  if(user) return <Dashboard uid={user.uid} />
  if(error) return <div>Error!</div>

  if(!user) return router.push('/login')
}

const Dashboard = ({uid}) => {
  const docRef = doc(db, 'users/', `${uid}`);
  const [value, loading, error] = useDocument(docRef);  

  if(loading) return <Loading type="skeleton" size={5} />
  if(error) return <div>Error state needs building</div>

  const {name, email, merchantId} = value.data();

  return(
    <div>
      <h1>Hello World</h1>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Store: {merchantId}</p>
      <PrimaryButton onClick={() => auth.signOut()}>Signout</PrimaryButton>
    </div>
  )
}

export default App