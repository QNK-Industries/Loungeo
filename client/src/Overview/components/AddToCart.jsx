import React, { useState } from 'react';

export default function AddToCart({ currentStyle }) {
  if (Object.keys(currentStyle).length === 0) {
    return (
      <div>Loading Sizes</div>
    );
  }
  const [currentSize, setCurrentSize] = useState('');
  const [currentQuantity, setCurrentQuantity] = useState(null);

  const sizesNums = [];
  const skusKeys = Object.keys(currentStyle.skus);
  skusKeys.forEach((key) => {
    sizesNums.push(currentStyle.skus[key]);
  });
  console.log(sizesNums);
  return (
    <div>
      <div>
        {sizesNums.map((sizeNum) => {
          if (sizeNum.quantity === 0) {
            return (<span style={{ padding: '10px', textDecoration: 'line-through' }}>{sizeNum.size}</span>);
          } if (currentSize === sizeNum.size) {
            return (
              <span style={{
                padding: '10px', borderRadius: '50%', backgroundColor: 'black', color: 'white',
              }}
              >{sizeNum.size}
              </span>
            );
          }
          return (
            <span
              onClick={() => {
                setCurrentSize(sizeNum.size);
                setCurrentQuantity(sizeNum.quantity);
              }}
              style={{ padding: '10px' }}
            >{sizeNum.size}
            </span>
          );
        })}
      </div>
      <br />
      <div>
        {currentQuantity
          ? (
            <>
              <select>
                {/* <option>Select </option> */}
                {[...Array(currentQuantity + 1).keys()].map((quantity) => (
                  <option>{quantity}</option>
                ))}
              </select>
              <button>Add to Cart</button>
            </>
          )
          : <button onClick={() => { alert('Please Select a Size'); }}>Add to Cart</button>}
      </div>
    </div>
  );
}
