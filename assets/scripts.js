// 1. Like a Comic
function likeComic(title) {
    alert(`You liked ${title}!`);
}

// 2. View Comic Details
function viewDetails(title, description) {
    alert(`${title}: ${description}`);
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
