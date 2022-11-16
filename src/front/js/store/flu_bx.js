const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			favoritos: [],
			
			films: [
				{
					"characters": [
						"George Lucas"
					],
					"description": "A Star Wars Film",
					"director": "George Lucas",
					"episode_id": "4",
					"id": 1,
					"opening_crawl": "It is a period of civil war. Rebel spaceships, striking from a hidden base, have won their first victory against the evil Galactic Empire.  During the battle, Rebel spies managed to steal secret plans to the Empire`s ultimate weapon, the DEATH STAR, an armored space station with enough power to destroy an entire planet.  Pursued by the Empire`s sinister agents, Princess Leia races home aboard her starship, custodian of the stolen plans that can save her people and restore freedom to the galaxy....",
					"planets": [
						"1,2,3"
					],
					"producer": "Gary Kurtz, Rick McCallum",
					"species": [
						"1,2,3,4,5"
					],
					"starships": [
						"2,3,5,9,10,11,12,13"
					],
					"title": "A New Hope",
					"vehicles": [
						"4,6,7,8"
					]
				},
				{
					"characters": [
						"Irvin Kershner"
					],
					"description": "A Star Wars Film",
					"director": "Irvin Kershner",
					"episode_id": "5",
					"id": 2,
					"opening_crawl": "It is a dark time for the Rebellion. Although the Death Star has been destroyed, Imperial troops have driven the Rebel forces from their hidden base and pursued them across the galaxy.  Evading the dreaded Imperial Starfleet, a group of freedom fighters led by Luke Skywalker has established a new secret base on the remote ice world of Hoth.  The evil lord Darth Vader, obsessed with finding young Skywalker, has dispatched thousands of remote probes into the far reaches of space....",
					"planets": [
						"4,5,6,27"
					],
					"producer": "Gary Kurtz, Rick McCallum",
					"species": [
						"1,2,3,6,7"
					],
					"starships": [
						"3,10,11,12,15,17,21,22,23"
					],
					"title": "The Empire Strikes Back",
					"vehicles": [
						"8,14,16,18,19,20"
					]
				},
				{
					"characters": [
						"Richard Marquand"
					],
					"description": "A Star Wars Film",
					"director": "Richard Marquand",
					"episode_id": "6",
					"id": 3,
					"opening_crawl": "Luke Skywalker has returned to his home planet of Tatooine in an attempt to rescue his friend Han Solo from the clutches of the vile gangster Jabba the Hutt.  Little does Luke know that the GALACTIC EMPIRE has secretly begun construction on a new armored space station even more powerful than the first dreaded Death Star.  When completed, this ultimate weapon will spell certain doom for the small band of rebels struggling to restore freedom to the galaxy...",
					"planets": [
						"1,5,7,8,9"
					],
					"producer": "Howard G. Kazanjian, George Lucas, Rick McCallum",
					"species": [
						"1,2,3,5,6,8,9,10,15"
					],
					"starships": [
						"2,3,10,11,12,15,17,22,23,27,28,29"
					],
					"title": "Return of the Jedi",
					"vehicles": [
						"8,16,18,19,24,25,26,30"
					]
				},
				{
					"characters": [
						"George Lucas"
					],
					"description": "A Star Wars Film",
					"director": "George Lucas",
					"episode_id": "1",
					"id": 4,
					"opening_crawl": "Turmoil has engulfed the Galactic Republic. The taxation of trade routes to outlying star systems is in dispute.  Hoping to resolve the matter with a blockade of deadly battleships, the greedy Trade Federation has stopped all shipping to the small planet of Naboo.  While the Congress of the Republic endlessly debates this alarming chain of events, the Supreme Chancellor has secretly dispatched two Jedi Knights, the guardians of peace and justice in the galaxy, to settle the conflict....",
					"planets": [
						"1,8,9"
					],
					"producer": "Rick McCallum",
					"species": [
						"1,2,6,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27"
					],
					"starships": [
						"31,32,39,40,41"
					],
					"title": "The Phantom Menace",
					"vehicles": [
						"33,34,35,36,37,38,42"
					]
				},
				{
					"characters": [
						"George Lucas"
					],
					"description": "A Star Wars Film",
					"director": "George Lucas",
					"episode_id": "2",
					"id": 5,
					"opening_crawl": "There is unrest in the Galactic Senate. Several thousand solar systems have declared their intentions to leave the Republic.  This separatist movement, under the leadership of the mysterious Count Dooku, has made it difficult for the limited number of Jedi Knights to maintain  peace and order in the galaxy.  Senator Amidala, the former Queen of Naboo, is returning to the Galactic Senate to vote on the critical issue of creating an ARMY OF THE REPUBLIC to assist the overwhelmed Jedi....",
					"planets": [
						"1,8,9,10,11"
					],
					"producer": "Rick McCallum",
					"species": [
						"1,2,6,12,13,15,28,29,30,31,32,33,34,35"
					],
					"starships": [
						"21,32,39,43,47,48,49,52,58"
					],
					"title": "Attack of the Clones",
					"vehicles": [
						"4,44,45,46,50,51,53,54,55,56,57"
					]
				},
				{
					"characters": [
						"George Lucas"
					],
					"description": "A Star Wars Film",
					"director": "George Lucas",
					"episode_id": "3",
					"id": 6,
					"opening_crawl": "War! The Republic is crumbling under attacks by the ruthless Sith Lord, Count Dooku. There are heroes on both sides. Evil is everywhere.  In a stunning move, the fiendish droid leader, General Grievous, has swept into the Republic capital and kidnapped Chancellor Palpatine, leader of the Galactic Senate.  As the Separatist Droid Army attempts to flee the besieged capital with their valuable hostage, two Jedi Knights lead a desperate mission to rescue the captive Chancellor....",
					"planets": [
						"1,2,5,8,9,12,13,14,15,16,17,18,19"
					],
					"producer": "Rick McCallum",
					"species": [
						"1,2,3,6,15,19,20,23,24,25,26,27,28,29,30,33,34,35,36,37"
					],
					"starships": [
						"2,32,48,59,61,63,64,65,66,68,74,75"
					],
					"title": "Revenge of the Sith",
					"vehicles": [
						"33,50,53,56,60,62,67,69,70,71,72,73,76"
					]
				}
			],
			people: [
				{
					"birth_year": "19BBY",
					"description": "A person within the Star Wars universe",
					"eye_color": "blue",
					"gender": "male",
					"hair_color": "blond",
					"height": "172",
					"homeworld": "1",
					"id": 1,
					"mass": "77",
					"name": "Luke Skywalker",
					"skin_color": "fair",
					"url": "1"
				},
				{
					"birth_year": "112BBY",
					"description": "A person within the Star Wars universe",
					"eye_color": "yellow",
					"gender": "n/a",
					"hair_color": "n/a",
					"height": "167",
					"homeworld": "1",
					"id": 2,
					"mass": "75",
					"name": "C-3PO",
					"skin_color": "gold",
					"url": "2"
				},
				{
					"birth_year": "33BBY",
					"description": "A person within the Star Wars universe",
					"eye_color": "red",
					"gender": "n/a",
					"hair_color": "n/a",
					"height": "96",
					"homeworld": "8",
					"id": 3,
					"mass": "32",
					"name": "R2-D2",
					"skin_color": "white, blue",
					"url": "3"
				},
				{
					"birth_year": "41.9BBY",
					"description": "A person within the Star Wars universe",
					"eye_color": "yellow",
					"gender": "male",
					"hair_color": "none",
					"height": "202",
					"homeworld": "1",
					"id": 4,
					"mass": "136",
					"name": "Darth Vader",
					"skin_color": "white",
					"url": "4"
				},
				{
					"birth_year": "19BBY",
					"description": "A person within the Star Wars universe",
					"eye_color": "brown",
					"gender": "female",
					"hair_color": "brown",
					"height": "150",
					"homeworld": "2",
					"id": 5,
					"mass": "49",
					"name": "Leia Organa",
					"skin_color": "light",
					"url": "5"
				},
				{
					"birth_year": "52BBY",
					"description": "A person within the Star Wars universe",
					"eye_color": "blue",
					"gender": "male",
					"hair_color": "brown, grey",
					"height": "178",
					"homeworld": "1",
					"id": 6,
					"mass": "120",
					"name": "Owen Lars",
					"skin_color": "light",
					"url": "6"
				},
				{
					"birth_year": "47BBY",
					"description": "A person within the Star Wars universe",
					"eye_color": "blue",
					"gender": "female",
					"hair_color": "brown",
					"height": "165",
					"homeworld": "1",
					"id": 7,
					"mass": "75",
					"name": "Beru Whitesun lars",
					"skin_color": "light",
					"url": "7"
				},
				{
					"birth_year": "unknown",
					"description": "A person within the Star Wars universe",
					"eye_color": "red",
					"gender": "n/a",
					"hair_color": "n/a",
					"height": "97",
					"homeworld": "1",
					"id": 8,
					"mass": "32",
					"name": "R5-D4",
					"skin_color": "white, red",
					"url": "8"
				},
				{
					"birth_year": "24BBY",
					"description": "A person within the Star Wars universe",
					"eye_color": "brown",
					"gender": "male",
					"hair_color": "black",
					"height": "183",
					"homeworld": "1",
					"id": 9,
					"mass": "84",
					"name": "Biggs Darklighter",
					"skin_color": "light",
					"url": "9"
				},
				{
					"birth_year": "57BBY",
					"description": "A person within the Star Wars universe",
					"eye_color": "blue-gray",
					"gender": "male",
					"hair_color": "auburn, white",
					"height": "182",
					"homeworld": "20",
					"id": 10,
					"mass": "77",
					"name": "Obi-Wan Kenobi",
					"skin_color": "fair",
					"url": "10"
				},
				{
					"birth_year": "41.9BBY",
					"description": "A person within the Star Wars universe",
					"eye_color": "blue",
					"gender": "male",
					"hair_color": "blond",
					"height": "188",
					"homeworld": "1",
					"id": 11,
					"mass": "84",
					"name": "Anakin Skywalker",
					"skin_color": "fair",
					"url": "11"
				},
				{
					"birth_year": "64BBY",
					"description": "A person within the Star Wars universe",
					"eye_color": "blue",
					"gender": "male",
					"hair_color": "auburn, grey",
					"height": "180",
					"homeworld": "21",
					"id": 12,
					"mass": "unknown",
					"name": "Wilhuff Tarkin",
					"skin_color": "fair",
					"url": "12"
				},
				{
					"birth_year": "200BBY",
					"description": "A person within the Star Wars universe",
					"eye_color": "blue",
					"gender": "male",
					"hair_color": "brown",
					"height": "228",
					"homeworld": "14",
					"id": 13,
					"mass": "112",
					"name": "Chewbacca",
					"skin_color": "unknown",
					"url": "13"
				},
				{
					"birth_year": "29BBY",
					"description": "A person within the Star Wars universe",
					"eye_color": "brown",
					"gender": "male",
					"hair_color": "brown",
					"height": "180",
					"homeworld": "22",
					"id": 14,
					"mass": "80",
					"name": "Han Solo",
					"skin_color": "fair",
					"url": "14"
				},
				{
					"birth_year": "44BBY",
					"description": "A person within the Star Wars universe",
					"eye_color": "black",
					"gender": "male",
					"hair_color": "n/a",
					"height": "173",
					"homeworld": "23",
					"id": 15,
					"mass": "74",
					"name": "Greedo",
					"skin_color": "green",
					"url": "15"
				},
				{
					"birth_year": "600BBY",
					"description": "A person within the Star Wars universe",
					"eye_color": "orange",
					"gender": "hermaphrodite",
					"hair_color": "n/a",
					"height": "175",
					"homeworld": "24",
					"id": 16,
					"mass": "1,358",
					"name": "Jabba Desilijic Tiure",
					"skin_color": "green-tan, brown",
					"url": "16"
				},
				{
					"birth_year": "21BBY",
					"description": "A person within the Star Wars universe",
					"eye_color": "hazel",
					"gender": "male",
					"hair_color": "brown",
					"height": "170",
					"homeworld": "22",
					"id": 18,
					"mass": "77",
					"name": "Wedge Antilles",
					"skin_color": "fair",
					"url": "18"
				},
				{
					"birth_year": "unknown",
					"description": "A person within the Star Wars universe",
					"eye_color": "blue",
					"gender": "male",
					"hair_color": "brown",
					"height": "180",
					"homeworld": "26",
					"id": 19,
					"mass": "110",
					"name": "Jek Tono Porkins",
					"skin_color": "fair",
					"url": "19"
				},
				{
					"birth_year": "896BBY",
					"description": "A person within the Star Wars universe",
					"eye_color": "brown",
					"gender": "male",
					"hair_color": "white",
					"height": "66",
					"homeworld": "28",
					"id": 20,
					"mass": "17",
					"name": "Yoda",
					"skin_color": "green",
					"url": "20"
				},
				{
					"birth_year": "82BBY",
					"description": "A person within the Star Wars universe",
					"eye_color": "yellow",
					"gender": "male",
					"hair_color": "grey",
					"height": "170",
					"homeworld": "8",
					"id": 21,
					"mass": "75",
					"name": "Palpatine",
					"skin_color": "pale",
					"url": "21"
				},
				{
					"birth_year": "31.5BBY",
					"description": "A person within the Star Wars universe",
					"eye_color": "brown",
					"gender": "male",
					"hair_color": "black",
					"height": "183",
					"homeworld": "10",
					"id": 22,
					"mass": "78.2",
					"name": "Boba Fett",
					"skin_color": "fair",
					"url": "22"
				},
				{
					"birth_year": "15BBY",
					"description": "A person within the Star Wars universe",
					"eye_color": "red",
					"gender": "none",
					"hair_color": "none",
					"height": "200",
					"homeworld": "28",
					"id": 23,
					"mass": "140",
					"name": "IG-88",
					"skin_color": "metal",
					"url": "23"
				},
				{
					"birth_year": "53BBY",
					"description": "A person within the Star Wars universe",
					"eye_color": "red",
					"gender": "male",
					"hair_color": "none",
					"height": "190",
					"homeworld": "29",
					"id": 24,
					"mass": "113",
					"name": "Bossk",
					"skin_color": "green",
					"url": "24"
				},
				{
					"birth_year": "31BBY",
					"description": "A person within the Star Wars universe",
					"eye_color": "brown",
					"gender": "male",
					"hair_color": "black",
					"height": "177",
					"homeworld": "30",
					"id": 25,
					"mass": "79",
					"name": "Lando Calrissian",
					"skin_color": "dark",
					"url": "25"
				},
				{
					"birth_year": "37BBY",
					"description": "A person within the Star Wars universe",
					"eye_color": "blue",
					"gender": "male",
					"hair_color": "none",
					"height": "175",
					"homeworld": "6",
					"id": 26,
					"mass": "79",
					"name": "Lobot",
					"skin_color": "light",
					"url": "26"
				},
				{
					"birth_year": "41BBY",
					"description": "A person within the Star Wars universe",
					"eye_color": "orange",
					"gender": "male",
					"hair_color": "none",
					"height": "180",
					"homeworld": "31",
					"id": 27,
					"mass": "83",
					"name": "Ackbar",
					"skin_color": "brown mottle",
					"url": "27"
				},
				{
					"birth_year": "48BBY",
					"description": "A person within the Star Wars universe",
					"eye_color": "blue",
					"gender": "female",
					"hair_color": "auburn",
					"height": "150",
					"homeworld": "32",
					"id": 28,
					"mass": "unknown",
					"name": "Mon Mothma",
					"skin_color": "fair",
					"url": "28"
				},
				{
					"birth_year": "unknown",
					"description": "A person within the Star Wars universe",
					"eye_color": "brown",
					"gender": "male",
					"hair_color": "brown",
					"height": "unknown",
					"homeworld": "28",
					"id": 29,
					"mass": "unknown",
					"name": "Arvel Crynyd",
					"skin_color": "fair",
					"url": "29"
				},
				{
					"birth_year": "8BBY",
					"description": "A person within the Star Wars universe",
					"eye_color": "brown",
					"gender": "male",
					"hair_color": "brown",
					"height": "88",
					"homeworld": "7",
					"id": 30,
					"mass": "20",
					"name": "Wicket Systri Warrick",
					"skin_color": "brown",
					"url": "30"
				},
				{
					"birth_year": "unknown",
					"description": "A person within the Star Wars universe",
					"eye_color": "black",
					"gender": "male",
					"hair_color": "none",
					"height": "160",
					"homeworld": "33",
					"id": 31,
					"mass": "68",
					"name": "Nien Nunb",
					"skin_color": "grey",
					"url": "31"
				},
				{
					"birth_year": "92BBY",
					"description": "A person within the Star Wars universe",
					"eye_color": "blue",
					"gender": "male",
					"hair_color": "brown",
					"height": "193",
					"homeworld": "28",
					"id": 32,
					"mass": "89",
					"name": "Qui-Gon Jinn",
					"skin_color": "fair",
					"url": "32"
				},
				{
					"birth_year": "unknown",
					"description": "A person within the Star Wars universe",
					"eye_color": "red",
					"gender": "male",
					"hair_color": "none",
					"height": "191",
					"homeworld": "18",
					"id": 33,
					"mass": "90",
					"name": "Nute Gunray",
					"skin_color": "mottled green",
					"url": "33"
				},
				{
					"birth_year": "91BBY",
					"description": "A person within the Star Wars universe",
					"eye_color": "blue",
					"gender": "male",
					"hair_color": "blond",
					"height": "170",
					"homeworld": "9",
					"id": 34,
					"mass": "unknown",
					"name": "Finis Valorum",
					"skin_color": "fair",
					"url": "34"
				},
				{
					"birth_year": "46BBY",
					"description": "A person within the Star Wars universe",
					"eye_color": "brown",
					"gender": "female",
					"hair_color": "brown",
					"height": "185",
					"homeworld": "8",
					"id": 35,
					"mass": "45",
					"name": "Padm\u00e9 Amidala",
					"skin_color": "light",
					"url": "35"
				},
				{
					"birth_year": "52BBY",
					"description": "A person within the Star Wars universe",
					"eye_color": "orange",
					"gender": "male",
					"hair_color": "none",
					"height": "196",
					"homeworld": "8",
					"id": 36,
					"mass": "66",
					"name": "Jar Jar Binks",
					"skin_color": "orange",
					"url": "36"
				},
				{
					"birth_year": "unknown",
					"description": "A person within the Star Wars universe",
					"eye_color": "orange",
					"gender": "male",
					"hair_color": "none",
					"height": "224",
					"homeworld": "8",
					"id": 37,
					"mass": "82",
					"name": "Roos Tarpals",
					"skin_color": "grey",
					"url": "37"
				},
				{
					"birth_year": "unknown",
					"description": "A person within the Star Wars universe",
					"eye_color": "orange",
					"gender": "male",
					"hair_color": "none",
					"height": "206",
					"homeworld": "8",
					"id": 38,
					"mass": "unknown",
					"name": "Rugor Nass",
					"skin_color": "green",
					"url": "38"
				},
				{
					"birth_year": "unknown",
					"description": "A person within the Star Wars universe",
					"eye_color": "blue",
					"gender": "male",
					"hair_color": "brown",
					"height": "183",
					"homeworld": "8",
					"id": 39,
					"mass": "unknown",
					"name": "Ric Oli\u00e9",
					"skin_color": "fair",
					"url": "39"
				},
				{
					"birth_year": "unknown",
					"description": "A person within the Star Wars universe",
					"eye_color": "yellow",
					"gender": "male",
					"hair_color": "black",
					"height": "137",
					"homeworld": "34",
					"id": 40,
					"mass": "unknown",
					"name": "Watto",
					"skin_color": "blue, grey",
					"url": "40"
				},
				{
					"birth_year": "unknown",
					"description": "A person within the Star Wars universe",
					"eye_color": "orange",
					"gender": "male",
					"hair_color": "none",
					"height": "112",
					"homeworld": "35",
					"id": 41,
					"mass": "40",
					"name": "Sebulba",
					"skin_color": "grey, red",
					"url": "41"
				},
				{
					"birth_year": "62BBY",
					"description": "A person within the Star Wars universe",
					"eye_color": "brown",
					"gender": "male",
					"hair_color": "black",
					"height": "183",
					"homeworld": "8",
					"id": 42,
					"mass": "unknown",
					"name": "Quarsh Panaka",
					"skin_color": "dark",
					"url": "42"
				},
				{
					"birth_year": "72BBY",
					"description": "A person within the Star Wars universe",
					"eye_color": "brown",
					"gender": "female",
					"hair_color": "black",
					"height": "163",
					"homeworld": "1",
					"id": 43,
					"mass": "unknown",
					"name": "Shmi Skywalker",
					"skin_color": "fair",
					"url": "43"
				},
				{
					"birth_year": "54BBY",
					"description": "A person within the Star Wars universe",
					"eye_color": "yellow",
					"gender": "male",
					"hair_color": "none",
					"height": "175",
					"homeworld": "36",
					"id": 44,
					"mass": "80",
					"name": "Darth Maul",
					"skin_color": "red",
					"url": "44"
				},
				{
					"birth_year": "unknown",
					"description": "A person within the Star Wars universe",
					"eye_color": "pink",
					"gender": "male",
					"hair_color": "none",
					"height": "180",
					"homeworld": "37",
					"id": 45,
					"mass": "unknown",
					"name": "Bib Fortuna",
					"skin_color": "pale",
					"url": "45"
				},
				{
					"birth_year": "48BBY",
					"description": "A person within the Star Wars universe",
					"eye_color": "hazel",
					"gender": "female",
					"hair_color": "none",
					"height": "178",
					"homeworld": "37",
					"id": 46,
					"mass": "55",
					"name": "Ayla Secura",
					"skin_color": "blue",
					"url": "46"
				},
				{
					"birth_year": "unknown",
					"description": "A person within the Star Wars universe",
					"eye_color": "unknown",
					"gender": "male",
					"hair_color": "none",
					"height": "79",
					"homeworld": "38",
					"id": 47,
					"mass": "15",
					"name": "Ratts Tyerel",
					"skin_color": "grey, blue",
					"url": "47"
				},
				{
					"birth_year": "unknown",
					"description": "A person within the Star Wars universe",
					"eye_color": "yellow",
					"gender": "male",
					"hair_color": "none",
					"height": "94",
					"homeworld": "39",
					"id": 48,
					"mass": "45",
					"name": "Dud Bolt",
					"skin_color": "blue, grey",
					"url": "48"
				},
				{
					"birth_year": "unknown",
					"description": "A person within the Star Wars universe",
					"eye_color": "black",
					"gender": "male",
					"hair_color": "none",
					"height": "122",
					"homeworld": "40",
					"id": 49,
					"mass": "unknown",
					"name": "Gasgano",
					"skin_color": "white, blue",
					"url": "49"
				},
				{
					"birth_year": "72BBY",
					"description": "A person within the Star Wars universe",
					"eye_color": "brown",
					"gender": "male",
					"hair_color": "none",
					"height": "188",
					"homeworld": "42",
					"id": 51,
					"mass": "84",
					"name": "Mace Windu",
					"skin_color": "dark",
					"url": "51"
				},
				{
					"birth_year": "92BBY",
					"description": "A person within the Star Wars universe",
					"eye_color": "yellow",
					"gender": "male",
					"hair_color": "white",
					"height": "198",
					"homeworld": "43",
					"id": 52,
					"mass": "82",
					"name": "Ki-Adi-Mundi",
					"skin_color": "pale",
					"url": "52"
				},
				{
					"birth_year": "unknown",
					"description": "A person within the Star Wars universe",
					"eye_color": "black",
					"gender": "male",
					"hair_color": "none",
					"height": "196",
					"homeworld": "44",
					"id": 53,
					"mass": "87",
					"name": "Kit Fisto",
					"skin_color": "green",
					"url": "53"
				},
				{
					"birth_year": "unknown",
					"description": "A person within the Star Wars universe",
					"eye_color": "brown",
					"gender": "male",
					"hair_color": "black",
					"height": "171",
					"homeworld": "45",
					"id": 54,
					"mass": "unknown",
					"name": "Eeth Koth",
					"skin_color": "brown",
					"url": "54"
				},
				{
					"birth_year": "unknown",
					"description": "A person within the Star Wars universe",
					"eye_color": "blue",
					"gender": "female",
					"hair_color": "none",
					"height": "184",
					"homeworld": "9",
					"id": 55,
					"mass": "50",
					"name": "Adi Gallia",
					"skin_color": "dark",
					"url": "55"
				},
				{
					"birth_year": "unknown",
					"description": "A person within the Star Wars universe",
					"eye_color": "orange",
					"gender": "male",
					"hair_color": "none",
					"height": "188",
					"homeworld": "47",
					"id": 56,
					"mass": "unknown",
					"name": "Saesee Tiin",
					"skin_color": "pale",
					"url": "56"
				},
				{
					"birth_year": "unknown",
					"description": "A person within the Star Wars universe",
					"eye_color": "yellow",
					"gender": "male",
					"hair_color": "none",
					"height": "264",
					"homeworld": "48",
					"id": 57,
					"mass": "unknown",
					"name": "Yarael Poof",
					"skin_color": "white",
					"url": "57"
				},
				{
					"birth_year": "22BBY",
					"description": "A person within the Star Wars universe",
					"eye_color": "black",
					"gender": "male",
					"hair_color": "none",
					"height": "188",
					"homeworld": "49",
					"id": 58,
					"mass": "80",
					"name": "Plo Koon",
					"skin_color": "orange",
					"url": "58"
				},
				{
					"birth_year": "unknown",
					"description": "A person within the Star Wars universe",
					"eye_color": "blue",
					"gender": "male",
					"hair_color": "none",
					"height": "196",
					"homeworld": "50",
					"id": 59,
					"mass": "unknown",
					"name": "Mas Amedda",
					"skin_color": "blue",
					"url": "59"
				},
				{
					"birth_year": "unknown",
					"description": "A person within the Star Wars universe",
					"eye_color": "brown",
					"gender": "male",
					"hair_color": "black",
					"height": "185",
					"homeworld": "8",
					"id": 60,
					"mass": "85",
					"name": "Gregar Typho",
					"skin_color": "dark",
					"url": "60"
				},
				{
					"birth_year": "unknown",
					"description": "A person within the Star Wars universe",
					"eye_color": "brown",
					"gender": "female",
					"hair_color": "brown",
					"height": "157",
					"homeworld": "8",
					"id": 61,
					"mass": "unknown",
					"name": "Cord\u00e9",
					"skin_color": "light",
					"url": "61"
				},
				{
					"birth_year": "82BBY",
					"description": "A person within the Star Wars universe",
					"eye_color": "blue",
					"gender": "male",
					"hair_color": "brown",
					"height": "183",
					"homeworld": "1",
					"id": 62,
					"mass": "unknown",
					"name": "Cliegg Lars",
					"skin_color": "fair",
					"url": "62"
				},
				{
					"birth_year": "unknown",
					"description": "A person within the Star Wars universe",
					"eye_color": "yellow",
					"gender": "male",
					"hair_color": "none",
					"height": "183",
					"homeworld": "11",
					"id": 63,
					"mass": "80",
					"name": "Poggle the Lesser",
					"skin_color": "green",
					"url": "63"
				},
				{
					"birth_year": "58BBY",
					"description": "A person within the Star Wars universe",
					"eye_color": "blue",
					"gender": "female",
					"hair_color": "black",
					"height": "170",
					"homeworld": "51",
					"id": 64,
					"mass": "56.2",
					"name": "Luminara Unduli",
					"skin_color": "yellow",
					"url": "64"
				},
				{
					"birth_year": "40BBY",
					"description": "A person within the Star Wars universe",
					"eye_color": "blue",
					"gender": "female",
					"hair_color": "black",
					"height": "166",
					"homeworld": "51",
					"id": 65,
					"mass": "50",
					"name": "Barriss Offee",
					"skin_color": "yellow",
					"url": "65"
				},
				{
					"birth_year": "unknown",
					"description": "A person within the Star Wars universe",
					"eye_color": "brown",
					"gender": "female",
					"hair_color": "brown",
					"height": "165",
					"homeworld": "8",
					"id": 66,
					"mass": "unknown",
					"name": "Dorm\u00e9",
					"skin_color": "light",
					"url": "66"
				},
				{
					"birth_year": "102BBY",
					"description": "A person within the Star Wars universe",
					"eye_color": "brown",
					"gender": "male",
					"hair_color": "white",
					"height": "193",
					"homeworld": "52",
					"id": 67,
					"mass": "80",
					"name": "Dooku",
					"skin_color": "fair",
					"url": "67"
				},
				{
					"birth_year": "67BBY",
					"description": "A person within the Star Wars universe",
					"eye_color": "brown",
					"gender": "male",
					"hair_color": "black",
					"height": "191",
					"homeworld": "2",
					"id": 68,
					"mass": "unknown",
					"name": "Bail Prestor Organa",
					"skin_color": "tan",
					"url": "68"
				},
				{
					"birth_year": "66BBY",
					"description": "A person within the Star Wars universe",
					"eye_color": "brown",
					"gender": "male",
					"hair_color": "black",
					"height": "183",
					"homeworld": "53",
					"id": 69,
					"mass": "79",
					"name": "Jango Fett",
					"skin_color": "tan",
					"url": "69"
				},
				{
					"birth_year": "unknown",
					"description": "A person within the Star Wars universe",
					"eye_color": "yellow",
					"gender": "female",
					"hair_color": "blonde",
					"height": "168",
					"homeworld": "54",
					"id": 70,
					"mass": "55",
					"name": "Zam Wesell",
					"skin_color": "fair, green, yellow",
					"url": "70"
				},
				{
					"birth_year": "unknown",
					"description": "A person within the Star Wars universe",
					"eye_color": "yellow",
					"gender": "male",
					"hair_color": "none",
					"height": "198",
					"homeworld": "55",
					"id": 71,
					"mass": "102",
					"name": "Dexter Jettster",
					"skin_color": "brown",
					"url": "71"
				},
				{
					"birth_year": "unknown",
					"description": "A person within the Star Wars universe",
					"eye_color": "black",
					"gender": "male",
					"hair_color": "none",
					"height": "229",
					"homeworld": "10",
					"id": 72,
					"mass": "88",
					"name": "Lama Su",
					"skin_color": "grey",
					"url": "72"
				},
				{
					"birth_year": "unknown",
					"description": "A person within the Star Wars universe",
					"eye_color": "black",
					"gender": "female",
					"hair_color": "none",
					"height": "213",
					"homeworld": "10",
					"id": 73,
					"mass": "unknown",
					"name": "Taun We",
					"skin_color": "grey",
					"url": "73"
				},
				{
					"birth_year": "unknown",
					"description": "A person within the Star Wars universe",
					"eye_color": "blue",
					"gender": "female",
					"hair_color": "white",
					"height": "167",
					"homeworld": "9",
					"id": 74,
					"mass": "unknown",
					"name": "Jocasta Nu",
					"skin_color": "fair",
					"url": "74"
				},
				{
					"birth_year": "unknown",
					"description": "A person within the Star Wars universe",
					"eye_color": "red, blue",
					"gender": "female",
					"hair_color": "none",
					"height": "96",
					"homeworld": "28",
					"id": 75,
					"mass": "unknown",
					"name": "R4-P17",
					"skin_color": "silver, red",
					"url": "75"
				},
				{
					"birth_year": "unknown",
					"description": "A person within the Star Wars universe",
					"eye_color": "unknown",
					"gender": "male",
					"hair_color": "none",
					"height": "193",
					"homeworld": "56",
					"id": 76,
					"mass": "48",
					"name": "Wat Tambor",
					"skin_color": "green, grey",
					"url": "76"
				},
				{
					"birth_year": "unknown",
					"description": "A person within the Star Wars universe",
					"eye_color": "gold",
					"gender": "male",
					"hair_color": "none",
					"height": "191",
					"homeworld": "57",
					"id": 77,
					"mass": "unknown",
					"name": "San Hill",
					"skin_color": "grey",
					"url": "77"
				},
				{
					"birth_year": "unknown",
					"description": "A person within the Star Wars universe",
					"eye_color": "black",
					"gender": "female",
					"hair_color": "none",
					"height": "178",
					"homeworld": "58",
					"id": 78,
					"mass": "57",
					"name": "Shaak Ti",
					"skin_color": "red, blue, white",
					"url": "78"
				},
				{
					"birth_year": "unknown",
					"description": "A person within the Star Wars universe",
					"eye_color": "green, yellow",
					"gender": "male",
					"hair_color": "none",
					"height": "216",
					"homeworld": "59",
					"id": 79,
					"mass": "159",
					"name": "Grievous",
					"skin_color": "brown, white",
					"url": "79"
				},
				{
					"birth_year": "unknown",
					"description": "A person within the Star Wars universe",
					"eye_color": "blue",
					"gender": "male",
					"hair_color": "brown",
					"height": "234",
					"homeworld": "14",
					"id": 80,
					"mass": "136",
					"name": "Tarfful",
					"skin_color": "brown",
					"url": "80"
				},
				{
					"birth_year": "unknown",
					"description": "A person within the Star Wars universe",
					"eye_color": "brown",
					"gender": "male",
					"hair_color": "brown",
					"height": "188",
					"homeworld": "2",
					"id": 81,
					"mass": "79",
					"name": "Raymus Antilles",
					"skin_color": "light",
					"url": "81"
				},
				{
					"birth_year": "unknown",
					"description": "A person within the Star Wars universe",
					"eye_color": "white",
					"gender": "female",
					"hair_color": "none",
					"height": "178",
					"homeworld": "60",
					"id": 82,
					"mass": "48",
					"name": "Sly Moore",
					"skin_color": "pale",
					"url": "82"
				}
			],
			planets: [
				{
					"climate": "arid",
					"description": "A planet.",
					"diameter": "10465",
					"gravity": "1 standard",
					"id": 1,
					"name": "Tatooine",
					"orbital_period": "304",
					"population": "200000",
					"rotation_period": "23",
					"surface_water": "1",
					"terrain": "desert",
					"url": "1"
				},
				{
					"climate": "temperate",
					"description": "A planet.",
					"diameter": "12500",
					"gravity": "1 standard",
					"id": 2,
					"name": "Alderaan",
					"orbital_period": "364",
					"population": "2000000000",
					"rotation_period": "24",
					"surface_water": "40",
					"terrain": "grasslands, mountains",
					"url": "2"
				},
				{
					"climate": "temperate, tropical",
					"description": "A planet.",
					"diameter": "10200",
					"gravity": "1 standard",
					"id": 3,
					"name": "Yavin IV",
					"orbital_period": "4818",
					"population": "1000",
					"rotation_period": "24",
					"surface_water": "8",
					"terrain": "jungle, rainforests",
					"url": "3"
				},
				{
					"climate": "frozen",
					"description": "A planet.",
					"diameter": "7200",
					"gravity": "1.1 standard",
					"id": 4,
					"name": "Hoth",
					"orbital_period": "549",
					"population": "unknown",
					"rotation_period": "23",
					"surface_water": "100",
					"terrain": "tundra, ice caves, mountain ranges",
					"url": "4"
				},
				{
					"climate": "murky",
					"description": "A planet.",
					"diameter": "8900",
					"gravity": "N/A",
					"id": 5,
					"name": "Dagobah",
					"orbital_period": "341",
					"population": "unknown",
					"rotation_period": "23",
					"surface_water": "8",
					"terrain": "swamp, jungles",
					"url": "5"
				},
				{
					"climate": "temperate",
					"description": "A planet.",
					"diameter": "118000",
					"gravity": "1.5 (surface), 1 standard (Cloud City)",
					"id": 6,
					"name": "Bespin",
					"orbital_period": "5110",
					"population": "6000000",
					"rotation_period": "12",
					"surface_water": "0",
					"terrain": "gas giant",
					"url": "6"
				},
				{
					"climate": "temperate",
					"description": "A planet.",
					"diameter": "4900",
					"gravity": "0.85 standard",
					"id": 7,
					"name": "Endor",
					"orbital_period": "402",
					"population": "30000000",
					"rotation_period": "18",
					"surface_water": "8",
					"terrain": "forests, mountains, lakes",
					"url": "7"
				},
				{
					"climate": "temperate",
					"description": "A planet.",
					"diameter": "12120",
					"gravity": "1 standard",
					"id": 8,
					"name": "Naboo",
					"orbital_period": "312",
					"population": "4500000000",
					"rotation_period": "26",
					"surface_water": "12",
					"terrain": "grassy hills, swamps, forests, mountains",
					"url": "8"
				},
				{
					"climate": "temperate",
					"description": "A planet.",
					"diameter": "12240",
					"gravity": "1 standard",
					"id": 9,
					"name": "Coruscant",
					"orbital_period": "368",
					"population": "1000000000000",
					"rotation_period": "24",
					"surface_water": "unknown",
					"terrain": "cityscape, mountains",
					"url": "9"
				},
				{
					"climate": "temperate",
					"description": "A planet.",
					"diameter": "19720",
					"gravity": "1 standard",
					"id": 10,
					"name": "Kamino",
					"orbital_period": "463",
					"population": "1000000000",
					"rotation_period": "27",
					"surface_water": "100",
					"terrain": "ocean",
					"url": "10"
				},
				{
					"climate": "temperate, arid",
					"description": "A planet.",
					"diameter": "11370",
					"gravity": "0.9 standard",
					"id": 11,
					"name": "Geonosis",
					"orbital_period": "256",
					"population": "100000000000",
					"rotation_period": "30",
					"surface_water": "5",
					"terrain": "rock, desert, mountain, barren",
					"url": "11"
				},
				{
					"climate": "temperate, arid, windy",
					"description": "A planet.",
					"diameter": "12900",
					"gravity": "1 standard",
					"id": 12,
					"name": "Utapau",
					"orbital_period": "351",
					"population": "95000000",
					"rotation_period": "27",
					"surface_water": "0.9",
					"terrain": "scrublands, savanna, canyons, sinkholes",
					"url": "12"
				},
				{
					"climate": "hot",
					"description": "A planet.",
					"diameter": "4200",
					"gravity": "1 standard",
					"id": 13,
					"name": "Mustafar",
					"orbital_period": "412",
					"population": "20000",
					"rotation_period": "36",
					"surface_water": "0",
					"terrain": "volcanoes, lava rivers, mountains, caves",
					"url": "13"
				},
				{
					"climate": "tropical",
					"description": "A planet.",
					"diameter": "12765",
					"gravity": "1 standard",
					"id": 14,
					"name": "Kashyyyk",
					"orbital_period": "381",
					"population": "45000000",
					"rotation_period": "26",
					"surface_water": "60",
					"terrain": "jungle, forests, lakes, rivers",
					"url": "14"
				},
				{
					"climate": "artificial temperate ",
					"description": "A planet.",
					"diameter": "0",
					"gravity": "0.56 standard",
					"id": 15,
					"name": "Polis Massa",
					"orbital_period": "590",
					"population": "1000000",
					"rotation_period": "24",
					"surface_water": "0",
					"terrain": "airless asteroid",
					"url": "15"
				},
				{
					"climate": "frigid",
					"description": "A planet.",
					"diameter": "10088",
					"gravity": "1 standard",
					"id": 16,
					"name": "Mygeeto",
					"orbital_period": "167",
					"population": "19000000",
					"rotation_period": "12",
					"surface_water": "unknown",
					"terrain": "glaciers, mountains, ice canyons",
					"url": "16"
				},
				{
					"climate": "hot, humid",
					"description": "A planet.",
					"diameter": "9100",
					"gravity": "0.75 standard",
					"id": 17,
					"name": "Felucia",
					"orbital_period": "231",
					"population": "8500000",
					"rotation_period": "34",
					"surface_water": "unknown",
					"terrain": "fungus forests",
					"url": "17"
				},
				{
					"climate": "temperate, moist",
					"description": "A planet.",
					"diameter": "0",
					"gravity": "1 standard",
					"id": 18,
					"name": "Cato Neimoidia",
					"orbital_period": "278",
					"population": "10000000",
					"rotation_period": "25",
					"surface_water": "unknown",
					"terrain": "mountains, fields, forests, rock arches",
					"url": "18"
				},
				{
					"climate": "hot",
					"description": "A planet.",
					"diameter": "14920",
					"gravity": "unknown",
					"id": 19,
					"name": "Saleucami",
					"orbital_period": "392",
					"population": "1400000000",
					"rotation_period": "26",
					"surface_water": "unknown",
					"terrain": "caves, desert, mountains, volcanoes",
					"url": "19"
				},
				{
					"climate": "temperate",
					"description": "A planet.",
					"diameter": "0",
					"gravity": "1 standard",
					"id": 20,
					"name": "Stewjon",
					"orbital_period": "unknown",
					"population": "unknown",
					"rotation_period": "unknown",
					"surface_water": "unknown",
					"terrain": "grass",
					"url": "20"
				},
				{
					"climate": "polluted",
					"description": "A planet.",
					"diameter": "13490",
					"gravity": "1 standard",
					"id": 21,
					"name": "Eriadu",
					"orbital_period": "360",
					"population": "22000000000",
					"rotation_period": "24",
					"surface_water": "unknown",
					"terrain": "cityscape",
					"url": "21"
				},
				{
					"climate": "temperate",
					"description": "A planet.",
					"diameter": "11000",
					"gravity": "1 standard",
					"id": 22,
					"name": "Corellia",
					"orbital_period": "329",
					"population": "3000000000",
					"rotation_period": "25",
					"surface_water": "70",
					"terrain": "plains, urban, hills, forests",
					"url": "22"
				},
				{
					"climate": "hot",
					"description": "A planet.",
					"diameter": "7549",
					"gravity": "1 standard",
					"id": 23,
					"name": "Rodia",
					"orbital_period": "305",
					"population": "1300000000",
					"rotation_period": "29",
					"surface_water": "60",
					"terrain": "jungles, oceans, urban, swamps",
					"url": "23"
				},
				{
					"climate": "temperate",
					"description": "A planet.",
					"diameter": "12150",
					"gravity": "1 standard",
					"id": 24,
					"name": "Nal Hutta",
					"orbital_period": "413",
					"population": "7000000000",
					"rotation_period": "87",
					"surface_water": "unknown",
					"terrain": "urban, oceans, swamps, bogs",
					"url": "24"
				},
				{
					"climate": "temperate",
					"description": "A planet.",
					"diameter": "9830",
					"gravity": "1 standard",
					"id": 25,
					"name": "Dantooine",
					"orbital_period": "378",
					"population": "1000",
					"rotation_period": "25",
					"surface_water": "unknown",
					"terrain": "oceans, savannas, mountains, grasslands",
					"url": "25"
				},
				{
					"climate": "temperate",
					"description": "A planet.",
					"diameter": "6400",
					"gravity": "unknown",
					"id": 26,
					"name": "Bestine IV",
					"orbital_period": "680",
					"population": "62000000",
					"rotation_period": "26",
					"surface_water": "98",
					"terrain": "rocky islands, oceans",
					"url": "26"
				},
				{
					"climate": "temperate",
					"description": "A planet.",
					"diameter": "14050",
					"gravity": "1 standard",
					"id": 27,
					"name": "Ord Mantell",
					"orbital_period": "334",
					"population": "4000000000",
					"rotation_period": "26",
					"surface_water": "10",
					"terrain": "plains, seas, mesas",
					"url": "27"
				},
				{
					"climate": "unknown",
					"description": "A planet.",
					"diameter": "0",
					"gravity": "unknown",
					"id": 28,
					"name": "unknown",
					"orbital_period": "0",
					"population": "unknown",
					"rotation_period": "0",
					"surface_water": "unknown",
					"terrain": "unknown",
					"url": "28"
				},
				{
					"climate": "arid",
					"description": "A planet.",
					"diameter": "0",
					"gravity": "0.62 standard",
					"id": 29,
					"name": "Trandosha",
					"orbital_period": "371",
					"population": "42000000",
					"rotation_period": "25",
					"surface_water": "unknown",
					"terrain": "mountains, seas, grasslands, deserts",
					"url": "29"
				},
				{
					"climate": "arid",
					"description": "A planet.",
					"diameter": "0",
					"gravity": "1 standard",
					"id": 30,
					"name": "Socorro",
					"orbital_period": "326",
					"population": "300000000",
					"rotation_period": "20",
					"surface_water": "unknown",
					"terrain": "deserts, mountains",
					"url": "30"
				},
				{
					"climate": "temperate",
					"description": "A planet.",
					"diameter": "11030",
					"gravity": "1",
					"id": 31,
					"name": "Mon Cala",
					"orbital_period": "398",
					"population": "27000000000",
					"rotation_period": "21",
					"surface_water": "100",
					"terrain": "oceans, reefs, islands",
					"url": "31"
				},
				{
					"climate": "temperate",
					"description": "A planet.",
					"diameter": "13500",
					"gravity": "1",
					"id": 32,
					"name": "Chandrila",
					"orbital_period": "368",
					"population": "1200000000",
					"rotation_period": "20",
					"surface_water": "40",
					"terrain": "plains, forests",
					"url": "32"
				},
				{
					"climate": "superheated",
					"description": "A planet.",
					"diameter": "12780",
					"gravity": "1",
					"id": 33,
					"name": "Sullust",
					"orbital_period": "263",
					"population": "18500000000",
					"rotation_period": "20",
					"surface_water": "5",
					"terrain": "mountains, volcanoes, rocky deserts",
					"url": "33"
				},
				{
					"climate": "temperate",
					"description": "A planet.",
					"diameter": "7900",
					"gravity": "1",
					"id": 34,
					"name": "Toydaria",
					"orbital_period": "184",
					"population": "11000000",
					"rotation_period": "21",
					"surface_water": "unknown",
					"terrain": "swamps, lakes",
					"url": "34"
				},
				{
					"climate": "arid, temperate, tropical",
					"description": "A planet.",
					"diameter": "18880",
					"gravity": "1.56",
					"id": 35,
					"name": "Malastare",
					"orbital_period": "201",
					"population": "2000000000",
					"rotation_period": "26",
					"surface_water": "unknown",
					"terrain": "swamps, deserts, jungles, mountains",
					"url": "35"
				},
				{
					"climate": "temperate",
					"description": "A planet.",
					"diameter": "10480",
					"gravity": "0.9",
					"id": 36,
					"name": "Dathomir",
					"orbital_period": "491",
					"population": "5200",
					"rotation_period": "24",
					"surface_water": "unknown",
					"terrain": "forests, deserts, savannas",
					"url": "36"
				},
				{
					"climate": "temperate, arid, subartic",
					"description": "A planet.",
					"diameter": "10600",
					"gravity": "1",
					"id": 37,
					"name": "Ryloth",
					"orbital_period": "305",
					"population": "1500000000",
					"rotation_period": "30",
					"surface_water": "5",
					"terrain": "mountains, valleys, deserts, tundra",
					"url": "37"
				},
				{
					"climate": "unknown",
					"description": "A planet.",
					"diameter": "unknown",
					"gravity": "unknown",
					"id": 38,
					"name": "Aleen Minor",
					"orbital_period": "unknown",
					"population": "unknown",
					"rotation_period": "unknown",
					"surface_water": "unknown",
					"terrain": "unknown",
					"url": "38"
				},
				{
					"climate": "temperate, artic",
					"description": "A planet.",
					"diameter": "14900",
					"gravity": "1",
					"id": 39,
					"name": "Vulpter",
					"orbital_period": "391",
					"population": "421000000",
					"rotation_period": "22",
					"surface_water": "unknown",
					"terrain": "urban, barren",
					"url": "39"
				},
				{
					"climate": "unknown",
					"description": "A planet.",
					"diameter": "unknown",
					"gravity": "unknown",
					"id": 40,
					"name": "Troiken",
					"orbital_period": "unknown",
					"population": "unknown",
					"rotation_period": "unknown",
					"surface_water": "unknown",
					"terrain": "desert, tundra, rainforests, mountains",
					"url": "40"
				},
				{
					"climate": "unknown",
					"description": "A planet.",
					"diameter": "12190",
					"gravity": "unknown",
					"id": 41,
					"name": "Tund",
					"orbital_period": "1770",
					"population": "0",
					"rotation_period": "48",
					"surface_water": "unknown",
					"terrain": "barren, ash",
					"url": "41"
				},
				{
					"climate": "temperate",
					"description": "A planet.",
					"diameter": "10120",
					"gravity": "0.98",
					"id": 42,
					"name": "Haruun Kal",
					"orbital_period": "383",
					"population": "705300",
					"rotation_period": "25",
					"surface_water": "unknown",
					"terrain": "toxic cloudsea, plateaus, volcanoes",
					"url": "42"
				},
				{
					"climate": "temperate",
					"description": "A planet.",
					"diameter": "unknown",
					"gravity": "1",
					"id": 43,
					"name": "Cerea",
					"orbital_period": "386",
					"population": "450000000",
					"rotation_period": "27",
					"surface_water": "20",
					"terrain": "verdant",
					"url": "43"
				},
				{
					"climate": "tropical, temperate",
					"description": "A planet.",
					"diameter": "15600",
					"gravity": "1",
					"id": 44,
					"name": "Glee Anselm",
					"orbital_period": "206",
					"population": "500000000",
					"rotation_period": "33",
					"surface_water": "80",
					"terrain": "lakes, islands, swamps, seas",
					"url": "44"
				},
				{
					"climate": "unknown",
					"description": "A planet.",
					"diameter": "unknown",
					"gravity": "unknown",
					"id": 45,
					"name": "Iridonia",
					"orbital_period": "413",
					"population": "unknown",
					"rotation_period": "29",
					"surface_water": "unknown",
					"terrain": "rocky canyons, acid pools",
					"url": "45"
				},
				{
					"climate": "unknown",
					"description": "A planet.",
					"diameter": "unknown",
					"gravity": "unknown",
					"id": 46,
					"name": "Tholoth",
					"orbital_period": "unknown",
					"population": "unknown",
					"rotation_period": "unknown",
					"surface_water": "unknown",
					"terrain": "unknown",
					"url": "46"
				},
				{
					"climate": "arid, rocky, windy",
					"description": "A planet.",
					"diameter": "unknown",
					"gravity": "1",
					"id": 47,
					"name": "Iktotch",
					"orbital_period": "481",
					"population": "unknown",
					"rotation_period": "22",
					"surface_water": "unknown",
					"terrain": "rocky",
					"url": "47"
				},
				{
					"climate": "unknown",
					"description": "A planet.",
					"diameter": "unknown",
					"gravity": "unknown",
					"id": 48,
					"name": "Quermia",
					"orbital_period": "unknown",
					"population": "unknown",
					"rotation_period": "unknown",
					"surface_water": "unknown",
					"terrain": "unknown",
					"url": "48"
				},
				{
					"climate": "temperate",
					"description": "A planet.",
					"diameter": "13400",
					"gravity": "1",
					"id": 49,
					"name": "Dorin",
					"orbital_period": "409",
					"population": "unknown",
					"rotation_period": "22",
					"surface_water": "unknown",
					"terrain": "unknown",
					"url": "49"
				},
				{
					"climate": "temperate",
					"description": "A planet.",
					"diameter": "unknown",
					"gravity": "1",
					"id": 50,
					"name": "Champala",
					"orbital_period": "318",
					"population": "3500000000",
					"rotation_period": "27",
					"surface_water": "unknown",
					"terrain": "oceans, rainforests, plateaus",
					"url": "50"
				},
				{
					"climate": "unknown",
					"description": "A planet.",
					"diameter": "unknown",
					"gravity": "unknown",
					"id": 51,
					"name": "Mirial",
					"orbital_period": "unknown",
					"population": "unknown",
					"rotation_period": "unknown",
					"surface_water": "unknown",
					"terrain": "deserts",
					"url": "51"
				},
				{
					"climate": "unknown",
					"description": "A planet.",
					"diameter": "unknown",
					"gravity": "unknown",
					"id": 52,
					"name": "Serenno",
					"orbital_period": "unknown",
					"population": "unknown",
					"rotation_period": "unknown",
					"surface_water": "unknown",
					"terrain": "rainforests, rivers, mountains",
					"url": "52"
				},
				{
					"climate": "unknown",
					"description": "A planet.",
					"diameter": "unknown",
					"gravity": "unknown",
					"id": 53,
					"name": "Concord Dawn",
					"orbital_period": "unknown",
					"population": "unknown",
					"rotation_period": "unknown",
					"surface_water": "unknown",
					"terrain": "jungles, forests, deserts",
					"url": "53"
				},
				{
					"climate": "unknown",
					"description": "A planet.",
					"diameter": "unknown",
					"gravity": "unknown",
					"id": 54,
					"name": "Zolan",
					"orbital_period": "unknown",
					"population": "unknown",
					"rotation_period": "unknown",
					"surface_water": "unknown",
					"terrain": "unknown",
					"url": "54"
				},
				{
					"climate": "frigid",
					"description": "A planet.",
					"diameter": "unknown",
					"gravity": "unknown",
					"id": 55,
					"name": "Ojom",
					"orbital_period": "unknown",
					"population": "500000000",
					"rotation_period": "unknown",
					"surface_water": "100",
					"terrain": "oceans, glaciers",
					"url": "55"
				},
				{
					"climate": "temperate",
					"description": "A planet.",
					"diameter": "unknown",
					"gravity": "1",
					"id": 56,
					"name": "Skako",
					"orbital_period": "384",
					"population": "500000000000",
					"rotation_period": "27",
					"surface_water": "unknown",
					"terrain": "urban, vines",
					"url": "56"
				},
				{
					"climate": "temperate",
					"description": "A planet.",
					"diameter": "13800",
					"gravity": "1",
					"id": 57,
					"name": "Muunilinst",
					"orbital_period": "412",
					"population": "5000000000",
					"rotation_period": "28",
					"surface_water": "25",
					"terrain": "plains, forests, hills, mountains",
					"url": "57"
				},
				{
					"climate": "temperate",
					"description": "A planet.",
					"diameter": "unknown",
					"gravity": "1",
					"id": 58,
					"name": "Shili",
					"orbital_period": "unknown",
					"population": "unknown",
					"rotation_period": "unknown",
					"surface_water": "unknown",
					"terrain": "cities, savannahs, seas, plains",
					"url": "58"
				},
				{
					"climate": "arid, temperate, tropical",
					"description": "A planet.",
					"diameter": "13850",
					"gravity": "1",
					"id": 59,
					"name": "Kalee",
					"orbital_period": "378",
					"population": "4000000000",
					"rotation_period": "23",
					"surface_water": "unknown",
					"terrain": "rainforests, cliffs, canyons, seas",
					"url": "59"
				},
				{
					"climate": "unknown",
					"description": "A planet.",
					"diameter": "unknown",
					"gravity": "unknown",
					"id": 60,
					"name": "Umbara",
					"orbital_period": "unknown",
					"population": "unknown",
					"rotation_period": "unknown",
					"surface_water": "unknown",
					"terrain": "unknown",
					"url": "60"
				}
			],
			species: [
				{
					"average_height": "180",
					"average_lifespan": "120",
					"classification": "mammal",
					"description": "A sepcies within the Star Wars universe",
					"designation": "sentient",
					"eye_colors": "brown, blue, green, hazel, grey, amber",
					"hair_colors": "blonde, brown, black, red",
					"homeworld": "1",
					"id": 1,
					"language": "Galactic Basic",
					"name": "Human",
					"people": [
						"66,67,68,74"
					],
					"skin_colors": "caucasian, black, asian, hispanic",
					"url": "1"
				},
				{
					"average_height": "n/a",
					"average_lifespan": "indefinite",
					"classification": "artificial",
					"description": "A sepcies within the Star Wars universe",
					"designation": "sentient",
					"eye_colors": "n/a",
					"hair_colors": "n/a",
					"homeworld": "2",
					"id": 2,
					"language": "n/a",
					"name": "Droid",
					"people": [
						"2,3,8,23"
					],
					"skin_colors": "n/a",
					"url": "2"
				},
				{
					"average_height": "210",
					"average_lifespan": "400",
					"classification": "mammal",
					"description": "A sepcies within the Star Wars universe",
					"designation": "sentient",
					"eye_colors": "blue, green, yellow, brown, golden, red",
					"hair_colors": "black, brown",
					"homeworld": "3",
					"id": 3,
					"language": "Shyriiwook",
					"name": "Wookie",
					"people": [
						"13,80"
					],
					"skin_colors": "gray",
					"url": "3"
				},
				{
					"average_height": "170",
					"average_lifespan": "unknown",
					"classification": "sentient",
					"description": "A sepcies within the Star Wars universe",
					"designation": "reptilian",
					"eye_colors": "black",
					"hair_colors": "n/a",
					"homeworld": "4",
					"id": 4,
					"language": "Galatic Basic",
					"name": "Rodian",
					"people": [
						"15"
					],
					"skin_colors": "green, blue",
					"url": "4"
				},
				{
					"average_height": "300",
					"average_lifespan": "1000",
					"classification": "gastropod",
					"description": "A sepcies within the Star Wars universe",
					"designation": "sentient",
					"eye_colors": "yellow, red",
					"hair_colors": "n/a",
					"homeworld": "5",
					"id": 5,
					"language": "Huttese",
					"name": "Hutt",
					"people": [
						"16"
					],
					"skin_colors": "green, brown, tan",
					"url": "5"
				},
				{
					"average_height": "66",
					"average_lifespan": "900",
					"classification": "mammal",
					"description": "A sepcies within the Star Wars universe",
					"designation": "sentient",
					"eye_colors": "brown, green, yellow",
					"hair_colors": "brown, white",
					"homeworld": "6",
					"id": 6,
					"language": "Galactic basic",
					"name": "Yoda`s species",
					"people": [
						"20"
					],
					"skin_colors": "green, yellow",
					"url": "6"
				},
				{
					"average_height": "200",
					"average_lifespan": "unknown",
					"classification": "reptile",
					"description": "A sepcies within the Star Wars universe",
					"designation": "sentient",
					"eye_colors": "yellow, orange",
					"hair_colors": "none",
					"homeworld": "7",
					"id": 7,
					"language": "Dosh",
					"name": "Trandoshan",
					"people": [
						"24"
					],
					"skin_colors": "brown, green",
					"url": "7"
				},
				{
					"average_height": "160",
					"average_lifespan": "unknown",
					"classification": "amphibian",
					"description": "A sepcies within the Star Wars universe",
					"designation": "sentient",
					"eye_colors": "yellow",
					"hair_colors": "none",
					"homeworld": "8",
					"id": 8,
					"language": "Mon Calamarian",
					"name": "Mon Calamari",
					"people": [
						"27"
					],
					"skin_colors": "red, blue, brown, magenta",
					"url": "8"
				},
				{
					"average_height": "100",
					"average_lifespan": "unknown",
					"classification": "mammal",
					"description": "A sepcies within the Star Wars universe",
					"designation": "sentient",
					"eye_colors": "orange, brown",
					"hair_colors": "white, brown, black",
					"homeworld": "9",
					"id": 9,
					"language": "Ewokese",
					"name": "Ewok",
					"people": [
						"30"
					],
					"skin_colors": "brown",
					"url": "9"
				},
				{
					"average_height": "180",
					"average_lifespan": "unknown",
					"classification": "mammal",
					"description": "A sepcies within the Star Wars universe",
					"designation": "sentient",
					"eye_colors": "black",
					"hair_colors": "none",
					"homeworld": "10",
					"id": 10,
					"language": "Sullutese",
					"name": "Sullustan",
					"people": [
						"31"
					],
					"skin_colors": "pale",
					"url": "10"
				},
				{
					"average_height": "180",
					"average_lifespan": "unknown",
					"classification": "unknown",
					"description": "A sepcies within the Star Wars universe",
					"designation": "sentient",
					"eye_colors": "red, pink",
					"hair_colors": "none",
					"homeworld": "11",
					"id": 11,
					"language": "Neimoidia",
					"name": "Neimodian",
					"people": [
						"33"
					],
					"skin_colors": "grey, green",
					"url": "11"
				},
				{
					"average_height": "190",
					"average_lifespan": "unknown",
					"classification": "amphibian",
					"description": "A sepcies within the Star Wars universe",
					"designation": "sentient",
					"eye_colors": "orange",
					"hair_colors": "none",
					"homeworld": "12",
					"id": 12,
					"language": "Gungan basic",
					"name": "Gungan",
					"people": [
						"36,37,38"
					],
					"skin_colors": "brown, green",
					"url": "12"
				},
				{
					"average_height": "120",
					"average_lifespan": "91",
					"classification": "mammal",
					"description": "A sepcies within the Star Wars universe",
					"designation": "sentient",
					"eye_colors": "yellow",
					"hair_colors": "none",
					"homeworld": "13",
					"id": 13,
					"language": "Toydarian",
					"name": "Toydarian",
					"people": [
						"40"
					],
					"skin_colors": "blue, green, grey",
					"url": "13"
				},
				{
					"average_height": "100",
					"average_lifespan": "unknown",
					"classification": "mammal",
					"description": "A sepcies within the Star Wars universe",
					"designation": "sentient",
					"eye_colors": "yellow, blue",
					"hair_colors": "none",
					"homeworld": "14",
					"id": 14,
					"language": "Dugese",
					"name": "Dug",
					"people": [
						"41"
					],
					"skin_colors": "brown, purple, grey, red",
					"url": "14"
				},
				{
					"average_height": "200",
					"average_lifespan": "unknown",
					"classification": "mammals",
					"description": "A sepcies within the Star Wars universe",
					"designation": "sentient",
					"eye_colors": "blue, brown, orange, pink",
					"hair_colors": "none",
					"homeworld": "15",
					"id": 15,
					"language": "Twi`leki",
					"name": "Twi`lek",
					"people": [
						"45,46"
					],
					"skin_colors": "orange, yellow, blue, green, pink, purple, tan",
					"url": "15"
				},
				{
					"average_height": "80",
					"average_lifespan": "79",
					"classification": "reptile",
					"description": "A sepcies within the Star Wars universe",
					"designation": "sentient",
					"eye_colors": "unknown",
					"hair_colors": "none",
					"homeworld": "16",
					"id": 16,
					"language": "Aleena",
					"name": "Aleena",
					"people": [
						"47"
					],
					"skin_colors": "blue, gray",
					"url": "16"
				},
				{
					"average_height": "100",
					"average_lifespan": "unknown",
					"classification": "unknown",
					"description": "A sepcies within the Star Wars universe",
					"designation": "sentient",
					"eye_colors": "yellow",
					"hair_colors": "none",
					"homeworld": "17",
					"id": 17,
					"language": "vulpterish",
					"name": "Vulptereen",
					"people": [
						"48"
					],
					"skin_colors": "grey",
					"url": "17"
				},
				{
					"average_height": "125",
					"average_lifespan": "unknown",
					"classification": "unknown",
					"description": "A sepcies within the Star Wars universe",
					"designation": "sentient",
					"eye_colors": "black",
					"hair_colors": "none",
					"homeworld": "18",
					"id": 18,
					"language": "Xextese",
					"name": "Xexto",
					"people": [
						"49"
					],
					"skin_colors": "grey, yellow, purple",
					"url": "18"
				},
				{
					"average_height": "200",
					"average_lifespan": "unknown",
					"classification": "unknown",
					"description": "A sepcies within the Star Wars universe",
					"designation": "sentient",
					"eye_colors": "orange",
					"hair_colors": "none",
					"homeworld": "19",
					"id": 19,
					"language": "Tundan",
					"name": "Toong",
					"people": [
						"50"
					],
					"skin_colors": "grey, green, yellow",
					"url": "19"
				},
				{
					"average_height": "200",
					"average_lifespan": "unknown",
					"classification": "mammal",
					"description": "A sepcies within the Star Wars universe",
					"designation": "sentient",
					"eye_colors": "hazel",
					"hair_colors": "red, blond, black, white",
					"homeworld": "20",
					"id": 20,
					"language": "Cerean",
					"name": "Cerean",
					"people": [
						"52"
					],
					"skin_colors": "pale pink",
					"url": "20"
				},
				{
					"average_height": "180",
					"average_lifespan": "70",
					"classification": "amphibian",
					"description": "A sepcies within the Star Wars universe",
					"designation": "sentient",
					"eye_colors": "black",
					"hair_colors": "none",
					"homeworld": "21",
					"id": 21,
					"language": "Nautila",
					"name": "Nautolan",
					"people": [
						"53"
					],
					"skin_colors": "green, blue, brown, red",
					"url": "21"
				},
				{
					"average_height": "180",
					"average_lifespan": "unknown",
					"classification": "mammal",
					"description": "A sepcies within the Star Wars universe",
					"designation": "sentient",
					"eye_colors": "brown, orange",
					"hair_colors": "black",
					"homeworld": "22",
					"id": 22,
					"language": "Zabraki",
					"name": "Zabrak",
					"people": [
						"44,54"
					],
					"skin_colors": "pale, brown, red, orange, yellow",
					"url": "22"
				},
				{
					"average_height": "unknown",
					"average_lifespan": "unknown",
					"classification": "mammal",
					"description": "A sepcies within the Star Wars universe",
					"designation": "sentient",
					"eye_colors": "blue, indigo",
					"hair_colors": "unknown",
					"homeworld": "23",
					"id": 23,
					"language": "unknown",
					"name": "Tholothian",
					"people": [
						"55"
					],
					"skin_colors": "dark",
					"url": "23"
				},
				{
					"average_height": "180",
					"average_lifespan": "unknown",
					"classification": "unknown",
					"description": "A sepcies within the Star Wars universe",
					"designation": "sentient",
					"eye_colors": "orange",
					"hair_colors": "none",
					"homeworld": "24",
					"id": 24,
					"language": "Iktotchese",
					"name": "Iktotchi",
					"people": [
						"56"
					],
					"skin_colors": "pink",
					"url": "24"
				},
				{
					"average_height": "240",
					"average_lifespan": "86",
					"classification": "mammal",
					"description": "A sepcies within the Star Wars universe",
					"designation": "sentient",
					"eye_colors": "yellow",
					"hair_colors": "none",
					"homeworld": "25",
					"id": 25,
					"language": "Quermian",
					"name": "Quermian",
					"people": [
						"57"
					],
					"skin_colors": "white",
					"url": "25"
				},
				{
					"average_height": "180",
					"average_lifespan": "70",
					"classification": "unknown",
					"description": "A sepcies within the Star Wars universe",
					"designation": "sentient",
					"eye_colors": "black, silver",
					"hair_colors": "none",
					"homeworld": "26",
					"id": 26,
					"language": "Kel Dor",
					"name": "Kel Dor",
					"people": [
						"58"
					],
					"skin_colors": "peach, orange, red",
					"url": "26"
				},
				{
					"average_height": "190",
					"average_lifespan": "unknown",
					"classification": "amphibian",
					"description": "A sepcies within the Star Wars universe",
					"designation": "sentient",
					"eye_colors": "blue",
					"hair_colors": "none",
					"homeworld": "27",
					"id": 27,
					"language": "Chagria",
					"name": "Chagrian",
					"people": [
						"59"
					],
					"skin_colors": "blue",
					"url": "27"
				},
				{
					"average_height": "178",
					"average_lifespan": "unknown",
					"classification": "insectoid",
					"description": "A sepcies within the Star Wars universe",
					"designation": "sentient",
					"eye_colors": "green, hazel",
					"hair_colors": "none",
					"homeworld": "28",
					"id": 28,
					"language": "Geonosian",
					"name": "Geonosian",
					"people": [
						"63"
					],
					"skin_colors": "green, brown",
					"url": "28"
				},
				{
					"average_height": "180",
					"average_lifespan": "unknown",
					"classification": "mammal",
					"description": "A sepcies within the Star Wars universe",
					"designation": "sentient",
					"eye_colors": "blue, green, red, yellow, brown, orange",
					"hair_colors": "black, brown",
					"homeworld": "29",
					"id": 29,
					"language": "Mirialan",
					"name": "Mirialan",
					"people": [
						"64,65"
					],
					"skin_colors": "yellow, green",
					"url": "29"
				},
				{
					"average_height": "180",
					"average_lifespan": "70",
					"classification": "reptilian",
					"description": "A sepcies within the Star Wars universe",
					"designation": "sentient",
					"eye_colors": "yellow",
					"hair_colors": "none",
					"homeworld": "30",
					"id": 30,
					"language": "Clawdite",
					"name": "Clawdite",
					"people": [
						"70"
					],
					"skin_colors": "green, yellow",
					"url": "30"
				},
				{
					"average_height": "178",
					"average_lifespan": "75",
					"classification": "amphibian",
					"description": "A sepcies within the Star Wars universe",
					"designation": "sentient",
					"eye_colors": "yellow",
					"hair_colors": "none",
					"homeworld": "31",
					"id": 31,
					"language": "besalisk",
					"name": "Besalisk",
					"people": [
						"71"
					],
					"skin_colors": "brown",
					"url": "31"
				},
				{
					"average_height": "220",
					"average_lifespan": "80",
					"classification": "amphibian",
					"description": "A sepcies within the Star Wars universe",
					"designation": "sentient",
					"eye_colors": "black",
					"hair_colors": "none",
					"homeworld": "32",
					"id": 32,
					"language": "Kaminoan",
					"name": "Kaminoan",
					"people": [
						"72,73"
					],
					"skin_colors": "grey, blue",
					"url": "32"
				},
				{
					"average_height": "unknown",
					"average_lifespan": "unknown",
					"classification": "mammal",
					"description": "A sepcies within the Star Wars universe",
					"designation": "sentient",
					"eye_colors": "unknown",
					"hair_colors": "none",
					"homeworld": "33",
					"id": 33,
					"language": "Skakoan",
					"name": "Skakoan",
					"people": [
						"76"
					],
					"skin_colors": "grey, green",
					"url": "33"
				},
				{
					"average_height": "190",
					"average_lifespan": "100",
					"classification": "mammal",
					"description": "A sepcies within the Star Wars universe",
					"designation": "sentient",
					"eye_colors": "black",
					"hair_colors": "none",
					"homeworld": "34",
					"id": 34,
					"language": "Muun",
					"name": "Muun",
					"people": [
						"77"
					],
					"skin_colors": "grey, white",
					"url": "34"
				},
				{
					"average_height": "180",
					"average_lifespan": "94",
					"classification": "mammal",
					"description": "A sepcies within the Star Wars universe",
					"designation": "sentient",
					"eye_colors": "red, orange, yellow, green, blue, black",
					"hair_colors": "none",
					"homeworld": "35",
					"id": 35,
					"language": "Togruti",
					"name": "Togruta",
					"people": [
						"78"
					],
					"skin_colors": "red, white, orange, yellow, green, blue",
					"url": "35"
				},
				{
					"average_height": "170",
					"average_lifespan": "80",
					"classification": "reptile",
					"description": "A sepcies within the Star Wars universe",
					"designation": "sentient",
					"eye_colors": "yellow",
					"hair_colors": "none",
					"homeworld": "36",
					"id": 36,
					"language": "Kaleesh",
					"name": "Kaleesh",
					"people": [
						"79"
					],
					"skin_colors": "brown, orange, tan",
					"url": "36"
				},
				{
					"average_height": "190",
					"average_lifespan": "700",
					"classification": "mammal",
					"description": "A sepcies within the Star Wars universe",
					"designation": "sentient",
					"eye_colors": "black",
					"hair_colors": "none",
					"homeworld": "37",
					"id": 37,
					"language": "Utapese",
					"name": "Pau`an",
					"people": [
						"83"
					],
					"skin_colors": "grey",
					"url": "37"
				}
			],
			starships: [
				{
					"cargo_capacity": "3000000",
					"consumables": "1 year",
					"cost_in_credits": "3500000",
					"crew": "30-165",
					"description": "A Starship",
					"hyperdrive_rating": "2.0",
					"id": 2,
					"length": "150",
					"manufacturer": "Corellian Engineering Corporation",
					"max_atmosphering_speed": "950",
					"mglt": "60",
					"model": "CR90 corvette",
					"name": "CR90 corvette",
					"passengers": "600",
					"pilots": [
						""
					],
					"starship_class": "corvette",
					"url": "2"
				},
				{
					"cargo_capacity": "36000000",
					"consumables": "2 years",
					"cost_in_credits": "150000000",
					"crew": "47,060",
					"description": "A Starship",
					"hyperdrive_rating": "2.0",
					"id": 3,
					"length": "1,600",
					"manufacturer": "Kuat Drive Yards",
					"max_atmosphering_speed": "975",
					"mglt": "60",
					"model": "Imperial I-class Star Destroyer",
					"name": "Star Destroyer",
					"passengers": "n/a",
					"pilots": [
						""
					],
					"starship_class": "Star Destroyer",
					"url": "3"
				},
				{
					"cargo_capacity": "180000",
					"consumables": "1 month",
					"cost_in_credits": "240000",
					"crew": "5",
					"description": "A Starship",
					"hyperdrive_rating": "1.0",
					"id": 5,
					"length": "38",
					"manufacturer": "Sienar Fleet Systems, Cyngus Spaceworks",
					"max_atmosphering_speed": "1000",
					"mglt": "70",
					"model": "Sentinel-class landing craft",
					"name": "Sentinel-class landing craft",
					"passengers": "75",
					"pilots": [
						""
					],
					"starship_class": "landing craft",
					"url": "5"
				},
				{
					"cargo_capacity": "1000000000000",
					"consumables": "3 years",
					"cost_in_credits": "1000000000000",
					"crew": "342,953",
					"description": "A Starship",
					"hyperdrive_rating": "4.0",
					"id": 9,
					"length": "120000",
					"manufacturer": "Imperial Department of Military Research, Sienar Fleet Systems",
					"max_atmosphering_speed": "n/a",
					"mglt": "10",
					"model": "DS-1 Orbital Battle Station",
					"name": "Death Star",
					"passengers": "843,342",
					"pilots": [
						""
					],
					"starship_class": "Deep Space Mobile Battlestation",
					"url": "9"
				},
				{
					"cargo_capacity": "100000",
					"consumables": "2 months",
					"cost_in_credits": "100000",
					"crew": "4",
					"description": "A Starship",
					"hyperdrive_rating": "0.5",
					"id": 10,
					"length": "34.37",
					"manufacturer": "Corellian Engineering Corporation",
					"max_atmosphering_speed": "1050",
					"mglt": "75",
					"model": "YT-1300 light freighter",
					"name": "Millennium Falcon",
					"passengers": "6",
					"pilots": [
						"13,14,25,31"
					],
					"starship_class": "Light freighter",
					"url": "10"
				},
				{
					"cargo_capacity": "110",
					"consumables": "1 week",
					"cost_in_credits": "134999",
					"crew": "2",
					"description": "A Starship",
					"hyperdrive_rating": "1.0",
					"id": 11,
					"length": "14",
					"manufacturer": "Koensayr Manufacturing",
					"max_atmosphering_speed": "1000km",
					"mglt": "80",
					"model": "BTL Y-wing",
					"name": "Y-wing",
					"passengers": "0",
					"pilots": [
						""
					],
					"starship_class": "assault starfighter",
					"url": "11"
				},
				{
					"cargo_capacity": "110",
					"consumables": "1 week",
					"cost_in_credits": "149999",
					"crew": "1",
					"description": "A Starship",
					"hyperdrive_rating": "1.0",
					"id": 12,
					"length": "12.5",
					"manufacturer": "Incom Corporation",
					"max_atmosphering_speed": "1050",
					"mglt": "100",
					"model": "T-65 X-wing",
					"name": "X-wing",
					"passengers": "0",
					"pilots": [
						"1,9,18,19"
					],
					"starship_class": "Starfighter",
					"url": "12"
				},
				{
					"cargo_capacity": "150",
					"consumables": "5 days",
					"cost_in_credits": "unknown",
					"crew": "1",
					"description": "A Starship",
					"hyperdrive_rating": "1.0",
					"id": 13,
					"length": "9.2",
					"manufacturer": "Sienar Fleet Systems",
					"max_atmosphering_speed": "1200",
					"mglt": "105",
					"model": "Twin Ion Engine Advanced x1",
					"name": "TIE Advanced x1",
					"passengers": "0",
					"pilots": [
						"4"
					],
					"starship_class": "Starfighter",
					"url": "13"
				},
				{
					"cargo_capacity": "250000000",
					"consumables": "6 years",
					"cost_in_credits": "1143350000",
					"crew": "279,144",
					"description": "A Starship",
					"hyperdrive_rating": "2.0",
					"id": 15,
					"length": "19000",
					"manufacturer": "Kuat Drive Yards, Fondor Shipyards",
					"max_atmosphering_speed": "n/a",
					"mglt": "40",
					"model": "Executor-class star dreadnought",
					"name": "Executor",
					"passengers": "38000",
					"pilots": [
						""
					],
					"starship_class": "Star dreadnought",
					"url": "15"
				},
				{
					"cargo_capacity": "19000000",
					"consumables": "6 months",
					"cost_in_credits": "unknown",
					"crew": "6",
					"description": "A Starship",
					"hyperdrive_rating": "4.0",
					"id": 17,
					"length": "90",
					"manufacturer": "Gallofree Yards, Inc.",
					"max_atmosphering_speed": "650",
					"mglt": "20",
					"model": "GR-75 medium transport",
					"name": "Rebel transport",
					"passengers": "90",
					"pilots": [
						""
					],
					"starship_class": "Medium transport",
					"url": "17"
				},
				{
					"cargo_capacity": "70000",
					"consumables": "1 month",
					"cost_in_credits": "unknown",
					"crew": "1",
					"description": "A Starship",
					"hyperdrive_rating": "3.0",
					"id": 21,
					"length": "21.5",
					"manufacturer": "Kuat Systems Engineering",
					"max_atmosphering_speed": "1000",
					"mglt": "70",
					"model": "Firespray-31-class patrol and attack",
					"name": "Slave 1",
					"passengers": "6",
					"pilots": [
						"22"
					],
					"starship_class": "Patrol craft",
					"url": "21"
				},
				{
					"cargo_capacity": "80000",
					"consumables": "2 months",
					"cost_in_credits": "240000",
					"crew": "6",
					"description": "A Starship",
					"hyperdrive_rating": "1.0",
					"id": 22,
					"length": "20",
					"manufacturer": "Sienar Fleet Systems",
					"max_atmosphering_speed": "850",
					"mglt": "50",
					"model": "Lambda-class T-4a shuttle",
					"name": "Imperial shuttle",
					"passengers": "20",
					"pilots": [
						"1,13,14"
					],
					"starship_class": "Armed government transport",
					"url": "22"
				},
				{
					"cargo_capacity": "6000000",
					"consumables": "2 years",
					"cost_in_credits": "8500000",
					"crew": "854",
					"description": "A Starship",
					"hyperdrive_rating": "2.0",
					"id": 23,
					"length": "300",
					"manufacturer": "Kuat Drive Yards",
					"max_atmosphering_speed": "800",
					"mglt": "40",
					"model": "EF76 Nebulon-B escort frigate",
					"name": "EF76 Nebulon-B escort frigate",
					"passengers": "75",
					"pilots": [
						""
					],
					"starship_class": "Escort ship",
					"url": "23"
				},
				{
					"cargo_capacity": "unknown",
					"consumables": "2 years",
					"cost_in_credits": "104000000",
					"crew": "5400",
					"description": "A Starship",
					"hyperdrive_rating": "1.0",
					"id": 27,
					"length": "1200",
					"manufacturer": "Mon Calamari shipyards",
					"max_atmosphering_speed": "n/a",
					"mglt": "60",
					"model": "MC80 Liberty type Star Cruiser",
					"name": "Calamari Cruiser",
					"passengers": "1200",
					"pilots": [
						""
					],
					"starship_class": "Star Cruiser",
					"url": "27"
				},
				{
					"cargo_capacity": "40",
					"consumables": "1 week",
					"cost_in_credits": "175000",
					"crew": "1",
					"description": "A Starship",
					"hyperdrive_rating": "1.0",
					"id": 28,
					"length": "9.6",
					"manufacturer": "Alliance Underground Engineering, Incom Corporation",
					"max_atmosphering_speed": "1300",
					"mglt": "120",
					"model": "RZ-1 A-wing Interceptor",
					"name": "A-wing",
					"passengers": "0",
					"pilots": [
						"29"
					],
					"starship_class": "Starfighter",
					"url": "28"
				},
				{
					"cargo_capacity": "45",
					"consumables": "1 week",
					"cost_in_credits": "220000",
					"crew": "1",
					"description": "A Starship",
					"hyperdrive_rating": "2.0",
					"id": 29,
					"length": "16.9",
					"manufacturer": "Slayn & Korpil",
					"max_atmosphering_speed": "950",
					"mglt": "91",
					"model": "A/SF-01 B-wing starfighter",
					"name": "B-wing",
					"passengers": "0",
					"pilots": [
						""
					],
					"starship_class": "Assault Starfighter",
					"url": "29"
				},
				{
					"cargo_capacity": "unknown",
					"consumables": "unknown",
					"cost_in_credits": "unknown",
					"crew": "9",
					"description": "A Starship",
					"hyperdrive_rating": "2.0",
					"id": 31,
					"length": "115",
					"manufacturer": "Corellian Engineering Corporation",
					"max_atmosphering_speed": "900",
					"mglt": "unknown",
					"model": "Consular-class cruiser",
					"name": "Republic Cruiser",
					"passengers": "16",
					"pilots": [
						""
					],
					"starship_class": "Space cruiser",
					"url": "31"
				},
				{
					"cargo_capacity": "4000000000",
					"consumables": "500 days",
					"cost_in_credits": "unknown",
					"crew": "175",
					"description": "A Starship",
					"hyperdrive_rating": "2.0",
					"id": 32,
					"length": "3170",
					"manufacturer": "Hoersch-Kessel Drive, Inc.",
					"max_atmosphering_speed": "n/a",
					"mglt": "unknown",
					"model": "Lucrehulk-class Droid Control Ship",
					"name": "Droid control ship",
					"passengers": "139000",
					"pilots": [
						""
					],
					"starship_class": "Droid control ship",
					"url": "32"
				},
				{
					"cargo_capacity": "65",
					"consumables": "7 days",
					"cost_in_credits": "200000",
					"crew": "1",
					"description": "A Starship",
					"hyperdrive_rating": "1.0",
					"id": 39,
					"length": "11",
					"manufacturer": "Theed Palace Space Vessel Engineering Corps",
					"max_atmosphering_speed": "1100",
					"mglt": "unknown",
					"model": "N-1 starfighter",
					"name": "Naboo fighter",
					"passengers": "0",
					"pilots": [
						"11,35,60"
					],
					"starship_class": "Starfighter",
					"url": "39"
				},
				{
					"cargo_capacity": "unknown",
					"consumables": "unknown",
					"cost_in_credits": "unknown",
					"crew": "8",
					"description": "A Starship",
					"hyperdrive_rating": "1.8",
					"id": 40,
					"length": "76",
					"manufacturer": "Theed Palace Space Vessel Engineering Corps, Nubia Star Drives",
					"max_atmosphering_speed": "920",
					"mglt": "unknown",
					"model": "J-type 327 Nubian royal starship",
					"name": "Naboo Royal Starship",
					"passengers": "unknown",
					"pilots": [
						"39"
					],
					"starship_class": "yacht",
					"url": "40"
				},
				{
					"cargo_capacity": "2500000",
					"consumables": "30 days",
					"cost_in_credits": "55000000",
					"crew": "1",
					"description": "A Starship",
					"hyperdrive_rating": "1.5",
					"id": 41,
					"length": "26.5",
					"manufacturer": "Republic Sienar Systems",
					"max_atmosphering_speed": "1180",
					"mglt": "unknown",
					"model": "Star Courier",
					"name": "Scimitar",
					"passengers": "6",
					"pilots": [
						"44"
					],
					"starship_class": "Space Transport",
					"url": "41"
				},
				{
					"cargo_capacity": "unknown",
					"consumables": "1 year",
					"cost_in_credits": "2000000",
					"crew": "5",
					"description": "A Starship",
					"hyperdrive_rating": "0.7",
					"id": 43,
					"length": "39",
					"manufacturer": "Theed Palace Space Vessel Engineering Corps, Nubia Star Drives",
					"max_atmosphering_speed": "2000",
					"mglt": "unknown",
					"model": "J-type diplomatic barge",
					"name": "J-type diplomatic barge",
					"passengers": "10",
					"pilots": [
						""
					],
					"starship_class": "Diplomatic barge",
					"url": "43"
				},
				{
					"cargo_capacity": "unknown",
					"consumables": "unknown",
					"cost_in_credits": "unknown",
					"crew": "unknown",
					"description": "A Starship",
					"hyperdrive_rating": "unknown",
					"id": 47,
					"length": "390",
					"manufacturer": "Botajef Shipyards",
					"max_atmosphering_speed": "unknown",
					"mglt": "unknown",
					"model": "Botajef AA-9 Freighter-Liner",
					"name": "AA-9 Coruscant freighter",
					"passengers": "30000",
					"pilots": [
						""
					],
					"starship_class": "freighter",
					"url": "47"
				},
				{
					"cargo_capacity": "60",
					"consumables": "7 days",
					"cost_in_credits": "180000",
					"crew": "1",
					"description": "A Starship",
					"hyperdrive_rating": "1.0",
					"id": 48,
					"length": "8",
					"manufacturer": "Kuat Systems Engineering",
					"max_atmosphering_speed": "1150",
					"mglt": "unknown",
					"model": "Delta-7 Aethersprite-class interceptor",
					"name": "Jedi starfighter",
					"passengers": "0",
					"pilots": [
						"10,58"
					],
					"starship_class": "Starfighter",
					"url": "48"
				},
				{
					"cargo_capacity": "unknown",
					"consumables": "unknown",
					"cost_in_credits": "unknown",
					"crew": "4",
					"description": "A Starship",
					"hyperdrive_rating": "0.9",
					"id": 49,
					"length": "47.9",
					"manufacturer": "Theed Palace Space Vessel Engineering Corps",
					"max_atmosphering_speed": "8000",
					"mglt": "unknown",
					"model": "H-type Nubian yacht",
					"name": "H-type Nubian yacht",
					"passengers": "unknown",
					"pilots": [
						"35"
					],
					"starship_class": "yacht",
					"url": "49"
				},
				{
					"cargo_capacity": "11250000",
					"consumables": "2 years",
					"cost_in_credits": "unknown",
					"crew": "700",
					"description": "A Starship",
					"hyperdrive_rating": "0.6",
					"id": 52,
					"length": "752",
					"manufacturer": "Rothana Heavy Engineering",
					"max_atmosphering_speed": "unknown",
					"mglt": "unknown",
					"model": "Acclamator I-class assault ship",
					"name": "Republic Assault ship",
					"passengers": "16000",
					"pilots": [
						""
					],
					"starship_class": "assault ship",
					"url": "52"
				},
				{
					"cargo_capacity": "240",
					"consumables": "7 days",
					"cost_in_credits": "35700",
					"crew": "3",
					"description": "A Starship",
					"hyperdrive_rating": "1.5",
					"id": 58,
					"length": "15.2",
					"manufacturer": "Huppla Pasa Tisc Shipwrights Collective",
					"max_atmosphering_speed": "1600",
					"mglt": "unknown",
					"model": "Punworcca 116-class interstellar sloop",
					"name": "Solar Sailer",
					"passengers": "11",
					"pilots": [
						""
					],
					"starship_class": "yacht",
					"url": "58"
				},
				{
					"cargo_capacity": "50000000",
					"consumables": "4 years",
					"cost_in_credits": "125000000",
					"crew": "600",
					"description": "A Starship",
					"hyperdrive_rating": "1.5",
					"id": 59,
					"length": "1088",
					"manufacturer": "Rendili StarDrive, Free Dac Volunteers Engineering corps.",
					"max_atmosphering_speed": "1050",
					"mglt": "unknown",
					"model": "Providence-class carrier/destroyer",
					"name": "Trade Federation cruiser",
					"passengers": "48247",
					"pilots": [
						"10,11"
					],
					"starship_class": "capital ship",
					"url": "59"
				},
				{
					"cargo_capacity": "50000",
					"consumables": "56 days",
					"cost_in_credits": "1000000",
					"crew": "5",
					"description": "A Starship",
					"hyperdrive_rating": "1.0",
					"id": 61,
					"length": "18.5",
					"manufacturer": "Cygnus Spaceworks",
					"max_atmosphering_speed": "2000",
					"mglt": "unknown",
					"model": "Theta-class T-2c shuttle",
					"name": "Theta-class T-2c shuttle",
					"passengers": "16",
					"pilots": [
						""
					],
					"starship_class": "transport",
					"url": "61"
				},
				{
					"cargo_capacity": "20000000",
					"consumables": "2 years",
					"cost_in_credits": "59000000",
					"crew": "7400",
					"description": "A Starship",
					"hyperdrive_rating": "1.0",
					"id": 63,
					"length": "1137",
					"manufacturer": "Kuat Drive Yards, Allanteen Six shipyards",
					"max_atmosphering_speed": "975",
					"mglt": "unknown",
					"model": "Senator-class Star Destroyer",
					"name": "Republic attack cruiser",
					"passengers": "2000",
					"pilots": [
						""
					],
					"starship_class": "star destroyer",
					"url": "63"
				},
				{
					"cargo_capacity": "unknown",
					"consumables": "unknown",
					"cost_in_credits": "unknown",
					"crew": "3",
					"description": "A Starship",
					"hyperdrive_rating": "0.5",
					"id": 64,
					"length": "29.2",
					"manufacturer": "Theed Palace Space Vessel Engineering Corps/Nubia Star Drives, Incorporated",
					"max_atmosphering_speed": "1050",
					"mglt": "unknown",
					"model": "J-type star skiff",
					"name": "Naboo star skiff",
					"passengers": "3",
					"pilots": [
						"10,35"
					],
					"starship_class": "yacht",
					"url": "64"
				},
				{
					"cargo_capacity": "60",
					"consumables": "2 days",
					"cost_in_credits": "320000",
					"crew": "1",
					"description": "A Starship",
					"hyperdrive_rating": "1.0",
					"id": 65,
					"length": "5.47",
					"manufacturer": "Kuat Systems Engineering",
					"max_atmosphering_speed": "1500",
					"mglt": "unknown",
					"model": "Eta-2 Actis-class light interceptor",
					"name": "Jedi Interceptor",
					"passengers": "0",
					"pilots": [
						"10,11"
					],
					"starship_class": "starfighter",
					"url": "65"
				},
				{
					"cargo_capacity": "110",
					"consumables": "5 days",
					"cost_in_credits": "155000",
					"crew": "3",
					"description": "A Starship",
					"hyperdrive_rating": "1.0",
					"id": 66,
					"length": "14.5",
					"manufacturer": "Incom Corporation, Subpro Corporation",
					"max_atmosphering_speed": "1000",
					"mglt": "100",
					"model": "Aggressive Reconnaissance-170 starfighte",
					"name": "arc-170",
					"passengers": "0",
					"pilots": [
						""
					],
					"starship_class": "starfighter",
					"url": "66"
				},
				{
					"cargo_capacity": "40000000",
					"consumables": "2 years",
					"cost_in_credits": "57000000",
					"crew": "200",
					"description": "A Starship",
					"hyperdrive_rating": "1.0",
					"id": 68,
					"length": "825",
					"manufacturer": "Hoersch-Kessel Drive, Inc, Gwori Revolutionary Industries",
					"max_atmosphering_speed": "unknown",
					"mglt": "unknown",
					"model": "Munificent-class star frigate",
					"name": "Banking clan frigte",
					"passengers": "unknown",
					"pilots": [
						""
					],
					"starship_class": "cruiser",
					"url": "68"
				},
				{
					"cargo_capacity": "140",
					"consumables": "7 days",
					"cost_in_credits": "168000",
					"crew": "1",
					"description": "A Starship",
					"hyperdrive_rating": "6",
					"id": 74,
					"length": "6.71",
					"manufacturer": "Feethan Ottraw Scalable Assemblies",
					"max_atmosphering_speed": "1100",
					"mglt": "unknown",
					"model": "Belbullab-22 starfighter",
					"name": "Belbullab-22 starfighter",
					"passengers": "0",
					"pilots": [
						"10,79"
					],
					"starship_class": "starfighter",
					"url": "74"
				},
				{
					"cargo_capacity": "60",
					"consumables": "15 hours",
					"cost_in_credits": "102500",
					"crew": "1",
					"description": "A Starship",
					"hyperdrive_rating": "1.0",
					"id": 75,
					"length": "7.9",
					"manufacturer": "Kuat Systems Engineering",
					"max_atmosphering_speed": "1050",
					"mglt": "unknown",
					"model": "Alpha-3 Nimbus-class V-wing starfighter",
					"name": "V-wing",
					"passengers": "0",
					"pilots": [
						""
					],
					"starship_class": "starfighter",
					"url": "75"
				}
			],
			vehicles: [
				{
					"cargo_capacity": "50000",
					"consumables": "2 months",
					"cost_in_credits": "150000",
					"crew": "46",
					"description": "A vehicle",
					"films": [
						""
					],
					"id": 4,
					"length": "36.8 ",
					"manufacturer": "Corellia Mining Corporation",
					"max_atmosphering_speed": "30",
					"model": "Digger Crawler",
					"name": "Sand Crawler",
					"passengers": "30",
					"pilots": [
						""
					],
					"url": "4",
					"vehicle_class": "wheeled"
				},
				{
					"cargo_capacity": "50",
					"consumables": "0",
					"cost_in_credits": "14500",
					"crew": "1",
					"description": "A vehicle",
					"films": [
						""
					],
					"id": 6,
					"length": "10.4 ",
					"manufacturer": "Incom Corporation",
					"max_atmosphering_speed": "1200",
					"model": "T-16 skyhopper",
					"name": "T-16 skyhopper",
					"passengers": "1",
					"pilots": [
						""
					],
					"url": "6",
					"vehicle_class": "repulsorcraft"
				},
				{
					"cargo_capacity": "5",
					"consumables": "unknown",
					"cost_in_credits": "10550",
					"crew": "1",
					"description": "A vehicle",
					"films": [
						""
					],
					"id": 7,
					"length": "3.4 ",
					"manufacturer": "SoroSuub Corporation",
					"max_atmosphering_speed": "250",
					"model": "X-34 landspeeder",
					"name": "X-34 landspeeder",
					"passengers": "1",
					"pilots": [
						""
					],
					"url": "7",
					"vehicle_class": "repulsorcraft"
				},
				{
					"cargo_capacity": "65",
					"consumables": "2 days",
					"cost_in_credits": "unknown",
					"crew": "1",
					"description": "A vehicle",
					"films": [
						""
					],
					"id": 8,
					"length": "6.4",
					"manufacturer": "Sienar Fleet Systems",
					"max_atmosphering_speed": "1200",
					"model": "Twin Ion Engine/Ln Starfighter",
					"name": "TIE/LN starfighter",
					"passengers": "0",
					"pilots": [
						""
					],
					"url": "8",
					"vehicle_class": "starfighter"
				},
				{
					"cargo_capacity": "10",
					"consumables": "none",
					"cost_in_credits": "unknown",
					"crew": "2",
					"description": "A vehicle",
					"films": [
						""
					],
					"id": 14,
					"length": "4.5",
					"manufacturer": "Incom corporation",
					"max_atmosphering_speed": "650",
					"model": "t-47 airspeeder",
					"name": "Snowspeeder",
					"passengers": "0",
					"pilots": [
						"1,18"
					],
					"url": "14",
					"vehicle_class": "airspeeder"
				},
				{
					"cargo_capacity": "none",
					"consumables": "2 days",
					"cost_in_credits": "unknown",
					"crew": "1",
					"description": "A vehicle",
					"films": [
						""
					],
					"id": 16,
					"length": "7.8",
					"manufacturer": "Sienar Fleet Systems",
					"max_atmosphering_speed": "850",
					"model": "TIE/sa bomber",
					"name": "TIE bomber",
					"passengers": "0",
					"pilots": [
						""
					],
					"url": "16",
					"vehicle_class": "space/planetary bomber"
				},
				{
					"cargo_capacity": "1000",
					"consumables": "unknown",
					"cost_in_credits": "unknown",
					"crew": "5",
					"description": "A vehicle",
					"films": [
						""
					],
					"id": 18,
					"length": "20",
					"manufacturer": "Kuat Drive Yards, Imperial Department of Military Research",
					"max_atmosphering_speed": "60",
					"model": "All Terrain Armored Transport",
					"name": "AT-AT",
					"passengers": "40",
					"pilots": [
						""
					],
					"url": "18",
					"vehicle_class": "assault walker"
				},
				{
					"cargo_capacity": "200",
					"consumables": "none",
					"cost_in_credits": "unknown",
					"crew": "2",
					"description": "A vehicle",
					"films": [
						""
					],
					"id": 19,
					"length": "2",
					"manufacturer": "Kuat Drive Yards, Imperial Department of Military Research",
					"max_atmosphering_speed": "90",
					"model": "All Terrain Scout Transport",
					"name": "AT-ST",
					"passengers": "0",
					"pilots": [
						"13"
					],
					"url": "19",
					"vehicle_class": "walker"
				},
				{
					"cargo_capacity": "10",
					"consumables": "1 day",
					"cost_in_credits": "75000",
					"crew": "2",
					"description": "A vehicle",
					"films": [
						""
					],
					"id": 20,
					"length": "7",
					"manufacturer": "Bespin Motors",
					"max_atmosphering_speed": "1500",
					"model": "Storm IV Twin-Pod",
					"name": "Storm IV Twin-Pod cloud car",
					"passengers": "0",
					"pilots": [
						""
					],
					"url": "20",
					"vehicle_class": "repulsorcraft"
				},
				{
					"cargo_capacity": "2000000",
					"consumables": "Live food tanks",
					"cost_in_credits": "285000",
					"crew": "26",
					"description": "A vehicle",
					"films": [
						""
					],
					"id": 24,
					"length": "30",
					"manufacturer": "Ubrikkian Industries Custom Vehicle Division",
					"max_atmosphering_speed": "100",
					"model": "Modified Luxury Sail Barge",
					"name": "Sail barge",
					"passengers": "500",
					"pilots": [
						""
					],
					"url": "24",
					"vehicle_class": "sail barge"
				},
				{
					"cargo_capacity": "135000",
					"consumables": "1 day",
					"cost_in_credits": "8000",
					"crew": "5",
					"description": "A vehicle",
					"films": [
						""
					],
					"id": 25,
					"length": "9.5",
					"manufacturer": "Ubrikkian Industries",
					"max_atmosphering_speed": "250",
					"model": "Bantha-II",
					"name": "Bantha-II cargo skiff",
					"passengers": "16",
					"pilots": [
						""
					],
					"url": "25",
					"vehicle_class": "repulsorcraft cargo skiff"
				},
				{
					"cargo_capacity": "75",
					"consumables": "2 days",
					"cost_in_credits": "unknown",
					"crew": "1",
					"description": "A vehicle",
					"films": [
						""
					],
					"id": 26,
					"length": "9.6",
					"manufacturer": "Sienar Fleet Systems",
					"max_atmosphering_speed": "1250",
					"model": "Twin Ion Engine Interceptor",
					"name": "TIE/IN interceptor",
					"passengers": "0",
					"pilots": [
						""
					],
					"url": "26",
					"vehicle_class": "starfighter"
				},
				{
					"cargo_capacity": "4",
					"consumables": "1 day",
					"cost_in_credits": "8000",
					"crew": "1",
					"description": "A vehicle",
					"films": [
						""
					],
					"id": 30,
					"length": "3",
					"manufacturer": "Aratech Repulsor Company",
					"max_atmosphering_speed": "360",
					"model": "74-Z speeder bike",
					"name": "Imperial Speeder Bike",
					"passengers": "1",
					"pilots": [
						"1,5"
					],
					"url": "30",
					"vehicle_class": "speeder"
				},
				{
					"cargo_capacity": "0",
					"consumables": "none",
					"cost_in_credits": "unknown",
					"crew": "0",
					"description": "A vehicle",
					"films": [
						""
					],
					"id": 33,
					"length": "3.5",
					"manufacturer": "Haor Chall Engineering, Baktoid Armor Workshop",
					"max_atmosphering_speed": "1200",
					"model": "Vulture-class droid starfighter",
					"name": "Vulture Droid",
					"passengers": "0",
					"pilots": [
						""
					],
					"url": "33",
					"vehicle_class": "starfighter"
				},
				{
					"cargo_capacity": "12000",
					"consumables": "unknown",
					"cost_in_credits": "138000",
					"crew": "4",
					"description": "A vehicle",
					"films": [
						""
					],
					"id": 34,
					"length": "31",
					"manufacturer": "Baktoid Armor Workshop",
					"max_atmosphering_speed": "35",
					"model": "Multi-Troop Transport",
					"name": "Multi-Troop Transport",
					"passengers": "112",
					"pilots": [
						""
					],
					"url": "34",
					"vehicle_class": "repulsorcraft"
				},
				{
					"cargo_capacity": "unknown",
					"consumables": "unknown",
					"cost_in_credits": "unknown",
					"crew": "4",
					"description": "A vehicle",
					"films": [
						""
					],
					"id": 35,
					"length": "9.75",
					"manufacturer": "Baktoid Armor Workshop",
					"max_atmosphering_speed": "55",
					"model": "Armoured Assault Tank",
					"name": "Armored Assault Tank",
					"passengers": "6",
					"pilots": [
						""
					],
					"url": "35",
					"vehicle_class": "repulsorcraft"
				},
				{
					"cargo_capacity": "none",
					"consumables": "none",
					"cost_in_credits": "2500",
					"crew": "1",
					"description": "A vehicle",
					"films": [
						""
					],
					"id": 36,
					"length": "2",
					"manufacturer": "Baktoid Armor Workshop",
					"max_atmosphering_speed": "400",
					"model": "Single Trooper Aerial Platform",
					"name": "Single Trooper Aerial Platform",
					"passengers": "0",
					"pilots": [
						""
					],
					"url": "36",
					"vehicle_class": "repulsorcraft"
				},
				{
					"cargo_capacity": "1800000",
					"consumables": "1 day",
					"cost_in_credits": "200000",
					"crew": "140",
					"description": "A vehicle",
					"films": [
						""
					],
					"id": 37,
					"length": "210",
					"manufacturer": "Haor Chall Engineering",
					"max_atmosphering_speed": "587",
					"model": "C-9979 landing craft",
					"name": "C-9979 landing craft",
					"passengers": "284",
					"pilots": [
						""
					],
					"url": "37",
					"vehicle_class": "landing craft"
				},
				{
					"cargo_capacity": "1600",
					"consumables": "unknown",
					"cost_in_credits": "unknown",
					"crew": "1",
					"description": "A vehicle",
					"films": [
						""
					],
					"id": 38,
					"length": "15",
					"manufacturer": "Otoh Gunga Bongameken Cooperative",
					"max_atmosphering_speed": "85",
					"model": "Tribubble bongo",
					"name": "Tribubble bongo",
					"passengers": "2",
					"pilots": [
						"10,32"
					],
					"url": "38",
					"vehicle_class": "submarine"
				},
				{
					"cargo_capacity": "2",
					"consumables": "unknown",
					"cost_in_credits": "4000",
					"crew": "1",
					"description": "A vehicle",
					"films": [
						""
					],
					"id": 42,
					"length": "1.5",
					"manufacturer": "Razalon",
					"max_atmosphering_speed": "180",
					"model": "FC-20 speeder bike",
					"name": "Sith speeder",
					"passengers": "0",
					"pilots": [
						"44"
					],
					"url": "42",
					"vehicle_class": "speeder"
				},
				{
					"cargo_capacity": "200",
					"consumables": "none",
					"cost_in_credits": "5750",
					"crew": "1",
					"description": "A vehicle",
					"films": [
						""
					],
					"id": 44,
					"length": "3.68",
					"manufacturer": "Mobquet Swoops and Speeders",
					"max_atmosphering_speed": "350",
					"model": "Zephyr-G swoop bike",
					"name": "Zephyr-G swoop bike",
					"passengers": "1",
					"pilots": [
						"11"
					],
					"url": "44",
					"vehicle_class": "repulsorcraft"
				},
				{
					"cargo_capacity": "80",
					"consumables": "unknown",
					"cost_in_credits": "unknown",
					"crew": "1",
					"description": "A vehicle",
					"films": [
						""
					],
					"id": 45,
					"length": "6.6",
					"manufacturer": "Desler Gizh Outworld Mobility Corporation",
					"max_atmosphering_speed": "800",
					"model": "Koro-2 Exodrive airspeeder",
					"name": "Koro-2 Exodrive airspeeder",
					"passengers": "1",
					"pilots": [
						"70"
					],
					"url": "45",
					"vehicle_class": "airspeeder"
				},
				{
					"cargo_capacity": "unknown",
					"consumables": "unknown",
					"cost_in_credits": "unknown",
					"crew": "1",
					"description": "A vehicle",
					"films": [
						""
					],
					"id": 46,
					"length": "6.23",
					"manufacturer": "Narglatch AirTech prefabricated kit",
					"max_atmosphering_speed": "720",
					"model": "XJ-6 airspeeder",
					"name": "XJ-6 airspeeder",
					"passengers": "1",
					"pilots": [
						"11"
					],
					"url": "46",
					"vehicle_class": "airspeeder"
				},
				{
					"cargo_capacity": "170",
					"consumables": "unknown",
					"cost_in_credits": "unknown",
					"crew": "6",
					"description": "A vehicle",
					"films": [
						""
					],
					"id": 50,
					"length": "17.4",
					"manufacturer": "Rothana Heavy Engineering",
					"max_atmosphering_speed": "620",
					"model": "Low Altitude Assault Transport/infrantry",
					"name": "LAAT/i",
					"passengers": "30",
					"pilots": [
						""
					],
					"url": "50",
					"vehicle_class": "gunship"
				},
				{
					"cargo_capacity": "40000",
					"consumables": "unknown",
					"cost_in_credits": "unknown",
					"crew": "1",
					"description": "A vehicle",
					"films": [
						""
					],
					"id": 51,
					"length": "28.82",
					"manufacturer": "Rothana Heavy Engineering",
					"max_atmosphering_speed": "620",
					"model": "Low Altitude Assault Transport/carrier",
					"name": "LAAT/c",
					"passengers": "0",
					"pilots": [
						""
					],
					"url": "51",
					"vehicle_class": "gunship"
				},
				{
					"cargo_capacity": "10000",
					"consumables": "21 days",
					"cost_in_credits": "unknown",
					"crew": "6",
					"description": "A vehicle",
					"films": [
						""
					],
					"id": 53,
					"length": "13.2",
					"manufacturer": "Rothana Heavy Engineering, Kuat Drive Yards",
					"max_atmosphering_speed": "60",
					"model": "All Terrain Tactical Enforcer",
					"name": "AT-TE",
					"passengers": "36",
					"pilots": [
						""
					],
					"url": "53",
					"vehicle_class": "walker"
				},
				{
					"cargo_capacity": "500",
					"consumables": "7 days",
					"cost_in_credits": "unknown",
					"crew": "25",
					"description": "A vehicle",
					"films": [
						""
					],
					"id": 54,
					"length": "140",
					"manufacturer": "Rothana Heavy Engineering",
					"max_atmosphering_speed": "35",
					"model": "Self-Propelled Heavy Artillery",
					"name": "SPHA",
					"passengers": "30",
					"pilots": [
						""
					],
					"url": "54",
					"vehicle_class": "walker"
				},
				{
					"cargo_capacity": "unknown",
					"consumables": "unknown",
					"cost_in_credits": "8000",
					"crew": "1",
					"description": "A vehicle",
					"films": [
						""
					],
					"id": 55,
					"length": "2",
					"manufacturer": "Huppla Pasa Tisc Shipwrights Collective",
					"max_atmosphering_speed": "634",
					"model": "Flitknot speeder",
					"name": "Flitknot speeder",
					"passengers": "0",
					"pilots": [
						"67"
					],
					"url": "55",
					"vehicle_class": "speeder"
				},
				{
					"cargo_capacity": "1000",
					"consumables": "7 days",
					"cost_in_credits": "unknown",
					"crew": "2",
					"description": "A vehicle",
					"films": [
						""
					],
					"id": 56,
					"length": "20",
					"manufacturer": "Haor Chall Engineering",
					"max_atmosphering_speed": "880",
					"model": "Sheathipede-class transport shuttle",
					"name": "Neimoidian shuttle",
					"passengers": "6",
					"pilots": [
						""
					],
					"url": "56",
					"vehicle_class": "transport"
				},
				{
					"cargo_capacity": "unknown",
					"consumables": "unknown",
					"cost_in_credits": "unknown",
					"crew": "1",
					"description": "A vehicle",
					"films": [
						""
					],
					"id": 57,
					"length": "9.8",
					"manufacturer": "Huppla Pasa Tisc Shipwrights Collective",
					"max_atmosphering_speed": "20000",
					"model": "Nantex-class territorial defense",
					"name": "Geonosian starfighter",
					"passengers": "0",
					"pilots": [
						""
					],
					"url": "57",
					"vehicle_class": "starfighter"
				},
				{
					"cargo_capacity": "10",
					"consumables": "none",
					"cost_in_credits": "15000",
					"crew": "1",
					"description": "A vehicle",
					"films": [
						""
					],
					"id": 60,
					"length": "3.5",
					"manufacturer": "Z-Gomot Ternbuell Guppat Corporation",
					"max_atmosphering_speed": "330",
					"model": "Tsmeu-6 personal wheel bike",
					"name": "Tsmeu-6 personal wheel bike",
					"passengers": "1",
					"pilots": [
						"79"
					],
					"url": "60",
					"vehicle_class": "wheeled walker"
				},
				{
					"cargo_capacity": "unknown",
					"consumables": "unknown",
					"cost_in_credits": "unknown",
					"crew": "2",
					"description": "A vehicle",
					"films": [
						""
					],
					"id": 62,
					"length": "unknown",
					"manufacturer": "unknown",
					"max_atmosphering_speed": "unknown",
					"model": "Fire suppression speeder",
					"name": "Emergency Firespeeder",
					"passengers": "unknown",
					"pilots": [
						""
					],
					"url": "62",
					"vehicle_class": "fire suppression ship"
				},
				{
					"cargo_capacity": "0",
					"consumables": "none",
					"cost_in_credits": "20000",
					"crew": "1",
					"description": "A vehicle",
					"films": [
						""
					],
					"id": 67,
					"length": "5.4",
					"manufacturer": "Colla Designs, Phlac-Arphocc Automata Industries",
					"max_atmosphering_speed": "1180",
					"model": "tri-fighter",
					"name": "Droid tri-fighter",
					"passengers": "0",
					"pilots": [
						""
					],
					"url": "67",
					"vehicle_class": "droid starfighter"
				},
				{
					"cargo_capacity": "50",
					"consumables": "3 days",
					"cost_in_credits": "12125",
					"crew": "2",
					"description": "A vehicle",
					"films": [
						""
					],
					"id": 69,
					"length": "15.1",
					"manufacturer": "Appazanna Engineering Works",
					"max_atmosphering_speed": "420",
					"model": "Oevvaor jet catamaran",
					"name": "Oevvaor jet catamaran",
					"passengers": "2",
					"pilots": [
						""
					],
					"url": "69",
					"vehicle_class": "airspeeder"
				},
				{
					"cargo_capacity": "20",
					"consumables": "none",
					"cost_in_credits": "14750",
					"crew": "2",
					"description": "A vehicle",
					"films": [
						""
					],
					"id": 70,
					"length": "7",
					"manufacturer": "Appazanna Engineering Works",
					"max_atmosphering_speed": "310",
					"model": "Raddaugh Gnasp fluttercraft",
					"name": "Raddaugh Gnasp fluttercraft",
					"passengers": "0",
					"pilots": [
						""
					],
					"url": "70",
					"vehicle_class": "air speeder"
				},
				{
					"cargo_capacity": "30000",
					"consumables": "20 days",
					"cost_in_credits": "350000",
					"crew": "20",
					"description": "A vehicle",
					"films": [
						""
					],
					"id": 71,
					"length": "49.4",
					"manufacturer": "Kuat Drive Yards",
					"max_atmosphering_speed": "160",
					"model": "HAVw A6 Juggernaut",
					"name": "Clone turbo tank",
					"passengers": "300",
					"pilots": [
						""
					],
					"url": "71",
					"vehicle_class": "wheeled walker"
				},
				{
					"cargo_capacity": "none",
					"consumables": "none",
					"cost_in_credits": "49000",
					"crew": "0",
					"description": "A vehicle",
					"films": [
						""
					],
					"id": 72,
					"length": "10.96",
					"manufacturer": "Techno Union",
					"max_atmosphering_speed": "100",
					"model": "NR-N99 Persuader-class droid enforcer",
					"name": "Corporate Alliance tank droid",
					"passengers": "4",
					"pilots": [
						""
					],
					"url": "72",
					"vehicle_class": "droid tank"
				},
				{
					"cargo_capacity": "0",
					"consumables": "none",
					"cost_in_credits": "60000",
					"crew": "0",
					"description": "A vehicle",
					"films": [
						""
					],
					"id": 73,
					"length": "12.3",
					"manufacturer": "Baktoid Fleet Ordnance, Haor Chall Engineering",
					"max_atmosphering_speed": "820",
					"model": "HMP droid gunship",
					"name": "Droid gunship",
					"passengers": "0",
					"pilots": [
						""
					],
					"url": "73",
					"vehicle_class": "airspeeder"
				},
				{
					"cargo_capacity": "20",
					"consumables": "1 day",
					"cost_in_credits": "40000",
					"crew": "1",
					"description": "A vehicle",
					"films": [
						""
					],
					"id": 76,
					"length": "3.2",
					"manufacturer": "Kuat Drive Yards",
					"max_atmosphering_speed": "90",
					"model": "All Terrain Recon Transport",
					"name": "AT-RT",
					"passengers": "0",
					"pilots": [
						""
					],
					"url": "76",
					"vehicle_class": "walker"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			traeDatosAPI: async (url, destino) => {
				// para meter los datos de la API
				try {
					
					const resp = await fetch(process.env.BACKEND_URL + url)
					//const resp = await fetch('http://localhost:3001' + url)
					const data = await resp.json()
					let llenar = {}
					llenar[destino] = data
					setStore(llenar)
					console.log("Viene de flux",data)
					return data
				} catch (error) {
					return false
				}

			},
			getMessage: async () => {
				try {
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				} catch (error) {
					return false
				}
			},
			construirObjeto: (url, objeto) => {
				const datosStore = getStore();
				if (!datosStore.hasOwnProperty(objeto)) {
					console.log("NO existe el objeto " + objeto + " en el store")
					const cumplePromesa = () => {
						return new Promise((resolve, reject) => {
							resolve(() => {
								//datosStore[objeto] = new Object() // creo el array en store
								return getActions().traeDatosAPI(url, objeto) // prometo que traigo datos del obj
							})
						})
					}
					cumplePromesa().then((datos) => {
						return datos// tengo que meter los datos recibidos en un useState del componete que los recibe para poder renderizarlo en el return

					}
					)

				} else {
					return datosStore[objeto]
				}

			},
			addFavorite: (secc, uid, atitle) => {
				const store = getStore()
				let esta = false
				if (Object.keys(store.favoritos).length === 0) { esta = false } else {
					store.favoritos.map((dato) => { if (dato.encuentra === secc + uid) { esta = true } })
				}
				if (!esta) {
					const newFav = { id: uid, clase: secc, title: atitle, encuentra: secc + uid }
					const result = store.favoritos.concat(newFav)
					setStore({ favoritos: result })
				}
			},
			delFavorite: (index) => {
				const store = getStore()
				const result = store.favoritos.filter(dato => dato.encuentra !== index);
				setStore({ favoritos: result })
			},
			esFavorite: (index) => {
				const store = getStore()
				let esta = false
				if (Object.keys(store.favoritos).length === 0) { esta = false } else {
					store.favoritos.map((dato) => { if (dato.encuentra === index) { esta = true } })
				}
				return esta
			},
		}
	};
};

export default getState;
