---
hide:
    - toc
---

# TITRE DE VOTRE PAGE


<!--- 1. Modifier la source (src) afin qu'elle indique le lien de votre catalogue-->

<iframe class="iframe-forge" src="https://<github-username>.github.io/<nom_repertoire>/latest/catalogues/exemple/catalogue" width="100%" height="100%" frameborder="0" loading="lazy"></iframe>



<!--- 2. Modifier le lien ci-dessous afin qu'il indique la page de retour de votre catalogue.-->
<script>
function CatalogBack() {
        window.location.href = "https://github-username.github.io/nom_repertoire/latest/VOTRE_PAGE_VOISINE";
    }
</script>


[//]: # (NE PAS MODIFIER CI-DESSOUS ////////////)













































<style>
/*=== MISE EN FORME DE LA PAGE ORIGINALE ===*/    
:root {
    --back-color: #F3F3F3;
}

body {
    background-color: var(--back-color);
}
  
.md-content__inner.md-typeset > h1,a {
    display: none;
}    

.md-footer__inner.md-grid {
    display: none;
}  

  
/*=== IFRAME FORGE ===*/    
.iframe-forge {
    position: fixed;
    border: none;
    right: 0;
    top: 5rem;
    padding-bottom:8rem;
    bottom: 0; 
    left: 0;
    }
}    

/*=== Grand écran ===*/
@media only screen and (min-width: 1220px) {
.iframe-forge {
    top: 5rem;
    padding-bottom:8rem;
    }
}
  
/*=== PC Portable ===*/
@media only screen and (max-width: 1219px) {
.iframe-forge {
    top: 2.4rem;
    padding-bottom:8rem;
    }
}

</style>