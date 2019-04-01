class СlassificationAnimal {
    constructor(messageId, ...text) {
        this.messageId = messageId;
        this.text = text;
        this.messages  = [...document.querySelectorAll('.message')];
        this.selectValue = document.querySelector("#animal").value;
        this.textAnimal = {
            "animal__fox": [
                'Лиса хитрый зверь',
                'Он ничем не отличался от ста тысяч других лисиц',
                'Рыжий лис'
            ],
            "animal__wolf": [
                'Волк вожак стаи',
                'Волк собирает грибы в лесу',
                'Волк меняет шкуру, но не нрав'
            ],
            "animal__peppa": [
                'Кабан дикий свин',
                'Кабан свинья, которая не поддалась на уговоры',
                'Кабан санитар леса'
            ]
        }
        this.messages.forEach((elem, i) => {
            elem.onclick = () => {
                let message = new СlassificationAnimal(i, ...this.textAnimal[this.selectValue])
                message.getMessage();         
            }
        })       
    }
    getMessage(){
        let message = document.createElement('div');
        message.className = 'message__' + (this.messageId+1);
        message.innerHTML = this.text[this.messageId];
        document.body.appendChild(message);
        message.onclick = event => event.target.remove();
        setTimeout(()=> message.remove(), 3000);
    }
}
window.onload = new СlassificationAnimal();
