import React from 'react';
import { Style } from 'react-style-tag';

import CodeBlock from '../components/CodeBlock';

const GRID_SIZES = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const STYLES = {
  codeBlock: {
    marginTop: 15
  }
};

const Grids = () => {
  return (
    <section>
      <h4>Default setup</h4>

      <p>
        The default grid system will automatically expand columns to fill the
        space, both horizontally and vertically.
      </p>

      <div className="grid">
        <div className="column">
          <div className="focused-column">column</div>
        </div>

        <div className="column remaining-column-container">
          <div className="remaining-column">column</div>
        </div>

        <div className="column remaining-column-container">
          <div className="remaining-column">column</div>
        </div>
      </div>

      <CodeBlock style={STYLES.codeBlock}>{`
<div class="grid">
    <div class="column">
        column
    </div>

    <div class="column">
        column
    </div>

    <div class="column">
        column
    </div>
</div>
`}</CodeBlock>

      <h4>Default setup with additional column classes</h4>

      <p>Columns can also have classes added for alignment or sizing:</p>

      <ul>
        <li>
          align-center = centers column vertically with other columns rather
          than stretch to fit the space
        </li>

        <li>
          align-start = aligns column to the top of the row rather than stretch
          to fit the space
        </li>

        <li>
          align-end = aligns column to the bottom of the row rather than stretch
          to fit the space
        </li>

        <li>
          fit-content = prevents column from growing to fit naturally with other
          columns, instead making its width as small as possible for its
          content.
        </li>
      </ul>

      <div
        className="grid"
        style={{
          height: 100
        }}
      >
        <div className="column align-center">
          <div className="focused-column">column align-center</div>
        </div>

        <div className="column fit-content align-start remaining-column-container">
          <div className="remaining-column">column fit-content align-start</div>
        </div>

        <div className="column align-end remaining-column-container">
          <div className="remaining-column">column align-end</div>
        </div>
      </div>

      <CodeBlock style={STYLES.codeBlock}>{`
<div class="grid">
    <div class="column align-start">
        I am aligned at the top of the row
    </div>

    <div class="column align-center fit-content">
        I am aligned at the center of the row and am only as large as my content
    </div>

    <div class="column align-end">
        I am aligned at the bottom of the row
    </div>
</div>
`}</CodeBlock>

      <h4>Fixed-width columns</h4>

      <p>
        If you would rather go with a fixed-width column setup, there are
        classes for a standard 12-column grid based on the convention
        "column-[size]", where size is the number out of twelve. For example,
        "column-6" would equate to 6 / 12, or 50% width.
      </p>

      <div className="grid">
        {GRID_SIZES.map((size, sizeIndex) => {
          const remainingSize = 12 - size;

          let remainingColumns = [];

          for (let i = 0; i < remainingSize; i++) {
            remainingColumns.push(1);
          }

          return (
            <div className="row" key={`row-${sizeIndex}`}>
              <div className={`column column-${size}`}>
                <div className="focused-column">column-{size}</div>
              </div>

              {remainingColumns.map((column, columnIndex) => {
                return (
                  <div
                    className="column column-1 remaining-column-container"
                    key={`remaining-column-${columnIndex}`}
                  >
                    <div className="remaining-column">1</div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>

      <CodeBlock style={STYLES.codeBlock}>{`
<div class="grid">
    <div class="column column-8">
        I will be 66.66667% width (2/3).
    </div>

    <div class="column column-xs-4">
        I will be 33.33333% width (1/3).
    </div>
</div>
`}</CodeBlock>

      <p>
        These fixed-width sizes are also available with breakpoint-based class
        names "column-[breakpoint]-[size]". For example, "column-md-6" will
        apply a 50% width for the column when the screen is larger than the size
        of the md breakpoint.
      </p>

      <CodeBlock style={STYLES.codeBlock}>{`
<div class="grid">
    <div class="column column-xs-6 column-md-9">
        I will be 50% on small screens and 75% on larger screens.
    </div>

    <div class="column column-xs-6 column-md-3">
        I will be 50% on small screens and 25% on larger screens.
    </div>
</div>
`}</CodeBlock>

      <h4>Fixed-width columns with offsets</h4>

      <p>
        You can also apply the same widths as offsets to any column following
        the convention "offset-[size]":
      </p>

      <div className="grid">
        <div className="row">
          <div className={`column column-4 offset-3`}>
            <div className="focused-column">column-4 offset-3</div>
          </div>
        </div>

        <div className="row">
          <div className={`column column-7 offset-4`}>
            <div className="focused-column">column-7 offset-4</div>
          </div>
        </div>

        <div className="row">
          <div className={`column column-9 offset-1`}>
            <div className="focused-column">column-9 offset-1</div>
          </div>
        </div>
      </div>

      <CodeBlock style={STYLES.codeBlock}>{`
<div class="grid">
    <div class="column-9 offset-2">
        I will be 75% width that is offset to the left by 16.16667%.
    </div>
    <div class="column-1">
        I will be 8.33333% width.
    </div>
</div>
`}</CodeBlock>

      <p>
        Like columns, the fixed-width offsets can be applied on a breakpoint
        basis as well:
      </p>

      <CodeBlock>{`
<div class="grid">
    <div class="column-xs-11 column-md-9 offset-md-2">
        I will be 75% width that is offset to the left by 16.16667% on larger screens, but will
        be 91.66667% width on smaller screens.
    </div>
    <div class="column-1">
        I will always be 8.33333% width.
    </div>
</div>
`}</CodeBlock>

      <Style>{`
        .focused-column {
          background-color: orange;
          border-radius: 3px;
          margin-bottom: 5px;
          padding: 5px;
          text-align: center;
          white-space: nowrap;
        }

        .remaining-column {
          border-radius: 3px;
          margin-bottom: 5px;
          padding: 5px;
          text-align: center;
        }

        .remaining-column-container:nth-of-type(odd) .remaining-column {
          background-color: yellow;
        }

        .remaining-column-container:nth-of-type(even) .remaining-column {
          background-color: yellowgreen;
        }
    `}</Style>
    </section>
  );
};

export default Grids;
