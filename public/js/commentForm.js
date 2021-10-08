const formBtn = document.querySelector('#newComment');

const commentFormHandler = async function (event) {
    event.preventDefault();

    const recipeId = document.querySelector('#recipeId').value;
    const body = document.querySelector('[name="comment-body"]').value;
    console.log(recipeId);
    console.log(body);
    if (body) {
        const commentGo = await fetch('/api/comment', {
            method: 'POST',
            body: JSON.stringify({
                recipeId,
                body
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        if(commentGo.ok) {
           alert('Yo shit did not fail'); 
           document.location.reload();
        } else {
            alert('Yo shit failed');
        }   
    }
};

formBtn.addEventListener('submit', commentFormHandler);