const commentHandler = async (event) => {
    event.preventDefault();
    
    const textElement = document.getElementById('comment');
    const text = textElement.value.trim();
    const apartment_id = textElement.parentElement.parentElement.parentElement.id + 1;
  
    if (text) {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({ text, apartment_id }),
            headers: { 'Content-Type': 'application/json' },
        });
  
        if (response.ok) {
            document.location.reload();
        } else {
            alert('Failed to add comment.');
        }
    }
};

document
    .querySelectorAll('.add-comment')
    .addEventListener('submit', commentHandler);
