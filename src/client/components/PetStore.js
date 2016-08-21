import React from 'react';

export default function PetStore (props) {
  const err = props.error;
  return (
    <div>
      {err ? <b>{err.message}</b> : null}
      <table className="table">
        <tbody>
        {props.pets.map((pet, index) => (
          <tr key={index}>
            <td>{pet.name}</td>
            <td>{pet.category.name}</td>
            <td>{pet.price}</td>
            <td>
              <input size="2" value={props.counters[index] || 0}/>
            </td>
            <td>
              <button onClick={props.onCounterClick(index, 1)}>+</button>
              <button onClick={props.onCounterClick(index, -1)}>-</button>
            </td>
          </tr>
        ))}
        </tbody>
      </table>
      <div>
        <b>Total:</b> {props.total}
      </div>
    </div>
  );
}