import React from 'react';

import CodeBlock from '../components/CodeBlock';

const STYLES = {
  group: {
    marginBottom: 15
  },
  inlineGroup: {
    marginRight: 5
  }
};

const Labels = () => {
  return (
    <section>
      <h4>Form and fieldset</h4>

      <p>All form fields have normalized styling:</p>

      <form>
        <fieldset>
          <legend>I am legend!!</legend>

          <div className="control-group">
            <label>Name</label>

            <input placeholder="Timmy Test" type="text" />
          </div>

          <div className="control-group">
            <label>Email</label>

            <input placeholder="foo@bar.com" type="email" />
          </div>

          <div className="control-group text-right">
            <button className="link" type="button">
              Cancel
            </button>

            <button className="primary" type="button">
              Submit
            </button>
          </div>
        </fieldset>
      </form>

      <p>
        While not necessary, the helper class "control-group" can be provided to
        container elements around each input / label combination for a natural
        spacing.
      </p>

      <CodeBlock>{`
<form>
  <fieldset>
    <div class="control-group">
      <label>Email</label>

      <input type="email"/>
    </div>

    <div class="control-group">
      <button class="primary">
        Submit
      </button>
    </div>
  </fieldset>
</form>
`}</CodeBlock>

      <h4>Inputs</h4>

      <p>
        All input types have normalized styles that will provide context-based
        highlights when appropriate:
      </p>

      <div className="control-group">
        <label>Input</label>

        <input placeholder="Standard input" type="text" />

        <input disabled placeholder="Disabled input" type="text" />

        <input placeholder="Readonly input" readOnly type="text" />

        <input defaultValue="Invalid input" type="email" />
      </div>

      <div className="control-group">
        <label>Textarea</label>

        <textarea placeholder="Standard textarea" />
      </div>

      <div className="control-group">
        <label>Select</label>

        <select>
          <option>Selected</option>

          <option>Option</option>

          <option>Option</option>
        </select>
      </div>

      <div className="control-group">
        <label>Checkbox</label>

        <input type="checkbox" />
      </div>

      <div className="control-group">
        <label>Radio button</label>

        <input type="radio" />
      </div>

      <CodeBlock>{`
<input type="text"/>
<input type="checkbox"/>
<input type="radio"/>

<select>
  <option>Select option</option>
</select>

<textarea></textarea>
`}</CodeBlock>

      <h4>Input groups</h4>

      <p>
        You can group input types by wrapping them in a container with the
        "input-group" class:
      </p>

      <div className="control-group input-group">
        <input placeholder="foo@bar.com" type="email" />

        <button className="primary" type="button">
          Submit
        </button>
      </div>

      <div className="control-group input-group">
        <select>
          <option>Mr.</option>

          <option>Ms.</option>

          <option>Mrs.</option>
        </select>

        <input placeholder="Timmy Test" type="text" />
      </div>

      <CodeBlock>{`
<div class="control-group input-group">
  <input type="text"/>

  <button class="primary">
    Submit
  </button>
</div>
`}</CodeBlock>

      <h4>Stacked input groups</h4>

      <p>
        If you add the "stacked" class to the "input-group" class, you will get
        a vertical grouping rather than horizontal:
      </p>

      <div className="control-group input-group stacked">
        <input placeholder="Timmy Test" type="text" />

        <input placeholder="foo@bar.com" type="email" />

        <textarea placeholder="More info" />
      </div>

      <CodeBlock>{`
<div class="control-group input-group stacked">
  <input type="email"/>
  <input type="text"/>
  <textarea></textarea>
</div>
`}</CodeBlock>

      <h4>Custom toggles</h4>

      <p>
        You can also create a custom toggle by wrapping both the input and the
        label in a container with the "toggle" class, which has the interactions
        of a checkbox or radio button but has the appearance of a standard
        button:
      </p>

      <div className="control-group" style={STYLES.inlineGroup}>
        <div className="toggle">
          <input type="checkbox" />

          <label>Checkbox</label>
        </div>
      </div>

      <CodeBlock>{`
<div class="toggle">
  <input id="toggle" type="checkbox"/>

  <label for="toggle">
    Checkbox
  </label>
</div>
`}</CodeBlock>

      <p>
        You can also wrap these "toggle" class containers in a container with
        the "input-group" class to form grouped custom toggles:
      </p>

      <div className="control-group input-group" style={STYLES.inlineGroup}>
        <div className="toggle">
          <input type="checkbox" />

          <label>Checkbox</label>
        </div>

        <div className="toggle">
          <input type="checkbox" />

          <label>Checkbox</label>
        </div>

        <div className="toggle">
          <input type="checkbox" />

          <label>Checkbox</label>
        </div>
      </div>

      <div className="control-group input-group" style={STYLES.inlineGroup}>
        <div className="toggle">
          <input name="toggle-test" type="radio" />

          <label>Radio Button</label>
        </div>

        <div className="toggle">
          <input name="toggle-test" type="radio" />

          <label>Radio Button</label>
        </div>

        <div className="toggle">
          <input name="toggle-test" type="radio" />

          <label>Radio Button</label>
        </div>
      </div>

      <CodeBlock>{`
<div class="control-group input-group">
  <div class="toggle">
    <input id="checkbox1" type="checkbox"/>

    <label for="checkbox1">
        Checkbox 1
    </label>
  </div>

  <div class="toggle">
    <input id="checkbox2" type="checkbox"/>

    <label for="checkbox2">
        Checkbox 2
    </label>
  </div>
</div>

<div class="control-group input-group">
  <div class="toggle">
    <input id="radio1" name="radio" type="radio"/>

    <label for="checkbox1">
        Radio 1
    </label>
  </div>

  <div class="toggle">
    <input id="radio2" name="radio" type="radio"/>

    <label for="radio2">
        Radio 2
    </label>
  </div>
</div>
`}</CodeBlock>

      <h4>Inline forms using grid</h4>

      <p>
        When you combine form inputs with bolster's grid setup, you can easily
        create inline form setups:
      </p>

      <form>
        <fieldset className="grid">
          <div className="row control-group">
            <label className="column column-2 text-right align-center">
              Name
            </label>

            <div className="column column-10">
              <input placeholder="Timmy Test" type="text" />
            </div>
          </div>

          <div className="row control-group">
            <label className="column column-2 text-right align-center">
              Email
            </label>

            <div className="column column-10">
              <input placeholder="foo@bar.com" type="email" />
            </div>
          </div>

          <div className="row control-group">
            <div className="column column-10 offset-2">
              <button className="primary" type="button">
                Submit
              </button>

              <button className="link" type="button">
                Cancel
              </button>
            </div>
          </div>
        </fieldset>
      </form>

      <CodeBlock>{`
<form>
  <fieldset class="grid">
    <div class="row control-group">
      <label class="column column-2 text-right align-center">
        Name
      </label>

      <div class="column column-10">
        <input
          placeholder="Timmy Test"
          type="text"
        />
      </div>
    </div>

    <div class="row control-group">
      <label class="column column-2 text-right align-center">
        Email
      </label>

      <div class="column column-10">
        <input
          placeholder="foo@bar.com"
          type="email"
        />
      </div>
    </div>

    <div class="row control-group">
      <div class="column column-10 offset-2">
        <button
          class="primary"
          type="button"
        >
          Submit
        </button>

        <button
          class="link"
          type="button"
        >
          Cancel
        </button>
      </div>
    </div>
  </fieldset>
</form>
`}</CodeBlock>
    </section>
  );
};

export default Labels;
