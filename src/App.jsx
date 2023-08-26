import './App.css'
import useFetch from './useFetch'

function App() {
  return (
    <div className='App'>
      <h1>
        {data?.setup} : {data?.delivery}
      </h1>
    </div>
  )
}

export default App
