let stars=1000;
for (let i = 0; i < stars; i++) {
    const star = document.createElement('div');
    star.className = 'star';

    const size = Math.random()* 3+1;
    star.style.width = `${size}px`;
    star.style.height =`${size}px`;

    star.style.top = Math.random() * 100 + 'vh';
    star.style.left = Math.random() * 100 + 'vw';
    star.style.animationDelay = (Math.random() * 5) + 's';
	star.style.animationDuration = (Math.random() * 3 + 2) + 's';
 	document.body.appendChild(star);
}