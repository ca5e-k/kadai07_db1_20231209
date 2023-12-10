

<?php
session_start();

// フォームからの値を取得
$email = $_POST['email'];
$lpw = $_POST['lpw'];

try {
    // データベース接続 rootはユーザー名で''はPW
    $pdo = new PDO('mysql:host=localhost;dbname=ac_db;charset=utf8', 'root', '');

    // プリペアドステートメントの準備
    $stmt = $pdo->prepare("SELECT * FROM login_table WHERE email = :email AND lpw = :lpw");

    // バインド
    $stmt->bindParam(':email', $email, PDO::PARAM_STR);// bindは仮数に実数を渡す
    $stmt->bindParam(':lpw', $lpw, PDO::PARAM_STR);// PARAMは文字列だと示す

    // 実行
    $stmt->execute();// prepareを実行 prepareとセット利用

    // 結果の確認
    $val = $stmt->fetch(); // ユーザー情報を取得

    if ($val) { 
        // ログイン成功
        $_SESSION['email']  = $val['email'];// ページを跨いで利用する変数
        $_SESSION['authority'] = $val['authority'];// 権限管理に利用するための変数
        $_SESSION['name']      = $val['name'];// 名前に利用するための変数
        // ここにログイン後のリダイレクト先を記述
        header('Location: quest.php');
        exit();  // HTML用語禁止!!
    } else {
        // ログイン失敗
        // ログイン失敗時の処理を記述
        header('Location: login.php?error=invalid_credentials');// login.phpに?記載でerror以降のエラーメッセージを追加
    exit();
    }
} catch (PDOException $e) {
    exit('DbConnectError:' . $e->getMessage());// ログイン失敗時の処理をgetmessageに詳細に記載
}
?>
