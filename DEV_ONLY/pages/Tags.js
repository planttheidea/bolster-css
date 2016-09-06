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

const TAG_TYPES = [
  '',
  'primary',
  'info',
  'danger',
  'success',
  'warning'
];
const TAG_SIZES = [
  'extra-small',
  'small',
  '',
  'large',
  'extra-large'
];

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
        {TAG_TYPES.map((tagType, tagTypeIndex) => {
          return (
            <span
              className={`tag ${tagType}`}
              key={`tag-type-${tagTypeIndex}`}
              style={STYLES.tag}
            >
              tag {tagType}
            </span>
          );
        })}
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
        Sizes
      </h4>

      <p>
        Tags also can be one of five sizes:
      </p>

      <div style={STYLES.group}>
        {TAG_SIZES.map((tagSize, tagSizeIndex) => {
          const text = tagSize || 'medium (default)';

          return (
            <span
              className={`tag ${tagSize}`}
              key={`tag-size-${tagSizeIndex}`}
              style={STYLES.tag}
            >
              tag {text}
            </span>
          );
        })}
      </div>

      <CodeBlock>{`
<div class="tag small">
    I am a small tag
</div>

<div class="tag extra-large">
    I am a super big tag
</div>
`}</CodeBlock>

      <h4>
        Groups
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
