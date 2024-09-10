/*
    Objectif de l'exercice :
    
   
    voir asset/objectif.mp4
    
    Note : La méthode V.renderRecipe permet l'affichage d'une recette. Pas besoin de le faire.
*/



let M = {};

/* Objet recipes : 
   Il contient les données de l'application (ce qu'on appelle aussi : le modèle de l'application)
   'recipes' est un tableau d'objets.
   Chaque objet possède une structure identique et décrit une recette.
*/

M.recipes = [
    // un objet décrivant une recette
    {
        id: 'r23',
        type: ['dessert'],
        info: {
            name: "Cookies maison",
            photo: './asset/cookies.jpg',
            time: {
                preparation: 15,
                cooking: 10
            },
            cost: 'Bon marché',
            difficulty: 'Facile',
            description: "Réalisez de délicieux cookies en un clin d'oeil !"
        },

        // ingredients est un tableau d'objets, chaque objet contient le nom 
        // et la quantité d'un ingrédient de la recette
        ingredients : [
            {name:'sel', quantity:'1cac'},
            {name:'chocolat noir', quantity:'100g'},
            {name:'farine', quantity:'150g'},
            {name:'sucre vanillé', quantity:'1 sachet'},
            {name:'beurre', quantity:'85g'},
            {name:'oeuf', quantity:'1'},
            {name:'sucre', quantity:'85g'},
            {name:'levure chimique', quantity:'1cac'}
        ]
    },
    // un objet décrivant une recette
    {
        id: 'r09',
        type: ['entree', 'plat'],
        info: {
            name: "Les falafels",
            photo: './asset/falafel.jpg',
            time: {
                preparation: 10,
                cooking: 10
            },
            cost: 'Bon marché',
            difficulty: 'Facile',
            description: "Les falafels ou tamiya sont une spécialité culinaire levantine très répandue au Proche-Orient constituée de boulettes de pois chiches ou de fèves, mélangés à diverses épices, et frites dans l’huile."
        },

        // ingredients est un tableau d'objets, chaque objet contient le nom 
        // et la quantité d'un ingrédient de la recette
        ingredients : [
            {name:'poids chiches', quantity:'500g'},
            {name:"gousses d'ail", quantity:'3-4'},
            {name:'oignon', quantity:'1 demi'},
            {name:'bicarbonate', quantity:'1cac'},
            {name:'cumin', quantity:'2cac'},
            {name:'coriandre', quantity:'1 bouquet'},
            {name:'menthe', quantity:'1 bouquet'}
        ]
    },
    // un objet décrivant une recette
    {
        id: 'r65',
        type: ['entree', 'plat'],
        info: {
            name: "Saint Jacques sautées",
            photo: './asset/saint-jacques.jpg',
            time: {
                preparation: 5,
                cooking: 10
            },
            cost: 'Moyen',
            difficulty: 'Facile',
            description: "Simple, rapide et efficace. Et délcieux en plus ! Les saint jacques et leur parfum inégalable se suffisent à elles-mêmes."
        },

        // ingredients est un tableau d'objets, chaque objet contient le nom 
        // et la quantité d'un ingrédient de la recette
        ingredients : [
            {name:'saint-jacques', quantity:'8 noix'},
            {name:'ciboulette', quantity:'1 demi bouquet'},
            {name:'beurre', quantity:'50g'},
            {name:'sel', quantity:'1 pincée'},
            {name:'poivre', quantity:'1 pincée'}
        ]
    },
    // un objet décrivant une recette
    {
        id: 'r11',
        type: ['plat'],
        info: {
            name: "Tian de légumes",
            photo: './asset/tian.jpg',
            time: {
                preparation: 15,
                cooking: 120
            },
            cost: 'Bon marché',
            difficulty: 'Facile',
            description: "Le Tian est à la fois un plat en terre cuite vernissée et la préparation culinaire que l’on cuit longuement au four. C'est un plat parfait pour accompagner des grillades au cours d'un dîner estival."
        },

        // ingredients est un tableau d'objets, chaque objet contient le nom 
        // et la quantité d'un ingrédient de la recette
        ingredients : [
            {name:'courgettes', quantity:'2'},
            {name:'aubergines', quantity:'1'},
            {name:'tomates', quantity:'2'},
            {name:'oignon', quantity:'1'},
            {name:"huile d'olive", quantity:'15 cl'},
            {name:'herbes de provence', quantity:'25g'},
            {name:'sel et poivre', quantity:'1 pincée'}
        ]
    },
    // un objet décrivant une recette
    {
        id: 'r21',
        type: ['entree'],
        info: {
            name: "Taboulé Libanais",
            photo: './asset/taboule.jpg',
            time: {
                preparation: 40,
                cooking: 0
            },
            cost: 'Bon marché',
            difficulty: 'Facile',
            description: "Simple salade de boulghour assaisonnée au citron et à l’huile d’olive et agrémentée de quelques herbes."
        },

        // ingredients est un tableau d'objets, chaque objet contient le nom 
        // et la quantité d'un ingrédient de la recette
        ingredients : [
            {name:'persil plat', quantity:'1 botte'},
            {name:'menthe', quantity:'3 brins'},
            {name:'boulgour', quantity:'1 poignée'},
            {name:'oignons', quantity:'1 botte'},
            {name:'tomates', quantity:'4'},
            {name:'citron', quantity:'1'},
            {name:"huile d'olive", quantity:'15cl'},
            {name:'sel', quantity:'1 pincée'}
        ]
    },
    // un objet décrivant une recette
    {
        id: 'r5',
        type: ['plat'],
        info: {
            name: "Côte de boeuf",
            photo: './asset/cote-de-boeuf.jpg',
            time: {
                preparation: 10,
                cooking: 20
            },
            cost: 'Assez cher',
            difficulty: 'Facile',
            description: "Simple et savoureuse, la cuisson d'une belle côte de boeuf est primordiale. Saisie à la poêle, vous finirez ensuite la cuisson au four pour un résultat optimal."
        },

        // ingredients est un tableau d'objets, chaque objet contient le nom 
        // et la quantité d'un ingrédient de la recette
        ingredients : [
            {name:'côte de boeuf', quantity:'1'},
            {name:'huile', quantity:'1 bon trait'},
            {name:'sel', quantity:'1 pincée'},
            {name:'poivre', quantity:'1 pincée'},
            {name:'thym', quantity:'5 brins'}
        ]
    },
    // un objet décrivant une recette
    {
        id: 'r19',
        type: ['dessert'],
        info: {
            name: "Tarte au citron",
            photo: './asset/tarte-au-citron.jpg',
            time: {
                preparation: 20,
                cooking: 30
            },
            cost: 'Bon marché',
            difficulty: 'Facile',
            description: "Ce grand classique de la patisserie est incontournable. Sauf si vous n'aimez pas le citron."
        },

        // ingredients est un tableau d'objets, chaque objet contient le nom 
        // et la quantité d'un ingrédient de la recette
        ingredients : [
            {name:'citrons', quantity:'4'},
            {name:'oeufs', quantity:'3+2'},
            {name:'sucre semoule', quantity:'150g+70g'},
            {name:'farine', quantity:'250g'},
            {name:'beurre', quantity:'125g'},
            {name:'eau', quantity:'5cl'},
            {name:'sel', quantity:'1 pincée'}
        ]
    },
    // un objet décrivant une recette
    {
        id: 'r87',
        type: ['plat'],
        info: {
            name: "Purée Robuchon",
            photo: './asset/puree-robuchon.jpg',
            time: {
                preparation: 15,
                cooking: 25
            },
            cost: 'Bon marché',
            difficulty: 'Facile',
            description: "Avec du beurre, tout est meilleur ! Le secret ? 25% du poids des pommes de terre en beurre. Gras ? Pas autant que ça en a l'air, et moins que des frites !"
        },

        // ingredients est un tableau d'objets, chaque objet contient le nom 
        // et la quantité d'un ingrédient de la recette
        ingredients : [
            {name:'pommes de terre BF-15', quantity:'1kg'},
            {name:'beurre', quantity:'250g'},
            {name:'sel', quantity:'10g'},
            {name:'lait', quantity:'20cl'}
        ]
    }

]; // end of recipes


