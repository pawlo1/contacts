function init() {
	document.addEventListener("deviceready",onDeviceReady, false);
}

function onDeviceReady() {
console.log(navigator.contacts);
}

function onSuccess(contacts) {
    alert('Found ' + contacts.length + ' contacts.');
};
 
function onError(contactError) {
    alert('onError!');
};
 

var options      = new ContactFindOptions();
options.filter   = "";
options.multiple = true;
options.desiredFields = [navigator.contacts.fieldType.id];
options.hasPhoneNumber = true;
var fields       = [navigator.contacts.fieldType.displayName, navigator.contacts.fieldType.name];
navigator.contacts.find(fields, onSuccess, onError, options);