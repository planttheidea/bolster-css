import React, {
  PropTypes
} from 'react';

let headers = [],
  rows = [],
  exampleRow = {};

for (let i = 5; i--;) {
  headers.unshift(`Header ${i + 1}`);

  exampleRow[i] = `Data for Header ${i + 1}`;
}

for (let i = 3; i--;) {
  rows.unshift(exampleRow);
}

const Table = ({rowClass = '', tableClass = ''}) => {
  return (
    <table className={tableClass}>
      <thead>
        <tr>
          {headers.map((header, headerIndex) => {
            return (
              <th key={`th-${headerIndex}`}>
                {header}
              </th>
            );
          })}
        </tr>
      </thead>

      <tbody>
        {rows.map((row, rowIndex) => {
          const className = rowIndex === 2 ? rowClass : '';

          return (
            <tr
              className={className}
              key={`tr-${rowIndex}`}
            >
              {Object.keys(row).map((key, tdIndex) => {
                return (
                  <td key={`td-${tdIndex}`}>
                    {row[key]}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

Table.propTypes = {
  tableClass: PropTypes.string
};

export default Table;
