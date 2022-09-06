// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("grid-filter");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function(){
    if(this.classList.contains("active")){
        this.className = this.className.replace(" active", "");
    } else {
        this.className += " active";
    }
  });
}


// Add or remove active class to the current button
var btnContainer = document.getElementById("colorNav");
var btns = btnContainer.getElementsByClassName("btn-family");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function(){  
    if(this.classList.contains("active")){
        this.className = this.className.replace(" active", "");
    } else {
        this.className += " active";
    }
  });
}

all_grid();


