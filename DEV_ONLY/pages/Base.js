import React from 'react';

import CodeBlock from '../components/CodeBlock';

const STYLES = {
  container: {
    backgroundColor: '#d5d5d5',
    marginBottom: 15
  },
  group: {
    marginBottom: 15
  }
};

const Base = () => {
  return (
    <section>
      <h4>Disabled</h4>
      <p>
        You can add the disabled state to any element by either adding the{' '}
        <code>disabled</code> attribute (when valid for the element type) or the
        class "disabled":
      </p>
      <div disabled style={STYLES.group}>
        I should be semi-opaque and have a not-allowed cursor.
      </div>
      <CodeBlock>{`
<div disabled>
    I am disabled!
</div>

<div class="disabled">
    I am disabled too!
</div>
`}</CodeBlock>
      <h4>Links</h4>
      <p>Links are normalized on common styles:</p>
      <div>
        <a>I am a hyperlink</a>
      </div>
      <div style={STYLES.group}>
        <a disabled>I am a disabled hyperlink</a>
      </div>
      <CodeBlock>{`
<a>
    I am a hyperlink!
</a>

<a disabled>
    I am a disabled hyperlink!
</a>

<a class="disabled">
    I am a disabled hyperlink too!
</a>
`}</CodeBlock>
      <h4>Lists</h4>
      <p>Lists are also normalized around common styles:</p>
      <div style={STYLES.group}>
        <ul>
          <li>Unordered list item 1</li>

          <li>Unordered list item 2</li>
        </ul>
      </div>
      <div style={STYLES.group}>
        <ol>
          <li>Ordered list item 1</li>

          <li>Ordered list item 2</li>
        </ol>
      </div>
      <div style={STYLES.group}>
        <dl>
          <dt>Definition list item 1</dt>

          <dt>Definition list item 2</dt>

          <dd>Definition list item 2 details</dd>

          <dt>Definition list item 3</dt>

          <dd>Definition list item 3 details</dd>
        </dl>
      </div>
      <CodeBlock>{`
<ul>
  <li>
    Unordered list item 1
  </li>
  <li>
    Unordered list item 2
  </li>
</ul>

<ol>
  <li>
    Ordered list item 1
  </li>
  <li>
    Ordered list item 2
  </li>
</ol>

<dl>
  <dt>
    Definition list item 1
  </dt>
  <dt>
    Definition list item 2
  </dt>
  <dd>
    Definition list item 2 details
  </dd>
  <dt>
    Definition list item 3
  </dt>
  <dd>
    Definition list item 3 details
  </dd>
</dl>
`}</CodeBlock>
      <h4>Blocks</h4>
      <p>
        <code>p</code>, <code>hr</code>, and <code>blockquote</code> elements:
      </p>
      <p>I am a block of text in a paragraph</p>
      <hr />
      I am between two hr tags
      <hr />
      <blockquote>I am a block of text in a blockquote</blockquote>
      <CodeBlock>{`
<p>
  I am a block of text in a paragraph
</p>

<hr/>

<blockquote>
  I am a block of text in a blockquote
</blockquote>
`}</CodeBlock>
      <h4>Code</h4>
      <p>
        Code blocks wrapped in <code>code</code> have simple monospace styling
      </p>
      <pre>
        <code>
          {`// you can have fun with code blocks

import React from 'react';
import 'tactcss';

const App = () => {
  return (
    <div>
        Tact FTW!
    </div>
  );
};

export default App;`}
        </code>
      </pre>
      <CodeBlock>{`
<pre>
    <code>
        const codeBlock = 'me!';
    </code>
</pre>
`}</CodeBlock>
      <h4>Helper classes</h4>
      <p>There are different helper classes for different options.</p>
      <p>
        The "container" class will apply fixed-width styling that is centered in
        the page, which will grow in size responsively based on breakpoints.
      </p>
      <div className="container" style={STYLES.container}>
        The "container" class will create a fixed-width responsive container
        that is centered in the page.
      </div>
      <CodeBlock>{`
<div class="container">
    I am a fixed-width container that will grow responsively based on screen sizes.
</div>
`}</CodeBlock>
      <p>
        The "padded" class will add padding on both the left and right sides.
      </p>
      <div className="padded" style={STYLES.container}>
        I am padded on the left and right sides!
      </div>
      <p>There are variations for all forms:</p>
      <ul>
        <li>padded-left (left side only)</li>

        <li>padded-right (right side only)</li>

        <li>padded-top (top side only)</li>

        <li>padded-bottom (bottom side only)</li>

        <li>padded-full (all four sides)</li>
      </ul>
      <CodeBlock>{`
<div class="padding">
    I am padded on the left and right sides.
</div>

<div class="padding-left">
    I am padded on the left side.
</div>

<div class="padding-right">
    I am padded on the right side.
</div>

<div class="padding-top">
    I am padded on the top side.
</div>

<div class="padding-bottom">
    I am padded on the bottom side.
</div>

<div class="padding-full">
    I am padded on all sides.
</div>
`}</CodeBlock>
      <p>
        The "card" class will apply a simple decoration to a container
        (background, border, color):
      </p>
      <div className="container card padded-full" style={STYLES.group}>
        I am a padded-full container that is also a card.
      </div>
      <CodeBlock>{`
<div class="container card padded-full">
  I am a padded-full container that is also a card.
</div>
`}</CodeBlock>
      <p>
        The "hidden-*" classes will hide the element at the screen size
        specified (xs, sm, md, lg, xl):
      </p>
      <div className="hidden-xs" style={STYLES.group}>
        I am hidden on xs screen sizes.
      </div>
      <CodeBlock>{`
<div class="hidden-xs">
  I am hidden on xs screen sizes.
</div>
`}</CodeBlock>
      <p>
        The "*-only" classes will do the opposite, only show the element at the
        screen size specified (xs, sm, md, lg, xl):
      </p>
      <div className="lg-only" style={STYLES.group}>
        I am only shown on lg screen sizes.
      </div>
      <CodeBlock>{`
<div class=lg-only">
  I am only shown on lg screen sizes.
</div>
`}</CodeBlock>
    </section>
  );
};

export default Base;
