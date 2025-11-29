import { configureStore } from '@reduxjs/toolkit'
import anecdotesReducer from './reducers/anecdoteReducer'
import filterReducer from './reducers/anecdoteFilter'

const store = configureStore({
  reducer: {
    anecdotes: anecdotesReducer,
    filter: filterReducer
  }
})

export default store