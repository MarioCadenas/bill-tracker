import React, { useState, useEffect, Fragment } from 'react';
import NavBar from './components/NavBar';
import AddCategory from './components/AddCategory';
import BillsTable from './components/BillsTable';
import Chart from './components/Chart';

const App = () => {
  const [shouldShowAddCategory, setShouldShowAddCategory] = useState(true);
  const [categories, setCategories] = useState([]);

  const loadCategories = () => {
    const localStorageCategories = localStorage.getItem('categories');

    if (localStorageCategories) {
      setCategories(JSON.parse(localStorageCategories));
      setShouldShowAddCategory(false);
    }
  };

  useEffect(loadCategories, []);

  const showAddCategory = () => setShouldShowAddCategory(true);

  const addCategory = (category) => {
    const updatedCategories = [...categories, category];
    setCategories(updatedCategories);
    setShouldShowAddCategory(false);
    localStorage.setItem('categories', JSON.stringify(updatedCategories));
  };

  return (
    <div className="App">
    {
      shouldShowAddCategory ? (
        <AddCategory onSubmit={addCategory} />
      ) : (
        <Fragment>
          <NavBar categories={categories} showAddCategory={showAddCategory} />
          <div className="container flex">
            <div className="w-1/2">
              <BillsTable />
            </div>
            <div className="w-1/2">
              <Chart />
            </div>
          </div>
        </Fragment>
      )
    }
    </div>
  );
}

export default App;
