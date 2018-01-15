import {month} from './locales.json'
export function timeFromRange(start,end) {
		const zeroify = (date) => date < 10? "0" + date : date;
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
