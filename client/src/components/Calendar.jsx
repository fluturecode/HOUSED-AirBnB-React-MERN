// import React, { useState } from 'react';
// import 'boostrap/dist/css/bootstrap.min.css';
// import 'react-dates/initialize';
// import 'react-dates/lib/css/_datepicker.css';
// import { DateRangePicker } from 'react-dates';

//Leo's Edits

// function Calendar() {
//   const [startDate, setStartDate] = useState('');
//   const [endDate, setEndDate] = useState('');

//   return (
//     <div className="Calendar">
//       <DateRangePicker
//         startDate={startDate} // momentPropTypes.momentObj or null,
//         startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
//         endDate={endDate} // momentPropTypes.momentObj or null,
//         endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
//         onDatesChange={({ startDate, endDate }) =>
//           this.setState({ startDate, endDate })
//         } // PropTypes.func.isRequired,
//         focusedInput={focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
//         onFocusChange={(focusedInput) => this.setState({ focusedInput })} // PropTypes.func.isRequired,
//       />
//       <br />
//       <br />
//       <button onClick={this.alertStartDate}>Click Me for Start Date</button>
//       <button onClick={this.alertEndDate}>Click Me for End date</button>
//     </div>
//   );
// }

// export default Calendar;
