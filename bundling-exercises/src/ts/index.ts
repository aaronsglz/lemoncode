import { calcAverage } from './average-service';

const scores: number[] = [90, 75, 60, 85, 53, 30];
const average: number = calcAverage(scores);

document.getElementById('main').innerHTML = `Score average: ${average}`;
