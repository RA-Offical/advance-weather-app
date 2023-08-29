import React from "react";

const Loader = () => {
	return (
		<div className="container grid loader">
			<div className="grid loader-grid-left">
				<div className="loader-box loader-box-lg skelton-loader">
					<div className="line-heading"></div>
				</div>

				<div className="loader-box loader-box-lg skelton-loader "></div>
			</div>
			<div className="grid loader-grid-right">
				<div
					style={{ gridArea: "quality-index" }}
					className="loader-box loader-box-md skelton-loader"
				></div>
				<div
					style={{ gridArea: "sunrise-sunset" }}
					className="loader-box loader-box-md skelton-loader"
				></div>
				<div
					style={{ gridArea: "visibility" }}
					className="loader-box loader-box-sm skelton-loader"
				></div>
				<div
					style={{ gridArea: "feels" }}
					className="loader-box loader-box-sm skelton-loader"
				></div>
				<div
					style={{ gridArea: "humudity" }}
					className="loader-box loader-box-sm skelton-loader"
				></div>
				<div
					style={{ gridArea: "pressure" }}
					className="loader-box loader-box-sm skelton-loader"
				></div>
			</div>
		</div>
	);
};

export default Loader;
