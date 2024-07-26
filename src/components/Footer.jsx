import { Link } from "react-router-dom";
import { RiTwitterXLine } from "react-icons/ri";
import { RiFacebookFill } from "react-icons/ri";
import { IoLogoInstagram } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";

export default function Footer() {
	return (
		<footer className="bg-slate-950  text-slate-300 text-[12px] font-normal py-16">
			<div className="container mx-auto flex lg:gap-6 gap-4 justify-between flex-wrap px-2">
				<div className="lg:w-fit w-[45%]">
					<h3 className="text-xl font-bold mb-6">Conatct us</h3>
					<ul className="flex flex-col gap-3">
						<Link to={"#"} className="hover:text-orange-300">
							Mora store
						</Link>
						<div>
							<p>Menouf, Menofia</p>
							<p>Egypt</p>
						</div>
						<p>
							<a href="+201012345678" className="hover:text-orange-300">
								+201012345678
							</a>
						</p>
						<a href="demo@company.com" className="hover:text-orange-300">
							demo@company.com
						</a>
					</ul>
				</div>
				<div className="lg:w-fit w-[45%]">
					<h3 className="text-xl font-bold mb-6">Information</h3>
					<ul className="flex flex-col gap-3">
						<Link to={"/privacy-policy"} className="hover:text-orange-300">
							Privacy policy
						</Link>
						<Link to={"/refund-policy"} className="hover:text-orange-300">
							Refund policy
						</Link>
						<Link to={"/shipping-policy"} className="hover:text-orange-300">
							Shipping policy
						</Link>
						<Link to={"/terms-condition"} className="hover:text-orange-300">
							Terms & Condition
						</Link>
						<Link to={"/blogs"} className="hover:text-orange-300">
							Blogs
						</Link>
					</ul>
				</div>
				<div className="lg:w-fit w-[45%]">
					<h3 className="text-xl font-bold mb-6">Account</h3>
					<ul className="flex flex-col gap-3">
						<Link to={"#"} className="hover:text-orange-300">
							Search
						</Link>
						<Link to={"#"} className="hover:text-orange-300">
							About us
						</Link>
						<Link to={"/faq"} className="hover:text-orange-300">
							FAQ
						</Link>
						<Link to={"#"} className="hover:text-orange-300">
							Contact
						</Link>
						<Link to={"#"} className="hover:text-orange-300">
							Size chart
						</Link>
					</ul>
				</div>
				<div className="lg:w-fit w-[45%]">
					<h3 className="text-xl font-bold mb-6">Quick links</h3>
					<ul className="flex flex-col gap-3">
						<Link to={"#"} className="hover:text-orange-300">
							Accessories
						</Link>
						<Link to={"#"} className="hover:text-orange-300">
							Laptops
						</Link>
						<Link to={"#"} className="hover:text-orange-300">
							Headphones
						</Link>
						<Link to={"#"} className="hover:text-orange-300">
							Smart watches
						</Link>
						<Link to={"#"} className="hover:text-orange-300">
							Tablets
						</Link>
					</ul>
				</div>
			</div>
			<div className="flex mt-4 px-2 container mx-auto gap-2 ">
				<Link
					to={"#"}
					className="rounded-full w-9 h-9 flex items-center justify-center bg-[#435266] hover:bg-black text-slate-300 "
				>
					<RiTwitterXLine className="text-lg" />
				</Link>
				<Link
					to={"#"}
					className="rounded-full w-9 h-9 flex items-center justify-center bg-[#435266] hover:bg-blue-800 text-slate-300 "
				>
					<RiFacebookFill className="text-lg" />
				</Link>
				<Link
					to={"#"}
					className="rounded-full w-9 h-9 flex items-center justify-center bg-[#435266] hover:bg-pink-700 text-slate-300 "
				>
					<IoLogoInstagram className="text-lg" />
				</Link>
				<Link
					to={"#"}
					className="rounded-full w-9 h-9 flex items-center justify-center bg-[#435266] hover:bg-red-700 text-slate-300 "
				>
					<FaYoutube className="text-lg" />
				</Link>
			</div>
		</footer>
	);
}
