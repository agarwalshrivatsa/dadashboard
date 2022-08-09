import React from "react";

export default function Filter({
	countries,
	categories,
	setCountries,
	setCategories,
}) {
	function Checks({ name, cats, setCats }) {
		return (
			<div className=''>
				<span>{name}</span>
				<div className='flex wrap'>
					{Object.keys(cats).map((key) => (
						<div className='' key={key}>
							<button
								className={`${
									cats[key]
										? "bg-green-600 text-white"
										: "bg-inherit   text-green-600"
								} rounded border-2 border-green-600 p-1 m-1 font-semibold
                    `}
								onClick={() =>
									setCats((prev) => ({
										...prev,
										[key]: !prev[key],
									}))
								}
								name={key}
							>
								{key}
							</button>
						</div>
					))}
				</div>
			</div>
		);
	}

	return (
		<div className='my-4'>
			<span className='font-semibold'>Filter</span>
			<Checks
				name={"Question Categories"}
				cats={categories}
				setCats={setCategories}
			/>
			<Checks
				name={"Client Countries"}
				cats={countries}
				setCats={setCountries}
			/>
		</div>
	);
}
