---
hide:
    - toc
    - navigation
---

<html lang="fr">
    <body>    
        <div id="container-loader">
            <div id="loader"></div>
            <h4>Chargement</h4>
        </div>
        <div id="content" class="hide"> 
            <div id="catalog-navbar">
                <div><h2 style="color:var(--md-primary-fg-color); font-size: 30px;"><b>Katalog</b> - Plans & Fabrication&emsp;<br id="BrMobile"><br id="BrMobile"><button id="ReturnKatalog" class="btn neumorphic-btn" onclick="parent.ReturnKatalog();"><i class="fa-solid fa-person-walking-arrow-loop-left"></i></button><button id="ShowNav" class="btn neumorphic-btn active" onclick="ShowMobileNav();"><i class="fa-solid fa-eye"></i></button><button class="btn neumorphic-btn" onclick="htmlTableSwitch();"><i class="fa-solid fa-image" id="btn-switch"></i></button></h2></div>
                <div id="SubMenu">
                    <div id="btn-zone" style="display: block;"></div>
                    <div style="justify-content: center" class="hide neumorphic-card" id="filters-zone">
                        <br><b>Filtres principaux</b><div id="grid-filter"></div>
                        <b>Filtres secondaires</b><div id="grid-s-filter"></div>
                        <div id="param-zone"></div>
                    </div>                
                </div>
            </div>
            <div id="btn-zone-mobile">
                <div style="text-align:left;justify-content: left;" id="filters-list"></div>
            </div>  
            <div id="grid-preview"></div>
            <div id="csv-preview" class="container p-3 mt-3 border hide"></div>     
            <hr><div id="copyright-zone"></div>
        </div>
        <div class="popup hide" id="popup2">
            <div>
                <a href="#" onclick="HideClassSwitch('popup2');HideClassSwitch('content')"><i style="color: red;" class="fa-solid fa-xmark"></i> Fermer</a>
                <hr>
                <h2>Décrivez-nous votre projet : </h2>
                <hr>
                <details class="ksln-info"><summary>Les filtres et sous-filtres</summary>
                    <br>
                    <div id="div_flt1"></div>
                    <hr>
                    <div id="div_flt2"></div>
                </details>
                <div style="text-align:center;">
                    <input type="text" class="InputAdd" id="AddDesi" placeholder="Désignation">
                    <input type="text" class="InputAdd" id="AddDescr" placeholder="Description">
                    <input type="text" class="InputAdd" id="AddWeb" placeholder="Lien de redirection : https://...">
                    <input type="text" class="InputAdd" id="AddFilt" placeholder="Filtres à appliquer">
                    <input type="text" class="InputAdd" id="AddImg" placeholder="Lien vers une images (optionnel) : https://">
                    <input type="text" class="InputAdd" id="AddPers" placeholder="Auteur.ices et partenaires">
                    <br><button class="btn neumorphic-btn" onclick="TestAddProject();">Valider</button><button id="CopyCodeAdd" class="btn neumorphic-btn hide" onclick="CopyAddCode()">Copier le code d'ajout</button>                    
                </div>
                <div id="TestZoneAdd"></div>
                <div class="hide" id="AddStep2">
                    <hr>
                    <p>Vous pouvez nous transmettre le code d'ajout par le biais de notre <b>formulaire contact</b>.</p><a href="https://konsilion.fr/wp/contacts/" target="_blank">
                    <button class="neumorphic-btn" style="width:100%;"><i class="fa-solid fa-plus"></i> Ajouter votre projet</button></a><hr>
                    <p>Si vous possèdez un <b>compte GitHub</b>, vous pouvez ajouter directement votre projet.</p><a href="https://github.com/Konsilion/Katalog/edit/master/mkdocs/docs/catalogues/fabrication/data/data.csv" target="_blank">
                    <button class="neumorphic-btn" style="width:100%;"><i class="fa-brands fa-github"></i> Ajouter votre projet</button></a>                
                </div>
            </div>
        </div>        
    </body>
</html>


<html><head>
    <meta charset="utf-8">
    <!--<meta http-equiv="X-UA-Compatible" content="IE=edge">  Cette balise est faite pour adapter Internet Explorer, mais elle semble désuette en 2022-->
    <!--<meta name="description" content="csv to datatables to csv">-->
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- JS Support Libraries -->
    <script type="text/javascript" src="https://unpkg.com/papaparse@5.3.0/papaparse.min.js"></script>
    <!-- Fontawesome JS -->
    <script src="https://kit.fontawesome.com/f9666d4f53.js" crossorigin="anonymous"></script>
    <!-- Custom JS -->
    <script type="text/javascript" src="../../backend/template.js"></script>
    <!-- Custom CSS -->
    <link rel="stylesheet" href="../../backend/template.css">
    <link rel="stylesheet" href="../../backend/bootstrap_table.css">    
    <link type="text/css" rel="stylesheet" href="https://cdn.datatables.net/1.10.22/css/jquery.dataTables.min.css" />
    <link type="text/css" rel="stylesheet" href="https://cdn.datatables.net/buttons/1.6.4/css/buttons.dataTables.min.css" />    
    <!-- JQuery -->
    <script type="text/javascript" src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <!-- JS Support Libraries -->
    <script type="text/javascript" src="https://cdn.datatables.net/1.10.22/js/jquery.dataTables.min.js"></script>
    <script type="text/javascript" src="https://cdn.datatables.net/buttons/1.6.4/js/dataTables.buttons.min.js"></script>
    <script type="text/javascript" src="https://cdn.datatables.net/buttons/1.6.4/js/buttons.html5.min.js"></script>
    <script type="text/javascript" src="https://cdn.datatables.net/buttons/1.6.4/js/buttons.colVis.min.js"></script>
</head></html>
















<style> 
.popup {  
    background-color: #F5F5F5;
    margin: 50px 250px;
    padding: 25px;
    border-radius: 10px;
    border: 1px solid grey;
}
    

@media only screen and (max-width: 1219px) {
    .popup {  
        background-color: #F5F5F5;
        margin: 25px;
    }  
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