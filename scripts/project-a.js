const alloptions = ["Analysis", "Code", "ReadMe"];

const b_one = ["Digit Recognizer",
							 "https://github.com/Headieh/digit-recognizer/blob/master/digit-recognizer-analysis.pdf",
							 "https://github.com/Headieh/digit-recognizer",
							 "https://github.com/Headieh/digit-recognizer/blob/master/README.md",
							 ["Ability to train and evaluate machine learning models for classification",
							 "Common techniques for explaining complex machine learning models"]];

const b_two = ["Customer Segmentation",
							 "https://github.com/Headieh/customer-segmentation/blob/master/customer-segmentation.pdf",
							 "https://github.com/Headieh/customer-segmentation",
							 "https://github.com/Headieh/customer-segmentation/blob/master/README.md",
							 ["Ability to use statistics to solve real world business problems",
							 "Hypothesis Testing",
						 	 "Clustering"]];

const b_three = ["Marketing Analytics",
							 	"https://github.com/Headieh/marketing-analysis/blob/master/marketing-analysis.pdf",
							 	"https://github.com/Headieh/marketing-analysis",
							 	"https://github.com/Headieh/marketing-analysis/blob/master/README.md",
							 	["Hypothesis Testing","Logistic Regression"]];

let all = [b_one, b_two, b_three];

const divcontain = document.createElement('div');
divcontain.className = 'row';

for (let x = 0; x < all.length; x += 1) {
	const object = all[x];
	const divout = document.createElement('div');
	divout.className = 'col-lg-4 col-md-6 col-sm-12';
	const divin = document.createElement('div');
	divin.className = 'card project';
	let title = document.createElement('h2');
	title.textContent = object[0];
	const options = document.createElement('h6');
	let o1 = document.createElement("a");
	o1.target = '_blank';
	o1.href = object[1];
	o1.textContent = alloptions[0]
	options.appendChild(o1)
	let o2 = document.createElement("a");
	o2.target = '_blank';
	o2.href = object[2];
	o2.textContent = alloptions[1]
	options.appendChild(o2)
	let o3 = document.createElement("a");
	o3.target = '_blank';
  o3.href = object[3];
	o3.textContent = alloptions[2]
	options.appendChild(o3)
	const skill = document.createElement("p");
	skill.textContent = 'This project demonstrates';
	const uls = document.createElement('ul');

	for (let y = 0; y < object[4].length; y += 1) {
		const s = object[4][y];
		let lis = document.createElement('li');
		lis.textContent = s
		uls.appendChild(lis);
	}

	divin.appendChild(title);
	divin.appendChild(options);
	divin.appendChild(skill);
	divin.appendChild(uls);
	divout.appendChild(divin);
	console.log('divout1',divout);
	divcontain.appendChild(divout);
}

console.log('divcontain',divcontain);


const proj = document.getElementById("ap");
console.log('proj',proj);
proj.appendChild(divcontain);
