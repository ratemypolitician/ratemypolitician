import React from 'react';
import {
  View,
  Alert,
  TextInput,
} from 'react-native';
import ButtonRating from './ButtonRating';
import ReviewButton from './ReviewButton';
import { styles } from './Styles';

export default class ReviewForm extends React.Component {

  constructor(props){
    super(props);

    const { id, content, ratings } = props;

    this.state = {
      content: id ? content : '',
      ratings: id ? ratings : 1,
      maxRating: 5,
    }
  }

  handleContentChange = content => {
    this.setState({ content });
  }

  updateRatings(ratings) {
    this.setState({
      ratings: ratings,
    });
  }

  handleSubmit = () => {
    const { onFormSubmit, id } = this.props;
    const { content, ratings } = this.state;

    if (!content) {
      Alert.alert('Please write some review')
      return;
    }

    onFormSubmit({ id, content, ratings });
  }

  render() {
    const { id, onFormClose } = this.props;
    const { content, ratings, maxRating } = this.state;

    const submitText = id ? 'Update' : 'Create';

    let ratingsArray = [];
    for (var i = 1; i <= maxRating; i++) {
      ratingsArray.push(
        <ButtonRating
        key={i}
        size={25}
        name={i <= ratings ? 'star' : 'staro'}
        color={i <= ratings ? 'orange' : 'black'}
        onPress={this.updateRatings.bind(this, i)}
        />
      )
    }

    return (
      <View style={styles.cardContainer}>
          <View style={styles.contentContainer}>
            <TextInput
              placeholder={'Write review about this politician...'}
              value={content}
              style={styles.textInput}
              clearButtonMode="always"
              onChangeText={this.handleContentChange}
              multiline={true}
            />

            <View style={styles.cardStatusFooter}>
              {ratingsArray}
            </View>

            <View style={styles.buttonGroup}>
              <ReviewButton small title={submitText} onPress={this.handleSubmit} />
              <ReviewButton small title={'Cancel'} onPress={onFormClose} />
            </View>
          </View>
      </View>
    );
  }
}
