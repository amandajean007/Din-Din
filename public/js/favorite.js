const favBtn = document.querySelector('.favorite');
const foodId = document.querySelector('.favId').textContent;
const favoriteHandler = async ()=>  {
  
// be able to grab the id from the click 
//have to be able to json it ugh 
// from that put into response with the food id thats catched
// create a put that will update it to the persons favs 


    // const response = await fetch(`/api/recipe/${foodId}`, {
    //     method: 'PUT',
    //     body: JSON.stringify({ is_favorite: true }),
    //     headers: { 'Content-Type': 'application/json' },
    //   });

      // console.log(foodId);

}

favBtn.addEventListener('click', favoriteHandler);