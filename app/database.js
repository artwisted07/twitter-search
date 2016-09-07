var loki = require('lokijs');


var db = new loki('db.json');

db.addCollection('top').insert([
  {term:'Javascript', style:'danger'},
  {term:'Angular 2', style:'success'},
  {term:'NodeJS', style:'info'},
  {term:'Golang', style:'default'},
  {term:'iOs', style:'warning'},
  {term:'ReactJS', style:'info'},
  {term:'Ionic', style:'primary'},
  {term:'REST', style:'default'},
  {term:'Authentication', style:'success'}
]);

db.addCollection('searches');

db.saveDatabase();