class СlassificationAnimal{
    constructor(){
    this.one = document.querySelector('.one');
    this.two = document.querySelector('.two');
    this.three = document.querySelector('.three');
    this.animal = document.querySelector('.animal');
    this.message = document.querySelector('.message');
    this.one.addEventListener('click', ()=>{ this.getValue();this.information_one()});
    this.two.addEventListener('click', ()=>{ this.getValue();this.information_two()});
    this.three.addEventListener('click', ()=>{ this.getValue();this.information_three()});
    this.message.addEventListener('click',this.removemessage.bind(this));
    }
    getValue() {
        this.select = this.animal.value;
    }

    alert_text(pos,text){
        this.message.classList.add(pos);
        this.message.innerHTML = text;
        setTimeout(()=>this.message.classList.remove(pos),3000);
    }
    
    information_one(){
        let text, pos = 'message__one';
        if (this.select === 'animal__fox') {         
            text = 'Лиса хитрый зверь';
        }
        else if (this.select === 'animal__wolf') {
            text = 'Волк вожак стаи';
        }
        else if (this.select === 'animal__peppa') {
            text = 'Кабан дикий свин';
        }
        this.alert_text(pos,text); 
    }
    information_two(){
        let text, pos = 'message__two';
        if (this.select === 'animal__fox') {
            text = 'Он ничем не отличался от ста тысяч других лисиц';
        }
        else if (this.select === 'animal__wolf') {
            text = 'Волк собирает грибы в лесу';
        }
        else if (this.select === 'animal__peppa') {
            text ='Кабан свинья, которая не поддалась на уговоры';
        }
        this.alert_text(pos,text);
    }
    information_three(){
        let text, pos = 'message__three';
        if (this.select === 'animal__fox') {
            text = 'Рыжий лис';
        }
        else if (this.select === 'animal__wolf') {
            text = 'Волк меняет шкуру, но не нрав';
        }
        else if (this.select === 'animal__peppa') {
            text = 'Кабан санитар леса';
        }
        this.alert_text(pos,text);
    }
    removemessage(){
        this.message.classList.remove('message__one');
        this.message.classList.remove('message__two');
        this.message.classList.remove('message__three');
    }
}
window.onload = new СlassificationAnimal();
