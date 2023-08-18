const getDateObj = (timeZoneShift, timeStamp) => {
	return new Date((timeZoneShift + timeStamp) * 1000);
};

const getWeekday = (date) => {
	return date.toLocaleString(undefined, { weekday: "long", timeZone: "UTC" });
};

const getDay = (date) => {
	return date.toLocaleString(undefined, { day: "numeric", timeZone: "UTC" });
};

const getMonth = (date) => {
	return date.toLocaleString(undefined, { month: "short", timeZone: "UTC" });
};

const getTimeFromTimeStamp = (timeZoneShift, timeStamp) => {
	const date = getDateObj(timeZoneShift, timeStamp);
	return date.toLocaleString(undefined, {
		hour: "2-digit",
		minute: "2-digit",
		hour12: true,
		timeZone: "UTC",
	});
};

const getDateFromTimeStamp = (timeZoneShift, timeStamp) => {
	const date = getDateObj(timeZoneShift, timeStamp);
	const weekday = getWeekday(date);
	const month = getMonth(date);
	const day = getDay(date);

	return `${weekday} ${day}, ${month}`;
};

export const getWeekdayFromTimeStamp = (timeZoneShift, timeStamp) => {
	return getWeekday(getDateObj(timeZoneShift, timeStamp));
};

export const getDayMonth = (timeZoneShift, timeStamp) => {
	const date = getDateObj(timeZoneShift, timeStamp);
	const day = getDay(date);
	const month = getMonth(date);

	return `${day} ${month}`;
};

const getHoursFromTimeStamp = (timeZoneShift, timeStamp) => {
	const date = new Date((timeZoneShift + timeStamp) * 1000);
	const hour = date.toLocaleString(undefined, {
		hour: "numeric",
		timeZone: "UTC",
	});

	return hour;
};

export { getTimeFromTimeStamp, getDateFromTimeStamp, getHoursFromTimeStamp };
