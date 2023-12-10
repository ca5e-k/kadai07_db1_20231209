
<!-- http://localhost/php01kadai/login.php  -->

<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="login_act.php" method="post">
        <div>
            <fieldset><!-- フォームの入力項目をグループ化するためのタグ -->
                <p><legend>ユーザー認証</legend></p><!--タグでグループ化されたフォームにタイトルをつけることが可能 -->
                <label>email:<input type="text" name='email' required></label><br>
                <label>PW:<input type="password" name='lpw' required></label><br>
                <input type="submit" value="ログイン">
            </fieldset>
        </div>
    </form>
</body>
</html>