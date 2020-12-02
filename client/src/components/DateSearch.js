import React, { useState } from 'react';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRangePicker } from 'react-date-range';
import { Button } from '@material-ui/core';
import PeopleIcon from '@material-ui/icons/People';
import { useHistory } from 'react-router-dom';
import styled from '@emotion/styled';

// Date picker component
function DateSearch() {
  const SearchContainer = styled.div`
    position: absolute;
    top: 35px;
    left: 25%;
    width: 100vw;
  `;
  const SearchText = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 559px;
    padding: 10px;
    background-color: white;
    position: absolute;
    left: 0;
    top: 380px;
  `;
  const Input = styled.input`
    width: 539px;
    padding: 20px;
    position: absolute;
    left: 0;
    height: 30px;
    top: 420px;
    border: none;
    &:focus {
      outline-width: 0;
    }
  `;
  const Button = styled.button`
    position: absolute;
    left: 0;
    top: 480px;
    text-transform: inherit !important;
    background-color: #31848a;
    color: white;
    width: 579px;
    &:hover {
      /* background-color: light-gray; */
      color: gray;
    }
  `;

  // Allows routing to the 'search result' page
  const history = useHistory();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection'
  };

  // Comes from react-date-range
  function handleSelect(ranges) {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }

  return (
    <>
      <SearchContainer>
        <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
        <SearchText>
          Number of guests <PeopleIcon />
        </SearchText>
        <Input min={0} defaultValue={2} type="number" />
        <Button onClick={() => history.push('/search')}>Search Housed </Button>
      </SearchContainer>
    </>
  );
}

export default DateSearch;
