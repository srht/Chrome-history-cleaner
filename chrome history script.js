// select all checkboxes and set checked
var inputElements=document.getElementsByTagName('input');
for (var i =0;i<inputElements.length;i++)
	if (inputElements[i].type=='checkbox') {
		inputElements[i].checked=true;
	}
}

// remove disabled attribute from "remove selected" button
var removeButton=document.getElementById('remove-selected');
removeButton.removeAttribute('disabled');

// then click to remove selected button
document.getElementById('remove-selected').click();