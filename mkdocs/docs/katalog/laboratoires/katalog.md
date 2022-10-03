---
hide:
    - toc
    - navigation
---

<link rel="stylesheet" href="../../backend/catalogue.css">

<body>
    <div id="iframe-div" style="display: none;">
        <iframe class="iframe-forge" src="../template" width="100%" height="100%" frameborder="0" loading="eager"></iframe>
    </div>
    <div id="container-loader">
        <div id="loader"></div>
        <h4>Chargement</h4>
    </div>
</body>


<script type="text/jscript" language="javascript">   
    setTimeout(function(){
        var loader = document.getElementById("container-loader");
        var content = document.getElementById("iframe-div");
        content.style.display = "block";
        loader.style.display = "none";
    }, 3000);  
    
    function ReturnKatalog()
    {
        window.history.back();
    }    
</script>