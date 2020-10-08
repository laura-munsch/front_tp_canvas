// initialisation du canvas
const canvas = document.getElementById('monCanvas');
const ctx = canvas.getContext('2d');

// ombres pour toutes les formes
ctx.shadowOffsetX = 2;
ctx.shadowOffsetY = 2;
ctx.shadowBlur = 4;
ctx.shadowColor = 'black';

// paramètres du rectangle
ctx.fillStyle = 'red';
// rectangle 
ctx.fillRect(10, 10, 200, 100);

// paramètres du polygone
ctx.lineWidth = 10;
ctx.lineCap = 'round';
ctx.strokeStyle = 'blue';
ctx.fillStyle = 'cyan';
// polygone (beginPath commence le tracée et stroke le termine)
ctx.beginPath();
ctx.moveTo(100, 150);
ctx.lineTo(200, 250);
ctx.lineTo(400, 250);
ctx.lineTo(500, 150);
ctx.fill(); // remplissage
ctx.stroke(); // tracé

// paramètres de la forme verte aux 2 carrés
ctx.strokeStyle = 'black';
ctx.fillStyle = 'orange';
ctx.lineWidth = 5;
// forme verte avec les 2 carrés
ctx.beginPath();
ctx.rect(500, 300, 90, 90);
ctx.rect(450, 250, 90, 90);
ctx.stroke();
ctx.fill();

// paramètres de l'arc de cercle
ctx.lineCap = 'square';
ctx.strokeStyle = 'purple';
ctx.lineWidth = 10;
// arc de cercle
ctx.beginPath();
ctx.arc(80, 300, 40, 1.5*Math.PI, Math.PI);
ctx.stroke();

// paramètres du texte
const temperature = '20°C';
ctx.lineWidth = 2;
ctx.fillStyle = 'grey';
ctx.font = '48px sans-serif';
ctx.textAlign = 'left';
ctx.textBaseline = 'top';
// texte
ctx.fillText(temperature, 250, 180);

// paramètres de l'image
const picpic = new Image();
picpic.src = "../img/picpic.jpg";
picpic.onload = function() {
    // image de hérisson
	ctx.drawImage(this, 320, 30, 150, 100);
};


