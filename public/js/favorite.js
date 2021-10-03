const favBtn = document.querySelector('.favorite');
const foodId = document.querySelector('.favId').textContent;
const favoriteHandler = async ()=>  {



    // const response = await fetch(`/api/recipe/${foodId}`, {
    //     method: 'PUT',
    //     body: JSON.stringify({ is_favorite: true }),
    //     headers: { 'Content-Type': 'application/json' },
    //   });

      console.log(foodId);


}

favBtn.addEventListener('click', favoriteHandler);