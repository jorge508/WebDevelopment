var likesCake = confirm("Do you like cake?");

if (likesCake) {
	var favoriteCake = prompt("What is your favorite cake?");
	alert("Your favorite cake is: " + favoriteCake);
} else {
	alert("The cake is a lie anyhow.");
}