import React from "react";
import { NavLink } from "react-router-dom";

export default function Link({ name, link }) {
	return (
		<NavLink
			to={"/" + link}
			className='font-semibold p-3 my-6 w-full ease-in-out duration-75 bg-green-400 hover:bg-green-500'
			activestyle={{ color: "blue" }}
		>
			{name}
		</NavLink>
	);
}
