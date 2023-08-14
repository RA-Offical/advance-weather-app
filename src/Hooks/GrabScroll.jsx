import { useEffect, useState, useRef, useCallback } from "react";

const useGrabScroll = () => {
	const containerRef = useRef(null);
	const [isDraggable, setIsDraggable] = useState(false);
	const [initialScroll, setInitialScroll] = useState(0.0);
	const [initialMouseXCoordinate, setInitialMouseXCoordinate] = useState(0.0);

	const callback = (e) => {
		if (!isDraggable) return;

		try {
			const delta =
				initialMouseXCoordinate - e.touches?.[0]?.pageX ??
				initialMouseXCoordinate - e.pageX;

			containerRef.current.scrollLeft = initialScroll + delta;
		} catch (error) {
			console.log(
				initialScroll,
				initialMouseXCoordinate,
				isDraggable,
				e.pageX,
				e,
				initialMouseXCoordinate - e.pageX
			);
		}
	};

	const startDragging = useCallback((e) => {
		containerRef.current.classList.add("grab");
		setInitialMouseXCoordinate(e.touches?.[0]?.pageX ?? e.pageX);
		setInitialScroll(containerRef.current.scrollLeft);
		setIsDraggable(true);
	}, []);

	const stopDragging = useCallback((e) => {
		containerRef.current.classList.remove("grab");
		console.log("called");
		setIsDraggable(false);
	}, []);

	useEffect(() => {
		if (containerRef.current) {
			containerRef.current.addEventListener("touchmove", callback);
			containerRef.current.addEventListener("touchstart", startDragging);
			containerRef.current.addEventListener("touchend", stopDragging);

			containerRef.current.addEventListener("mousedown", startDragging);
			containerRef.current.addEventListener("mousemove", callback);
			containerRef.current.addEventListener("mouseup", stopDragging);
			containerRef.current.addEventListener("mouseleave", stopDragging);
		}

		return () => {
			containerRef.current.removeEventListener(
				"mousedown",
				startDragging
			);
			containerRef.current.removeEventListener("mousemove", callback);
			containerRef.current.removeEventListener("mouseup", stopDragging);
			containerRef.current.removeEventListener(
				"mouseleave",
				stopDragging
			);

			containerRef.current.removeEventListener("touchmove", callback);
			containerRef.current.removeEventListener(
				"touchstart",
				startDragging
			);
			containerRef.current.removeEventListener("touchend", stopDragging);
		};
	}, [isDraggable, initialMouseXCoordinate, initialScroll]);

	return containerRef;
};

export default useGrabScroll;
