
const slider = tns({
	container: '.carousel__inner',
	items: 1,
	slideBy: 'page',
	autoplay: false,
	controls:false,
	nav:false

});

document.querySelector('.next').addEventListener('click',()=>{
	slider.goTo('next');
})
document.querySelector('.prev').addEventListener('click',()=>{
	slider.goTo('prev');
})