import React, { useState, useEffect } from "react";
import Filter from "../Molecules/Filter";
import { countries, categories } from "../../configs";

export default function QList({ faqss }) {
	let c = {};
	countries.forEach((item) => {
		c[item] = true;
	});
	let ca = {};
	categories.forEach((item) => {
		ca[item] = true;
	});
	const [countriesOb, setCountriesOb] = useState(c);
	const [categoriesOb, setCategoriesOb] = useState(ca);

	const [faqs, setFaqs] = useState(faqss);

	function filter() {
		let newFaqs = [];
		faqss.forEach((faq) => {
			if (categoriesOb[faq.category] && countriesOb[faq.country]) {
				newFaqs.push(faq);
			}
		});
		setFaqs(newFaqs);
	}

	useEffect(() => {
		filter();
	}, [categoriesOb, countriesOb]);

	function Row(a, b, c, d, key) {
		<div key={key}>
			<span>{a}</span>
			<span>{b}</span>
			<span>{c}</span>
			<span>{d}</span>
		</div>;
	}
	const hElementStyles = "font-bold basis-1/6";
	const tElementStyles = "basis-1/6";
	return (
		<div className='w-full p-8 bg-gray-100 h-screen overflow-y-auto'>
			<h1 className='text-2xl font-bold '>List of all questions</h1>
			<Filter
				countries={countriesOb}
				categories={categoriesOb}
				setCountries={setCountriesOb}
				setCategories={setCategoriesOb}
			/>
			<div className='flex'>
				<span className={hElementStyles + " basis-3/6"}>Question</span>
				<span className={hElementStyles}>Client</span>
				<span className={hElementStyles}>Category</span>
				<span className={hElementStyles}>Country</span>
			</div>
			{Object.keys(faqs).map((faq) => (
				<div
					key={faq}
					className='w-full h-max p-3 border shadow-sm shadow-gray-600 my-3 flex'
				>
					<span className={tElementStyles + " basis-3/6"}>
						{faqs[faq].question}
					</span>
					<span className={tElementStyles}>{faqs[faq].name}</span>
					<span className={tElementStyles}>{faqs[faq].category}</span>
					<span className={tElementStyles}>{faqs[faq].country}</span>
				</div>
			))}
		</div>
	);
}
