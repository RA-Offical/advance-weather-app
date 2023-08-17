import { useState, useRef, useEffect } from "react";

const useCompoentVisbile = (defaultVisibility, callback) => {
	const [isVisible, setIsVisible] = useState(defaultVisibility);
	const containerRef = useRef();

	useEffect(() => {
		document.addEventListener("click", callback);

		return () => {
			document.removeEventListener("click", callback);
		};
	}, []);

	return { isVisible, setIsVisible, containerRef };
};

export default useCompoentVisbile;
