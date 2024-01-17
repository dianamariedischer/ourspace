const apartmentFormHandler = async (event) => {
    event.preventDefault();
  
    const apartment_collection_id = document.querySelector('#collection-id').value.trim();
    const address1 = document.querySelector('#address1').value.trim();
    const address2 = document.querySelector('#address2').value.trim();
    const city = document.querySelector('#city').value.trim();
    const state = document.querySelector('#state').value.trim();
    const zip = document.querySelector('#zip').value.trim();
    const beds = document.querySelector('#bed').value.trim();
    const baths = document.querySelector('#bath').value.trim();
    const rating = document.querySelector('#rating').value.trim();
    const link = document.querySelector('#link').value.trim();
    const notes = document.querySelector('#notes').value.trim();
    const imageLink = document.querySelector('#image-link').value.trim();
  
    // if (apartment_collection_id && address1 && city && state && zip && beds && baths && rating && link && imageLink) {
    if (apartment_collection_id) {
        const response = await fetch('/api/apartments', {
            method: 'POST',
            body: JSON.stringify(
                { 
                    address1, 
                    address2, 
                    city, 
                    state,
                    zip,
                    beds,
                    baths,
                    rating,
                    notes,
                    link,
                    imageLink,
                    apartment_collection_id, 
                }
            ),
            headers: { 'Content-Type': 'application/json' },
        });
  
        if (response.ok) {
            document.location.replace('/landingpage');
        } else {
            alert('Failed to add apartment.');
        }
    }
};
  
document
    .querySelector('.apartment-form')
    .addEventListener('submit', apartmentFormHandler);
  