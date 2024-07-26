import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import ShopByCategories from "./ShopByCategories";
import { brandsApiCall } from "../redux/apiCalls/brands.ApiCall";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { colorsApiCall } from "../redux/apiCalls/colors.ApiCall";

export default function SideBarStore({ searchParams, setSearchParams }) {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(brandsApiCall());
		dispatch(colorsApiCall());
	}, []);
	const { brands } = useSelector((state) => state.brand);
	const { colors } = useSelector((state) => state.color);
	return (
		<div className="flex-1 flex flex-col gap-4">
			<ShopByCategories
				searchParams={searchParams}
				setSearchParams={setSearchParams}
			/>
			<div className="shadow rounded-xl bg-white p-4 w-full ">
				<div className=" bg-white p-4 w-full border-b border-gray-400 mb-6">
					<h4 className="mb-4 font-semibold">Brands</h4>
					<ul className="flex  gap-5 mb-4 flex-wrap">
						{brands?.map((item, index) => {
							return (
								<li
									className="p-2 bg-gray-200 rounded-md text-gray-500 hover:text-gray-800 capitalize text-sm cursor-pointer"
									onClick={() =>
										setSearchParams({
											brand: item.title,
											limit: 20,
										})
									}
									key={index}
								>
									{item.title}
								</li>
							);
						})}
					</ul>
				</div>
				<div>
					{/* <h5 className="font-medium mb-4">Availability</h5>
					<ul className="flex flex-col gap-3 mb-4">
						<li className="flex items-center gap-3 text-gray-500 ">
							<input
								type="checkbox"
								name="instock"
								id="instock"
								className="w-5 h-5"
							/>
							<label
								htmlFor="instock"
								className="text-base hover:text-gray-600 cursor-pointer"
							>
								in stock (21)
							</label>
						</li>
						<li className="flex items-center gap-3 text-gray-500 ">
							<input
								type="checkbox"
								name="outofstock"
								id="outofstock"
								className="w-5 h-5"
							/>
							<label
								htmlFor="outofstock"
								className="text-base hover:text-gray-600 cursor-pointer"
							>
								Out of stock (1)
							</label>
						</li>
					</ul> */}
					<div className="w-full my-8">
						<h5 className="font-medium mb-4">Price</h5>
						<div className="flex gap-2 ">
							<div className="flex gap-2 items-center">
								<span className="text-gray-400">$</span>
								<input
									type="number"
									className="bg-gray-200 focus:outline-none p-3 rounded-lg  max-w-28"
									placeholder="From"
								/>
							</div>
							<div className="flex gap-2 items-center">
								<span className="text-gray-400">$</span>
								<input
									type="number"
									className="bg-gray-200 focus:outline-none p-3 rounded-lg  max-w-28"
									placeholder="To"
								/>
							</div>
						</div>
					</div>
					<div className="w-full my-8">
						<h5 className="font-medium mb-4">Colors:</h5>
						<ul className="flex gap-2 flex-wrap p-2 ">
							{colors?.map((item, index) => {
								return (
									<li
										key={index}
										className={`w-7 h-7  rounded-full cursor-pointer opacity-90  hover:opacity-100`}
										style={{ backgroundColor: `${item.title}` }}
										onClick={() =>
											setSearchParams({
												color: item.title,
												limit: 20,
											})
										}
									></li>
								);
							})}
						</ul>
					</div>
					{/* <div className="w-full my-8">
						<h5 className="font-medium mb-4">Size</h5>
						<ul className="flex flex-col gap-3 ">
							<li className="flex items-center gap-3 text-gray-500 ">
								<input
									type="checkbox"
									name="small"
									id="small"
									className="w-5 h-5"
								/>
								<label
									htmlFor="small"
									className="text-base hover:text-gray-600 cursor-pointer"
								>
									S (10)
								</label>
							</li>
							<li className="flex items-center gap-3 text-gray-500 ">
								<input
									type="checkbox"
									name="medium"
									id="medium"
									className="w-5 h-5"
								/>
								<label
									htmlFor="medium"
									className="text-base hover:text-gray-600 cursor-pointer"
								>
									M (13)
								</label>
							</li>
							<li className="flex items-center gap-3 text-gray-500 ">
								<input
									type="checkbox"
									name="large"
									id="large"
									className="w-5 h-5"
								/>
								<label
									htmlFor="large"
									className="text-base hover:text-gray-600 cursor-pointer"
								>
									L (10)
								</label>
							</li>
							<li className="flex items-center gap-3 text-gray-500 ">
								<input
									type="checkbox"
									name="xlarge"
									id="xlarge"
									className="w-5 h-5"
								/>
								<label
									htmlFor="xlarge"
									className="text-base hover:text-gray-600 cursor-pointer"
								>
									XL (5)
								</label>
							</li>
							<li className="flex items-center gap-3 text-gray-500 ">
								<input
									type="checkbox"
									name="xxlarge"
									id="xxlarge"
									className="w-5 h-5"
								/>
								<label
									htmlFor="xxlarge"
									className="text-base hover:text-gray-600 cursor-pointer"
								>
									XXL (5)
								</label>
							</li>
						</ul>
					</div> */}
				</div>
			</div>
			<div className="rounded-xl bg-white p-4 w-full">
				<h4 className="mb-8 text-lg font-semibold">Product Tag</h4>
				<ul className="flex  gap-5 mb-4 flex-wrap">
					<Link className="p-2 bg-gray-200 rounded-md text-gray-500 hover:text-gray-800 capitalize text-sm">
						headphones
					</Link>
					<Link className="p-2 bg-gray-200 rounded-md text-gray-500 hover:text-gray-800 capitalize text-sm">
						laptop
					</Link>
					<Link className="p-2 bg-gray-200 rounded-md text-gray-500 hover:text-gray-800 capitalize text-sm">
						mobile
					</Link>
					<Link className="p-2 bg-gray-200 rounded-md text-gray-500 hover:text-gray-800 capitalize text-sm">
						oppo
					</Link>
					<Link className="p-2 bg-gray-200 rounded-md text-gray-500 hover:text-gray-800 capitalize text-sm">
						speaker
					</Link>
					<Link className="p-2 bg-gray-200 rounded-md text-gray-500 hover:text-gray-800 capitalize text-sm">
						tablet
					</Link>
					<Link className="p-2 bg-gray-200 rounded-md text-gray-500 hover:text-gray-800 capitalize text-sm">
						vivo
					</Link>
					<Link className="p-2 bg-gray-200 rounded-md text-gray-500 hover:text-gray-800 capitalize text-sm">
						wire
					</Link>
				</ul>
			</div>
			<div className="rounded-xl bg-white p-4 w-full">
				<h4 className="mb-8 text-lg font-semibold">Random Products</h4>
				<ul className="flex  gap-5 mb-4 flex-wrap divide-y">
					<li className="flex items-center p-4 ">
						<Link to={"#"}>
							<img src="assets/images/24_150x.avif" alt="img" />
						</Link>
						<div>
							<p className="font-semibold line-clamp-2">
								Kids headphones bulk 10 pack multi colored for students
							</p>
							<ReactStars count={5} size={24} value={3} activeColor="#ffd700" />
							<span className="font-semibold">$100.00</span>
						</div>
					</li>
					<li className="flex items-center p-4 ">
						<Link to={"#"}>
							<img src="assets/images/22_150x.avif" alt="img" />
						</Link>
						<div>
							<p className="font-semibold line-clamp-2">
								APPLE Watch Series 2 – 42 mm Stainless Steel Case
							</p>
							<ReactStars count={5} size={24} value={3} activeColor="#ffd700" />
							<span className="font-semibold">$100.00</span>
						</div>
					</li>
				</ul>
			</div>
		</div>
	);
}
