const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const menu = document.querySelector('.menu');
const alert1 = document.querySelector('.alert1');

function getValue() {
    select = menu.value;
}

one.addEventListener('click', ()=>{ getValue();se(); });
function alert_text(pos,text){
    alert1.classList.add(pos);
    alert1.innerHTML = text;
    setTimeout(()=>alert1.classList.remove(pos),3000)
}

function se(){
    let text, pos = 'one_alert';
    if (select == 'Sfox') {
        console.log('Лиса хитрый зверь');
        
        text = 'Лиса хитрый зверь';
    }
    else if (select == 'Swolf') {
        text = 'Волк вожак стаи';
    }
    else if (select == 'Speppa') {
        text = 'Кабан дикий свин';
    }
    alert_text(pos,text); 
}

two.addEventListener('click', ()=>{ getValue();ve() });
function ve(){
    let text, pos = 'two_alert';
    if (select == 'Sfox') {
        text = 'Он ничем не отличался от ста тысяч других лисиц';
    }
    else if (select == 'Swolf') {
        text = 'Волк собирает грибы в лесу';
    }
    else if (select == 'Speppa') {
        text ='Кабан свинья, которая не поддалась на уговоры';
    }
    alert_text(pos,text);
}

three.addEventListener('click', ()=>{ getValue();ge() });
function ge(){
    let text, pos = 'three_alert';
    if (select == 'Sfox') {
        text = 'Рыжий лис';
    }
    else if (select == 'Swolf') {
        text = 'Волк меняет шкуру, но не нрав';
    }
    else if (select == 'Speppa') {
        text = 'Кабан санитар леса';
    }
    alert_text(pos,text);
}