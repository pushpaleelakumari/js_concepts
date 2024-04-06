/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  arr.map((student, index) => {
    console.log(`${index + 1} Student Name: ${student.name} age:${student.age} and profession:${student.profession}`)
  })
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach((student) => {
    student?.profession === "developer" && console.log(student)
  })
}

function addData() {
  //Write your code here, just console.log
  let new_employee = { id: 3, name: "Kakashi", age: "19", profession: "sensi" };
  if (arr.length < 4) {
    arr.push(new_employee)
  }
  console.log(arr)
}

function removeAdmin() {
  //Write your code here, just console.log
  let res = arr.filter((x) => x.profession !== 'admin')
  console.log(res)
}

function concatenateArray() {
  //Write your code here, just console.log
  let temp = [{ id: 3, name: "Naruto Uzumaki", age: "5", profession: "Hokage" }, { id: 3, name: "Hinata Huga", age: "4", profession: "huga" }, { id: 3, name: "Iruka", age: "19", profession: "sensi" },]
  let res = arr.concat(temp)
  console.log(res)
}
