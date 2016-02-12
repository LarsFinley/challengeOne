var personOne = {firstName: "john", lastName: "johnson", phoneNumber: '404-333-3232'};
var personTwo = {firstName: "sally", lastName: "johnson", phoneNumber: '404-334-2323'};
var personThree = {firstName: "sue", lastName: "johnson", phoneNumber: '404-335-3223'};
var $list = $('#peopleTable');
var people = [personOne, personTwo, personThree];

people.forEach(function(people){
	$list.append('<tr> 
		<td>' + people.firstName + '</td>
		<td>' + people.lastName + '</td>
		<td>' + people.phoneNumber + '</td>
		<td><button class="btn btn-primary deleteTodo">done</button></td></tr>'
		)
});

var deletePeople = function(event){
	
	event.preventDefault();
	
	alert("it worked")
	$(event.target).closest('tr').remove();
}

function createNewPersonFromForm(event){
	
	event.preventDefault();
	
	$('.deletePeople').on('click', deletePeople)

	var firstName=$("#firstName").val();
	var lastName=$("#lastName").val();
	var phoneNumber=$("#phoneNumber").val();

	if(firstName && lastName && phoneNumber){

		$list.append('<tr> 
			<td>' + firstName + '</td>
			<td>' + lastName + '</td>
			<td>' + phoneNumber + '</td>
			<td><button class="btn btn-primary deleteTodo">done</button></td></tr>'
			)			

	}
}
$('#submit-button').on('click', createNewPersonFromForm)
$('.deletePeople').on('click', deletePeople)

