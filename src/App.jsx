import { useState, useEffect, useContext } from 'react';
import './App.css';
import selfInfoContext from './main.jsx';

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const [text2, setText2] = useState("");
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    console.log("hello hooks");
  }, [count]);
  // 第二引数に空配列を指定すると、マウント時にのみ実行される

  const handleClick = () => {
    // 配列に追加する処理
    setPostList([
      ...postList,
      {
        id: postList.length + 1,
        content: text2
      }
    ]);
    setText2("");
  };

  const handleDelete = (id) => {
    setPostList(postList.filter((post) => post.id !== id));
  };

  const selfInfo = useContext(selfInfoContext);

  return (
    <div className='App'>
      <h1>useState</h1>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>プラス</button>
      <p>{text}</p>
      <input
        type="text"
        placeholder='テキストを入力してください'
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div>
        <input
          type="text"
          placeholder='テキストを入力してください'
          value={text2}
          onChange={(e) => setText2(e.target.value)}
        />
        <button onClick={() => handleClick()}>投稿</button>
        {postList.map((post) =>
          <div key={post.id}>
              <p>投稿内容：{post.content}</p>
              <button onClick={() => handleDelete(post.id)}>削除</button>
          </div>
        )}
      </div>
      <hr />
      <h1>useContext</h1>
      <p>名前：{selfInfo.name}</p>
      <p>年齢：{selfInfo.age}</p>
      <p>趣味：{selfInfo.hobby}</p>
      <hr />
    </div>
  )
}

export default App