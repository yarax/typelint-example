import React from 'react';
import {getTitle} from '../helpers';
/**
 * Composite types, constructed with JSDoc
 * @param {{error: {message: string}, pets: [Pet], counters: Array, onCounterClick: Function, total: number}} props
 */
export default function PetStore(props) {
  const err = props.error;
  return (
    <div>
      {err ? <b>{err.message}</b> : null}
      <table className="table">
        <tbody>
        {props.pets.map(
          /**
           * @param {Pet} pet
           * @param {Number} index
           */
          (pet, index) => (
          <tr key={index}>
            <td>{getTitle(pet)}</td>
            <td>{getTitle(pet.category)}</td>
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