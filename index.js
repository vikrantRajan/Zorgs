// Define variables
let zorgs = {
  totalZorgs: 0,
  zags: 1,
  zigs: 1,
  families: 1,
  totalZorgChildren: 0,
  year: 0,
};

let zagProportion;
let zigProportion;
let text = document.getElementById("text");

// Process & Update Data
const processZorgData = () => {
  zorgs.totalZorgs = zorgs.zags + zorgs.zigs;
  if (zorgs.zigs >= zorgs.zags) {
    zorgs.families = zorgs.zags;
  } else {
    zorgs.families = zorgs.zigs;
  }
  zagProportion = Math.round((100 * zorgs.zags) / zorgs.totalZorgs);
  zigProportion = Math.round((100 * zorgs.zigs) / zorgs.totalZorgs);

  text.innerHTML =
    "Total Zorgs: " +
    zorgs.totalZorgs +
    "<hr>" +
    "Total Zags: " +
    zorgs.zags +
    "<hr>" +
    "Total Zigs: " +
    zorgs.zigs +
    "<hr>" +
    "Total Families: " +
    zorgs.families +
    "<hr>" +
    "Year: " +
    zorgs.year +
    "<hr>" +
    "Zags:Zigs = " +
    zagProportion +
    "%   :   " +
    zigProportion +
    "%";
};

processZorgData();

// Populate
let button = () => {
  zorgs.year++;
  let family = [];
  let resetFamily = true;
  let curZigs = 0;
  let curZags = 0;
  let curChildren = 0;
  for (let i = 0; i < zorgs.families; i++) {
    let childGender = Math.random();
    if (resetFamily == true) {
      curZigs = 0;
      curZags = 0;
      curChildren = 0;
    }

    if (childGender > 0.5) {
      // Zig is born
      curZigs++;
      curChildren++;
      zorgs.zigs++;
      zorgs.totalZorgs++;
      zorgs.totalZorgChildren++;
      i--; // Run loop again cause a male was born
      resetFamily = false;
    } else {
      // Zag is born
      resetFamily = true;

      curZags++;
      curChildren++;

      zorgs.zags++;
      zorgs.totalZorgs++;
      zorgs.totalZorgChildren++;

      family[i] = {
        id: i,
        zags: curZags + 1,
        zigs: curZigs + 1,
        children: curChildren,
        familyPopulation: curChildren + 2,
      };
    }
  }
  console.log(family);
  processZorgData();
};
