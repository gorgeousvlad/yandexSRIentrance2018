import testData from "./testdata.json"
import {getDateKey} from "../helpers/helpers"


const roomsByFloor = (rooms) =>{
		return rooms.reduce((acc,cur)=> {
			let floor = cur.floor;
			if (!(floor in acc)){
				acc[floor] = []
			}
			acc[floor].push(cur)
			return acc
		},{})
	}

let storeDefault = Object.assign(
	{},
	testData.testData,
	{roomsByFloor:roomsByFloor(testData.testData.rooms)
	}
	);
console.log("STRORE",storeDefault)
export default storeDefault;