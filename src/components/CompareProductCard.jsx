import { Link } from "react-router-dom";
import { IoCloseOutline } from "react-icons/io5";

export default function CompareProductCard() {
	return (
		<div className="group flex flex-col relative bg-white rounded-xl">
			<span className="absolute top-3 right-3  hover:text-gray-900 text-gray-600 cursor-pointer rounded-sm">
				<IoCloseOutline className="text-3xl" />
			</span>
			<img
				src="assets/images/15_e3ed94b3-4730-40b7-92f8-eeef933a7f4f.avif"
				alt="img"
				className="w-full object-cover rounded-t-xl"
			/>
			<div className=" p-3">
				<Link
					to={"#"}
					className="font-medium line-clamp-2 mb-4 group-hover:underline pt-2"
				>
					Honor T1 7.0 1 GB RAM 8 GB ROM 7 inch with Wi-Fi+3G Tablet
				</Link>
				<div className="divide-y flex flex-col ">
					<div className="flex justify-between">$100.00</div>
					<div className="flex justify-between py-3">
						<span className="font-semibold text-base ">Brand &nbsp;:</span>
						<span className=" text-sm ">Havells</span>
					</div>
					<div className="flex justify-between py-3">
						<span className="font-semibold text-base ">Type &nbsp;:</span>
						<span className=" text-sm ">Tablet Computers</span>
					</div>
					<div className="flex justify-between py-3">
						<span className="font-semibold text-base ">SKU &nbsp;:</span>
						<span className=" text-sm ">SKU033</span>
					</div>
					<div className="flex justify-between py-3">
						<span className="font-semibold text-base ">
							Availability &nbsp;:
						</span>
						<span className=" text-sm ">In Stock</span>
					</div>
					<div className="flex justify-between py-3">
						<span className="font-semibold text-base ">Color &nbsp;:</span>
						<div className="flex gap-1 ">
							<span className="w-5 h-5 bg-blue-500 rounded-full"></span>
							<span className="w-5 h-5 bg-green-500 rounded-full"></span>
							<span className="w-5 h-5 bg-red-500 rounded-full"></span>
						</div>
					</div>
					<div className="flex justify-between py-3">
						<span className="font-semibold text-base ">Size &nbsp;:</span>
						<p className="flex gap-2  text-sm ">
							<span>S</span> <span>M</span>
							<span>L</span>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
