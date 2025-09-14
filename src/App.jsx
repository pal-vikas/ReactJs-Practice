import './App.css'
import Navbar from './components/Navbar/Navbar'
import RoutesAll from './components/Routes/RoutesAll'

function App() {
  return (
    <>
       <Navbar/>
       <main className='app_main'>
        <RoutesAll/>
        </main>
    </>
  )
}

export default App
