
import Skeleton from 'react-loading-skeleton'
import { ClipLoader } from 'react-spinners'
import 'react-loading-skeleton/dist/skeleton.css'

export const Loading = ({type, colour, size}) => {
  if(type === 'skeleton') return <Skeleton count={size} />
  if(type === 'spinner') return <ClipLoader color={color || '#000'} size={size}/>
}