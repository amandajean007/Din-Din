const formBtn = document.querySelector('#newComment');

const commentFormHandler = async function (event) {
    event.preventDefault();


    const recipeId = document.querySelector('input[name="recipe-id"]').value;
    const body = document.querySelector('textarea[name="comment-body"]').value;

    if (body) {
        await fetch('/api/comment', {
            method: 'POST',
            body: JSON.stringify({
                recipeId,
                body
            }),
            headers: {'Content-Type': 'application/json'}
        });

        document.location.reload();
    }
};

formBtn.addEventListener('submit', commentFormHandler);