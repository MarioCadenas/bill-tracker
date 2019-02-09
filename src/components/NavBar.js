import React from 'react';

const NavBar = ({ categories, showAddCategory }) => {
  const triggerShowAddCategory = () => showAddCategory();

  return (
    <ul className="list-reset inline flex justify-center boder-b-4 mb-0">
      {
        categories
          ? categories.map((categoryName, index) => (
              <li
                className="p-4 inline bg-grey-lighter hover:bg-grey-light uppercase font-black cursor-poiner" key={index}
              >
                {categoryName}
              </li>
            )
          )
          : (<li>No categories</li>)
      }
      <li 
        onClick={triggerShowAddCategory}
        className="p-4 inline bg-grey-lighter hover:bg-grey-light uppercase font-black cursor-pointer"
      >
        +
      </li>
    </ul>
  );
};

export default NavBar;
