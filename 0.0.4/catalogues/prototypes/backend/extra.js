// Mise à zéro des filtres et de la fonction de recherche avancée 'Et/Ou'

var filters = [];
var toggle = 0;

// Transformations CSV vers HTML
window.onload = function() {
    
    // -----> Filtres principaux
    Papa.parse("../data/filtres.csv", { 
        download: true,
        delimiter: ",",
        skipEmptyLines: true,
        complete: results => {
            htmlFilterGenerator(results.data);
        }
    });    
    
    // -----> Filtres secondaire
    Papa.parse("../data/s_filtres.csv", { 
        download: true,
        delimiter: ",",
        skipEmptyLines: true,
        complete: results => {
            html_s_FilterGenerator(results.data);
        }
    }); 
    
    // -----> Données de votre liste de projet - Gridcard
    Papa.parse("../data/data.csv", { 
        download: true,
        delimiter: ",",
        skipEmptyLines: true,
        complete: results => {
            htmlTableGenerator(results.data);
        }
    });    
       
    // -----> Vos paramètres
    Papa.parse("../data/parametres.csv", { 
        download: true,
        delimiter: ";",
        skipEmptyLines: true,
        complete: results => {
            htmlParamGenerator(results.data);
        }
    });     
       
    // -----> Lancement du script starter - Ecoute des actions sur boutons par exemple
    var extra_js = document.createElement('script');

    extra_js.setAttribute('src','../backend/starter.js');

    document.head.appendChild(extra_js);
}







// ========== LES FONCTIONS DE CREATION HTML =============


// -----> Créée le filtres principaux
function htmlFilterGenerator(content) {
    
    const all = "'all'"
    
    let grid_filter = document.getElementById('grid-filter');
    
    let html = "";
    
    const data = content.slice(1);
    
    data.forEach(function(row, index) {    
        html += '<button class="btn neumorphic-btn" onclick="modifFilters(this,' + data[index][0] + ')"> ' + data[index][1] + '</button>';
    });

    grid_filter.innerHTML = html;
}



// -----> Créée le filtres secondaires
function html_s_FilterGenerator(content) {

    let grid_s_filter = document.getElementById('colorNav');

    let html = '<ul>';
    
    const data = content.slice(0);
    
    data.forEach(function(row, index) {    
        html += '<li>';
        html += '<button descr="' + data[index][1] + '" class="neumorphic-btn ' + data[index][2] + ' tooltip" onclick="modifFilters(this,' + data[index][0] + ')"></button>';
        html += '</li>';
    });
    
    html += '</ul>';   
    
    grid_s_filter.innerHTML = html;
}



// -----> Créée les gridcards depuis le fichier data.csv
function htmlTableGenerator(content) {   
    
    let grid_preview = document.getElementById('grid-preview');
    
    let html = '<div style="text-align: center; justify-content: center;"  id="grid-show" class="grid-container">';
    
    const data = content.slice(1);
    
    data.forEach(function(row, index) {
            html += '<div class="container filterDiv ' + data[index][3] + '">';
               html += '<a href="' + data[index][2] + '" target="_blank">'; 
                    html += '<div class="column_catalog">';
                        if(typeof data[index][4]=="string"){html += '<div class="img_grid"><img class="img_toto" src="' + data[index][4] + '"></div>';} else {html += '<div class="img_grid"><img class="img_toto" src="https://cdn.pixabay.com/photo/2015/07/05/10/18/tree-832079__340.jpg"></div>';}
                        html += '<div class="product tumbnail">';
                            html += '<p>' + data[index][0] + '</p>';
                        html += '</div>';
                    html += '</div>';
                html += '</a>';
                html += '<a href="' + data[index][2] + '" target="_blank"><div class="overlay"><div class="text"><p>' + data[index][1] + '</p></div></div></a>';
            html += '</div>';
    });

    html += '</div>';

    grid_preview.innerHTML = html;
}



