---
hide:
    - toc
    - navigation
---


<head>
    <link rel="stylesheet" href="../../_css/GridCard.css" />
    <link rel="stylesheet" href="../../_css/extra.css" /> 
    <!-- Fontawesome JS -->
    <script src="https://kit.fontawesome.com/f9666d4f53.js" crossorigin="anonymous"></script>
    <!-- JS Support Libraries -->
    <script type="text/javascript" src="https://unpkg.com/papaparse@5.3.0/papaparse.min.js"></script>
    <!-- Custom JS -->
    <script type="text/javascript" src="../backend/AllKatalog.js"></script>    
</head>



<div class="div-container"><h1>Toutes nos <b>ressources de développement</b></h1><hr style="color:white !important; width:7%; border-bottom: 10px solid var(--md-primary-fg-color);"></div>

<div id="grid-preview"></div>

<div class="div-container">    
    <details class="ksln-info"><summary>Proposer d'ajouter un Katalog</summary>
        <div style="background-color:#F5F5F5; padding:25px; border: 1px solid #DDD; border-radius:10px; margin-top:25px;">
            <h2>Décrivez-nous un peu ce Katalog : </h2>
            <hr>
            <div style="text-align:center;">
                <input type="text" class="InputAdd" id="AddDesi" placeholder="Nom du Katalog">
                <input type="text" class="InputAdd" id="AddDescr" placeholder="Description">
                <input type="text" class="InputAdd" id="AddWeb" placeholder="Lien vers une images un logo (optionnel) : https://...">
                <input type="text" class="InputAdd" id="AddImg" placeholder="Lien de redirection : https://...">
                <br><button class="btn neumorphic-btn" onclick="TestAddProject();">Valider</button><button id="CopyCodeAdd" class="btn neumorphic-btn hide" onclick="CopyAddCode()">Copier le code d'ajout</button>                    
            </div>
            <div id="TestZoneAdd"></div>
            <div class="hide" id="AddStep2">
                <hr>
                <p>Vous pouvez nous transmettre le code d'ajout par le biais de notre <b>formulaire contact</b>.</p><a href="https://ecrire3.wixsite.com/picojoule/contact" target="_blank">
                <button class="neumorphic-btn" style="width:100%;"><i class="fa-solid fa-plus"></i> Ajouter votre projet</button></a><hr>
                <p>Si vous possèdez un <b>compte GitHub</b>, vous pouvez ajouter directement votre projet.</p><a href="https://github.com/Konsilion/PicoJoule/edit/master/mkdocs/docs/katalog/AllKatalog.csv" target="_blank">
                <button class="neumorphic-btn" style="width:100%;"><i class="fa-brands fa-github"></i> Ajouter votre projet</button></a>                
            </div>
        </div><br>    
    </details>
</div>

















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
    .md-content__inner.md-typeset > p {
        display:none;
    }
</style>