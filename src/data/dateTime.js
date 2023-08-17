const getTimeFromTimeStamp = (timeZoneShift, timeStamp) => {
	const date = new Date((timeZoneShift + timeStamp) * 1000);

	return date.toLocaleString(undefined, {
		hour: "2-digit",
		minute: "2-digit",
		hour12: true,
		timeZone: "UTC",
	});
};

export { getTimeFromTimeStamp };
