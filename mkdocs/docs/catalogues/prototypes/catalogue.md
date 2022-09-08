---
hide:
    - toc
    - navigation
---


<html lang="fr">
<head>
    <meta charset="utf-8">
    <!--<meta http-equiv="X-UA-Compatible" content="IE=edge">  Cette balise est faite pour adapter Internet Explorer, mais elle semble désuette en 2022-->
    <!--<meta name="description" content="csv to datatables to csv">-->
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- JQuery -->
    <script type="text/javascript" src="https://code.jquery.com/jquery-3.6.1.min.js"></script>
    <!-- JS Support Libraries -->
    <script type="text/javascript" src="https://unpkg.com/papaparse@5.3.0/papaparse.min.js"></script>
    <!-- Fontawesome JS -->
    <script src="https://kit.fontawesome.com/f9666d4f53.js" crossorigin="anonymous"></script>
    <!-- Custom JS -->
    <script type="text/javascript" src="../backend/extra.js"></script>
    <!-- Custom CSS -->
    <link rel="stylesheet" href="../backend/extra.css">
</head>
    <body>    
        <div id="container-loader">
            <div id="loader"></div>
            <h4>Chargement</h4>
        </div>
        <div id="content" class="hide"> 
        <div id="catalog-navbar">
            <div id="btn-zone"></div>
            <div style="justify-content: center" class="hide neumorphic-card" id="filters-zone">
                <br><b>Filtres principaux</b><div id="grid-filter"></div>
                <b>Filtres secondaires</b><div id="grid-s-filter"></div>
                <div id="param-zone"></div>
            </div><br>
        </div>
        <div id="btn-zone-mobile"><button onclick="ShowMobileNav();"><i class="fa-solid fa-bars"></i></button></div>    
        <div style="text-align:left;justify-content: left;" id="filters-list"></div>
        <div id="grid-preview"></div>
        <hr><div id="copyright-zone"></div>
        <div class="popup" id="popup2">
    <div>
    <a href="#" onclick="hide('popup2')"><i style="color: red;" class="fa-solid fa-xmark"></i>  Fermer</a>
    <h2 style="text-align:center; margin-top:0px;">Comment ajouter un projet ?</h2><hr>
            <details class="tip"><summary>Informations à renseigner</summary>
                <ul>
                    <li>sa <b>designation</b>,</li>
                    <li>une <b>description</b>,</li>
                    <li>son <b>adresse web principale</b>,</li>
                    <li>les <b>catégories associées</b>, (vous pouvez consulter les filtres <u><a href="#">principaux</a></u> ou <u><a href="#">secondaires</a></u>)</li>
                    <li>un lien web vers <b>une image</b>,</li>
                    <li>et les différents <b>partenaires</b>.</li>   
                </ul>
            </details><hr>
        <p>Si vous possèdez un <b>compte GitHub</b>, vous pouvez ajouter directement votre projet</p><a href="https://ecrire3.wixsite.com/picojoule/contact" target="_blank"><button class="neumorphic-btn" style="width:100%;"><i class="fa-brands fa-github"></i> Ajouter votre projet</button></a><hr>
        <p>Vous pouvez également remplir notre <b>formulaire contact</b></p><a href="https://ecrire3.wixsite.com/picojoule/contact" target="_blank"><button class="neumorphic-btn" style="width:100%;"><i class="fa-solid fa-plus"></i> Ajouter votre projet</button></a><hr>
    </div>
        </div>
    </div>   
    </body>
</html>



<style>

    
.popup {  
  display: none; 
  z-index: 0;
  position: fixed;
  top: 25px;
  bottom: 25px;  
  left: 25px;
  right: 25px;  
  margin-bottom: 0px;
  margin-right: 0px;
  background-color: white;
}
    
/*=== Navtabs hide - Petit écran ===*/
@media only screen and (min-width: 900px) {
    .popup { 
      left: 20%;
      right: 20%;
    }
}      

    
    
    
    
    

#popup2:after {
  position: fixed;
  content: "";
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: #D5D5D5;
  z-index: -2;
}

#popup2:before {
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  bottom: 0;
  background-color: #D5D5D5;
  right: 0;
  z-index: -1;
}
</style>






<style>
.md-header {
    display: none;
    
}    
     
#container-loader {
  width: 100px;
  height: 425px;
  position: absolute;
  top: calc(50% - 17px);
  left: calc(50% - 35px);
}
    
    
#loader {
  width: 70px;
  height: 70px;
  border-style: solid;
  border-top-color: black;
  border-right-color: black;
  border-left-color: transparent;
  border-bottom-color: transparent;
  border-radius: 50%;
  box-sizing: border-box;
  animation: rotate 3s ease-in-out infinite;
  transform: rotate(-200deg)
}
@keyframes rotate {
  0% { border-width: 10px; }
  25% { border-width: 3px; }
  50% { 
    transform: rotate(360deg); 
    border-width: 10px;
  }
  75% { border-width: 3px;}
  100% { border-width: 10px;}
}
</style>