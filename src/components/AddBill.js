import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const AddBill = ({ onSubmit, categories = [] }) => {
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState(categories[0]);
  const [date, setDate] = useState(new Date());

  const handleChangeAmount = ({ target: { value } }) => {
    const number = parseInt(value);

    if (!Number.isNaN(number)) {
      return setAmount(parseInt(value));
    }
    return setAmount('');
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!amount) {
      return alert('Please enter an amount');
    }
    onSubmit({ amount, category, date });
  };
  const handleCategoryChange = ({ target: { value } }) => setCategory(value);
  const handleChangeDate = (time) => setDate(time);

  return (
    <form
      onSubmit={handleSubmit}
      className="h-100 w-full flex items-center justify-center font-sans"
    >
      <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
        <div className="mb-4">
          <h1 className="text-grey-darkest">Enter a new bill</h1>
          <p>E.g. 'Electricity', 'Internet'...</p>
          <div className="flex mt-4">
            <input
              className="shadow appearance-none boder rounded w-full py-2 px-3 mr-4 text-grey-darker"
              placeholder="Add bill"
              onChange={handleChangeAmount}
              value={amount}
              type="text"
              name="category"
            />
            <select onChange={handleCategoryChange}>
              {
                categories
                  ? categories.map((category, index) => <option key={index} value={category}>{category}</option>)
                  : ''
              }
            </select>
            <DatePicker selected={date} onChange={handleChangeDate} />
            <button
              className="flex-no-shrink p-2 border-2 rounded bg-teal text-white border-teal hover:text-white hover:bg-teal"
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default AddBill;
