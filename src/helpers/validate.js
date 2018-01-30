export const validate = (state) => {
  	let errors  = {},
  		{theme,beginning,end,selectedRoom,selectedUsers,datepicker} = state,
  		now = new Date();
  	
  	if (!theme){
  		errors.themeValid = false;
  	}
  	if (!selectedRoom){
  		errors.selectedRoomValid = false;
  	}
  	if(!selectedUsers.length){
  		errors.selectedUsersValid = false;
  	}
  	if(selectedRoom && selectedUsers.length > selectedRoom.capacity){
  		errors.selectedUsersValid = false;
  	}
  	if (datepicker.getFullYear < now.getFullYear() ||
  		datepicker.getMonth() < now.getMonth()){
  			errors.datepickerValid = false
  	}
  	if(datepicker.getMonth() === now.getMonth() &&
      datepicker.getDate() < now.getDate()){
        errors.datepickerValid = false
    }
  	if(parseInt(beginning.slice(0,2))< 7){
  		errors.beginningValid = false
  	}
  	if(parseInt(beginning.slice(0,2)) < now.getHours()){
  		errors.beginningValid = false
  	}
  	if(parseInt(end.slice(0,2))< 7 || end.slice(0,2) < beginning.slice(0,2)){
  		errors.endValid = false
  	}
  return errors;
  }
