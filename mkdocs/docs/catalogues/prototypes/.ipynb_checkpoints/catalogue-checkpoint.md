---
hide:
    - toc
    - navigation
---




<!-- NE PAS MODIFIER CETTE PAGE -->





<html lang="fr">
    <div id="container-loader">
        <div id="loader"></div>
        <h4>Chargement</h4>
    </div>
</html>






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
    <body><div id="content" class="hide">
        <div id="btn-zone"></div>
        <div style="justify-content: center" class="hide neumorphic-card" id="filters-zone">
            <div id="grid-filter"></div>
            <hr><div id="grid-s-filter"></div>
        </div><br>
        <input type="text" id="myInput" onkeyup="SearchBar()" placeholder="Recherche ..." title="Type in a name">
        <div style="text-align:right;justify-content: right;" id="filters-list"></div>
        <div id="grid-preview"></div>
        <br><br><div id="add-project" ></div>
        <div id="param-zone"></div>
        <div id="copyright-zone"></div>
    </div></body>
</html>










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