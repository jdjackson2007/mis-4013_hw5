<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $title = htmlspecialchars($_POST['title']);
    $cover = htmlspecialchars($_POST['cover']);
    $description = htmlspecialchars($_POST['description']);
    echo "<h1>Thank You, Hero!</h1>";
    echo "<p>You’ve added <strong>$title</strong> to the multiverse!</p>";
    echo "<a href='index.php'>Return to Gallery</a>";
} else {
    header('Location: index.php');
    exit;
}
?>
