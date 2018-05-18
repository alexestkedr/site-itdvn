		// section form START 

/* I.делаем form чтобы она открывалась.

 1) делаем самовызывающую анонимную функцию function(){};
 2) window.form = me; - создали одну глоб. переменную form
 3) объявили 2 переменые
 4) создаем метод open, который будет открывать нашу форму
    а) form.classList.remove('is-hidden'); - удаляем класс, который скрывал форму
 	б) form.classList.add('is-hidden'); - добавляем класс, который скрывал форму
ВЫВОД:Сделали два метода "me", 
тем самым будем их вызывать где нам нужно 
в любой части html-страницы 

 II. создаем обработчик события на ЗАКРЫТИЕ

1) создаем var closeButton = null; - изначальна будет пустая, не нужна.
2) closeButton = document.querySelector('.form__close-button'); - отыщем нашу кнопку
3) closeButton.addEventListener('click', onclose) - сделали событие
4) function onclose(e){ - создаем функцию
6) me.close();  - по клику нужно вызвать функцию закрытия
7. удаляем обработчик события closeButton.addEventListener('click', onСlose)
тк когда мы закроем форму (мы не будем видеть красный крестик. А раз мы его не видим
 - мы не будем им пользоваться то не нужно вешать лишние обработчики нагружать память комптьтера)
т.е. РАЗ МЫ ЗАКРЫВАЕМ ЭЛЕМЕНТ, то мы должны удалить 
все обрабочтчики события, которые были на нем завязаны!! и делается этот так
closeButton.removeEventListener('click', onСlose)
ВЫВОД: не нужно вешать обработчик события на закрытие если форма и так закрыта!!
Пока форма закрыта нам нет смысла добавлять обработчик события 
(тк в эту форму может никто и не зайдет никогда).
А когда он откроет форму, вероятность того что он закроет ее коасным крестиком высока.
Поэтому мы в методе "open"  me.open = function(){} добавляем 
событие "close" closeButton.addEventListener('click', onСlose)

1шаг. есть МЕТОД ОТКРЫТЬ

me.open = function(){
		form.classList.remove('is-hidden');


		closeButton = document.querySelector('.form__close-button');
		closeButton.addEventListener('click', onСlose)
	  
	 };

2шаг. есть МЕТОД ЗАКРЫТЬ

me.close = function(){
		form.classList.add('is-hidden');

	 };

3шаг по открытию, помимо того что мы убираем класс form.classList.remove('is-hidden');
4шаг после этого нахожу кнопку ЗАКРЫТЬ
closeButton = document.querySelector('.form__close-button');

5шаг и на нее добавляю обработчик события клик closeButton.addEventListener('click', onСlose)

6шаг по клику на кнопку закрыть, я закрываю методом me.close();
 и этот метод добавляет класс form.classList.add('is-hidden');

7 и сразу же удаляю обрабочик события closeButton.removeEventListener('click', onСlose)

*/


( function() {


	var me = {};
	var form = document.querySelector('.form-container');
    var closeButton = null;


    function onСlose(e){

    	me.close();
    	closeButton.removeEventListener('click', onСlose)
    }


	me.open = function(){
		form.classList.remove('is-hidden');


		closeButton = document.querySelector('.form__close-button');
		closeButton.addEventListener('click', onСlose)
	  
	 };


	me.close = function(){
		form.classList.add('is-hidden');

	 };


		window.form = me;
}() );