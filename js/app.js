(()=>{("use strict");function formQuantity(){document.addEventListener("click",function(e){let targetElement=e.target;if(targetElement.closest('input[value="piece"]')){let dataCheck=targetElement.closest(".catalog-item__inputs").querySelector("input[data-check]");let dataPiece=targetElement.closest(".catalog-item__inputs").querySelector("[data-piece]");let dataPlace=targetElement.closest(".catalog-item__inputs").querySelector("[data-place]");dataCheck.dataset.check="true";dataCheck.value=parseInt(dataPiece.dataset.piece);if("0"==dataPiece.dataset.piece&&"0"==dataPlace.dataset.place){targetElement.closest(".catalog-item__buttons-block").querySelector("[data-price]").innerHTML=parseInt(targetElement.closest(".catalog-item__buttons-block").querySelector("[data-price]").dataset.price)}}if(targetElement.closest('input[value="place"]')){let dataCheck=targetElement.closest(".catalog-item__inputs").querySelector("input[data-check]");let dataPiece=targetElement.closest(".catalog-item__inputs").querySelector("[data-piece]");let dataPlace=targetElement.closest(".catalog-item__inputs").querySelector("[data-place]");dataCheck.dataset.check="false";dataCheck.value=parseInt(dataPlace.dataset.place);if("0"==dataPiece.dataset.piece&&"0"==dataPlace.dataset.place){targetElement.closest(".catalog-item__buttons-block").querySelector("[data-price]").innerHTML=parseInt(targetElement.closest(".catalog-item__buttons-block").querySelector(".place-quantity").innerHTML)*parseInt(targetElement.closest(".catalog-item__buttons-block").querySelector("[data-price]").innerHTML)}}if(targetElement.closest(".quantity__button")){if(targetElement.closest(".catalog-item__inputs").querySelector("input[data-check='true']")){let dataPiece=targetElement.closest(".catalog-item__inputs").querySelector("[data-piece]");let dataPricePiece=targetElement.closest(".catalog-item__buttons-block").querySelector("[data-pricePiece]");let dataPricePlace=targetElement.closest(".catalog-item__buttons-block").querySelector("[data-pricePlace]");let value=parseInt(dataPiece.dataset.piece);if(targetElement.classList.contains("quantity__button_plus")){value++;dataPiece.dataset.piece++}else{--value;--dataPiece.dataset.piece;if(value<0){value=0;dataPiece.dataset.piece="0"}}targetElement.closest(".quantity").querySelector("input").value=value;let price=targetElement.closest(".catalog-item__buttons-block").querySelector("[data-price]").dataset.price;dataPricePiece.dataset.pricepiece=price*value;if(targetElement.closest(".catalog-item__inputs").querySelector("[data-piece]").dataset.piece>"0"||targetElement.closest(".catalog-item__inputs").querySelector("[data-place]").dataset.place>"0"){targetElement.closest(".catalog-item__buttons-block").querySelector("[data-price]").innerHTML=parseInt(dataPricePlace.dataset.priceplace)+parseInt(dataPricePiece.dataset.pricepiece)}else{targetElement.closest(".catalog-item__buttons-block").querySelector("[data-price]").innerHTML=price}}else if(targetElement.closest(".catalog-item__inputs").querySelector("input[data-check='false']")){let dataPlace=targetElement.closest(".catalog-item__inputs").querySelector("[data-place]");let dataPricePiece=targetElement.closest(".catalog-item__buttons-block").querySelector("[data-pricePiece]");let dataPricePlace=targetElement.closest(".catalog-item__buttons-block").querySelector("[data-pricePlace]");let value=parseInt(dataPlace.dataset.place);if(targetElement.classList.contains("quantity__button_plus")){value++;dataPlace.dataset.place++}else{--value;--dataPlace.dataset.place;if(value<0){value=0;dataPlace.dataset.place="0"}}targetElement.closest(".quantity").querySelector("input").value=value;let price=targetElement.closest(".catalog-item__buttons-block").querySelector("[data-price]").dataset.price;dataPricePlace.dataset.priceplace=parseInt(targetElement.closest(".catalog-item__buttons-block").querySelector(".place-quantity").innerHTML)*price*value;if(targetElement.closest(".catalog-item__inputs").querySelector("[data-piece]").dataset.piece>"0"||targetElement.closest(".catalog-item__inputs").querySelector("[data-place]").dataset.place>"0"){targetElement.closest(".catalog-item__buttons-block").querySelector("[data-price]").innerHTML=parseInt(dataPricePlace.dataset.priceplace)+parseInt(dataPricePiece.dataset.pricepiece)}else{targetElement.closest(".catalog-item__buttons-block").querySelector("[data-price]").innerHTML=parseInt(targetElement.closest(".catalog-item__buttons-block").querySelector(".place-quantity").innerHTML)*price}}}})}function inputFocusOut(){let catalogInputs=document.querySelectorAll("input[data-check]");catalogInputs.forEach(function(ind){ind.addEventListener("focusout",function(){let catalogInp=ind.closest(".catalog-item__inputs");let buttonBlock=ind.closest(".catalog-item__buttons-block");let dataPrice=buttonBlock.querySelector("[data-price]");let dataPricePiece=buttonBlock.querySelector("[data-pricePiece]");let dataPricePlace=buttonBlock.querySelector("[data-pricePlace]");if(catalogInp.querySelector("input[data-check='true']")){catalogInp.querySelector("[data-piece]").dataset.piece=ind.value;dataPricePiece.dataset.pricepiece=dataPrice.dataset.price*ind.value;dataPrice.innerHTML=parseInt(dataPricePlace.dataset.priceplace)+parseInt(dataPricePiece.dataset.pricepiece);if(catalogInp.querySelector("[data-piece]").dataset.piece>"0"||catalogInp.querySelector("[data-place]").dataset.place>"0"){dataPrice.innerHTML=parseInt(dataPricePlace.dataset.priceplace)+parseInt(dataPricePiece.dataset.pricepiece)}else{dataPrice.innerHTML=dataPrice.dataset.price}}else if(catalogInp.querySelector("input[data-check='false']")){catalogInp.querySelector("[data-place]").dataset.place=ind.value;dataPricePlace.dataset.priceplace=parseInt(buttonBlock.querySelector(".place-quantity").innerHTML)*dataPrice.dataset.price*ind.value;dataPrice.innerHTML=parseInt(dataPricePlace.dataset.priceplace)+parseInt(dataPricePiece.dataset.pricepiece);if(catalogInp.querySelector("[data-piece]").dataset.piece>"0"||catalogInp.querySelector("[data-place]").dataset.place>"0"){dataPrice.innerHTML=parseInt(dataPricePlace.dataset.priceplace)+parseInt(dataPricePiece.dataset.pricepiece)}else{dataPrice.innerHTML=parseInt(buttonBlock.querySelector(".place-quantity").innerHTML)*dataPrice.dataset.price}}})})}function emptyInput(){let catalogInputs=document.querySelectorAll("input[data-check]");catalogInputs.forEach(function(ind){ind.addEventListener("input",function(){let value=ind.value;if(value==""){ind.value="0"}})})}emptyInput();formQuantity();inputFocusOut()})();