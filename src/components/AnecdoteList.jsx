import { useDispatch, useSelector } from 'react-redux'
import { updateVote } from '../reducers/anecdoteReducer'
import AnecdoteFilter from './AnecdoteFilter'
import Notification from './Notification'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteList = () => {
  const dispatch = useDispatch()
  const filterString = useSelector(state => state.filter)
  const anecdotes = useSelector(state => state.anecdotes)
  const notification = useSelector(state => state.notification)

  const visibleAnecdotes = [...anecdotes]
    .filter(a => a.content.toLowerCase().includes(filterString))
    .sort((a, b) => b.votes - a.votes)

  const voteClickHandler = (anecdote) => {
    dispatch(updateVote(anecdote.id))
    dispatch(setNotification(`You voted '${anecdote.content}'`, 3))
  }

  return (
    <>
      <h2>Anecdotes</h2>
      {notification && <Notification />}
      <AnecdoteFilter />
      {visibleAnecdotes.map(anecdote => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => voteClickHandler(anecdote)}>vote</button>
          </div>
        </div>
      ))}
    </>
  )
}
export default AnecdoteList