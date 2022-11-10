import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // div生成
  const div = document.createElement("div");
  div.className = "list-row";

  // listタグ生成
  const li = document.createElement("li");
  li.innerText = inputText;

  // button(完了)タグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // 押された完了ボタンの親タグを未完了リストから削除
    removeIncompleteList(completeButton.parentNode);

    // タスクのテキストを定数textに保存
    const text = completeButton.parentNode.firstElementChild.innerText;

    // 追加するdiv要素を作成
    const addTarget = completeButton.parentNode;

    // 追加するdiv要素を初期化
    addTarget.innerText = null;
    console.log(addTarget);

    //listタグを作成
    const li = document.createElement("li");
    li.innerText = text;

    // ボタンを作成
    const returnButton = document.createElement("button");
    returnButton.innerText = "戻す";

    // addTargetの子要素にリスト、戻るボタンを設定
    addTarget.appendChild(li);
    addTarget.appendChild(returnButton);

    // 完了したTODOの部分にaddTargetを追加
    document.getElementById("complete-list").appendChild(addTarget);
  });

  // button(削除)タグ生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグ（div）を未完了リストから削除
    const deleteTarget = deleteButton.parentNode;
    removeIncompleteList(deleteTarget);
  });

  // divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // 未完了のリストに追加
  document.getElementById("incomplete-list").appendChild(div);

  const removeIncompleteList = (target) => {
    document.getElementById("incomplete-list").removeChild(target);
  };
};

document.getElementById("add-button").addEventListener("click", onClickAdd);
