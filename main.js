// get the like button element
const likeBtn = document.querySelector('.like-btn');

// add event listener to the like button
likeBtn.addEventListener('click', () => {
  // get the like button icon element
  const likeIcon = likeBtn.querySelector('.fa-heart');

  // check if the post is already liked
  if (likeIcon.classList.contains('liked')) {
    // remove the like from the post
    likeIcon.classList.remove('liked');
    // decrease the like count
    const likeCount = document.querySelector('.like-count');
    likeCount.textContent = parseInt(likeCount.textContent) - 1;
  } else {
    // add the like to the post
    likeIcon.classList.add('liked');
    // increase the like count
    const likeCount = document.querySelector('.like-count');
    likeCount.textContent = parseInt(likeCount.textContent) + 1;
  }
});
