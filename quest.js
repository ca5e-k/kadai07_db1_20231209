$(document).ready(function () {
  $('#statusselect').change(function () {
    const formData = {
      'subject': $('#subjectselect').val(),
      'file': $('#file').val(),
      'status': $('#statusselect').val(),
      'action': $('#actionselect').val(),
      'title': $('#title').val(),
      'sodan': $('#sodan').val()
    };
    // ここでAJAXを使用してサーバーにデータを送信
    $.ajax({
      type: 'POST',
      url: 'quest_db.php', // PHPスクリプトへのパス
      data: formData,
      dataType: 'json',
      encode: true
    }).done(function (data) {
      console.log(data); // 応答をログに記録
    });

  });
});

$(document).ready(function () {

  $('#save').on('click', () => {
    const subject = $('#subjectselect').val();
    const file = $('#file').val();
    const status = $('#statusselect').val();
    const action = $('#actionselect').val();
    const title = $('#title').val();
    const sodan = $('#sodan').val();
  })

  $(document).on('click', '#delete', function () {
    if (confirm('本当に削除しますか？')) {
      $(this).closest('div').remove();
    }
  });

});

// アクションタブを更新することによる動作
$("#actionselect").on("change", function () {
  if (this.value === "question") {
    formContainer.innerHTML += `  //formContainerの中にHTMLで以下の項目を表示 
      <div>// 質問項目の閲覧権限を設定
        <select style="text-align: center;" id="questiontwo">
          <label for="showkengen">閲覧権限</label>
          <option id=all>全員</option>
          <option id=kansahojin>監査法人内</option>
          <option id=client>クライアント内</option>
        </select>
        <button id=delete>削除</button>//質問アクション削除ボタン 
        <label for="question">質問</label>//質問入力欄
        <textarea></textarea>
      </div>
      `;

  } else if (this.value === "seiri") {
    formContainer.innerHTML += `
    <div>
    <select style="text-align: center;" id="seiritwo">
    <label for="showkengen">閲覧権限</label>
    <option id=all>全員</option>
    <option id=kansahojin>監査法人内</option>
    <option id=client>クライアント内</option>
    </select>
    <button id=delete>削除</button>
<label for="rikai">取引理解</label>
<textarea></textarea><br>
<label for="keturon">結論</label>
<textarea></textarea><br>
<label for="seiri">整理内容</label>
<textarea></textarea><br>
<label for="kijyun">基準</label>
<select name="kijyun" id="kijyun"style="text-align: center;">
        <option value="shueki">収益認識基準</option>
        <option value="lease">リース会計基準</option>
    </select>
    </div>   
      `;
  }
});