import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';

export const goods = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

export const App = () => {
  const [select, useSelect] = useState('Jam');

  <main className="section container">
    <h1 className="title is-flex is-align-items-center">
      {select ? (
        <>
          {`${select} is selected`}

          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => useSelect('')}
          />
        </>
      ) : (
        'No goods selected'
      )}
    </h1>

    <table className="table">
      <tbody>
        {goods.map(good => (
          <tr
            key={good}
            className={
              select === good ? 'has-background-success-light' : ''
            }
          >
            <td>
              {select === good ? <button>-</button> : <button>+</button>}
            </td>
            <td>{good}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </main>;
};
