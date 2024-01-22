let subContainer;
let searchContainer;
let searchSubcontainer ;
let searchInput;
let emptySearchContainer;
let addressContainer;
let cartListContainer;
document.addEventListener('DOMContentLoaded', function() {
    searchInput = document.getElementById("searchInput");

    searchContainer = document.getElementById("searchContainer");

    searchSubcontainer = document.getElementById("searchSubcontainer");
    searchContainer.style.display="none"

    subContainer = document.getElementById("subContainer");

    emptySearchContainer = document.getElementById("emptySearchContainer");
    emptySearchContainer.style.display="none"

    addressContainer = document.getElementById("addressContainer");
    addressContainer.style.display="none"

    cartListContainer = document.getElementById("cartContainer")

});


    function onSearch() {
        let searchValue = searchInput.value;
        searchSubcontainer.innerHTML = "";

        if (searchValue.length !== 0) {
            subContainer.style.display="none"
            let searchedProducts = productsList.filter((item) =>
                item.content.toLowerCase().includes(searchValue.toLowerCase())
            );

            if (searchedProducts.length === 0) {
                emptySearchContainer.style.display = "flex";
                searchSubcontainer.classList("d-none")
            } else {
                emptySearchContainer.style.display = "none";
                searchSubcontainer.classList.remove("d-none")

                searchedProducts.forEach((item) => {
                    let searchProductContainer = document.createElement("div");
                    searchProductContainer.classList.add(
                        "border","p-3",
                        "col-lg-2",
                        "col-md-4",
                        "col-sm-6",
                        "col-10",
                        "search-product-container"
                    );
                    searchSubcontainer.appendChild(searchProductContainer);

                    let searchProductImg = document.createElement("img");
                    searchProductImg.setAttribute("src", item.imgPath);
                    searchProductImg.classList.add("w-100");
                    searchProductContainer.appendChild(searchProductImg);

                    let searchProductContent = document.createElement("p");
                    searchProductContent.classList.add("mt-auto", "mb-auto");
                    searchProductContent.textContent = item.content;
                    searchProductContainer.appendChild(searchProductContent);

                    let searchProductPrice = document.createElement("p");
                    searchProductPrice.textContent = "Rs. " + item.price;
                    searchProductContainer.appendChild(searchProductPrice);

                    let btnContainer = document.createElement("div");
                    btnContainer.classList.add("btn-container");
                    searchProductContainer.appendChild(btnContainer);

                    let addToCartBtn = document.createElement("button");
                    addToCartBtn.textContent = "Add to Cart";
                    addToCartBtn.classList.add(
                        "btn",
                        "btn-warning",
                        "rounded-pill"
                    );
                    addToCartBtn.style.fontSize = "0.8em";
                    addToCartBtn.onclick = function () {
                        onAddToCart(item.id);
                    };
                    btnContainer.appendChild(addToCartBtn);

                    let buyNowBtn = document.createElement("button");
                    buyNowBtn.textContent = "Buy Now";
                    buyNowBtn.classList.add("btn", "btn-warning", "rounded-pill");
                    buyNowBtn.style.fontSize = "0.8em";
                    buyNowBtn.onclick = function(){
                        onBuyNow()
                    }
                    btnContainer.appendChild(buyNowBtn);
                });
            }
        } else {
            subContainer.style.display = "block";
            emptySearchContainer.classList.add("d-none")
            addressContainer.style.display="none"
        }
    }


