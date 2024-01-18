const commentHandler = async (event) => {
    event.preventDefault();

    
    const textElement = event.target.lastElementChild.firstElementChild;
    const text = textElement.value.trim();
    const apartment_id = parseInt(textElement.parentElement.parentElement.parentElement.id) + 1;
  
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

function addEventListenerList(list, event, fn) {
    for (i = 0; i < list.length; i++) {
        list[i].addEventListener(event, fn, false);
    }
}

const commentEl = document.querySelectorAll('.add-comment')
addEventListenerList(commentEl, 'submit', commentHandler);

const ratingNodeList = document.querySelectorAll('#rating');

if (ratingNodeList) {
    for (i = 0; i < ratingNodeList.length; i++) {
        const rating = parseInt(ratingNodeList[i].innerHTML);
        let stars = '' 
        for (x = 0; x < rating; x++) {
            stars = stars + '★';
        }
        ratingNodeList[i].innerHTML = stars;
    }
}


