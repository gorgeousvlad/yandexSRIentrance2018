export const validate = (state) => {
  	let errors  = {},
  		{theme,beginning,end,selectedRoom,selectedUsers,datepicker} = state,
  		now = new Date();
  	
  	if (!theme){
  		errors.themeValid = false;
  	}
    else errors.themeValid = true;
  	if (!selectedRoom){
  		errors.selectedRoomValid = false;
  	}
    else errors.selectedRoomValid = true;

  	if(!selectedUsers.length){
  		errors.selectedUsersValid = false;
  	}
  	else if(selectedRoom && selectedUsers.length > selectedRoom.capacity){
  		errors.selectedUsersValid = false;
  	}
    else errors.selectedUsersValid = true;

  	if (datepicker.getFullYear() < now.getFullYear() ||
  		datepicker.getMonth() < now.getMonth()){
  			errors.datepickerValid = false
  	}
  	else if(datepicker.getMonth() === now.getMonth() &&
      datepicker.getDate() < now.getDate()){
        errors.datepickerValid = false
    }
    else errors.datepickerValid = true;

  	if(parseInt(beginning.slice(0,2))< 7){
  		errors.beginningValid = false
  	}
  	else if(parseInt(beginning.slice(0,2)) < now.getHours()){
  		errors.beginningValid = false
  	}
    else errors.beginningValid = true;
  	if(parseInt(end.slice(0,2))< 7 || end.slice(0,2) < beginning.slice(0,2)){
  		errors.endValid = false
  	}
    else errors.endValid = true;
  return errors;
  }
