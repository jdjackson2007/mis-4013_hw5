<?php
include 'comics-data.php';
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DC Comics Universe</title>
    <link rel="stylesheet" href="assets/styles.css">
    <script src="assets/scripts.js" defer></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js" integrity="sha512-QfOTYOZ5jHkgk8X6klZtK4fiIXDxYr7/o4aR/hPlR1joUxlQU9u1Bdd5Oti89HK5U6jvpPOjh/mYT58UMczvhA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
        <script src="https://cdn.jsdelivr.net/npm/chart.js" integrity="sha384-DbaKKJFzEObzUXzzW2ud9EpMrUwUhj4fx5QWW2FOhmRMSAaE2PgaEBISpIk9P6Ok" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11" integrity="sha384-L9WbbNmIA63n/RtFE8IfX+3gPFrkRUm0R3QtNssI4guAjTAsHCUq1ewsd8nlmODN" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js" integrity="sha512-35UG0d6CrK7gwyBphAjGGgf3gNqwhjULvj3M6qPVoGpOohBrpnUAbBHbFT+T+2kvLRtNDFnghLyjmOeYdGNm7A==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

</head>
<body>
    <header>
        <h1>DC Comics Universe</h1>
        <button onclick="changeTheme()">Toggle Dark Mode</button>
        <button onclick="toggleGallery()">Show/Hide Gallery</button>

            <canvas id="comicStats" width="400" height="200"></canvas>

    </header>
    <main>
        <section id="comic-gallery">
            <h2>Explore the Multiverse</h2>
            <div class="gallery">
                <?php foreach ($comics as $comic): ?>
                    <div class="comic-card">
                        <img src="<?php echo $comic['cover']; ?>" alt="<?php echo $comic['title']; ?>">
                        <h3><?php echo $comic['title']; ?></h3>
                        <button onclick="likeComic('<?php echo $comic['title']; ?>')">Like</button>
                        <button onclick="viewDetails('<?php echo $comic['title']; ?>', '<?php echo $comic['description']; ?>')">Details</button>
                    </div>
                <?php endforeach; ?>
            </div>
        </section>
        <section id="comic-form">
            <h2>Add Your Favorite DC Comic</h2>
            <form id="comicForm" action="submit.php" method="POST" onsubmit="return validateForm();">
                <label for="comicTitle">Comic Title:</label>
                <input type="text" id="comicTitle" name="title" required>
                <label for="comicCover">Comic Cover URL:</label>
                <input type="url" id="comicCover" name="cover" required>
                <label for="comicDescription">Description:</label>
                <textarea id="comicDescription" name="description" required></textarea>
                <button type="submit">Submit</button>
            </form>
        </section>
    </main>
    <footer>
        <p>&copy; <?php echo date('Y'); ?> DC Comics Fans Unite!</p>
    </footer>
</body>
</html>

</body>
</html>
