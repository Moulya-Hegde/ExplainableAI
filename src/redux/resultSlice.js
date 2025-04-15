// src/redux/resultSlice.js
import { createSlice } from '@reduxjs/toolkit'

const resultSlice = createSlice({
  name: 'result',
  initialState: {
    result: '',
    justification: '',
    feature_explanation: '',
    feature_contributions: '',
    suggestions: '',
    probability: '',
  },
  reducers: {
    setResultData: (state, action) => {
      const { result, justification, feature_explanation, feature_contributions, suggestions, probability } = action.payload
      state.result = result
      state.justification = justification
      state.suggestions = suggestions
      state.probability = probability
      state.feature_explanation = feature_explanation
      state.feature_contributions = feature_contributions
    },
    clearResultData: (state) => {
      state.result = ''
      state.justification = ''
      state.suggestions = ''
      state.probability = ''
      state.feature_explanation = ''
      state.feature_contributions = ''
    },
  },
})

export const { setResultData, clearResultData } = resultSlice.actions
export default resultSlice.reducer
