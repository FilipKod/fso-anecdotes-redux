import { useDispatch } from 'react-redux'
import { appendAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const submitFormHandler = async (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''

    dispatch(appendAnecdote(content))
    dispatch(setNotification(`You created anecdote '${content}'`, 10))
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