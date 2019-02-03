import React from 'react';

import CodeBlock from '../components/CodeBlock';

const STYLES = {
  codeBlock: {
    marginTop: 15
  },
  imgContainer: {
    width: 200
  }
};

const Images = () => {
  return (
    <section>
      <h4>Responsive images</h4>

      <p>
        Images with the class "responsive" added will only grow to at-most the
        size of their container. In the example below, the image is 350px wide
        by default, but the container is set to 200px.
      </p>

      <div style={STYLES.imgContainer}>
        <img
          className="responsive"
          src="https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97150&w=350&h=150"
        />
      </div>

      <CodeBlock style={STYLES.codeBlock}>{`
<img class="responsive" src="foo.png"/>
`}</CodeBlock>

      <h4>Rounded images</h4>

      <p>
        Images with the class "rounded" added will receive a small
        border-radius.
      </p>

      <img
        className="rounded"
        src="https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97150&w=350&h=150"
      />

      <CodeBlock style={STYLES.codeBlock}>{`
<img class="rounded" src="foo.png"/>
`}</CodeBlock>

      <h4>Circle images</h4>

      <p>
        Images with the class "circle" added will receive a border-radius of
        50%.
      </p>

      <img
        className="circle"
        src="https://placeholdit.imgix.net/~text?txtsize=33&txt=150%C3%97150&w=150&h=150"
      />

      <CodeBlock style={STYLES.codeBlock}>{`
<img class="circle" src="foo.png"/>
`}</CodeBlock>
    </section>
  );
};

export default Images;
