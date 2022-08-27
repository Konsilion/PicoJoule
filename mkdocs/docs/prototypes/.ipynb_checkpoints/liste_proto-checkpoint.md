---
hide:
    - toc
---

# Les différents prototypes


[//]: # (CI DESSOUS LE CORPS DE VOTRE GALERIE //////////////////////////////////////////////////////////////////////////////////////////)


<html>
    <head>
        <script src="https://code.jquery.com/jquery-3.6.1.min.js"></script>
        <script src="demo.js"></script>
    </head>
</html>


<html>
    <body>
        <div id="myBtnContainer">
            <button class="btn active" onclick="filterSelection('all')"> Tous</button>
            <button class="btn" onclick="filterSelection('methanisation')"> Methanisation</button>
            <button class="btn" onclick="filterSelection('epuration')"> Epuration</button>
        </div> 
    <hr>
    </body>
</html>

??? success "Ajouter un projet"

    <html>
    <head>
    <link rel="stylesheet" href="../form.css" />
    </head>
    <body>
    <div class="container"> 
            <form id="survey-form" action="https://formspree.io/f/xnqrqwpo" method="POST">	
                <div class="form-group">
                    <label id="name-label" for="name">
                        Prénom et NOM
                    </label>
                    <input type="text" name="name" id="name" class="form-control" placeholder="" required/>
                    </div>
                <div class="form-group">
                    <label id="email-label" for="email">
                        Email
                    </label>
                    <input type="email" name="email" id="email" class="form-control" placeholder="" required/>
                </div>
                <div class="form-group">
                    <p>
                        Quel est le sujet de votre contact ?
                    </p>
                    <select id="most-like" name="mostLike" class="form-control" required>
                        <option disabled selected value>
                            Liste des choix :
                        </option>
                        <option value="Deployement">
                            Je souhaite déployer Konnect
                        </option>
                        <option value="Installation">
                            Installation
                        </option>
                        <option value="utilisation">
                            Utilisation
                        </option>
                        <option value="appropriation">
                            Appropriation
                        </option>			
                    </select>
                </div>
                <div class="form-group">
                    <p>
                        Quel message à nous délivrer donc ? 😀
                    </p>
                    <textarea id="comments" class="input-textarea" name="comment" placeholder="Écrire ici ...">
                    </textarea>
                </div>
                <div class="form-group">
                    <button type="submit" id="submit" class="submit-button">
                        Envoyer
                    </button>
                </div>
            </form>
        </div>
        <br><br>
        </body>
    </html>

    

<html>
    <body>
        <div id="grid-show" class="grid-container">
            <div class="column_catalog filterDiv methanisation"><a href="#"> 
                <div class="product tumbnail">
                    <h4>Projet1</h4>
                    <p>Lorem ipsum dolor..</p>
                    <h6>En savoir plus ...</h6>
                </div>     
            </a></div>
            <div class="column_catalog filterDiv methanisation"><a href="#"> 
                <div class="product tumbnail">
                    <h4>Projet2</h4>
                    <p>Lorem ipsum dolor..</p>
                    <h6>En savoir plus ...</h6>
                </div>     
            </a></div>
            <div class="column_catalog filterDiv methanisation epuration"><a href="#"> 
                <div class="product tumbnail">
                    <h4>Projet3</h4>
                    <p>Lorem ipsum dolor..</p>
                    <h6>En savoir plus ...</h6>
                </div>     
            </a></div>
            <div class="column_catalog filterDiv epuration"><a href="#"> 
                <div class="product tumbnail">
                    <h4>Projet4</h4>
                    <p>Lorem ipsum dolor..</p>
                    <h6>En savoir plus ...</h6>
                </div>     
            </a></div>
        </div>
    </body>
</html>









[//]: # (CI DESSOUS LE CODE CSS DE VOTRE GALERIE //////////////////////////////////////////////////////////////////////////////////////////)


<style>
/* Create three equal columns that floats next to each other */ 
.column_catalog {
    border-radius: 10px; 
    border: 1px solid grey; 
    background: rgba(255, 255, 255, 1); 
    padding: 0px 15px 0px 15px;
} 

    
.column_catalog:hover { 
   box-shadow: 0 5px 25px 0 rgba(0, 0, 0, 0.2);
   border: 4px solide green; 
} 

    
.grid-container { 
    display: grid; 
    grid-template-columns: 33% 32% 32%; 
    gap: 15px; 
    background-color: rgba(255, 255, 255, 0); 
    padding: 10px; 
} 

/*=== Petit ecran ===*/
@media only screen and (max-width: 1200px) {
	
	.grid-container { 
    display: grid; 
    grid-template-columns: 45% 45%; 
    gap: 15px; 
    background-color: rgba(255, 255, 255, 0); 
    padding: 10px; 
    }
}  
    
/*=== Mobile ===*/
@media only screen and (max-width: 800px) {
	
	.grid-container { 
    display: grid; 
    grid-template-columns: 95%; 
    gap: 15px; 
    background-color: rgba(255, 255, 255, 0); 
    padding: 10px; 
    }
}     
    
    
.grid-container > div { 
    text-align: left;
    font-size: 20px; 
}

    
.grid-container > a:visited {
  color: pink;
  background-color: transparent;
  text-decoration: none;
}


/* Style grid filtering search */
.filterDiv {
  display: none;
}

.show {
  display: block;
}

.grid-filter { 
    display: grid; 
    grid-template-columns: 50% 50%; 
    gap: 15px; 
    background-color: rgba(255, 255, 255, 0); 
    padding: 10px; 
} 


/* Style the buttons */
.btn {
  border: none;
  outline: none;
  padding: 12px 16px;
  background-color: #f1f1f1;
  cursor: pointer;
}

.btn:hover {
  background-color: #ddd;
}

.btn.active {
  background-color: #666;
  color: white;
}
</style>













[//]: # (CI DESSOUS LE CODE JAVASCRIPT DE VOTRE GALERIE //////////////////////////////////////////////////////////////////////////////////////////)


<script>
filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

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

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
</script>
