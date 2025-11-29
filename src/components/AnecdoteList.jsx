import { useDispatch, useSelector } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import AnecdoteFilter from './AnecdoteFilter'

const AnecdoteList = () => {
  const dispatch = useDispatch()
  const filterString = useSelector(state => state.filter)
  const anecdotes = useSelector(state => state.anecdotes)

  const visibleAnecdotes = [...anecdotes]
    .filter(a => a.content.toLowerCase().includes(filterString))
    .sort((a, b) => b.votes - a.votes)

  return (
    <>
      <h2>Anecdotes</h2>
      <AnecdoteFilter />
      {visibleAnecdotes.map(anecdote => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => dispatch(voteAnecdote(anecdote.id))}>vote</button>
          </div>
        </div>
      ))}
    </>
  )
}
export default AnecdoteList