M.filterRecipes = function( type ){
    if (type=='all'){
        return M.recipes;
    }
    else{
        return M.recipes.filter( r => r.type.find( t => t==type ) !=undefined );
    }
}


/* Objet View
   La vue (View) désigne l'interface web. Elle contient toutes les fonctions qui permettent de 
   modifier/formater (et plus tard interagir) avec la page web (tout ou partie).
   Et oui, contrairement au précédent exercice, elle vous est donnnée vide. Mais c'est parce
   qu'il y a moins de chose à mettre dedans !
*/
let V = {}; 

V.formatOneIngredient = function(name, quantity){
    let template = document.querySelector('#ingredient_template');
    let li = template.innerHTML;
    li = li.replace('{{nom}}', name);
    li = li.replace('{{combien}}', quantity);
    return li;
}

V.formatOneRecipe = function(r){
    let template = document.querySelector('#recipe_template');
    let html = template.innerHTML;
    html = html.replace('{{url}}', r.info.photo);
    html = html.replace('{{titre}}', r.info.name);
    html = html.replace('{{temps}}', r.info.time.cooking+r.info.time.preparation);
    html = html.replace('{{niveau}}', r.info.difficulty);
    html = html.replace('{{cout}}', r.info.cost);
    html = html.replace('{{texte}}', r.info.description);

    let lis = '';
    for(let i=0; i<r.ingredients.length; i++){
        lis += this.formatOneIngredient(r.ingredients[i].name, r.ingredients[i].quantity);
    }
   
    html = html.replace('{{liste}}', lis);
    
    return html;
}

V.renderRecipe = function( data ){
    let htmlRecipe = V.formatOneRecipe(data);
    document.querySelector('.content').innerHTML = htmlRecipe;
}

V.formatOneItemMenu = function( id, name ){
    let template = document.querySelector('#item_menu_template');
    let li = template.innerHTML;
    li = li.replace('{{id}}', id);
    li = li.replace('{{nom}}', name);
    return li;
}

V.renderMenu = function( data ){
    let allHtmlItem = "";
    for(let i=0; i<data.length; i++){
        allHtmlItem += V.formatOneItemMenu(data[i].id, data[i].info.name);
    }
    document.querySelector(".sidenav ul").innerHTML = allHtmlItem;
}

V.init = function(){
    let filtres = document.querySelector('.filters');
    filtres.addEventListener('click', C.handler_clickOnFilter);
}


let C = {};

C.init = function(){
    V.init();
    V.renderMenu(M.recipes);
}


C.handler_clickOnFilter = function(ev){
    if ( ev.target.dataset.filter != undefined )
    {
        let value = ev.target.dataset.filter;
        V.renderMenu( M.filterRecipes(value) );
    }
}

C.init();