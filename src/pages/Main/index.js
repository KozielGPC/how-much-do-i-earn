import React, { useState } from 'react';

import Select from 'react-select'

import './styles.css';

function Main() {
  const options = [
    { value: 'second', label: 'Per Second' },
    { value: 'minute', label: 'Per Minute' },
    { value: 'hour', label: 'Per Hour' },
    { value: 'day', label: 'Per Day' },
    { value: 'week', label: 'Per Week' },
    { value: 'month', label: 'Per Month' },
    { value: 'year', label: 'Per Year' },
  ]

  const optionsQuestion = [
    { value: 'second', label: 'Per Second?' },
    { value: 'minute', label: 'Per Minute?' },
    { value: 'hour', label: 'Per Hour?' },
    { value: 'day', label: 'Per Day?' },
    { value: 'week', label: 'Per Week?' },
    { value: 'month', label: 'Per Month?' },
    { value: 'year', label: 'Per Year?' },
  ]

  const [salaryTypeAnswer, setSalaryTypeAnswer] = useState("");
  const [salaryTypeQuestion, setSalaryTypeQuestion] = useState("");
  const [salary, setSalary] = useState(0.0);

  const [result, setResult] = useState(0.0);

  function handleSalaryAnswer(e) {
    setSalaryTypeAnswer(e.value);
  }

  function handleSalaryQuestion(e) {
    setSalaryTypeQuestion(e.value);
  }

  function handleSalary(e) {
    console.log(salary)
    console.log("value: " + e.target.value)
    setSalary(parseFloat(e.target.value));
    console.log(salary)
  }

  function CalculateSalary(salary, salaryTypeAnswer, salaryTypeQuestion) {
    switch (salaryTypeAnswer) {
      case "year":
        salary = salary / 12;
        break;

      case "month":
        salary = salary
        break;

      case "week":
        salary = salary * 4;
        break;

      case "day":
        salary = salary * 30;
        break;

      case "hour":
        salary = salary * 24 * 30;
        break;

      case "minute":
        salary = salary * 60 * 24 * 30;
        break;

      case "second":
        salary = salary * 60 * 60 * 24 * 30;
        break;
    }

    switch (salaryTypeQuestion) {
      case "year":
        salary = salary * 12;
        break;

      case "month":
        salary = salary;
        break;

      case "week":
        salary = salary / 4;
        break;

      case "day":
        salary = salary / 30;
        break;

      case "hour":
        salary = salary / 24 / 30;
        break;

      case "minute":
        salary = salary / 60 / 24 / 30;
        break;

      case "second":
        salary = salary / 60 / 60 / 24 / 30;
        break;
    }

    return salary;
  }

  function handleSubmit(event) {
    event.preventDefault();
    const result = CalculateSalary(salary, salaryTypeAnswer, salaryTypeQuestion)
    setResult(result);
  };

  return (
    <div className="container">

      <div className="title">
        <h1>How much do I earn</h1>
      </div>

      <div className="form-questions">
        
        <form onSubmit={handleSubmit}>
        <Select
          placeholder="Salary Type"
          value={optionsQuestion.find(obj => obj.value === salaryTypeQuestion)} // set selected value
          options={optionsQuestion} // set list of the data
          onChange={handleSalaryQuestion}
          className="select"
        />
          <label htmlFor="salary">
            My Salary is
          </label>
          <input  type="text" name="Salary" id="salary" placeholder="Example: 156000" onChange={handleSalary} />
          <Select
            placeholder="Salary Type"
            value={options.find(obj => obj.value === salaryTypeAnswer)} // set selected value
            options={options} // set list of the data
            onChange={handleSalaryAnswer}
            className="select"
          />

          <button type="submit">Calculate!</button>
        </form>
      </div>

      <div className="result">
        <h1>Result = {result}</h1>
      </div>

    </div>
  );
}

export default Main;
