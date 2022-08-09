import "./App.css";
import Navbar from "./Components/Molecules/Navbar";
import { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./Components/Organisms/Home";
import GMap from "./Components/Organisms/GMap";
import TMap from "./Components/Organisms/TMap";
import { faqs } from "./faqs";
import QList from "./Components/Organisms/QList";

function App() {
	// useEffect(()=>{
	//   fetch("")
	// }, [])

	return (
		<Router>
			<div className='flex flex-row'>
				<Navbar />
				<Routes>
					<Route exact path='/' element={<GMap faqs={faqs} />} />
					<Route path='/tMap' element={<TMap faqs={faqs} />} />
					<Route path='/qList' element={<QList faqss={faqs} />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
