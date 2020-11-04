import "./App.css";
import "./reset.css";

function App() {
  return (
    <div className="App">
      <div className="kiosk__title">
        <span className="kiosk_-title title">Title</span>
      </div>
      <div className="kiosk__image">
        <img src="https://i.pinimg.com/564x/5c/d6/d7/5cd6d781e92d4ed0bf7615e97cda9b34.jpg"></img>
      </div>
      <div className="kiosk__footer">
        <div className="kiosk__btn">
          <button className="kiosk__btn1">Click</button>
          <span>1번 공정 데이터</span>
        </div>
        <div className="kiosk__btn">
          <button className="kiosk__btn2">Click</button>
          <span>2번 공정 데이터</span>
        </div>
        <div className="kiosk__btn">
          <button className="kiosk__btn3">Click</button>
          <span>3번 공정 데이터</span>
        </div>
      </div>
    </div>
  );
}

export default App;
