import './App.css'
import useFetch from './useFetch'

function App() {
  const { data, loading, error, refetch } = useFetch('https://v2.jokeapi.dev/joke/Any')

  if (loading) return <h1>LOADING...</h1>
  if (error) return console.log(error)

  return (
    <div className='App'>
      <h1>{data?.setup}</h1>
      <h2>{data?.delivery}</h2>

      <button onClick={() => refetch()}>Refetch</button>
    </div>
  )
}

export default App
