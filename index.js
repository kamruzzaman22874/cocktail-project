const loadCocktails = async(search) =>{
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`
    const res = await fetch(url);
    const data = await res.json();
    displayCocktails(data.drinks);
}

const displayCocktails = cocktails =>{
//    console.log(cocktail);
const cocktailsContainer = document.getElementById('cocktails-container');
cocktailsContainer.innerText = '';

   const noProduct = document.getElementById('no-found')

   if(cocktails === 0){
      noProduct.classList.remove('d-none')
   }
   else{
      noProduct.classList.add('d-none')
   }
   cocktails.forEach(cocktail =>{
    // console.log(cocktail);
    const cocktailDiv = document.createElement('div');
    cocktailDiv.innerHTML = `
    <div class="card">
                    <img src="${cocktail.strDrinkThumb}" class="card-img-top" alt="...">
                        <div class="card-body">
                          <h5 class="card-title">${cocktail.strDrink}</h5>
                          <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                          <a herf ="" class = "btn btn-primary">View Details</a>

                          
                        </div>
                      </div>
    `;
    cocktailsContainer.appendChild(cocktailDiv)
   });
   spinerBtn(false)
}
 document.getElementById('search-button').addEventListener('click',function(){

   spinerBtn(true)
    const inputField = document.getElementById('input-field')
    const search = inputField.value;
    loadCocktails(search);
   })

   const spinerBtn = isLoading =>{
      const spinerTools = document.getElementById('spiner-btn')

      if(isLoading){
         spinerTools.classList.remove('d-none');
      }
      else{
         spinerTools.classList.add('d-none')
      }
   }
   const productDetail = product =>{
      const ModalTitle = document.getElementById('exampleModalLabel')
      ModalTitle.innerText = product.name
      ModalTitle.innerHTML =  `

      <img src = "${product.strDrinkThumb} </img>"
      
      `    
    
   }
   productDetail();

// loadCocktails();