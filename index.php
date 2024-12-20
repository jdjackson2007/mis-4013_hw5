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
</head>
<body>
    <header>
        <h1>DC Comics Universe</h1>
        <button onclick="changeTheme()">Toggle Dark Mode</button>
        <button onclick="toggleGallery()">Show/Hide Gallery</button>
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
