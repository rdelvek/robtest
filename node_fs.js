var Faker = require('Faker'); 
var fs = require('fs');
var shell = require('shelljs');

let mainDir = '../../testdir1';

// remove mainDir and all subdirs
shell.rm(`-rf`, `${mainDir}*`);

// make new die
let newDir = `${mainDir}/newDir`;
shell.mkdir('-p', newDir);

// write the json file
fs.writeFile(`${mainDir}/get.json`, JSON.stringify({id: 1, name: "test"}, null, 2));

// get fake company name
let newCompany = Faker.Company.companyName();
