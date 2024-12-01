<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $title = htmlspecialchars($_POST['title']);
    $cover = htmlspecialchars($_POST['cover']);
    $description = htmlspecialchars($_POST['description']);
    echo "<h1>Thank You for Submitting!</h1>";
    echo "<p>Your favorite comic, $title, has been added!</p>";
    echo "<a href='index.php'>Go Back to Gallery</a>";
} else {
    header('Location: index.php');
    exit;
}
?>
