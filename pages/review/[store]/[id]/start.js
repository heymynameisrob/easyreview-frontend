import { useRouter } from 'next/router'

const FLOW = [{
  id: '123',
  component:'',
  fields: {
    // Field config goes here
  }
}]

const Page = () => {
  const router = useRouter();
  const {step} = router.query;

  return (
    <div>Step:{step}</div>
  )
}

export default Page