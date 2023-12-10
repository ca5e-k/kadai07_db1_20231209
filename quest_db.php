<?php

session_start();



if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $subject = $_POST['subjectselect'];
    $shiryo = $_FILES['shiryo']['name']; // ファイルの場合は $_FILES を使用
    $time = $_POST['date'];
    $status = $_POST['statusselect'];
    $action = $_POST['actionselect'];
    $title = $_POST['title'];
    $sodan = $_POST['question'];

    // データベース接続とデータ登録のロジック
    // ここにPDOを使用したデータベース接続とINSERT文を記述
}
?>