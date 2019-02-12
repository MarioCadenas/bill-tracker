import React from 'react';

const NavBar = ({ categories, showAddCategory, setNewActiveCategory, activeCategory }) => {
  const triggerShowAddCategory = () => showAddCategory();
  const setActiveCategory = index => setNewActiveCategory(index);
  const listStyle = "p-4 inline bg-grey-lighter hover:bg-grey-light uppercase font-black cursor-poiner";

  return (
    <ul className="list-reset inline flex justify-center boder-b-4 mb-0">
      <li className={listStyle}>All</li>
      {
        categories
          ? categories.map((categoryName, index) => (
              <li
                className={listStyle + (activeCategory === index ? 'bg-grey-dark' : 'bg-grey-lighter')
                }
                key={index}
                onClick={() => setActiveCategory(index)}
              >
                {categoryName}
              </li>
            )
          )
          : (<li>No categories</li>)
      }
      <li
        onClick={triggerShowAddCategory}
        className={listStyle}
      >
        +
      </li>
    </ul>
  );
};

export default NavBar;