// -----> Créée l'encadré des paramètres avancés
function htmlParamGenerator(content) {

    const data = content.slice(0);
    
    let param_zone = document.getElementById('param-zone');   
    
    let html = '<details id="param-detail" class="note"><summary>Paramètre avancé de recherche</summary>';    
    

    // -----> Ajouter ce catalogue à votre site internet - lien iframe
    
    let ifram_code = '<code><</code><code>iframe src="' + data[1][1] +'" width="100%" height="900" frameborder="0" loading="lazy"><</code><code>/iframe></code>';
    
    html += '<details class="tip"><summary>Utiliser ce catalogue sur votre site</summary>';
    
    html += '<ul><li><p>Voici la balise html permettant son import, largeur et hauteur sont modifiables :</p>';
    
    html += ifram_code;
    
    html += "</li><li><p>Plus d'informations et de contenus sur le dépôt git (lien en haut de cette page)</p></li></ul>";
    
    html += "</details>";
    
      
    // -----> Activer la recherche croisée - A SORTIR DE CE BLOC PARAMETRES
    
    html += '<details class="tip"><summary>Activer la recherche combinée</summary>';
    
    html += '<div class="item">';
        
    html += '<p style="font-style: italic; padding-left:15px;"> • Activer la recherche dite "Ou" moins exigeante que "Et", elle recoupe plus de résultats au détriment de la précision.</p>';
        
    html += '<label id="combo-search-switch" title="Recherche combinée" class="switch"><input onclick="toggle_search_or_and();" type="checkbox"><span id="span-toggle" class="slider round"></span></label></div>';
    
    html += "</details>";   
    
    html += "</details>";
    
    param_zone.innerHTML = html;
      
       
    // -----> Ajouter un projet - lien git
    
    let add_project = document.getElementById('add-project'); 
    
    html = '<a href="' + data[0][1] + '" target="_blank"><button class="btn neumorphic-btn" style="width:100%;"><i class="fa-solid fa-pen"></i> Ajouter votre projet</button></a><br><br>';

    add_project.innerHTML = html;    
    
    
    // -----> Copyright
    
    let copyright_zone = document.getElementById('copyright-zone'); 
    
    html = data[2][1];

    copyright_zone.innerHTML = html;  
}





// ========== LES FONCTIONS POUR ACTIONS SUR FILTRES DES GRIDCARDS =============


// -----> Supprime la class 'show' si existante sinon ajouter cette classe
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}



// -----> Change la valeur de la variable toggle 'Recherche Et/Ou'
function toggle_search_or_and() {
    if(toggle > 0){toggle = 0;} else {toggle = 1;};
    all_grid();
}



// -----> Affiche toute les gridcard enregistrées
function all_grid() {
  reset_grid();  
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    w3AddClass(x[i], "show")
  }
}



// -----> Compare la liste des filtres en cours filters [] avec les classe des gridcards
function filterShow(c) {
    var x, i;
    //Recuperation de tous les éléments soumis à filtration 'filterDiv'  
    x = document.getElementsByClassName("filterDiv");
    if (c == "all") c = "";  
    //Recherche 'Ou'
    if(toggle > 0){
        for (i = 0; i < x.length; i++) {
            w3RemoveClass(x[i], "show");  
            for (j = 0; j < c.length; j++) {
                if (x[i].className.indexOf(c[j]) > -1) w3AddClass(x[i], "show");
            }  
        }    
    } else {
    //Recherche 'Et'
        for (i = 0; i < x.length; i++) {
            w3RemoveClass(x[i], "show");
            var arr_class = Array.from(x[i].className.split(' '));
            if (filterStrictIndex(x[i],c)==true) w3AddClass(x[i], "show");
        } 
    };  
}



// -----> Compare strictement le contenu de la liste des filtres avec les éléments 'Fonction ET'
function filterStrictIndex(x,c) {
    for (i = 0; i < c.length; i++) {
        if (x.className.indexOf(c[i]) > -1) {} else {return false}
    };
    return true;
}



// -----> Afficher ou Masquer le cadre contenant les filtres
function HideShowFilters(element) {
    document.getElementById(element).classList.toggle("show");
    document.getElementById(element).classList.toggle("hide");
}



// -----> Je ne sais pas
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}


// -----> Je ne sais pas
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}



// -----> Je ne sais pas
function modifFilters(element,c) {
// Ajouter ou supprimer filtre(s)   
    if(element.classList.contains("active")){
        // Désactiver le bouton et son filtre 
        for( var i = 0; i < filters.length; i++){ 
            if ( filters[i] === c) { 
                filters.splice(i, 1); 
                i--; 
            }
        }
        w3RemoveClass(element,"active")
    } else {
        //Ajout de la valeur filtre à filters variable 
        w3AddClass(element,"active")
        filters.push(c);
    }
    filterShow(filters)
}















// ============== Fonction non utilisée depuis 06-09-2022 =================


function reset_grid() {

    x = document.getElementsByClassName("filterDiv");
    for (i = 0; i < x.length; i++) {
        w3RemoveClass(x[i], "show");  
    }

    // Add or remove active class to the current button
    var btnContainer = document.getElementById("colorNav");
    var btns = btnContainer.getElementsByClassName("btn-family");
    for (var i = 0; i < btns.length; i++) {   
        btns[i].className = btns[i].className.replace(" active", "");
    }
    
    // Add or remove active class to the current button
    var btnContainer = document.getElementById("grid-filter");
    var btns = btnContainer.getElementsByClassName("btn");
    for (var i = 0; i < btns.length; i++) {   
        btns[i].className = btns[i].className.replace(" active", "");
    }
    
    filters=[];
}


// ----> Non utilisée - pour le moment, elle permettrait la gestion du Ou/Et lors de la recherche
function arraysAreIdentical(arr1, arr2){
    if (arr1.length !== arr2.length) return false;
    for (var i = 0, len = arr1.length; i < len; i++){
        if (arr1[i] !== arr2[i]){
            return false;
        }
    }
    return true; 
}