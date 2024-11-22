var slideIndex=0;
showDivs(slideIndex);

function showDivs(i){
    slideIndex = i;
    var j;
    var k = document.getElementsByClassName("slide");
    var dots = document.getElementsByClassName("dot");
    for(j = 0; j < k.length; j++){
        k[j].style.display = "none";
        dots[j].style.background = "#bbb";
    }
    slideIndex++;
    if(slideIndex > k.length) { slideIndex = 1; }
    k[slideIndex-1].style.display = "block";
    dots[slideIndex-1].style.background = "#717171";
    // setTimeout(showDivs(slideIndex), 2000);

}