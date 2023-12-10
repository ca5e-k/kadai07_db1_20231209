<?php

session_start();

// your-server-side-script.php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // AJAXから送信されたデータを受け取る
    $subject = $_POST['subject'];
    $shiryo = $_POST['shiryo'];
    $status = $_POST['status'];
    $action = $_POST['action'];
    $title = $_POST['title'];
    $sodan = $_POST['sodan'];

    // ここでデータベース接続とINSERTまたはUPDATE処理
    // ...
}
?>