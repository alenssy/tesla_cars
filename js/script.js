import {XHR} from './XHR.js';
import {Color} from './color.js';
import {Car} from './car.js';

XHR.xhr();

export let createColorData = (colors) => {
    const colorCodes = ['#2E2E2E', '#43424F', '#000000', '#212252', '#A8A1A2', '#ECEBEC', '#c31130', '#F68B28', '#FBB842', '#BBCBD0', '#0F93DA', '#3d7866'];

    Object.keys(colors).forEach((color, index) => {
        new Color({color: color, img: colors[color], code: colorCodes[index]});
        new Car({color: color, img: colors[color]});
    })
}