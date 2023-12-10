<!-- http://localhost/php01kadai/post.php -->
<!-- http://localhost/dashboard/ -->

<!DOCTYPE html>
<html lang="ja">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>

    <div>
            <label for="status" style="text-align: center;">ステータス</label>
            <select id="statusselect" style="text-align: center;">
                <option value="none" id="none">---</option>
                <option value="done" id="done">済</option>
                <option value="teamout" id="teamout">監査チームへ連絡</option>
                <option value="clientout" id="clientout">クライアントへ連絡</option>
                <option value="teamins" id="teamins">監査法人内質問</option>
                <option value="teamink" id="teamink">監査法人内回答</option>
                <option value="clientins" id="clientins">クライアント内質問</option>
                <option value="clientink" id="clientink">クライアント内回答</option>
            </select>
        </div>

    <div id='action'>
    <button type="button" id="save">保存</button>
        <label for="action" style="text-align: center;">アクション</label>
        <select name="actionselect" id="actionselect" style="text-align: center;">
            <option value="none" id="none">---</option>
            <option value="seiri">整理</option>
            <option value="question">質問</option>
            <option value="answer">回答</option>
        </select>
    </div>

    <div>
        <div class="title">
            <label for="title" style="text-align: center;">タイトル</label>
            <input type="text" id="title">
        </div>

        <div class="sodan">
            <label for="sodan" style="text-align: center;">相談</label>
            <textarea name="question" cols="80" rows="10" id="sodan"></textarea>
        </div>
    </div>

    <div id="formContainer"></div>

    <?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $showkengenId = $_POST['showkengenId']; // フロントエンドから送られてきたユニークID
    $formContent = $_POST['formContent'];

    // データベースに接続
    // ...

    // データベースにフォーム内容とユニークIDを保存
    // ...

    echo "Form saved with ID: " . $showkengenId;
}

    ?>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
<script src="post.js"></script>
</body>

</html>