// 1. Like a Comic
function likeComic(title) {
    alert(`You liked ${title}!`);
}

// 2. View Comic Details
function viewDetails(title, description) {
    // Use MicroModal for details display
    document.getElementById('modal-1-title').textContent = title;
    document.getElementById('modal-1-content').textContent = description;
    MicroModal.show('modal-1');
}

// 3. Validate Form
function validateForm() {
    const title = document.getElementById('comicTitle').value.trim();
    const cover = document.getElementById('comicCover').value.trim();
    const description = document.getElementById('comicDescription').value.trim();

    if (!title || !cover || !description) {
        alert('All fields are required!');
        return false;
    }
    return true;
}

// 4. Toggle Gallery Visibility
function toggleGallery() {
    const gallery = document.getElementById('comic-gallery');
    gallery.style.display = gallery.style.display === 'none' ? 'block' : 'none';
}

// 5. Change Theme
function changeTheme() {
    document.body.classList.toggle('dark-theme');
    alert('Theme changed!');
}

// Integrating Third-Party Libraries

// 1. Tooltips
document.querySelectorAll('button').forEach(button => {
    tippy(button, {
        content: button.getAttribute('title'),
    });
});

// 2. Lightbox for Comic Images
const lightbox = new SimpleLightbox('.lightbox', { /* options */ });

// 3. Modal for Comic Details
// Already integrated above in viewDetails function.

// 4. Tilt Effect for Comic Cards
VanillaTilt.init(document.querySelectorAll('.comic-card'), {
    max: 25,
    speed: 400,
});

