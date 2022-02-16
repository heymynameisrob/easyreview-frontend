// Invidual dynamic page for each store, in which we will pass a query id and that gives us the correct review flow for that store
import Link from 'next/Link'
import {useRouter} from 'next/router'
import {db} from '../../../../lib/firebase';
import { doc, getDoc } from 'firebase/firestore';

const App = ({data}) => {
  const router = useRouter();
  const {store, id} = router.query;

  if(data === null) return <div>Woops!</div>

  const {storeData, reviewData} = data;
  const {customer, productName} = reviewData

  return(
    <div>
      <h1>Hey {customer.name}</h1>
      <p>Hope you are enjoying your {productName} you bought from {storeData.name}</p>
      <Link href={`/review/${store}/${id}/start?step=1`}>Start</Link>
    </div>
  )
}

export async function getServerSideProps(context) {
  
  const {store, id} = context.query;
  const storeRef = doc(db, `merchants/`, `${store}`);
  const reviewRef = doc(db, `merchants/${store}/reviews`, `${id}`);

  const reviewDoc = await getDoc(reviewRef);
  const storeDoc = await getDoc(storeRef);

  // If either merchant or review doesn't exist
  if(!storeDoc.exists() || !reviewDoc.exists()) return { props: { data: null } }

  const storeData = storeDoc.data();
  const reviewData = reviewDoc.data();

  return {
    props: {
      data: { storeData, reviewData }
    }
  }
}

  

export default App