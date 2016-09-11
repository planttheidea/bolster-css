import React, {
  Component,
  PropTypes
} from 'react';

class CodeBlock extends Component {
  static propTypes = {
    children: PropTypes.string
  };

  state = {
    isShown: false
  };

  onClickToggleDisplay = () => {
    const {
      isShown
    } = this.state;

    this.setState({
      isShown: !isShown
    });
  };

  render() {
    const {
      children,
      ...otherProps
    } = this.props;
    const {
      isShown
    } = this.state;

    return (
      <div {...otherProps}>
        <button
          className="small"
          onClick={this.onClickToggleDisplay}
        >
          {isShown ? 'Hide' : 'Show'} example
        </button>

        {isShown && (
          <pre>
            <code>
              {children.trim()}
            </code>
          </pre>
        )}
      </div>
    );
  }
}

export default CodeBlock;
