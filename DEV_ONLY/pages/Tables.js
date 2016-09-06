import React from 'react';

import CodeBlock from '../components/CodeBlock';
import Table from '../components/Table';

const STYLES = {
  group: {
    marginBottom: 15
  }
};

const Tables = () => {
  return (
    <section>
      <div style={STYLES.group}>
        <h4>
          Standard
        </h4>

        <p>
          The standard table applies a default style to headers and columns:
        </p>

        <Table/>
      </div>

      <CodeBlock>{`
<table>
    <thead>
        <tr>
            <th>
                Header 1
            </th>
            <th>
                Header 2
            </th>
        </tr>
    </thead>

    <tbody>
        <tr>
            <td>
                Row 1 Data 1
            </td>
            <td>
                Row 1 Data 2
            </td>
        </tr>
        <tr>
            <td>
                Row 2 Data 1
            </td>
            <td>
                Row 2 Data 2
            </td>
        </tr>
    </tbody>
</table>
`}</CodeBlock>

      <div style={STYLES.group}>
        <h4>
          Full width
        </h4>

        <p>
          Applying the "full-width" class to the table will cause the table to expaned to fit the size of its container:
        </p>

        <Table tableClass="full-width"/>
      </div>

      <CodeBlock>{`
<table class="full-width">
    <thead>
        <tr>
            <th>
                Header 1
            </th>
            <th>
                Header 2
            </th>
        </tr>
    </thead>

    <tbody>
        <tr>
            <td>
                Row 1 Data 1
            </td>
            <td>
                Row 1 Data 2
            </td>
        </tr>
        <tr>
            <td>
                Row 2 Data 1
            </td>
            <td>
                Row 2 Data 2
            </td>
        </tr>
    </tbody>
</table>
`}</CodeBlock>

      <div style={STYLES.group}>
        <h4>
          Striped
        </h4>

        <p>
          Applying the "striped" class to the table will add a slight background-color to every other row:
        </p>

        <Table tableClass="striped"/>
      </div>

      <CodeBlock>{`
<table class="striped">
    <thead>
        <tr>
            <th>
                Header 1
            </th>
            <th>
                Header 2
            </th>
        </tr>
    </thead>

    <tbody>
        <tr>
            <td>
                Row 1 Data 1
            </td>
            <td>
                Row 1 Data 2
            </td>
        </tr>
        <tr>
            <td>
                Row 2 Data 1
            </td>
            <td>
                Row 2 Data 2
            </td>
        </tr>
    </tbody>
</table>
`}</CodeBlock>

      <div style={STYLES.group}>
        <h4>
          Bordered
        </h4>

        <p>
          Applying the "bordered" class to the table will add bordered to all cells:
        </p>

        <Table tableClass="bordered"/>
      </div>

      <CodeBlock>{`
<table class="bordered">
    <thead>
        <tr>
            <th>
                Header 1
            </th>
            <th>
                Header 2
            </th>
        </tr>
    </thead>

    <tbody>
        <tr>
            <td>
                Row 1 Data 1
            </td>
            <td>
                Row 1 Data 2
            </td>
        </tr>
        <tr>
            <td>
                Row 2 Data 1
            </td>
            <td>
                Row 2 Data 2
            </td>
        </tr>
    </tbody>
</table>
`}</CodeBlock>

      <div style={STYLES.group}>
        <h4>
          Horizontal
        </h4>

        <p>
          Applying the "horizontal" class to the table will remove the borders separating columns, and instead show borders separating rows:
        </p>

        <Table tableClass="horizontal"/>
      </div>

      <CodeBlock>{`
<table class="horizontal">
    <thead>
        <tr>
            <th>
                Header 1
            </th>
            <th>
                Header 2
            </th>
        </tr>
    </thead>

    <tbody>
        <tr>
            <td>
                Row 1 Data 1
            </td>
            <td>
                Row 1 Data 2
            </td>
        </tr>
        <tr>
            <td>
                Row 2 Data 1
            </td>
            <td>
                Row 2 Data 2
            </td>
        </tr>
    </tbody>
</table>
`}</CodeBlock>

      <div style={STYLES.group}>
        <h4>
          Hover
        </h4>

        <p>
          Applying the "hover" class to the table will create a darkening of a row when it is hovered over:
        </p>

        <Table tableClass="hover"/>
      </div>

      <CodeBlock>{`
<table class="hover">
    <thead>
        <tr>
            <th>
                Header 1
            </th>
            <th>
                Header 2
            </th>
        </tr>
    </thead>

    <tbody>
        <tr>
            <td>
                Row 1 Data 1
            </td>
            <td>
                Row 1 Data 2
            </td>
        </tr>
        <tr>
            <td>
                Row 2 Data 1
            </td>
            <td>
                Row 2 Data 2
            </td>
        </tr>
    </tbody>
</table>
`}</CodeBlock>

      <div style={STYLES.group}>
        <h4>
          Context rows
        </h4>

        <p>
          Applying any of the context classes to the row will cause the entire row to be highlighted as that context coloring. Valid context classes are:
        </p>

        <ul style={STYLES.group}>
          <li>
            primary
          </li>
          <li>
            info
          </li>
          <li>
            danger
          </li>
          <li>
            success
          </li>
          <li>
            warning
          </li>
          <li>
            disabled
          </li>
        </ul>

        <table>
          <thead>
            <tr>
              <th>
                Header 1
              </th>
              <th>
                Header 2
              </th>
              <th>
                Header 3
              </th>
              <th>
                Header 4
              </th>
              <th>
                Header 5
              </th>
            </tr>
          </thead>

          <tbody>
            <tr className="primary">
              <td>
                Data for Header 1
              </td>
              <td>
                Data for Header 2
              </td>
              <td>
                Data for Header 3
              </td>
              <td>
                Data for Header 4
              </td>
              <td>
                Data for Header 5
              </td>
            </tr>
            <tr className="info">
              <td>
                Data for Header 1
              </td>
              <td>
                Data for Header 2
              </td>
              <td>
                Data for Header 3
              </td>
              <td>
                Data for Header 4
              </td>
              <td>
                Data for Header 5
              </td>
            </tr>
            <tr className="danger">
              <td>
                Data for Header 1
              </td>
              <td>
                Data for Header 2
              </td>
              <td>
                Data for Header 3
              </td>
              <td>
                Data for Header 4
              </td>
              <td>
                Data for Header 5
              </td>
            </tr>
            <tr className="success">
              <td>
                Data for Header 1
              </td>
              <td>
                Data for Header 2
              </td>
              <td>
                Data for Header 3
              </td>
              <td>
                Data for Header 4
              </td>
              <td>
                Data for Header 5
              </td>
            </tr>
            <tr className="warning">
              <td>
                Data for Header 1
              </td>
              <td>
                Data for Header 2
              </td>
              <td>
                Data for Header 3
              </td>
              <td>
                Data for Header 4
              </td>
              <td>
                Data for Header 5
              </td>
            </tr>
            <tr className="disabled">
              <td>
                Data for Header 1
              </td>
              <td>
                Data for Header 2
              </td>
              <td>
                Data for Header 3
              </td>
              <td>
                Data for Header 4
              </td>
              <td>
                Data for Header 5
              </td>
            </tr>
          </tbody>
        </table>

        <p>
          These classes can also be applied to individual cells and the coloring with only apply to that cell.
        </p>
      </div>

      <CodeBlock>{`
<table>
  <thead>
    <tr>
      <th>
        Header 1
      </th>
      <th>
        Header 2
      </th>
      <th>
        Header 3
      </th>
      <th>
        Header 4
      </th>
      <th>
        Header 5
      </th>
    </tr>
  </thead>

  <tbody>
    <tr class="primary">
      <td>
        Data for Header 1
      </td>
      <td>
        Data for Header 2
      </td>
      <td>
        Data for Header 3
      </td>
      <td>
        Data for Header 4
      </td>
      <td>
        Data for Header 5
      </td>
    </tr>
    <tr class="info">
      <td>
        Data for Header 1
      </td>
      <td>
        Data for Header 2
      </td>
      <td>
        Data for Header 3
      </td>
      <td>
        Data for Header 4
      </td>
      <td>
        Data for Header 5
      </td>
    </tr>
    <tr class="danger">
      <td>
        Data for Header 1
      </td>
      <td>
        Data for Header 2
      </td>
      <td>
        Data for Header 3
      </td>
      <td>
        Data for Header 4
      </td>
      <td>
        Data for Header 5
      </td>
    </tr>
    <tr class="success">
      <td>
        Data for Header 1
      </td>
      <td>
        Data for Header 2
      </td>
      <td>
        Data for Header 3
      </td>
      <td>
        Data for Header 4
      </td>
      <td>
        Data for Header 5
      </td>
    </tr>
    <tr class="warning">
      <td>
        Data for Header 1
      </td>
      <td>
        Data for Header 2
      </td>
      <td>
        Data for Header 3
      </td>
      <td>
        Data for Header 4
      </td>
      <td>
        Data for Header 5
      </td>
    </tr>
    <tr class="disabled">
      <td>
        Data for Header 1
      </td>
      <td>
        Data for Header 2
      </td>
      <td>
        Data for Header 3
      </td>
      <td>
        Data for Header 4
      </td>
      <td>
        Data for Header 5
      </td>
    </tr>
  </tbody>
</table>
`}</CodeBlock>
    </section>
  );
};

export default Tables;
