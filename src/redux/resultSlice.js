// src/redux/resultSlice.js
import { createSlice } from '@reduxjs/toolkit'

const resultSlice = createSlice({
  name: 'result',
  initialState: {
    result: '',
    justification: '',
    suggestions: '',
    probability: '',
  },
  reducers: {
    setResultData: (state, action) => {
      const { result, justification, suggestions, probability } = action.payload
      state.result = result
      state.justification = justification
      state.suggestions = suggestions
      state.probability = probability
    },
    clearResultData: (state) => {
      state.result = ''
      state.justification = ''
      state.suggestions = ''
      state.probability = ''
    },
  },
})

export const { setResultData, clearResultData } = resultSlice.actions
export default resultSlice.reducer
