
/* 
1) делаем самовызывающую анонимную функцию function(){}; 
2) нужно добавить обработчик события клика по кнопке который будет открывать форму.
   Но перед тем как делать это, нужно убедится что вообще существует ли
   такой класс (заданный в css) чтобы верно выбрать его и затем повесить обработчик события
      a) var openFormButton = document.querySelector('.arrow-down'); - выбираем нужный класс на который будем вешать обработчик
      б) if (openFormButton) {} - если наша кнопка существует, то.. делай обработчик
      в) openFormButton.addEventListener('click', function() {
			form.open() }; - эта запись в 2 строчки и есть сам ОБРАБОТЧИК СОБЫТИЯ

3) e.preventDefault(); - отменяем действие по умолчанию
благодяря этому нажимая на стрелку форма открывается в этом же окне корректно

*/
  


( function() {

	var openFormButton = document.querySelector('.arrow-down');


	if (openFormButton) {

		openFormButton.addEventListener('click', function(e) {

			e.preventDefault();


			form.open();

		  })

		}
	
}() );