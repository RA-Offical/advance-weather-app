const getTimeFromTimeStamp = (timeZoneShift, timeStamp) => {
	const date = new Date((timeZoneShift + timeStamp) * 1000);

	return date.toLocaleString(undefined, {
		hour: "2-digit",
		minute: "2-digit",
		hour12: true,
		timeZone: "UTC",
	});
};

const getDateFromTimeStamp = (timeZoneShift, timeStamp) => {
	console.log(timeZoneShift, timeStamp);
	const date = new Date((timeZoneShift + timeStamp) * 1000);
	const weekday = date.toLocaleString(undefined, {
		weekday: "long",
		timeZone: "UTC",
	});
	const month = date.toLocaleString(undefined, {
		month: "short",
		timeZone: "UTC",
	});
	const day = date.toLocaleString(undefined, {
		day: "numeric",
		timeZone: "UTC",
	});

	return `${weekday} ${day}, ${month}`;
};

export { getTimeFromTimeStamp, getDateFromTimeStamp };
