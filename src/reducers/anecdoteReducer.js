import { createSlice } from '@reduxjs/toolkit'
import anecdoteService from '../services/anecdotes'

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

const { setAnecdotes, newAnecdote } = anecdoteSlice.actions

export const initialAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}

export const appendAnecdote = (content) => {
  return async (dispatch) => {
    const anecdote = await anecdoteService.create(content)
    dispatch(newAnecdote(anecdote))
  }
}

export const { voteAnecdote } = anecdoteSlice.actions
export default anecdoteSlice.reducer