import React from 'react';

import ReviewForm from './ReviewForm';
import ReviewCard from './ReviewCard';

export default class EditableReview extends React.Component {
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
      userImage,
      created_at,
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
        username={username}
        userImage={userImage}
        created_at={created_at}
        onRemovePress={onRemovePress}
        onEditPress={this.handleEditPress}
      />
    )
  }
}
