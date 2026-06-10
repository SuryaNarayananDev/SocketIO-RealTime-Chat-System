import { configureStore } from '@reduxjs/toolkit'
import themeSwtich from '../../features/themeSwtich'
const store = configureStore({
  reducer: {
    theme: themeSwtich,
  },
})

export default store;