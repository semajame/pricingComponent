const price = document.getElementById("pricerange");
const slider = document.getElementById("slider");
const views = document.getElementById("pageviews");
const checkbox = document.getElementById("checkbox");

slider.oninput = function() {
    if(slider.value === "1" ){
        if(checkbox.checked == true){
            views.innerHTML = "10K";
            price.innerHTML = "$2.00";
        } else {
            views.innerHTML = "10K";
            price.innerHTML = "$8.00";
        }
        

    } if (slider.value === "2"){
        if(checkbox.checked == true){
            views.innerHTML = "50K";
            price.innerHTML = "$3.00";
        } else {
            views.innerHTML = "50K";
            price.innerHTML = "$12.00";
        }

    } if (slider.value === "3"){
        if(checkbox.checked == true){
            views.innerHTML = "100K";
            price.innerHTML = "$4.00";
        } else {
            views.innerHTML = "100K";
            price.innerHTML = "$16.00";
        }

    }  if (slider.value === "4"){
        if(checkbox.checked == true){
            views.innerHTML = "500K";
            price.innerHTML = "$6.00";
        } else {
            views.innerHTML = "500K";
            price.innerHTML = "$24.00";
        }
    }  if (slider.value === "5"){
        if(checkbox.checked == true){
            views.innerHTML = "1M";
            price.innerHTML = "$9.00";
        } else {
            views.innerHTML = "1M";
            price.innerHTML = "$36.00";
        }
    }
}