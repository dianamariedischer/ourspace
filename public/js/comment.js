const commentHandler = async (event) => {
    event.preventDefault();

    
    const text = document.querySelector('#comment').value.trim();
    const apartment_id = window.location.pathname.slice(11);
  
    if (text && apartment_id) {
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
    .querySelector('.add-comment')
    .addEventListener('submit', commentHandler);
