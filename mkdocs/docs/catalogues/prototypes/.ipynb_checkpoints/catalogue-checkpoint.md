---
hide:
    -toc
    -navigation
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
        <button class="btn neumorphic-btn" onclick="HideShowFilters('filters-zone');"><i class="fa-solid fa-magnifying-glass"></i>  Les filtres</button><button class="btn neumorphic-btn btn-reset" onclick="all_grid()">Réinitialiser</button><br>
        <div style="justify-content: center" class="hide neumorphic-card" id="filters-zone">
            <div id="grid-filter"></div>
            <hr><div id="colorNav"></div>
        </div><br>
        <div id="grid-preview"></div>
        <br><br><div id="add-project" ></div>
        <div id="param-zone"></div>
        <div id="copyright-zone"></div>
    </body>
</html>