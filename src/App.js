import React from 'react';
import {Form, Button} from 'react-bootstrap';

class App extends React.Component {
  choice = ['1','2','3'];

  constructor(props) {
    super(props);
    this.setValue = null
    this.state = {
      value: this.choice[0],
    };
  }

  nextChoice = () => {
    const choice_now = this.choice.indexOf(this.state.value);
    const choice_next = this.choice[(choice_now+1) % this.choice.length];
    this.setState({value: choice_next});
    this.setValue.value = this.state.value;
    console.log('Button pressed: Value', this.state.value);
  };

  render() {
    return (
      <div>
      <Button onClick={this.nextChoice}>Next Choice</Button>
      <SelectTest value = {this.state.value} Ref={e => {this.setValue = e}}/>
      </div>
    );
  }
}

const SelectTest = (props) =>{
  return(
    <Form>
        <Form.Group controlId="testSelect">
          <Form.Label>Test Select</Form.Label>
          <Form.Control 
          as="select"
          defaultValue={props.value}
          ref={props.Ref}
          >
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="choiceDisplay">
          <Form.Label>Current Choice</Form.Label>
          <Form.Control
          type="text"
          defaultValue={props.value}
          ref={props.Ref}
          readOnly
          >
          </Form.Control>
        </Form.Group>
      </Form>
  )
};


export default App;
