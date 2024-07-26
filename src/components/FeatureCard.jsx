import ReactStars from "react-rating-stars-component";
import { IoIosShuffle } from "react-icons/io";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
	AiFillHeart,
	AiOutlineEye,
	AiOutlineHeart,
	AiOutlineShoppingCart,
} from "react-icons/ai";
import FeatureDetailsCard from "./FeatureDetailscard";
import { useDispatch, useSelector } from "react-redux";
import { addWishlistApiCall } from "../redux/apiCalls/UserContains.ApiCall";

export default function FeatureCard({ grid, product, wishlistId }) {
	const dispatch = useDispatch();
	const [open, setOpen] = useState(false);

	const { token } = useSelector((state) => state.user);
	const addToWishList = () => {
		dispatch(addWishlistApiCall({ id: product._id.toString(), token }));
	};
	return (
		<div
			className={` rounded-lg overflow-hidden group shadow-md bg-white py-4 ${
				grid === 1 ? " flex" : ""
			}`}
		>
			<div className=" relative overflow-hidden">
				<Link
					to={`/product/${product?._id}`}
					className="overflow-auto w-full h-64 inline-block"
				>
					<img
						src={product?.images?.[0]?.url}
						alt="music"
						className=" w-full h-full  object-contain "
					/>
				</Link>
				<div className=" transition-all duration-300  rounded-full p-1 absolute top-[2%] right-3">
					{wishlistId?.includes(product?._id) ? (
						<AiFillHeart
							className="transition-all  rounded-full cursor-pointer"
							size={20}
							onClick={() => {
								addToWishList();
							}}
							color="red"
							title="Remove from wishlist"
						/>
					) : (
						<AiOutlineHeart
							className="transition-all  rounded-full cursor-pointer"
							size={20}
							onClick={() => {
								addToWishList();
							}}
							color="#333"
							title="Add to wishlist"
						/>
					)}
				</div>

				<div className="absolute top-[14%] -right-6 flex gap-2 flex-col group-hover:right-3 transition-all  text-lg">
					<div className=" transition-all  rounded-full p-1">
						<IoIosShuffle
							size={20}
							className="cursor-pointer"
							color="#333"
							title="Compare between"
						/>
					</div>
					<div className=" transition-all  rounded-full p-1 flex justify-center items-center">
						<AiOutlineEye
							// onClick={() => navigate("/product" + product?._id.toString())}
							className="cursor-pointer"
							size={20}
							color="#333"
							title="Quick view"
							onClick={() => setOpen(!open)}
						/>
					</div>
					<div className=" transition-all  rounded-full p-1">
						<AiOutlineShoppingCart
							size={20}
							className="cursor-pointer"
							color="#333"
							title="Add to cart"
						/>
					</div>
				</div>
			</div>
			<div className="px-4 py-4">
				<Link
					to={"#"}
					className="text-teal-500 font-medium text-sm hover:text-teal-700"
				>
					{product?.brand}
				</Link>
				{grid ? (
					<h5 className="my-2 text-md text-slate-700 font-medium line-clamp-1">
						{product?.title}
					</h5>
				) : (
					<Link
						to={"/product/" + product?._id}
						className="my-2 text-md text-slate-600 font-medium line-clamp-1 hover:text-slate-900"
					>
						{product?.title}
					</Link>
				)}
				<ReactStars
					count={5}
					size={24}
					edit={false}
					value={parseInt(product?.totalrating)}
					activeColor="#ffd700"
				/>
				{grid && (
					<span
						className="my-4 text-gray-400 text-sm line-clamp-2 "
						dangerouslySetInnerHTML={{ __html: product?.description }}
					></span>
				)}
				<div className="mt-2 flex  justify-between">
					<div className="flex gap-4">
						<div className=" font-semibold">
							{product?.discount_price || product?.price}$
						</div>
						<sup className=" font-semibold text-red-600 text-base line-through">
							{product?.price ? `${product?.price}$` : null}
						</sup>
					</div>
					<div className="text-teal-500 font-semibold">
						{product?.sold} sold
					</div>
				</div>
			</div>
			{open ? (
				<FeatureDetailsCard
					setOpen={setOpen}
					product={product}
					addToWishList={addToWishList}
					wishlistId={wishlistId}
				/>
			) : null}
		</div>
	);
}
