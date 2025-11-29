import { useDispatch } from 'react-redux'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import { useEffect } from 'react'
import { setAnecdotes } from './reducers/anecdoteReducer'
import anecdoteService from './services/anecdotes'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const setData = async () => {
      const anecdotes = await anecdoteService.getAll()
      dispatch(setAnecdotes(anecdotes))
    }
    setData()
  }, [dispatch])

  return (
    <div>
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  )
}

export default App
