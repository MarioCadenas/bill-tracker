import React, { useState } from 'react';

const AddCategory = (props) => {
  const [category, setCategory] = useState('');

  const handleChange = ({ target: { value }}) => setCategory(value);
  const handleSubmit = e => {
    e.preventDefault();
    if (!category) {
      return alert('Enter a category.');
    }
    props.onSubmit(category);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="h-100 w-full flex items-center justify-center font-sans"
    >
      <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
        <div className="mb-4">
          <h1 className="text-grey-darkest">Enter a category of bills</h1>
          <p>E.g. 'Electricity', 'Internet'...</p>
          <div className="flex mt-4">
            <input
              className="shadow appearance-none boder rounded w-full py-2 px-3 mr-4 text-grey-darker"
              placeholder="Add category"
              onChange={handleChange}
              value={category}
              type="text"
              name="category"
            />
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

export default AddCategory;
