$(function(){
	backgroundAnimation('#big-head',);
})

function backgroundAnimation(id){
	var container = document.querySelector(id);
	if(container!=null){
		var containerWidth = container.clientWidth;
		var skills = ['Javascript', 'CSS', 'HTML', 'Reactjs', 'Angular', 'jQuery', 'PHP', 'Drupal', 'Wordpress', 'Git', 'Asp', 'Photoshop'];
		var skillsCount = skills.length;
		
		setInterval(function(){
			var text = skills[Math.floor(Math.random()*skillsCount)];
			var dom = document.createElement('span')
			var domText = document.createTextNode(text);
			dom.className = "text";
			dom.appendChild(domText);
			container.appendChild(dom);

		},500);
	}
}
