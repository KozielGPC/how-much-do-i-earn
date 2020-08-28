import React from 'react';
import './styles.css';
function Main() {
  return (
    <div className="container">
      <h1>How much do I earn?</h1>
      <form action="">
        <label htmlFor="salary">
          Salary
          </label>
        <label htmlFor="">My salary is </label>
        <select name="" id="">
          <option value="second">Per Hour</option>
          <option value="second">Per Day</option>
          <option value="second">Per Week</option>
          <option value="second">Per Month</option>
          <option value="second">Per Year</option>
        </select>
        <input type="text" name="Salary" id="salary" placeholder="Your Salary" />

        <select name="" id="">
          <option value="second">Per second</option>
          <option value="second">Per Minute</option>
          <option value="second">Per Hour</option>
          <option value="second">Per Day</option>
          <option value="second">Per Week</option>
          <option value="second">Per Month</option>
          <option value="second">Per Year</option>
        </select>
        <button type="submit">Calculate!</button>
      </form>
    </div>
  );
}

export default Main;
