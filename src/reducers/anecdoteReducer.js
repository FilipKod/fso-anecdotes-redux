import { createSlice } from '@reduxjs/toolkit'

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    newAnecdote(state, action) {
      const anecdote = action.payload
      return [
        ...state,
        anecdote
      ]
    },
    voteAnecdote(state, action) {
      const id = action.payload
      const selectedAnecdote = state.find(a => a.id === id)
      const changedAnecdote = {
        ...selectedAnecdote,
        votes: selectedAnecdote.votes + 1
      }
      return state.map(anecdote => (anecdote.id === id ? changedAnecdote : anecdote))
    },
    setAnecdotes(state, action) {
      return action.payload
    }
  }
})

export const { newAnecdote, voteAnecdote, setAnecdotes } = anecdoteSlice.actions
export default anecdoteSlice.reducer