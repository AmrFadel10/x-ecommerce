import Categories from "../components/Categories";
import BestDeals from "../components/BestDeals";
import Events from "../components/Events";
import HomeBlogs from "../components/HomeBlogs";
import HomeLayout from "../components/HomeLayout";
import SomeProducts from "../components/SomeProducts";
import { useEffect, useState } from "react";
import Sponsored from "../components/Sponsored";
import { useDispatch, useSelector } from "react-redux";
import { getWishlistApiCall } from "../redux/apiCalls/UserContains.ApiCall";
import { resetwishlist } from "../redux/slices/UserContains.Slice";
import { getProducts } from "../redux/apiCalls/Products.ApiCall";
import { getBlogs } from "../redux/apiCalls/blogs.ApiCall";

export default function Home() {
	const dispatch = useDispatch();
	const { isAddWishlistSuccess } = useSelector((state) => state.userContains);
	const { user, token } = useSelector((state) => state.user);
	useEffect(() => {
		if (isAddWishlistSuccess && user) {
			dispatch(getWishlistApiCall({ token }));
			dispatch(resetwishlist());
		}
	}, [isAddWishlistSuccess, user]);

	useEffect(() => {
		scrollTo(0, 0);
		dispatch(getProducts("limit=5&sort=-sold"));
		dispatch(getBlogs());
	}, []);

	useEffect(() => {
		dispatch(getProducts("limit=5&sort=-sold"));
		if (user) {
			dispatch(getWishlistApiCall({ token }));
		}
	}, [user]);

	return (
		<>
			<HomeLayout />
			<Categories />
			{/* feture collections */}
			<BestDeals where={"Home"} />
			{/* <SomeProducts /> */}
			{/* Special products */}
			<Events />
			{/* blogs */}
			<HomeBlogs />
			<Sponsored />
		</>
	);
}
