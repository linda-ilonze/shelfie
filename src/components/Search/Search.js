import React from 'react';
import './search.css';
import {searchBooks} from './../../actions/bookActions';
import Autosuggest from 'react-autosuggest';
import {connect} from 'react-redux';
import {  UPDATE_INPUT_VALUE,
          CLEAR_SUGGESTIONS,
          LOAD_SUGGESTIONS_BEGIN,
          MAYBE_UPDATE_SUGGESTIONS} from './../../constants/actionTypes';

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

const getSuggestionValue = (suggestion) => {
  return suggestion;
}

const renderSuggestion = (suggestion) => {
  return (
    <div>
      <img src={suggestion.smallThumbnail} />
      <span>{suggestion.title}</span>
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
    }
});

class Search extends React.Component {
  render() {
    const {
      value,
      suggestions,
      onChange,
      onSuggestionsFetchRequested,
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
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps} />
      </div>
    );
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Search);
