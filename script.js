let water=99999999,milk=999999,beans=99999,money=550,cups=999;
process: while (true){
	console.log ("Write action (buy, fill, take, remaining, exit)");
	let userCommand = prompt();
	switch (userCommand){
		case "buy":
		buy();
		break;
		case "fill":
		fill();
		break;
		case "take":
		take();
		break;
		case "remaining":
		showInfo();
		break;
		case "exit":
		break process;
		break;
	}
}
function buy(){
	console.log("What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino:");
	let userBuyChoice = prompt();
	
	if (water <200)
		console.log('Sorry, not enough water!');
	else if (milk < 50)
		console.log('Sorry, not enough milk!');
	else if (beans<10)
		console.log('Sorry, not enough beans!');
	else if (cups == 0)
		console.log('Sorry, not enough cups!');
	else{
		switch (userBuyChoice){
			case '1':
			console.log('What size of a cup do You want?');
			console.log('1 - 275ml, 2 - 350ml, 3 - 400ml');
			userCupSize = prompt();
			switch (userCupSize){
				case '1':
				if (water >=250 && beans>=16){
					water=water-250;
					beans=beans-16;
					money=money+4;
					cups--;
					console.log("I have enough resources, making you a coffee!");
				}
				else{
					if (water <250)
						console.log('Sorry, not enough water!');
					else if (beans<16)
						console.log('Sorry, not enough beans!');
				}
				break;

				case '2':
				if (water >=330 && beans>=20){
					water=water-330;
					beans=beans-20;
					money=money+5;
					cups--;
					console.log("I have enough resources, making you a coffee!");
				}
				else{
					if (water <330)
						console.log('Sorry, not enough water!');
					else if (beans<20)
						console.log('Sorry, not enough beans!');
				}
				break;

				case '3':
				if (water >=375 && beans>=30){
					water=water-375;
					beans=beans-30;
					money=money+6;
					cups--;
					console.log("I have enough resources, making you a coffee!");
				}
				if (water <375)
					console.log('Sorry, not enough water!');
				else if (beans<30)
					console.log('Sorry, not enough beans!');
				break;
			}
			break;

			case '2':
			console.log('What size of a cup do You want?');
			console.log('1 - 275ml, 2 - 350ml, 3 - 400ml');
			userCupSize = prompt();
			switch (userCupSize){
				case '1':
				if (water >=200 && beans>=10 && milk >=50){
					water=water-200;
					milk=milk-50;
					beans=beans-10;
					money=money+5;
					cups--;
					console.log("I have enough resources, making you a coffee!");
				}
				if (water <200)
					console.log('Sorry, not enough water!');
				else if (milk < 50)
					console.log('Sorry, not enough milk!');
				else if (beans<10)
					console.log('Sorry, not enough beans!');
				break;

				case '2':
				if (water >=300 && beans>=15 && milk >=60){
					water=water-300;
					milk=milk-60;
					beans=beans-15;
					money=money+6;
					cups--;
					console.log("I have enough resources, making you a coffee!");
				}
				if (water <300)
					console.log('Sorry, not enough water!');
				else if (milk < 60){
					console.log('Sorry, not enough milk!');
				}
				else if (beans<15){
					console.log('Sorry, not enough beans!');
				}
				break;

				case '3':
				if (water >=300 && beans>=20 && milk >=75){
					water=water-300;
					milk=milk-75;
					beans=beans-20;
					money=money+7;
					cups--;
					console.log("I have enough resources, making you a coffee!");
				}
				if (water <300)
					console.log('Sorry, not enough water!');
				else if (milk < 75)
					console.log('Sorry, not enough milk!');
				else if (beans<20)
					console.log('Sorry, not enough beans!');
				break;
			}
			break;

			case '3':
			console.log('What size of a cup do You want?');
			console.log('1 - 275ml, 2 - 350ml, 3 - 400ml');
			userCupSize = prompt();
			switch (userCupSize){
				case '1':
				if (water >=250 && beans>=12 && milk>=50){
					water=water-250;
					milk=milk-50;
					beans=beans-12;
					money=money+5;
					cups--;
					console.log("I have enough resources, making you a coffee!");
				}
				if (water <250)
					console.log('Sorry, not enough water!');
				else if (milk < 50){
					console.log('Sorry, not enough milk!');
				}
				else if (beans<12){
					console.log('Sorry, not enough beans!');
				}
				break;

				case '2':
				if (water >=250 && beans>=16 && milk>=100){
					water=water-250;
					milk=milk-100;
					beans=beans-16;
					money=money+6;
					cups--;
					console.log("I have enough resources, making you a coffee!");
				}
				if (water <250)
					console.log('Sorry, not enough water!');
				else if (milk < 100){
					console.log('Sorry, not enough milk!');
				}
				else if (beans<16){
					console.log('Sorry, not enough beans!');
				}
				break;

				case '3':
				if (water >=275 && beans>=20 && milk>=150){
					water=water-200;
					milk=milk-100;
					beans=beans-20;
					money=money+6;
					cups--;
					console.log("I have enough resources, making you a coffee!");
				}
				if (water <275)
					console.log('Sorry, not enough water!');
				else if (milk < 150){
					console.log('Sorry, not enough milk!');
				}
				else if (beans<20){
					console.log('Sorry, not enough beans!');
				}
				break;
			}
			break;
		}
	}
}

function fill(){
	console.log(`Write how many ml of water you want to add:`);
	let add = prompt();
	water=+add + +water;
	console.log(`Write how many ml of milk you want to add:`);
	add = prompt();
	milk=+milk+ +add;
	console.log(`Write how many grams of coffee beans you want to add:`);
	add = prompt();
	beans=+beans+ +add;
	console.log(`Write how many disposable coffee cups you want to add:`);
	add = prompt();
	cups=+cups+ +add;
}
function take(){
	console.log(`I gave you $${money}`);
	money=0;
}
function showInfo(){
	console.log(`The coffee machine has:`);
	console.log(`${water} ml of water`);
	console.log(`${milk} ml of milk`);
	console.log(`${beans} g of beans`);
	console.log(`${cups} disposable cups`);
	console.log(`$${money} of money`);
}
