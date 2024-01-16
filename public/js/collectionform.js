const collectionFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#title-input').value.trim();
  
    if (title) {
        const response = await fetch('/api/apartmentcollections', {
            method: 'POST',
            body: JSON.stringify({ title }),
            headers: { 'Content-Type': 'application/json' },
        });
  
        if (response.ok) {
            document.location.replace('/landingpage');
        } else {
            alert('Failed to add collection.');
        }
    }
};
  
document
    .querySelector('.collection-form')
    .addEventListener('submit', collectionFormHandler);
  