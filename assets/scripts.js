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

// Anime.js for Intro Animation
anime({
    targets: 'h1',
    translateY: [-50, 0],
    opacity: [0, 1],
    easing: 'easeOutExpo',
    duration: 1500
});

// Chart.js for Comic Statistics
const ctx = document.getElementById('comicStats').getContext('2d');
const comicChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Batman', 'Superman', 'Wonder Woman', 'Animal Man', 'The Question', 'Ambush Bug', 'Swamp Thing'],
        datasets: [{
            label: '# of Likes',
            data: [12, 19, 3, 5, 2, 3, 7], // Example data
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// SweetAlert2 for Enhanced Alerts
function likeComic(title) {
    Swal.fire({
        icon: 'success',
        title: 'Liked!',
        text: `You liked "${title}"!`,
        timer: 1500,
        showConfirmButton: false
    });
}

function viewDetails(title, description) {
    Swal.fire({
        title: title,
        text: description,
        icon: 'info'
    });
}

// Lodash for Utility Functions
const comics = [
    { title: 'Batman' },
    { title: 'Superman' },
    { title: 'Wonder Woman' },
    { title: 'Swamp Thing' }
];
const sortedComics = _.sortBy(comics, ['title']);
console.log(sortedComics); // Example: Log sorted comics

// Gallery Toggle
function toggleGallery() {
    const gallery = document.getElementById('comic-gallery');
    gallery.style.display = gallery.style.display === 'none' ? 'block' : 'none';
}

// Validate Form
function validateForm() {
    const title = document.getElementById('comicTitle').value.trim();
    const cover = document.getElementById('comicCover').value.trim();
    const description = document.getElementById('comicDescription').value.trim();

    if (!title || !cover || !description) {
        Swal.fire({
            icon: 'error',
            title: 'Oops!',
            text: 'All fields are required!',
        });
        return false;
    }
    return true;
}


