import React, { PureComponent } from 'react';

import ReviewForm from './ReviewForm';
import ReviewCard from './ReviewCard';

export default class EditableReview extends PureComponent {
  state = {
    editFormOpen: false,
  }

  handleEditPress = () => {
    this.setState({ editFormOpen: true });
  }

  handleFormClose = () => {
    this.setState({ editFormOpen: false });
  }

  handleSubmit = review => {
    const { onFormSubmit } = this.props;

    onFormSubmit(review);
    this.setState({ editFormOpen: false });
  }

  render() {
    const { editFormOpen } = this.state;
    const {
      id,
      content,
      ratings,
      username,
      photoURL,
      created_at,
      userId,
      onRemovePress,
    } = this.props;

    if (editFormOpen) {
      return (
        <ReviewForm
          id={id}
          content={content}
          ratings={ratings}
          onFormSubmit={this.handleSubmit}
          onFormClose={this.handleFormClose}
        />
      )
    }

    return (
      <ReviewCard
        id={id}
        content={content}
        ratings={ratings}
        userId={userId}
        username={username}
        photoURL={photoURL}
        created_at={created_at}
        onRemovePress={onRemovePress}
        onEditPress={this.handleEditPress}
      />
    )
  }
}
