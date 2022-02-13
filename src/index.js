const onClickAdd = () => {
  //入力された文字の取得と初期化
  const inputText = document.querySelector("#add-text").value;
  document.querySelector("#add-text").value = "";

  //ulの作成
  const ul = document.createElement("ul");
  ul.className = "list-row";

  //liの作成
  const li = document.createElement("li");
  li.innerText = inputText;

  //ボタン生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    alert("aaa");
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    const deleteTarget = deleteButton.parentNode;
    document.querySelector("#imcomplete-list").removeChild(deleteTarget);
  });

  //ネスト　ulの子要素としてそれぞれ要素をを追加
  ul.appendChild(li);
  ul.appendChild(completeButton);
  ul.appendChild(deleteButton);

  //todoに追加する
  document.querySelector("#imcomplete-list").appendChild(ul);
};

//追加クリックしたらおこるイベント
document.querySelector("#add-button").addEventListener("click", () => {
  onClickAdd();
});
