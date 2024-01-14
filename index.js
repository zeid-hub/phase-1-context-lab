/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}
// createEmployeeRecord
function createEmployeeRecord(arr) {
    return {
      firstName: arr[0],
      familyName: arr[1],
      title: arr[2],
      payPerHour: arr[3],
      timeInEvents: [],
      timeOutEvents: [],
    };
  }
  
  // createEmployeeRecords
  function createEmployeeRecords(arrOfArr) {
    return arrOfArr.map(createEmployeeRecord);
  }
  
  // createTimeInEvent
  function createTimeInEvent(dateTime) {
    this.timeInEvents.push({
      type: "TimeIn",
      hour: parseInt(dateTime.slice(-4), 10),
      date: dateTime.split(" ")[0],
    });
    return this;
  }
  
  // createTimeOutEvent
  function createTimeOutEvent(dateTime) {
    this.timeOutEvents.push({
      type: "TimeOut",
      hour: parseInt(dateTime.slice(-4), 10),
      date: dateTime.split(" ")[0],
    });
    return this;
  }
  
  // hoursWorkedOnDate
  function hoursWorkedOnDate(date) {
    const timeInEvent = this.timeInEvents.find((event) => event.date === date);
    const timeOutEvent = this.timeOutEvents.find((event) => event.date === date);
  
    if (timeInEvent && timeOutEvent) {
      return (timeOutEvent.hour - timeInEvent.hour) / 100;
    }
  
    return 0;
  }
  
  // wagesEarnedOnDate
  function wagesEarnedOnDate(date) {
    const hoursWorked = hoursWorkedOnDate.call(this, date);
    return hoursWorked * this.payPerHour;
  }
  
  // allWagesFor
  // This is a placeholder for your code. You can use the provided code here.
  
  // findEmployeeByFirstName
  function findEmployeeByFirstName(srcArray, firstName) {
    return srcArray.find((employee) => employee.firstName === firstName);
  }
  
  // calculatePayroll
  function calculatePayroll(employees) {
    return employees.reduce(
      (totalPayroll, employee) => totalPayroll + allWagesFor.call(employee),
      0
    );
  }
