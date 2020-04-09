$(document).ready(main);

var contador = 1;
 
function main(){
	$('.menu_bar').click(function(){
		// $('nav').toggle(); 
 
		if(contador == 1){
			$('nav').animate({
				left: '0'
			});
			$('nav').css({
				'background-color':'#fff',
				'max-height':'300px',
				'width':'18rem'
			});
			$('contenedor-redes-sociales').css({
				'display': 'none'
			})
		
			contador = 0;
		} else {
			contador = 1;
			$('nav').animate({
				left: '-100%'
			});
			
			
		}
 
	});
 
}; 