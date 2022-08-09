import React, { useEffect } from "react";
import {
	ComposableMap,
	Geographies,
	Geography,
	Marker,
} from "react-simple-maps";

export default function GMap({ faqs }) {
	const cPop = {};
	faqs.forEach((item) => {
		if (item.country in cPop) {
			if (!cPop[item.country].includes(item.name)) {
				cPop[item.country].push(item.name);
			}
		} else {
			cPop[item.country] = [];
			cPop[item.country].push(item.name);
		}
	});

	const countries = {
		"United States": "USA",
		China: "CHN",
		Singapore: "SGP",
		"United Kingdom": "GBR",
	};

	console.log(cPop);

	const coord = {
		"United States": [-100.546, 41.64],
		China: [109.7753, 33.2846],
		Singapore: [103.8198, 1.3521],
		"United Kingdom": [-1.8896484375, 54.1109429427243],
	};

	const geoUrl =
		"https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

	return (
		<div className='border w-full p-8 bg-gray-100 h-screen'>
			<h1 className='text-2xl font-bold'>Our Clients</h1>
			<div className='w-8/12 h-4/6'>
				<ComposableMap projectionConfig={{ scale: 200 }}>
					<Geographies geography={geoUrl}>
						{({ geographies }) =>
							geographies.map((geo) => (
								<Geography key={geo.rsmKey} geography={geo} />
							))
						}
					</Geographies>
					{Object.keys(coord).map((item) => (
						<Marker coordinates={coord[item]}>
							<circle r={6} fill='green' />

							<text
								fill='green'
								font-weight='bold'
								font-size='18'
								dx={-25}
								dy={-25}
							>
								{item + "  " + cPop[countries[item]].length}
							</text>
						</Marker>
					))}
				</ComposableMap>
			</div>
		</div>
	);
}
