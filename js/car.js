export class Car{
    constructor(data){ 
        this.create(data);
        this.render();
    }

    create(data){
        for(let key in data){
            this[key] = data[key]
        }
    }

    render(){
        const carBlock = $('.car__block');

        carBlock.append(`<img src="${this.img}" data-id="${this.color}" width="500" alt="${this.color} car">`);

    }
}