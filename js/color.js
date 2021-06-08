export class Color{
    constructor(data){
        this.create(data);

        this.render();
    }

    create(data){
        for(let key in data){
            this[key] = data [key]
        }
    }

    render(){
        const colorsBlock = $('.colors');

        colorsBlock.append(`<span id="${this.color}" class="color__pick" style="background-color:${this.code};"></span>`);
    
        let colorPicks = $('.color__pick');

        colorPicks[0].click();

        colorPicks.click(
            e => {
                const colorsName = $('.colors__name');
                colorsName.html(e.target.id);

                let currentBtn = $(e.target);
                currentBtn.addClass('shadow');
                currentBtn.siblings().removeClass('shadow');

                let carImg = $(`[data-id="${e.target.id}"]`);
                carImg.css('display', 'block');
                carImg.siblings().css('display', 'none');
            }
        );
        
    }
}