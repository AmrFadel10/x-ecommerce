import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineDelete } from "react-icons/ai";
import { useEffect, useState } from "react";
import { getMyOrders } from "../redux/apiCalls/Order.ApiCall";
import { updateUser } from "../redux/apiCalls/Auth.ApiCall";
const ProfileContent = ({ setActive, active }) => {
	const { user, token } = useSelector((state) => state.user);
	const [name, setName] = useState(user?.name || "");
	const [lastName, setlastName] = useState(user?.lastname || "");
	const [email, setEmail] = useState(user?.email || "");
	const [mobile, setMobile] = useState(user?.mobile || "");
	const [password, setPassword] = useState("");
	// const [address2, setAddress2] = useState("");
	const dispatch = useDispatch();
	const handleSubmit = (e) => {
		e.preventDefault();
		let data = {};
		if (password.trim() !== "") {
			data.password = password;
		}
		if (name.trim() !== "") {
			data.name = name;
		}
		if (lastName.trim() !== "") {
			data.lastName = lastName;
		}
		if (email.trim() !== "") {
			data.email = email;
		}
		if (mobile.trim() !== "") {
			data.mobile = mobile;
		}
		dispatch(
			updateUser({
				token,
				data,
			})
		);
	};
	return (
		<div className=" w-5/6  p-8 bg-white rounded-xl shadow-md max-w-[1200px]">
			{/* profile */}
			{active === 0 && (
				<div>
					<div className="flex justify-center w-full mt-10">
						<img
							src={`${user?.avatar?.url}`}
							alt=""
							className="w-52 h-52 rounded-full object-cover border-4 border-slate-700 "
						/>
					</div>
					<div>
						<form
							className="mt-16 flex flex-col gap-10"
							onSubmit={handleSubmit}
						>
							<div className="flex justify-center gap-8">
								<input
									type="text"
									name="name"
									id="name"
									className=" focus:ring-1 ring-blue-300 focus:outline-none focus:border-blue-300 shadow-sm border border-gray-300 rounded-md py-2 px-3 text-sm w-full placeholder-gray-400 appearance-none font-medium bg-gray-50"
									placeholder="Fullname..."
									value={name}
									onChange={(e) => setName(e.target.value)}
								/>
								<input
									type="text"
									name="lastname"
									id="lastname"
									className=" focus:ring-1 ring-blue-300 focus:outline-none focus:border-blue-300 shadow-sm border border-gray-300 rounded-md py-2 px-3 text-sm w-full placeholder-gray-400 appearance-none font-medium bg-gray-50"
									placeholder="Last name..."
									value={lastName}
									onChange={(e) => setlastName(e.target.value)}
								/>
							</div>
							<input
								type="text"
								name="email"
								id="email"
								className=" focus:ring-1 ring-blue-300 focus:outline-none focus:border-blue-300 shadow-sm border border-gray-300 rounded-md py-2 px-3 text-sm w-full placeholder-gray-400 appearance-none font-medium bg-gray-50"
								placeholder="Email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
							<div className="flex justify-center gap-8">
								<input
									type="text"
									name="mobile"
									id="mobile"
									className=" focus:ring-1 ring-blue-300 focus:outline-none focus:border-blue-300 shadow-sm border border-gray-300 rounded-md py-2 px-3 text-sm w-full placeholder-gray-400 appearance-none font-medium bg-gray-50"
									placeholder="Phone number..."
									value={mobile}
									onChange={(e) => setMobile(e.target.value)}
								/>
								<input
									type="text"
									name="password"
									id="password"
									className=" focus:ring-1 ring-blue-300 focus:outline-none focus:border-blue-300 shadow-sm border border-gray-300 rounded-md py-2 px-3 text-sm w-full placeholder-gray-400 appearance-none font-medium bg-gray-50"
									placeholder="Password..."
									value={password}
									onChange={(e) => setPassword(e.target.value)}
								/>
							</div>
							<div className="flex justify-center gap-8">
								{/* <input
									type="text"
									name="address2"
									id="address2"
									className=" focus:ring-1 ring-blue-300 focus:outline-none focus:border-blue-300 shadow-sm border border-gray-300 rounded-md py-2 px-3 text-sm w-full placeholder-gray-400 appearance-none font-medium bg-gray-50"
									
									placeholder="Address2..."
									value={address2}
									onChange={(e) => setAddress2(e.target.value)}
								/> */}
							</div>
							<button
								className={
									"bg-slate-700 text-slate-200 py-3 px-8 block w-56 rounded-full hover:bg-orange-300 hover:text-slate-800 font-medium transition-all"
								}
							>
								Update
							</button>
						</form>
					</div>
				</div>
			)}

			{/* Orders */}
			{active === 1 && <AllOrders />}

			{/* All refunds */}
			{active === 2 && <AllRefunds />}

			{/* Track orders */}
			{active === 4 && <TrackOrders />}

			{/* Address */}
			{active === 5 && <Address />}
		</div>
	);
};

