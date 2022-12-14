import TextField from '@material-ui/core/TextField';
import './SubmitComment.scss';
import React, { Component, ReactNode } from 'react';
import Button from '@material-ui/core/Button';
import { submitComment } from '../../utils';

// this is a component of submit commment

export class SubmitComment extends Component {
  state = {
    author: '',
    comment: '',
    isValid_u: true,
    isValid_c: true,
  };

  constructor(props: any) {
    super(props);
    this.handleChange_u = this.handleChange_u.bind(this);
    this.handleChange_c = this.handleChange_c.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  // for now, not for sure the event type
  handleChange_u(event: any): void {
    if (event.target.value.length > 100) {
      this.setState({
        isValid_u: false,
      });
      return;
    }
    this.setState({
      author: event.target.value,
      isValid_u: true,
    });
  }

  handleChange_c(event: any): void {
    if (event.target.value.length > 1000) {
      this.setState({
        isValid_c: false,
      });
      return;
    }
    this.setState({
      comment: event.target.value,
      isValid_c: true,
    });
  }

  async handleClick() {
    // for the initial valid value is true, i should confirm the input is not null
    if (
      !this.state.isValid_u ||
      !this.state.isValid_c ||
      !this.state.author ||
      !this.state.comment
    ) {
      alert('invalid input');
      return;
    }
    try {
      const res = await submitComment({
        author: this.state.author,
        comment: this.state.comment,
      });
      console.log('res', res);
    } catch (error) {
      alert(`err: ${error}`);
    }
  }

  public render(): ReactNode {
    return (
      <div className="form-outer">
        <h3>Input your comment</h3>
        <form noValidate autoComplete="off">
          <div className="form-inner">
            <TextField
              required
              error={!this.state.isValid_u}
              label="User Name"
              placeholder="User Name"
              helperText="maximum field length 100"
              variant="outlined"
              onChange={this.handleChange_u.bind(this)}
            />
            <TextField
              required
              error={!this.state.isValid_c}
              label="Comment"
              multiline
              rows={4}
              placeholder="Write your comment"
              helperText="maximum field length 1000"
              variant="outlined"
              onChange={this.handleChange_c.bind(this)}
            />
          </div>
          <Button
            variant="outlined"
            color="primary"
            onClick={this.handleClick.bind(this)}
          >
            Submit
          </Button>
        </form>
      </div>
    );
  }
}
