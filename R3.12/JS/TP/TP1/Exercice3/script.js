/*
   Objectif de l'exercice :
   
   . Savoir créer dynamiquement des éléments du DOM
   . Savoir les configurer, définir leurs propriétés
   . Savoir définir un lien parent-enfant entre deux éléments du DOM
   . Savoir lier des éléments au DOM courant pour que le navigateur les fasse apparaître.
  
   En répondant correctement aux questions de cet exercice, vous devez obtenir un rendu analogue
   au visuel objectif.jpg disponible dans le répertoire asset.

   Comme d'habitude, interdiction d'éditez directement les fichiers index.html et style.css.
   Seul le fichier script.js doit être modifié.

*/


/* Q1

   Ecrire les instructions JS qui permettent d'obtenir la même page (et le même DOM)
   que ce que vous voyez sur objectif.jpg du répertoire asset.
   
   Notez bien que c'est la partie droite d'objectif.jpg qui vous donne les bonnes informations !
*/

let section = document.createElement('section');
section.id = 'main';
document.body.appendChild(section);

let figure = document.createElement('figure');
figure.classList.add('frame');
section.appendChild(figure);

let img = document.createElement('img');
img.src = './asset/two-cats.jpg';
img.classList.add('marges', 'size');
figure.appendChild(img);

let caption = document.createElement('caption');
caption.classList.add('subtitle', 'marges');
caption.textContent = 'You souldn\'t ... They have not been claenned since many mounth...';
figure.appendChild(caption);