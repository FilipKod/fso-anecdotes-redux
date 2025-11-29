import { useDispatch } from 'react-redux'
import { newAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'
import anecdoteService from '../services/anecdotes'

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const submitFormHandler = async (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''

    const anecdote = await anecdoteService.create(content)
    dispatch(newAnecdote(anecdote))
    dispatch(setNotification(`You created anecdote '${content}'`))
    setTimeout(() => {
      dispatch(setNotification(null))
    }, 5000)
  }

  return (
    <>
      <h2>create new</h2>
      <form onSubmit={submitFormHandler}>
        <div>
          <input type='text' name='anecdote' />
        </div>
        <button type='submit'>create</button>
      </form>
    </>
  )
}
export default AnecdoteForm