import React, { useEffect, useState } from "react";
import AnyChart from "anychart-react";

export default function TMap({ faqs }) {
	let countryCatCount = {};
	faqs.forEach((faq) => {
		if (faq.country in countryCatCount) {
			if (faq.category in countryCatCount[faq.country]) {
				countryCatCount[faq.country][faq.category] += 1;
			} else {
				countryCatCount[faq.country][faq.category] = 1;
			}
		} else {
			countryCatCount[faq.country] = {};
			countryCatCount[faq.country][faq.category] = 1;
		}
	});

	function getArrangedData(data, name) {
		let a = [
			{
				name: name,
				children: Object.keys(data).map((item) => {
					return {
						name: item,
						children: Object.keys(data[item]).map((key) => ({
							name: key,
							value: data[item][key],
						})),
					};
				}),
			},
		];
		return a;
	}
	console.log(getArrangedData(countryCatCount));

	let catCountryCount = {};
	faqs.forEach((faq) => {
		if (faq.category in catCountryCount) {
			if (faq.country in catCountryCount[faq.category]) {
				catCountryCount[faq.category][faq.country] += 1;
			} else {
				catCountryCount[faq.category][faq.country] = 1;
			}
		} else {
			catCountryCount[faq.category] = {};
			catCountryCount[faq.category][faq.country] = 1;
		}
	});

	const maps = {
		coca: {
			title: "Country-Category Distribution",
			name: "Coutries",
			data: countryCatCount,
		},
		caco: {
			title: "Category-Country Distribution",
			name: "Categories",
			data: catCountryCount,
		},
	};

	const [map, setMap] = useState("coca");

	const buttonStyles =
		"rounded border-2 border-green-600 p-1 m-1 font-semibold";

	return (
		<div className='border w-full p-8 bg-gray-100 h-screen'>
			<h1 className='text-2xl font-bold'>
				Question Category Distribution
			</h1>
			<div className='my-5'>
				<button
					className={
						buttonStyles +
						` ${
							map === "coca"
								? "bg-green-600 text-white"
								: "bg-inherit   text-green-600"
						}`
					}
					onClick={() => {
						setMap("coca");
					}}
				>
					Country-Category Distribution
				</button>
				<button
					className={
						buttonStyles +
						` ${
							map === "caco"
								? "bg-green-600 text-white"
								: "bg-inherit   text-green-600"
						}`
					}
					onClick={() => {
						setMap("caco");
					}}
				>
					Category-Country Distribution
				</button>
			</div>
			<div className='w-6/12 h-3/6'>
				<AnyChart
					type='treeMap'
					data={getArrangedData(maps[map].data, maps[map].name)}
					title={maps[map].title}
				/>
			</div>
		</div>
	);
}
