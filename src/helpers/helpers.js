import {month,calendar_days} from './locales.json'
const zeroify = (date) => date < 10? "0" + date : date;
export function timeFromRange(start,end) {
		return `${zeroify(start.getHours())}:${zeroify(start.getMinutes())} — ${zeroify(end.getHours())}:${zeroify(end.getMinutes())}`
		}
export function getMonthName(index) {
	return month[index][0];
}
export function getMonthNameDecl(index) {
	return month[index][1];
}

export function getDecl(words,number) {
	if (number.toString().slice(-1)[0] === "1"){
		return words[0]
	}
	else if ([2,3,4].includes(number)){
		return words[1]
	}
	return words[2];
}

export function getCapacity(capacity) {
	return capacity < 10? `3—${capacity} человек` : `до ${capacity} человек`
}

export function getHourMinute(date) {
	return `${zeroify(date.getHours())}:${zeroify(date.getMinutes())}`;
}
export function getWeek() {
	return calendar_days;
}
export function validateTime(time){
	return /^([0-2][0-9])\:([0-5][0-9])$/.test(time)
}

