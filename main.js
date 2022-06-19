const charts = [
  '====================',
  '現在持っているのタスク一覧',
  '====================',
];

// 関数の中に実行したいものを定義した。かつ配列の中にオブジェクトを入れ、復路を一つ一つ取り出していくことをイメージ。
const todos = [
  {
    content: '机を片付ける',
    genre: '掃除',
  },
  {
    content: '牛乳を買う',
    genre: '買い物',
  },
  {
    content: '散歩する',
    genre: '運動',
  },
];
const showTodos = () => {
  charts.forEach((chart) => console.log(chart));
  todos.forEach((todo) =>
    console.log(`[内容]: ${todo.content}、[ジャンル]${todo.genre}`)
  );
};
showTodos();
const content = prompt('タスクを入力してください');
const genre = prompt('ジャンルを入力してください');
alert('新しいタスクを追加しました。');
prompt('「確認、追加、削除、終了」の4つのいずれかを入力してください。');
// 関数を用いて配列化してあるオブジェクトにオブジェクトを追加する。
const addTodo = () => {
  const todo = {
    content,
    genre,
  };
  todos.push(todo);
};
addTodo();
showTodos();
