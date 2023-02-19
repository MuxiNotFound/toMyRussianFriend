import React, { Component, ReactNode } from 'react';
import './CommentPage.scss';
import { DisplayComments } from './displayComments/DisplayComments';
import { SubmitComment } from './submitComment/SubmitComment';
import { fetchComments, IComment } from '../utils';

export class CommentPage extends Component {
  state = {
    comments: [{ author: '', comment: '' }],
  };

  constructor(props: any) {
    super(props);
    // moke
    this.state.comments = [
      {
        author: 'test-1',
        comment:
          'Расцветали яблони и груши，Поплыли туманы над рекой；Выходила на берег Катюша,На высокий берег，на крутой.Выходила,песню заводилаПро степного，сизого орла,Про того，которого любила.',
      },
      {
        author: 'test-2',
        comment:
          'Расцветали яблони и груши，Поплыли туманы над рекой；Выходила на берег Катюша,На высокий берег，на крутой.Выходила,песню заводилаПро степного，сизого орла,Про того，которого любила.',
      },
      {
        author: 'test-3',
        comment:
          'Расцветали яблони и груши，Поплыли туманы над рекой；Выходила на берег Катюша,На высокий берег，на крутой.Выходила,песню заводилаПро степного，сизого орла,Про того，которого любила.',
      },
      {
        author: 'test-4',
        comment:
          'Расцветали яблони и груши，Поплыли туманы над рекой；Выходила на берег Катюша,На высокий берег，на крутой.Выходила,песню заводилаПро степного，сизого орла,Про того，которого любила.',
      },
      {
        author: 'test-5',
        comment:
          'Расцветали яблони и груши，Поплыли туманы над рекой；Выходила на берег Катюша,На высокий берег，на крутой.Выходила,песню заводилаПро степного，сизого орла,Про того，которого любила.',
      },
      {
        author: 'test-6',
        comment:
          'Расцветали яблони и груши，Поплыли туманы над рекой；Выходила на берег Катюша,На высокий берег，на крутой.Выходила,песню заводилаПро степного，сизого орла,Про того，которого любила.',
      },
      {
        author: 'test-7',
        comment:
          'Расцветали яблони и груши，Поплыли туманы над рекой；Выходила на берег Катюша,На высокий берег，на крутой.Выходила,песню заводилаПро степного，сизого орла,Про того，которого любила.',
      },
      {
        author: 'test-8',
        comment:
          'Расцветали яблони и груши，Поплыли туманы над рекой；Выходила на берег Катюша,На высокий берег，на крутой.Выходила,песню заводилаПро степного，сизого орла,Про того，которого любила.',
      },
      {
        author: 'test-9',
        comment:
          'Расцветали яблони и груши，Поплыли туманы над рекой；Выходила на берег Катюша,На высокий берег，на крутой.Выходила,песню заводилаПро степного，сизого орла,Про того，которого любила.',
      },
    ];
  }

  async getComments() {
    try {
      const res = await fetchComments();
      this.setState({
        comments: res,
      });
    } catch (error) {
      alert(`err: ${error}`);
    }
  }

  componentDidMount(): void {
    // ask for comments by proactive polling
    setInterval(() => this.getComments(), 1000);
  }
  public render(): ReactNode {
    return (
      <div className="div-comments-page">
        {/* my code */}

        {/* this is a good idea from the mui example about list */}
        <div className="commments-show">
          {this.state.comments.map((item: IComment, index) => (
            <DisplayComments
              key={`comment_${index}`}
              author={item.author}
              comment={item.comment}
            />
          ))}
        </div>

        {/* this is a component of submit comment */}
        <SubmitComment />
      </div>
    );
  }
}
