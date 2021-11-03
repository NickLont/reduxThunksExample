import './App.css'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { initListings } from './actions'

function App () {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initListings())
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

      </header>
    </div>
  )
}

export default App
