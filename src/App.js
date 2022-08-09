import "./App.css";
import Navbar from "./Components/Molecules/Navbar";
import { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./Components/Organisms/Home";
import GMap from "./Components/Organisms/GMap";
import TMap from "./Components/Organisms/TMap";
import QList from "./Components/Organisms/QList";

function App() {
	// useEffect(()=>{
	//   fetch("")
	// }, [])

	const faqs = [
		{
			name: "ssjdfn",
			category: "KYC onboarding",
			question: " adaskfisjna",
			country: "CHN",
		},
		{
			name: "sbjkn",
			category: "Trading features",
			question: "skdjfnnf ",
			country: "GBR",
		},
		{
			name: "sbjksfin",
			category: "Fee schedule",
			question:
				"sanfdoalduh fainwlkjdnfl askjdnfl jsandlfjan sdljfnaljsdnf lja dijfodufh jfv diffqh ",
			country: "USA",
		},
		{
			name: "ksdjbfkn",
			category: "Security",
			question: "asiudyf gasbfdiffqh ",
			country: "SGP",
		},
		{
			name: "ksdjbfkn",
			category: "Others",
			question: "asiudyf gasbfdiffqh ",
			country: "SGP",
		},
		{
			name: "ksdjbfkn",
			category: "Others",
			question: "asiudyf gasbfdiffqh ",
			country: "SGP",
		},
		{
			name: "ksdjbfkn",
			category: "Fee Schedule",
			question: "asiudyf gasbfdiffqh ",
			country: "CHN",
		},
		{
			name: "ksdjbfkn",
			category: "Security",
			question: "asiudyf gasbfdiffqh ",
			country: "USA",
		},
	];

	return (
		<Router>
			<div className='flex flex-row'>
				<Navbar />
				<Routes>
					<Route exact path='/gMap' element={<GMap faqs={faqs} />} />
					<Route path='/tMap' element={<TMap faqs={faqs} />} />
					<Route path='/qList' element={<QList faqss={faqs} />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
