import React from 'react';

const BillsTable = ({ bills, showAddBill }) => {
  const triggerShowAddBill = () => showAddBill();

  return (
    <table className="table">
      <thead className="bg-blue text-white">
        <tr>
          <th scope="col">Date</th>
          <th scope="col">Amount</th>
          <th scope="col">Category</th>
          <th scope="col" />
        </tr>
      </thead>
      <tbody>
        <tr className="p-4 bg-blue-lighter text-center">
          <td colSpan="4">
            <button className="underline" onClick={triggerShowAddBill}>Add new</button>
          </td>
        </tr>
        {
          bills.map(({ amount, category, date }, index) => (
            <tr className="p4" key={index}>
              <td>{new Date(date).toLocaleDateString('es')}</td>
              <td>{`${amount}€`}</td>
              <td>{category}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  );
};

export default BillsTable;
