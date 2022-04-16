// Sample objects
const expense = {
  dateCreated: "01/01/2017",
  location: "Bob's Burgers",
  dollarAmount: 14.34,
  purpose: "Lunch with very important client",
  code: "1001A",
  good: false,
  carChase: "we have one"
};

// console.log(expense.carChase);
// console.log(document.title)

const employee = {
  firstName: "Michael",
  lastName: "Tambornino",
  role: "Sales Rep",
  accountNumber: "1-8349058340",
  isManager: false,
  titles: ["Sr. Account Rep", "Cool Guy"],
  accolade: [
    {
      title: ["Employee of the Year", "Employee of the Year", "Employee of the Year"],
      dateEarned: "1/2/2020",
      expires: "12/31/2020",
      isCool: true
    },
    {
      title: ["Employee of the Year", "Employee of the Year", "Employee of the Year"],
      dateEarned: "1/2/2020",
      expires: "12/31/2020",
      isCool: true
    },
  ]
};

console.log(employee.accolade[0].title[2])

// Challenge
// create a function that takes in an employee,
//if the employees firstName starts with an M then add a key=status and value='vip'
//if the employees firstName does not start with an M then add a key=status and value='peasant'