// 1. Like a Comic
function likeComic(title) {
    Swal.fire({
        icon: 'success',
        title: 'Liked!',
        text: `You liked "${title}"!`,
        timer: 1500,
        showConfirmButton: false
    });
}


// 2. View Comic Details
function viewDetails(title, description) {
    Swal.fire({
        title: title,
        text: description,
        icon: 'info'
    });
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

// 5. Toggle Dark Mode
function changeTheme() {
    document.body.classList.toggle('dark-theme');
    alert('Dark Mode toggled!');
}

anime({
    targets: 'h1',
    translateY: [-50, 0],
    opacity: [0, 1],
    easing: 'easeOutExpo',
    duration: 1500
});

