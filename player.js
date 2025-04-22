// player.js

let liked = false;
let disliked = false;

document.addEventListener('DOMContentLoaded', () => {
  const likeBtn = document.getElementById('likeBtn');
  const dislikeBtn = document.getElementById('dislikeBtn');
  const shareBtn = document.getElementById('shareBtn');
  const saveBtn = document.getElementById('saveBtn');

  likeBtn.addEventListener('click', () => {
    if (!liked) {
      liked = true;
      disliked = false;
      likeBtn.textContent = '👍 Liked';
      dislikeBtn.textContent = '👎 Dislike';
    } else {
      liked = false;
      likeBtn.textContent = '👍 Like';
    }
  });

  dislikeBtn.addEventListener('click', () => {
    if (!disliked) {
      disliked = true;
      liked = false;
      dislikeBtn.textContent = '👎 Disliked';
      likeBtn.textContent = '👍 Like';
    } else {
      disliked = false;
      dislikeBtn.textContent = '👎 Dislike';
    }
  });

  shareBtn.addEventListener('click', () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
      alert(`🔗 Link copied to clipboard:\n${url}`);
    });
  });

  saveBtn.addEventListener('click', () => {
    alert("💾 Saved to your 'Watch Later' (simulated)");
  });
});
