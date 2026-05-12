import { useState } from 'react'
import './App.css'
import { URL } from './constants'
import Answer from './components/Answers'
function App() {
  const [question, setQuestion] = useState('');
  const [result, setResult] = useState(undefined)

  const payload = {
    contents: [
      {
        parts: [
          {
            text: question
          }
        ]
      }
    ]
  }

 const askQuestion = async () => {
  let response = await fetch(URL, {
    method: 'POST',
    // headers: {
    //   'Content-Type': 'application/json'
    // },
    body: JSON.stringify(payload)
  });

 response = await response.json();

  let dataString = response.candidates[0].content.parts[0].text;
  dataString = dataString.split("* ");
  dataString=dataString.map((item)=>item.trim())

  // console.log(dataString );

  setResult(dataString) // better display
}

  return (
    <div className='grid grid-cols-5 h-screen text-center'>

      {/* Sidebar */}
      <div className='col-span-1 bg-zinc-800'></div>

      {/* Main Content */}
      <div className='col-span-4 p-10'>

        <div className='container h-110 flex '>
          <div className='text-zinc-300'>
            <ul>
            {/* {result} */}
            {
              result && result.map((item,index)=>( 
              <li key={index} className='text-left p-1'><Answer ans={item} totalResult={result.length} index={index} />
           </li> ))
            }
           </ul>
          </div>
        </div>

        {/* Input Box */}
        <div className='bg-zinc-800 w-1/2 m-auto text-white border rounded-3xl border-zinc-700 flex  p-1 pr-5  h-16'>
          <input
            type="text"
            value={question}
            onChange={(event) => setQuestion(event.target.value)}
            className='w-full bg-transparent outline-none p-3'
            placeholder='Ask me anything'
          />
          <button onClick={askQuestion}>
            Ask
          </button>
        </div>

      </div>
    </div>
  )
}

export default App