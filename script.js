const fs = require('fs');

let worldUniversities = require('./src/server/data/worldUniversities.json');
let schoolNames = require('./contry.json');

const data = [];
worldUniversities.forEach((item) => {

  const a = schoolNames.find((school) => school.country === item.country);
  if (a) {
    data.push({
      ...item,
      country_cn: a.country_cn,
      country_en: a.country_en,
    });
  }
});

fs.writeFile('./world.json', JSON.stringify(data))
