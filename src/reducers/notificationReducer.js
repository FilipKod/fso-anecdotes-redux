import { createSlice } from '@reduxjs/toolkit'

const notificationSlice = createSlice({
  name: 'notification',
  initialState: null,
  reducers: {
    set(state, action) {
      return action.payload
    }
  }
})

const { set } = notificationSlice.actions

export const setNotification = (text, seconds) => {
  return (dispatch) => {
    dispatch(set(text))
    setTimeout(() => {
      dispatch(set(null))
    }, seconds * 1000)
  }
}

export default notificationSlice.reducer