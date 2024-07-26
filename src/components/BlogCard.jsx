import { Link } from "react-router-dom";

export default function BlogCard({ item }) {
	return (
		<div
			to={"#"}
			className=" relative rounded-xl overflow-hidden group shadow-md bg-white"
		>
			<div className="">
				<img
					src={item?.image?.url}
					alt="music"
					className="object-cover group-hover:scale-105 w-full transition-all h-48"
				/>
			</div>
			<div className="px-4 py-4">
				<p className="text-gray-600 font-light text-sm ">
					{new Date(item?.createdAt).toDateString()}{" "}
					{new Date(item?.createdAt).toTimeString().split(" ")[0]}
				</p>
				<h5 className="my-3  text-xl text-slate-700 font-medium line-clamp-1">
					{item?.title}
				</h5>
				<p
					className="line-clamp-2 text-gray-500 font-light text-sm"
					dangerouslySetInnerHTML={{ __html: item?.description }}
				></p>
				<Link
					to={"/blog/" + item?._id}
					className="bg-slate-800 text-slate-200 px-6 py-2 rounded-full my-5 block w-fit hover:bg-orange-300 hover:text-slate-800"
				>
					READ MORE
				</Link>
			</div>
		</div>
	);
}
