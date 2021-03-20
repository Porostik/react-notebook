import React from 'react';
import { useDispatch } from 'react-redux';

import { setNameFilter } from 'Pages/CustomersPage/actions';
import SearchForm from './SearchForm';

function Search() {
  const dispatch = useDispatch();

  const submitForm = ({ filterType, searchValue }) => {
    dispatch(setNameFilter(filterType, searchValue));
  };

  return <SearchForm onSubmit={submitForm} />;
}

export default Search;
