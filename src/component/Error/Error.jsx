import { Link } from "react-router-dom";
function Error({ errorCode, errorMessage }) {
	return (
		<div className="grid error">
			<h2 className="font-dynamic-xlarge fw-semi-bold text-neutral-200 error__title">
				{errorCode || 404}
			</h2>
			<div className="mt-lg error-content">
				<p className="mb-xmd font-dynamic-medium error__message">
					{errorMessage || "Page not found"}
				</p>
				<Link to="/" className="btn btn--primary">
					Back Home
				</Link>
			</div>
		</div>
	);
}

export default Error;
