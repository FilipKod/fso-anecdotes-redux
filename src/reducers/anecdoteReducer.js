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
      const updatedAnecdote = action.payload
      return state.map(anecdote =>
        (anecdote.id === updatedAnecdote.id ? updatedAnecdote : anecdote)
      )
    },
    setAnecdotes(state, action) {
      return action.payload
    }
  }
})

const { setAnecdotes, newAnecdote, voteAnecdote } = anecdoteSlice.actions

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

export const updateVote = (id) => {
  return async (dispatch) => {
    const updatedAnecdote = await anecdoteService.vote(id)
    dispatch(voteAnecdote(updatedAnecdote))
  }
}

export default anecdoteSlice.reducer