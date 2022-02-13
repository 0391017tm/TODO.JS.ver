import "./styles.css";

const onClickAdd = () => {
  //入力された文字の取得と初期化
  const inputText = document.querySelector("#add-text").value;
  document.querySelector("#add-text").value = "";

  //ulの作成
  const ul = document.createElement("ul");
  ul.className = "list-row";

  const li = document.createElement("li");
  li.innerText = inputText;

  //ネスト　ulの子要素にli追加
  ul.appendChild(li);

  //todoに追加する
  document.querySelector("#imcomplete-list").appendChild(ul);
};

document.querySelector("#add-button").addEventListener("click", () => {
  onClickAdd();
});
