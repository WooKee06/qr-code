import './App.css';
import React from 'react';
import QRCode from "react-qr-code";


function App() {
  const [qrValue, setQrValue] = React.useState('')
  return (
    <div className="App">
      <div className='bg-animete'>
        <div class="glowing">

          <span ></span>

          <span ></span>

          <span ></span>

        </div>

        <div class="glowing">

          <span ></span>

          <span ></span>

          <span ></span>

        </div>

        <div class="glowing">

          <span ></span>

          <span ></span>

          <span ></span>

        </div>

        <div class="glowing">

          <span ></span>

          <span ></span>

          <span ></span>

        </div>
      </div>

      <div className='main-block'>
        <h1>
          Ладно вставь свой qr-code сделаю тебе бисмиля
        </h1>
        <input
          type="text"
          name="text"
          onChange={e => setQrValue(e.target.value)}
          value={qrValue}
          class="input"
          placeholder="Сюда вставвь дара лабан"
        /> <br />

        <QRCode value={qrValue} />
      </div>

    </div>
  );
}

export default App;
