let rating = 0;

const apartmentFormHandler = async (event) => {
    event.preventDefault();
  
    const apartment_collection_id = document.querySelector('#collection-id').value.trim();
    const address1 = document.querySelector('#address1').value.trim();
    const address2 = document.querySelector('#address2').value.trim();
    const city = document.querySelector('#city').value.trim();
    const state = document.querySelector('#state').value.trim();
    const zip = document.querySelector('#zip').value.trim();
    const rent = document.querySelector('#rent').value.trim();
    const beds = document.querySelector('#bed').value.trim();
    const baths = document.querySelector('#bath').value.trim();
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
                    rent,
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
            document.location.replace('/apartmentcollection/' + apartment_collection_id);
        } else {
            alert('Failed to add apartment.');
        }
    }
};
  

function log (event) {
    rating = event.target.value;
    console.log(rating);
}

function addEventListenerList(list, event, fn) {
    for (i = 0; i < list.length; i++) {
        list[i].addEventListener(event, fn);
    }
}

ratingNodeList = document.querySelectorAll('.rate');
console.log(ratingNodeList)
addEventListenerList(ratingNodeList, 'click', log);

document
    .querySelector('.apartment-form')
    .addEventListener('submit', apartmentFormHandler);
  
