import { createAsyncThunk } from "@reduxjs/toolkit";
import request from "../../utils/baseUrl";

export const addWishlistApiCall = createAsyncThunk(
	"user-contains/add-wishlist",
	async (arg, thunkAPI) => {
		try {
			const { data } = await request.put(
				"/user/wishlist",
				{ prodId: arg.id },
				{
					headers: {
						Authorization: "bearer " + arg.token,
					},
				}
			);
			return data;
		} catch (error) {
			thunkAPI.rejectWithValue(error.response.data.message);
		}
	}
);

export const getWishlistApiCall = createAsyncThunk(
	"user-contains/get-wishlist",
	async (arg, thunkAPI) => {
		try {
			const { data } = await request.get("/user/wishlist", {
				headers: {
					Authorization: "bearer " + arg.token,
				},
			});
			return data;
		} catch (error) {
			thunkAPI.rejectWithValue(error.response.data.message);
		}
	}
);
