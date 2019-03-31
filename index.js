function person(firstName, lastName, age, favoriteTVShow, favoriteSong)
{
	this.firstName = firstName;
	this.lastName = lastName;
	this.age = age;
	this.favoriteTVShow = favoriteTVShow;
	this.favoriteSong = favoriteSong;
}

var steve = new person("Steve", "Stevenson", 60, "That 60's Show", "Dixie");
var bob = new person("Bob", "Brown", 12, "Generic Kid's Show tm", "Gucci Gang");
var sussie = new person("Sussie", "Stevenson", 3, "Dora", "Wheels on the Bus");
var beth = new person("Beth", "Brown", 49, "Soap Opera Inc", "US National Anthem");
var granSmith = new person("Grandma", "Smith", 122, "BaseBall", "London Bridge");

var family = [steve, bob, sussie, beth, granSmith];

for(var i = 0; i < family.length; i++)
{
	console.log(family[i].firstName + ": " + family[i].favoriteTVShow);
}

window.onload = function()
{
	console.log("");

	steve.favoriteTVShow = "The Twilight Zone";
	bob.favoriteTVShow = "Spongebob";
	sussie.favoriteTVShow = "Dora v2";
	beth.favoriteTVShow = "Cooking show";
	granSmith.favoriteTVShow = "Football";

	for(var i = 0; i < family.length; i++)
	{
		console.log(family[i].firstName + ": " + family[i].favoriteTVShow);
	}
}

