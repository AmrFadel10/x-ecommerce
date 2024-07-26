import { useState } from "react";
import ProfileSideBar from "../components/ProfileSideBar";
import ProfileContent from "../components/ProfileContent";

const Profile = () => {
	const [active, setActive] = useState(0);
	return (
		<main className="flex min-h-[calc(100vh-100px)] my-10 gap-4 w-full ">
			<ProfileSideBar setActive={setActive} active={active} />
			<ProfileContent setActive={setActive} active={active} />
		</main>
	);
};

export default Profile;
