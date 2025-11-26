import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setAnecdoteFilter } from '../reducers/anecdoteFilter'

const AnecdoteFilter = () => {
  const [filterInput, setFilterInput] = useState('')
  const dispatch = useDispatch()

  const handleChange = (event) => {
    const { value } = event.target
    setFilterInput(value)
    dispatch(setAnecdoteFilter(value))
  }

  return (
    <div style={{ marginBottom: '1rem' }}>
      <label>
      filter
        <input
          type="text"
          value={filterInput}
          onChange={handleChange}
        />
      </label>
    </div>
  )
}
export default AnecdoteFilter