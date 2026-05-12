import { useEffect , useState} from 'react'
import { checkHeading, replaceHeadingStarts } from './helper'

const Answer = ({ ans,totalResult, index}) => {

  const [heading, setHeading] =useState(false);
  const [answer, setAnswer] =useState(ans);
console.log(index);

    useEffect(()=>{
     if(checkHeading(ans)){
      setHeading(true);
      setAnswer(replaceHeadingStarts(ans))
     }
      
    }, [ans])
     
 
  return (
    <>

    {
      index==0 && totalResult>1?<span className='pt-2 text-xl text-white block'>{answer}</span>:
      heading?<span className={ "pt-2 text-lg text-white block"}>{answer}</span>
      :<span className='pl-5 pt-2 text-lg text-white block'>{answer}</span>
    }
    
    </>
  )
}
export default Answer