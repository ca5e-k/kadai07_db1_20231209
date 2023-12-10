$(document).ready(function () {

  $('#save').on('click', () => {
    const subject = $('#subjectselect').val();
    const status = $('#statusselect').val();
    const title = $('#title').val();
    const sodan = $('#sodan').val();

    const newPostRef = push(dbRef);
    set(newPostRef, {
      kamoku: kamoku,
      date: date,
      status: status,
      title: title,
      sodan: sodan,
    });
  })

  $(document).on('click', '#delete', function () {
    if (confirm('本当に削除しますか？')) {
      $(this).closest('div').remove();
    }
  });

});

onChildAdded(dbRef,function(data){
  const questions = data.val();
  const key =data.key;//削除・更新に必須!!プロパティを取得するのに必要
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

function displayonoff(){
const userpermissions=aaa;

onChildAdded(dbRef,(snapshot)=>{
const content=snapshot.val();

onChildRemoved(dbRef,()=>{
  $(''+data.key).remove();
});

});

// ユーザー情報をデータベースに保存
// const saveUserData = (userId, name, permissions) => {
//   const userRef = ref(db, 'users/' + userId);
//   set(userRef, {
//     name: name,
//     permissions: permissions
//   });
// };

// ユーザーデータの例
// saveUserData('clientUserId', 'クライアントユーザー', {"全員": true, "クライアント内": true});
// saveUserData('auditFirmUserId', '監査法人ユーザー', {"全員": true, "監査法人内": true});

};