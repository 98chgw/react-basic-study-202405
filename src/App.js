import logo from './logo.svg';
import './App.css';
import NoName from './NoName';

function App() {
  const $h2 = <h2>반가워요!</h2>
  return (
    <>
      <NoName />
      <div className='App'>
        <h1>안녕하세요!</h1>
        {$h2}
      </div>
      <div className='noname'>
        <input type='text' />
        <p>
          오늘은 5월 1일 수요일입니다.
          오후 3시 30분 입니다.
        </p>
      </div>
    </>
  );
}

export default App;
