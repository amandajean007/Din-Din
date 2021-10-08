const formBtn = document.querySelector('#newComment');

const commentFormHandler = async function (event) {
    event.preventDefault();

    const recipe_id = document.querySelector('#recipeId').value;
    const body = document.querySelector('[name="comment-body"]').value;
    console.log(recipeId);
    console.log(body);
    if (body) {
        const commentGo = await fetch('/api/comment', {
            method: 'POST',
            body: JSON.stringify({
                recipe_id,
                body
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        if(commentGo.ok) { 
           document.location.reload();
        } else {
            alert('Unable to make comment');
        }   
    }
};

formBtn.addEventListener('submit', commentFormHandler);