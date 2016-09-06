import React from 'react';

import CodeBlock from '../components/CodeBlock';

const STYLES = {
  tag: {
    marginRight: 5
  },
  group: {
    marginBottom: 15
  }
};

const Labels = () => {
  return (
    <section>
      <h4>
        Tags
      </h4>

      <p>
        Tags allow for context-based styling of text to identify it:
      </p>

      <div style={STYLES.group}>
        <span
          className="tag"
          style={STYLES.tag}
        >
          tag
        </span>

        <span
          className="tag primary"
          style={STYLES.tag}
        >
          tag primary
        </span>

        <span
          className="tag info"
          style={STYLES.tag}
        >
          tag info
        </span>

        <span
          className="tag success"
          style={STYLES.tag}
        >
          tag success
        </span>

        <span
          className="tag danger"
          style={STYLES.tag}
        >
          tag danger
        </span>

        <span
          className="tag warning"
          style={STYLES.tag}
        >
          tag warning
        </span>
      </div>
      
      <CodeBlock>{`
<span class="tag">
    Standard tag
</span>

<span class="tag primary">
    Primary tag
</span>

<span class="tag info">
    Info tag
</span>

<span class="tag danger">
    Danger tag
</span>

<span class="tag success">
    Success tag
</span>

<span class="tag warning">
    Warning tag
</span>
`}</CodeBlock>

      <h4>
        Tag groups
      </h4>

      <p>
        Tags can also be grouped together when wrapped in a container with the "tag-group" class:
      </p>

      <div
        className="tag-group"
        style={STYLES.group}
      >
        <span className="tag primary">
          tag primary
        </span>

        <span className="tag warning">
          tag warning
        </span>

        <span className="tag info">
          tag info
        </span>
      </div>

      <CodeBlock>{`
<div class="tag-group">
    <span class="tag primary">
        Primary tag
    </span>

    <span class="tag">
        Standard tag
    </span>

    <span class="tag info">
        Info tag
    </span>
</div>
`}</CodeBlock>
    </section>
  );
};

export default Labels;
