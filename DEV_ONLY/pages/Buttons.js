import React from 'react';

import CodeBlock from '../components/CodeBlock';

const STYLES = {
  button: {
    marginRight: 5
  },
  group: {
    marginBottom: 15
  }
};

const Buttons = () => {
  return (
    <section>
      <h4>Buttons</h4>

      <p>There are a number of context-driven buttons that are available:</p>

      <div style={STYLES.group}>
        <button style={STYLES.button}>button</button>

        <button className="primary" style={STYLES.button}>
          button primary
        </button>

        <button className="info" style={STYLES.button}>
          button info
        </button>

        <button className="danger" style={STYLES.button}>
          button danger
        </button>

        <button className="success" style={STYLES.button}>
          button success
        </button>

        <button className="warning" style={STYLES.button}>
          button warning
        </button>

        <button className="link" style={STYLES.button}>
          button link
        </button>
      </div>

      <CodeBlock>{`
<button>
    Standard button
</button>

<button class="primary">
    Primary button
</button>

<button class="info">
    Info button
</button>

<button class="danger">
    Danger button
</button>

<button class="success">
    Success button
</button>

<button class="warning">
    Warning button
</button>

<button class="link">
    Link button
</button>
`}</CodeBlock>

      <h4>Disabled buttons</h4>

      <p>Each of these context buttons have a disabled state:</p>

      <div style={STYLES.group}>
        <button disabled style={STYLES.button}>
          button
        </button>

        <button className="primary" disabled style={STYLES.button}>
          button primary
        </button>

        <button className="info" disabled style={STYLES.button}>
          button info
        </button>

        <button className="danger" disabled style={STYLES.button}>
          button danger
        </button>

        <button className="success" disabled style={STYLES.button}>
          button success
        </button>

        <button className="warning" disabled style={STYLES.button}>
          button warning
        </button>

        <button className="link" disabled style={STYLES.button}>
          button link
        </button>
      </div>

      <CodeBlock>{`
<button disabled>
    Standard button (disabled)
</button>

<button class="primary" disabled>
    Primary button (disabled)
</button>

<button class="info" disabled>
    Info button (disabled)
</button>

<button class="danger" disabled>
    Danger button (disabled)
</button>

<button class="success" disabled>
    Success button (disabled)
</button>

<button class="warning" disabled>
    Warning button (disabled)
</button>

<button class="link" disabled>
    Link button (disabled)
</button>
`}</CodeBlock>

      <h4>Button sizes</h4>

      <p>
        You can also provide appropriate sizing to any button (medium is the
        standard size):
      </p>

      <div style={STYLES.group}>
        <button className="extra-small" style={STYLES.button}>
          button extra-small
        </button>

        <button className="small" style={STYLES.button}>
          button small
        </button>

        <button style={STYLES.button}>button medium (default)</button>

        <button className="large" style={STYLES.button}>
          button large
        </button>

        <button className="extra-large" style={STYLES.button}>
          button extra-large
        </button>
      </div>

      <CodeBlock>{`
<button class="extra-small">
    Extra-small button
</button>

<button class="small">
    Small button
</button>

<button>
    Medium (normal) button
</button>

<button class="large">
    Large button
</button>

<button class="extra-large">
    Extra-large button
</button>
`}</CodeBlock>

      <h4>Button groups</h4>

      <p>
        Wrapping buttons in a container with the class "button-group" will
        automatically group the buttons together:
      </p>

      <div className="button-group" style={STYLES.group}>
        <button>button</button>

        <button className="primary">button primary</button>

        <button className="info">button info</button>

        <button className="link">button link</button>

        <button className="danger">button danger</button>

        <button className="success">button success</button>

        <button className="warning">button warning</button>
      </div>

      <CodeBlock>{`
<div class="button-group">
    <button class="primary">
       Primary button in group
    </button>

    <button>
       Normal button in group
    </button>

    <button class="danger">
       Danger button in group
    </button>
</div>
`}</CodeBlock>

      <h4>Justified button groups</h4>

      <p>
        If you want the grouping to naturally expand to fill the width of the
        container, you can add the "justified" class:
      </p>

      <div className="button-group full-width justified" style={STYLES.group}>
        <button>button</button>

        <button className="primary">button primary</button>

        <button className="success">button success</button>
      </div>

      <CodeBlock>{`
<div class="button-group full-width justified">
    <button class="primary">
       Primary button in justified group
    </button>

    <button>
       Normal button in justified group
    </button>

    <button class="danger">
       Danger button in justified group
    </button>
</div>
`}</CodeBlock>
    </section>
  );
};

export default Buttons;
