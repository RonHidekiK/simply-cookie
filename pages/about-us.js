import React from "react";
import Navbar from "../components/navbar";

function AboutUs() {
	return (
		<>
			<div
				id="header"
				className="h-[13vh] w-[100vw] flex flex-col justify-center"
			>
				<div className="relative top-[50%] text-center">
					<span id="header-text">ABOUT US</span>
				</div>
			</div>
			<Navbar></Navbar>
			<div id="content-area"></div>
		</>
	);
}

export default AboutUs;
