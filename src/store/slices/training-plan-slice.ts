import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TrainingPlan {
  title: string;
  type: string;
  distance: number;
  planDuration: string;
  photoId: string;
  url: string;
}

const initialState: TrainingPlan[] = [
  { title: "3K", type: "3k", distance: 3000, planDuration: '4 weeks', photoId: "1694656500546-27831001916d", url: "3k" },
  { title: "5K", type: "5k", distance: 5000, planDuration: '8 weeks', photoId: "1598011872583-100f9b06de80", url: "5k" },
  { title: "10K", type: "trailRun", distance: 10000, planDuration: '10 weeks', photoId: "1513276193780-64b881470da8", url: "10k" },
  { title: "Half-Marathon", type: "trailRun", distance: 21097, planDuration: '14 weeks', photoId: "1544444927-9057b43e75cc", url: "half-marathon" },
  { title: "Marathon", type: "trailRun", distance: 42195, planDuration: '18 weeks', photoId: "1613937574892-25f441264a09", url: "marathon" },
  { title: "Trail Run", type: "trailRun", distance: 50000, planDuration: '24 weeks', photoId: "1617428436811-055267a14013", url: "trail-run" },
];

const trainingPlansSlice = createSlice({
	name: 'trainingPlans',
	initialState,
	reducers : {
		addPlan: (state, action: PayloadAction<TrainingPlan>) => {
			state.push(action.payload);
		},
		removePlan: (state, action: PayloadAction<string>) => {
			return state.filter((plan) => plan.url !== action.payload);
		}
	}
})

export const {addPlan, removePlan} = trainingPlansSlice.actions;
export default trainingPlansSlice.reducer;
