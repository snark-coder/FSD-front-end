
function sortByRating(minRating){
    const restItem = document.querySelectorAll(".restaurant-item");
    
    restItem.forEach((item)=>{
        const rating = parseFloat(item.getAttribute("rating"));

        if (rating > minRating){
            item.style.display = "block";
        }else{
            item.style.display = "none";
        }
    })
}


function displayAll(){
    const restItems = document.querySelectorAll(".restaurant-item");

    restItems.forEach((item)=>{
        item.style.display = "block";
    })
}



