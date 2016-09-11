import React, {
  createElement
} from 'react';

import CodeBlock from '../components/CodeBlock';

const HEADER_ITEMS = [
  1,
  2,
  3,
  4,
  5,
  6
];
const TEXT_ITEMS = [
  'left',
  'center',
  'right',
  'primary',
  'info',
  'success',
  'danger',
  'warning',
  'bold',
  'italic'
];

const STYLES = {
  codeBlock: {
    marginTop: 15
  },
  group: {
    marginBottom: 15
  }
};

const Text = () => {
  return (
    <section>
      <h4>
        Headers
      </h4>

      <p>
        Headers have a linear cascading font-size reduction and em-based padding, so your typefont will appear natural with your content.
      </p>

      {HEADER_ITEMS.map((type, typeIndex) => {
        return createElement(`h${type}`, {
          children: `h${type} / .header-${type}`,
          key: `header-${typeIndex}`
        });
      })}

      <CodeBlock style={STYLES.codeBlock}>
        {HEADER_ITEMS.reduce((codeBlock, type) => {
          return `${codeBlock}
<h${type}>
    Header h${type}
</h${type}>

<div class="header-${type}">
    Header h${type}
</h${type}>
`;
        }, '')}
      </CodeBlock>

      <h4>
        Text styles
      </h4>

      <p>
        There are also classes that you can apply that will give inline text a specific context:
      </p>

      <ul style={STYLES.group}>
        <li>
          text-left = align text to the left
        </li>
        <li>
          text-center = align text to the center
        </li>
        <li>
          text-right = align text to the right
        </li>
        <li>
          text-primary = color the font with the primary color
        </li>
        <li>
          text-info = color the font with the info color
        </li>
        <li>
          text-danger = color the font with the danger color
        </li>
        <li>
          text-success = color the font with the success color
        </li>
        <li>
          text-warning = color the font with the warning color
        </li>
        <li>
          text-bold = provide a bold weight to the font
        </li>
        <li>
          text-italic = provide an italic style to the font
        </li>
      </ul>

      {TEXT_ITEMS.map((type, typeIndex) => {
        return (
          <div
            className={`text-${type}`}
            key={`text-item-${typeIndex}`}
          >
            I am {type} text
          </div>
        );
      })}

      <CodeBlock style={STYLES.codeBlock}>{TEXT_ITEMS.reduce((codeBlock, type) => {
        return `${codeBlock}
<span class="text-${type}">
    I am ${type} text
</span>
`;
      }, '')}</CodeBlock>
    </section>
  );
};

export default Text;