const AllOrders = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { token, user } = useSelector((state) => state.user);
	const { orders } = useSelector((state) => state.order);

	useEffect(() => {
		if (user) dispatch(getMyOrders({ token }));
	}, [user]);
	return (
		<div className="w-full">
			<h2 className="text-2xl mb-6  w-fit pb-4 font-semibold font-Poppins">
				Orders
			</h2>
			<div className="overflow-x-auto ">
				<table className="w-full bg-white shadow-md rounded-xl font-medium  border overflow-hidden">
					<thead className="bg-slate-800 text-orange-300 capitalize text-xs  ">
						<tr className="">
							<th className="px-4 py-4 ">OrderId</th>
							<th className="px-4 py-4">Status</th>
							<th className="px-4 py-4  min-w-24">Total price</th>
							<th className="px-4 py-4  min-w-32">After discount </th>
							<th className="px-4 py-4 min-w-96">Products name </th>
							<th className="px-4 py-4">Colors</th>
							<th className="px-4 py-4">Qty</th>
							<th className="px-4 py-4">Price</th>
						</tr>
					</thead>
					<tbody className="text-gray-700 text-sm">
						{orders?.map((item, index) => {
							return (
								<tr
									className="text-center hover:bg-gray-100 transition-all cursor-pointer"
									key={index}
									onClick={() => navigate(`/user/order/${item._id}`)}
								>
									<td className="px-4 py-4 border-b">{item._id}</td>
									<td className="px-4 py-4 border-b">{item.orderStatus}</td>
									<td className="px-4 py-4 border-b">
										{Number(item.totalPrice).toFixed(2)}
									</td>
									<td className="px-4 py-4 border-b">
										${Number(item.totalPriceAfterDiscount).toFixed(2)}
									</td>
									<td className="px-4 py-4 border-b">
										{item.orderItems.map((item, index) => {
											return (
												<div
													key={index}
													className="line-clamp-2 mb-4 flex gap-1"
												>
													<img
														src={item.product.images[0].url}
														alt="img"
														className="w-14 h-14 object-contain border"
													/>
													<span>{item.product.title}</span>
												</div>
											);
										})}
									</td>
									<td className="px-4 py-4 border-b">
										{item.orderItems.map((item, index) => {
											return (
												<div
													key={index}
													className="mb-4 w-4 h-4 rounded-full "
													style={{ backgroundColor: item.color.title }}
												></div>
											);
										})}
									</td>
									<td className="px-4 py-4 border-b">
										{item.orderItems.map((item, index) => {
											return (
												<div key={index} className="mb-4">
													{item.quantity}
												</div>
											);
										})}
									</td>
									<td className="px-4 py-4 border-b">
										{item.orderItems.map((item, index) => {
											return (
												<div key={index} className="mb-4">
													{item.price}
												</div>
											);
										})}
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</div>
	);
};
const AllRefunds = () => {
	const navigate = useNavigate();
	const orders = [
		{
			id: "fdsgsdkgljreklhn43khn4",
			orderItems: [
				{
					name: "Iphone 14 pro max",
				},
			],
			totalPrice: 120,
			orderStatus: "Processing",
		},
	];
	return (
		<div>
			<h2 className="text-2xl mb-12 border-b-[3px] w-fit pb-4 font-semibold font-Poppins">
				Refunds
			</h2>
			<table className="min-w-full bg-white shadow-md rounded-lg font-medium">
				<thead className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal rounded-lg">
					<tr className="border-b">
						<th className="px-4 py-2 ">OrderId</th>
						<th className="px-4 py-2">Status</th>
						<th className="px-4 py-2">ItemsQty</th>
						<th className="px-4 py-2">Total price</th>
					</tr>
				</thead>
				<tbody className="text-gray-700 text-sm">
					{orders?.map((item, index) => {
						return (
							<tr
								className="text-center hover:bg-gray-100 transition-all cursor-pointer"
								key={index}
								onClick={() => navigate(`/user/order/${item.id}`)}
							>
								<td className="px-4 py-2 border-b">{item.id}</td>
								<td className="px-4 py-2 border-b">{item.orderItems.length}</td>
								<td className="px-4 py-2 border-b">${item.totalPrice}</td>
								<td className="px-4 py-2 border-b">{item.orderStatus}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};
const TrackOrders = () => {
	const navigate = useNavigate();
	const orders = [
		{
			id: "fdsgsdkgljreklhn43dgkhn4",
			orderItems: [
				{
					name: "Iphone 14 pro max",
				},
			],
			totalPrice: 120,
			orderStatus: "Processing",
		},
	];
	return (
		<div>
			<h2 className="text-2xl mb-12 border-b-[3px] w-fit pb-4 font-semibold font-Poppins">
				Refunds
			</h2>
			<table className="min-w-full bg-white shadow rounded-lg font-medium">
				<thead className="bg-gray-200 text-gray-700 uppercase text-sm leading-normal rounded-lg">
					<tr className="border-b">
						<th className="px-4 py-2 flex-[1.4] ">OrderId</th>
						<th className="px-4 py-2 flex-[0.7]">Total price</th>
						<th className="px-4 py-2 flex-[0.7]">ItemsQty</th>
						<th className="px-4 py-2 flex-[1]">Status</th>
					</tr>
				</thead>
				<tbody className="text-gray-700 text-sm">
					{orders?.map((item, index) => {
						return (
							<tr
								className="text-center hover:bg-gray-100 transition-all cursor-pointer"
								key={index}
								onClick={() => navigate(`/user/order/${item.id}`)}
							>
								<td className="px-4 py-2 border-b flex-[1.4]">{item.id}</td>
								<td className="px-4 py-2 border-b flex-[0.7]">
									{item.orderItems.length}
								</td>
								<td className="px-4 py-2 border-b flex-[0.7]">
									${item.totalPrice}
								</td>
								<td className="px-4 py-2 border-b flex-[1]">
									{item.orderStatus}
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};

const Address = () => {
	return (
		<div className="w-full px-5">
			{/* Title section */}
			<div className="flex w-full items-center justify-between">
				<h1>My Addresses</h1>
				<div className="w-[150px] bg-black h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer">
					{" "}
					<span className="text-[#fff]">Add New</span>
				</div>
			</div>

			<br />

			{/* Address information section */}
			<div className="w-full  h-[70px] rounded-[4px] flex items-center px-3 shadow-md bg-gray-50 justify-between pr-10">
				<div className="flex items-center">
					<h5 className="text-sm">Default</h5>
				</div>

				<div className="pl-8 flex items-center">
					<h6>494 Erdman Pasaage, New Zoietown, Paraguay</h6>
				</div>

				<div className="min-w-[10%] flex items-center justify-between pl-8">
					<AiOutlineDelete
						size={25}
						className="cursor-pointer text-red-400 hover:text-red-500"
					/>
				</div>
			</div>
		</div>
	);
};

export default ProfileContent;
