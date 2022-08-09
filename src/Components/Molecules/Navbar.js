import React from "react";
import Link from "../Atoms/Link";

export default function Navbar() {
	return (
		<div className='flex flex-col justify-center text-left items-center bg-green-400 h-screen shadow-lg shadow-black w-48 '>
			<span className='absolute text-xl top-10 font-semibold'>
				Dashboard
			</span>
			<Link name='Geographical Map' link='gMap' />
			<Link name='Category Distribution' link='tMap' />
			<Link name='Question List' link='qList' />
		</div>
	);
}
