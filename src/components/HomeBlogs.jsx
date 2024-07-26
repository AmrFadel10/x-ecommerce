import { useSelector } from "react-redux";
import BlogCard from "./BlogCard";

const HomeBlogs = () => {
	const { blogs } = useSelector((state) => state.blogs);

	return (
		<div className="my-14">
			<h3 className="text-2xl font-semibold ">Our Latest News</h3>
			<div className="grid md:grid-cols-3 grid-cols-1 sm-grid-cols-2  lg:grid-cols-4 gap-8 my-8">
				{blogs?.slice(0, 4).map((item) => {
					return <BlogCard item={item} key={item._id} />;
				})}
			</div>
		</div>
	);
};

export default HomeBlogs;
