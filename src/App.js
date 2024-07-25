import React from "react";
// 리액트 라이브러리 불러오는 명령어
import{BrowserRouter,Route,Routes} from "react-router-dom";
import HomeView from "./views/HomeView";

const App = ()=>{
  // 익명함수사용. 컴포넌트 첫글자는 반드시 대문자로 지정해야함.
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeView />} />
      </Routes>
    </BrowserRouter>
  )
}

// function App() {
//   return <div>App</div>
// }

export default App;
// App 컴포넌트를 다른 파일에서 재사용할 수 있도록 내보내기로 설정