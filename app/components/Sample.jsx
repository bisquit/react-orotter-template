import React from 'react';

/* 1. Component (Class) */
class SampleComponent extends React.Component {
  // 1.1 Constructor (Optional)
  constructor(props) {
    super(props); // Must be call `super(props)` if you call constructor

    // 1.2 Set initial state (Optional)
    this.state = {
      text: ''
    }

    // 1.3 Bind method to `this`(Optional)
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      text: event.target.value
    })
  }

  render() {
    return (
      <div className="my-sample-component">
        <h1>Input any text below!</h1>
        <input type="text" value={this.state.text} onChange={this.handleChange} />
        <div>You typed: {this.state.text}</div>
      </div>
    )
  }
}


/* 2. Stateless component (Function) */
function SampleStatelessComponent() {
  const FRAMEWORKS = ['Angular2', 'Vue', 'React'];

  const frameworks = FRAMEWORKS.map(framework => {
    return <div key={framework}>{framework}</div>;
  });

  return (
    <div>
      {frameworks}
    </div>
  )
}


function Sample() {
  return (
    <div>
      <h2>Sample Component</h2>
      <SampleComponent />
      <div style={{ marginBottom: '100px' }}></div>
      <SampleStatelessComponent />
    </div>
  )
}

export default Sample;
