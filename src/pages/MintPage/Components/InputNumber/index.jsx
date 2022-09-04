import React, { useState } from 'react'

export default function InputNumber() {
  const [value, setValue] = useState(0);
  const decrement = ()=>{
    if (value >= 1) {
setValue(value-1)
    }
  }
  return (
    <div className="input-number">
      <div className='input-container'>
        <div className="input-text">{value}</div>
        {/* <input type="text" placeholder={value} readOnly /> */}
      </div>
      <div className="arrow-container">
        <div className="img-wrapper-1"  onClick={() => setValue(value + 1)}>

          <img src="/assets/svg/Mint-page/up-arrow-small.svg" alt="up-arrow" />
        </div>
        <div className="img-wrapper-2" onClick={() => decrement()}>
          <img src="/assets/svg/Mint-page/down-arrow-small.svg" alt="down-arrow" />
        </div>




      </div>
    </div>
  )
}
