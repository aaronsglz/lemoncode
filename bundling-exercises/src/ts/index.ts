import { calcAverage } from './average-service';
const logo = require('../images/logo-lemoncode.png');

const scores: number[] = [90, 75, 60, 85, 53, 30];
const average: number = calcAverage(scores);

document.getElementById('main').innerHTML = `Score average: ${average}`;

const img = document.createElement('img');
img.src = logo;

document.getElementById('logoContainer').appendChild(img);
