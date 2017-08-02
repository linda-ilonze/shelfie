import React from 'react';
import './search.css';
import {searchBooks} from './../../actions/bookActions';
import Autosuggest from 'react-autosuggest';
import {connect} from 'react-redux';
import {  UPDATE_INPUT_VALUE,
          CLEAR_SUGGESTIONS,
          LOAD_SUGGESTIONS_BEGIN,
          MAYBE_UPDATE_SUGGESTIONS,
          BOOK_SELECTED} from './../../constants/actionTypes';

const loadSuggestions = (value) => {
  return dispatch => {
    dispatch(loadSuggestionsBegin());
    dispatch(searchBooks(value));
  }
}

const updateInputValue = (value) => {
  return {
    type: UPDATE_INPUT_VALUE,value  };
}

const clearSuggestions = () => {
  return {
    type: CLEAR_SUGGESTIONS
  };
}

const loadSuggestionsBegin = () => {
  return {
    type: LOAD_SUGGESTIONS_BEGIN
  };
}

const bookSelected = (book) => {
  return {
    type : BOOK_SELECTED,
    book
  }
}
const getSuggestionValue = (suggestion) => {
  return suggestion;
}

const renderSuggestion = (suggestion) => {
  return (
    <div>
      <img width="20%" src={suggestion.smallThumbnail} />
      <span className="ml-2">{suggestion.title}</span>
    </div>
  );
}

const mapStateToProps = (state) => ({
    value : state.books.value,
    isLoading : state.books.isLoading,
    suggestions: state.books.suggestions
});

const mapDispatchToProps = (dispatch) => ({

    onChange : (event, { newValue }) => {
      dispatch(updateInputValue(newValue));
    },
    onSuggestionsFetchRequested : ({ value }) => {
      dispatch(loadSuggestions(value));
    },
    onSuggestionsClearRequested: () => {
      dispatch(clearSuggestions());
    },
    onBookSelected : (book) => {
      dispatch(bookSelected(book))
    }
});

class Search extends React.Component {
  render() {
    const {
      value,
      suggestions,
      onChange,
      onSuggestionsFetchRequested,
      onBookSelected,
      onSuggestionsClearRequested } = this.props;

    const inputProps = {
      placeholder: "Search for book title, author or description",
      value,
      onChange
    };

    return (
      <div className="pt-5">
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={onSuggestionsFetchRequested}
          onSuggestionsClearRequested={onSuggestionsClearRequested}
          getSuggestionValue={onBookSelected}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps} />
      </div>
    );
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Search);
