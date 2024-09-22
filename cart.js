let cartItemCount = localStorage.getItem("cartItemCount") ||0;


function updateHtmlCart(){
    const cart = document.querySelectorAll("#cart_count");
    cart.forEach((item)=>{
        item.innerHTML = cartItemCount.toString();
    });

}

function addToCart(){
    
    const itemsInCart = document.getElementById("balaji")
    cartItemCount++;
    localStorage.setItem("cartItemCount", cartItemCount);


    updateHtmlCart(); 
}

localStorage.removeItem("cartItemCount", cartItemCount);

document.addEventListener("DOMContentLoaded", updateHtmlCart);