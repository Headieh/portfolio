const feOptions = ["Site", "Code", "ReadMe"];

const feTwo = ["This Portfolio",
  "https://hngodwin.com",
  "https://github.com/Headieh/Portfolio",
  "https://github.com/Headieh/Portfolio/blob/master/README.md",
  ["Use of Gulp",
    "User-Friendly Webpage",
    "Proper use of elements",
    "Web Form Features",
    "Basic elements of client-server architecture"
  ]
];

const feOne = ["Travel Plans",
  "https://nichole-travel.netlify.app",
  "https://github.com/Headieh/travel-UW3",
  "https://github.com/Headieh/travel-UW3/blob/master/README.md",
  ["Sass Language extension",
    "Bootstrap4",
    "JavaScript functions",
    "Use of Dynamic data from an API",
    "Organizing code using Vue, a front-end JavaScript Framework",
    "Transitions and Animations",
    "SEO Principles"
  ]
];

const feThree = ["Adopt-a-Dog",
  "https://headieh.github.io/adopt-a-dog/",
  "https://github.com/Headieh/adopt-a-dog/",
  "https://github.com/Headieh/adopt-a-dog/blob/master/README.md",
  ["JavaScript fundamentals and ability to make dynamic sites interactive",
    "Best practices and core concepts of responsive design: mobile-first design, \
								 fluid layouts, and media queries",
    "Principles of effective user experience",
    "Media playback with media elements",
    "Accessibility Features",
    "Custom styling, including web fonts"
  ]
];

const feProj = document.getElementById("fep");
let feAll = [feThree, feTwo, feOne];

for (let x = 0; x < feAll.length; x += 1) {
  const object = feAll[x];
  const divout = document.createElement('div');
  divout.className = 'col-lg-4 col-md-6 col-sm-12';
  const divin = document.createElement('div');
  divin.className = 'card project';
  let title = document.createElement('h2');
  title.textContent = object[0];
  const options = document.createElement('h6');
  let o1 = document.createElement("a");
  o1.href = object[1];
  o1.textContent = feOptions[0]
  options.appendChild(o1)
  let o2 = document.createElement("a");
  o2.target = '_blank';
  o2.href = object[2];
  o2.textContent = feOptions[1]
  options.appendChild(o2)
  let o3 = document.createElement("a");
  o3.target = '_blank';
  o3.href = object[3];
  o3.textContent = feOptions[2]
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
  feProj.insertBefore(divout, feProj.firstChild);
  console.log('divout', divout);
}
