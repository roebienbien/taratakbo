import { configureStore } from "@reduxjs/toolkit";
import trainingPlansReducer from './slices/training-plan-slice.ts'

export const store = configureStore({
	reducer: {
		trainingPlans: trainingPlansReducer,
	}
})

export default store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
