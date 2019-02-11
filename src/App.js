import React, { useState, useEffect, Fragment } from 'react';
import NavBar from './components/NavBar';
import AddCategory from './components/AddCategory';
import BillsTable from './components/BillsTable';
import Chart from './components/Chart';
import AddBill from './components/AddBill';

const App = () => {
  const [shouldShowAddCategory, setShouldShowAddCategory] = useState(true);
  const [shouldShowAddBill, setShouldShowAddBill] = useState(true);
  const [categories, setCategories] = useState([]);
  const [bills, setBills] = useState([]);

  const loadStorageDate = () => {
    const localStorageCategories = JSON.parse(localStorage.getItem('categories'));
    const localStorageBills = JSON.parse(localStorage.getItem('bills'));

    if (localStorageCategories) {
      setCategories(localStorageCategories);
      setShouldShowAddCategory(false);
    }

    if (localStorageBills) {
      setBills(localStorageBills);
      setShouldShowAddBill(false);
    }
  };

  useEffect(loadStorageDate, []);

  const showAddCategory = () => setShouldShowAddCategory(true);
  const addCategory = (category) => {
    const updatedCategories = [...categories, category];
    setCategories(updatedCategories);
    setShouldShowAddCategory(false);
    localStorage.setItem('categories', JSON.stringify(updatedCategories));
  };
  const showAddBill = () => setShouldShowAddBill(true);
  const addBill = (bill) => {
    const updatedBills = [...bills, bill];
    setBills(updatedBills);
    setShouldShowAddBill(false);
    localStorage.setItem('bills', JSON.stringify(updatedBills));
  };

  return (
    <div className="App">
    {
      shouldShowAddCategory ? (
        <AddCategory onSubmit={addCategory} />
      ) : shouldShowAddBill ?
          <AddBill onSubmit={addBill} categories={categories} />
        : (
        <Fragment>
          <NavBar categories={categories} showAddCategory={showAddCategory} />
          <div className="container flex">
            <div className="w-1/2">
              <BillsTable bills={bills} showAddBill={showAddBill} />
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
