import {useDispatch,useSelector} from "react-redux"
import { Increment, Decrement } from './Actions';
import '../App.css'

const LikeCounter = () => {
  const dispatch =useDispatch()
  const count = useSelector((state)=>state.reducer)
  return (
    <div className='main'>
      <h1>{count}</h1>
      <div>
      <button onClick={() => dispatch(Increment())}> <h2>Like</h2> </button>
      <button onClick={() => dispatch(Decrement())}> <h2>Unlike</h2> </button>
      </div>
    </div>
  );
};

export default LikeCounter;