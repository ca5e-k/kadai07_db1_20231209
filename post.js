// アクションタブを更新することによる動作
$("#actionselect").on("change", function () {
    if (this.value === "seiri") {
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

    } else if (this.value === "question") {
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

    } else if (this.value === "answer") {
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








// // ユニークIDを生成する関数
// function generateUniqueId() {
//     // ランダムな文字列を生成するための関数
//     const randomString = (length, chars) => {
//         let result = '';
//         for (let i = length; i > 0; --i) {
//             result += chars[Math.floor(Math.random() * chars.length)];
//         }
//         return result;
//     }

//     // 使用する文字のセット
//     const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

//     // 8文字のランダムな文字列と現在のタイムスタンプを結合してIDを生成
//     const uniqueId = randomString(8, chars) + '-' + Date.now();

//     return uniqueId;
// }

// // 使用例
// const uniqueId = generateUniqueId();
// console.log(uniqueId); // コンソールに生成されたユニークIDを表示


