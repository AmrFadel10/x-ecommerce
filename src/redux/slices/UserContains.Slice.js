import { createSlice } from "@reduxjs/toolkit";
import {
	addWishlistApiCall,
	getWishlistApiCall,
} from "../apiCalls/UserContains.ApiCall";
import toast from "react-hot-toast";

const initialState = {
	addToWishlist: null,
	isLoading: false,
	isAddWishlistSuccess: false,
	isError: false,
	message: "",
	wishlist: null,
	isSuccess: false,
};

const userContainsSlice = createSlice({
	name: "user-contains",
	initialState,
	reducers: {
		resetwishlist: (state) => {
			state.isLoading = false;
			state.isSuccess = false;
			state.isAddWishlistSuccess = false;
			state.message = "";
			state.isError = false;
		},
	},
	extraReducers(builder) {
		builder
			.addCase(addWishlistApiCall.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(addWishlistApiCall.fulfilled, (state, action) => {
				state.isAddWishlistSuccess = true;
				state.message = "Product added to wishlist";
				state.isLoading = false;
				state.addToWishlist = action.payload;
			})
			.addCase(addWishlistApiCall.rejected, (state, action) => {
				state.isError = true;
				state.message = action.payload;
				state.isLoading = false;
				toast.error(state.message);
			})
			.addCase(getWishlistApiCall.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getWishlistApiCall.fulfilled, (state, action) => {
				state.isSuccess = true;
				state.isLoading = false;
				state.wishlist = action.payload;
			})
			.addCase(getWishlistApiCall.rejected, (state, action) => {
				state.isError = true;
				state.message = action.payload;
				state.isLoading = false;
			});
	},
});
export const { resetwishlist } = userContainsSlice.actions;
export default userContainsSlice.reducer;
