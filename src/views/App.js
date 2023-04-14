import logo from './logo.svg';
import './App.scss';

import MyComponent from './Example/MyComponent.js';

/*
* Have 2 type component: class component /  function component (function, arrow)
*
* Class component react
* JSX : là một function, hay một hàm của JavaScript, trả về một đống HTML. Code JavaScript trong HTML
*
*/

function App() {
  // c2, khai báo arrow component  const App = () => { return (...)}
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {/* Edit <code>src/App.js</code> and save to reload. */}
          Hello world ! Welcome to my channel! Hihi !
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {/* crtl + / để cmt */}
        {/* loại này hay được dùng */}

        {/* nhớ là muốn sử dụng ở đây thì file MyComponent, class MyComponent đã được export */}
        <MyComponent />

        {/* Loại này đc dùng khi muốn render cái con của cái Mycomponent */}
        {/* <MyComponent>  </MyComponent> */}

      </header>
    </div>
  );
}

export default App;
