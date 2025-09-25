<?php
    $path    = '../';
    $files = scandir($path);
    $files = array_diff(scandir($path), array('.', '..'));
?>

