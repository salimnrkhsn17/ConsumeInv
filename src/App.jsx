import React from 'react'
import Case from './component/Case'

// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Card from './component/card/card'
// import Dashboard from './pages/Dashboard'
// import User from './pages/User'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'



export default function App() {
  return (
   <Case>
       <div className='bg-gray-900 flex items-center justify-center min-h-screen'>
        <div className="bg-gray-800 border-t border-gray-600 shadow rounded-lg max-w-lg w-full p-6">
            <h4 className='text-white text-2xl'>Hello React</h4>
            <p className='text-lg text-gray-400 leading-relaxed'>A JavaScript library for building user interfaces</p>
        </div>
    </div>
   </Case>
  )
}


// function App() {
//   const [count, setCount] = useState(0)


//   return (
//     <>
// <BrowserRouter>
//     <Routes>
//       <Route path='/' element={<Dashboard />} />
//       <Route path='/user' element={<User />}/>
//     </Routes>
// </BrowserRouter>

//     {/* <Dashboard>
        
//     </Dashboard>

//     <User>

//     </User> */}

 

//     {/* <Card nama="salim" rombel="pplg" rayon="cic 6"></Card>
//     <Card nama="bakhri" rombel="pplg" rayon="cic 7"></Card>
//     <Card nama="heru" rombel="pplg" rayon="cic 9"></Card> */}


//     {/* <Card>
//       <ul>
//         <li>List 1</li>
//       </ul>
//     </Card>

//     <Card>
//       <ul>
//         <li>List 2</li>
//       </ul>
//     </Card> */}

//       {/* <div>
//         <h1>Lim</h1>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p> */}
//     </>
//   )
// }

// export default App
