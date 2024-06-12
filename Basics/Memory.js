//  There are two types of memory location 
// stack memory for only primitive Datatypes and heap memory for non primitive datatypes
// When you are using stack memory where you get an copy of an original variables and all changes are in this copy
// In heap memory , we are provided with its Original reference memoryto make changes

let EmployeeN1 = "Arkiansh" // Since its an string which is an primitive function
let EmployeeN2 = EmployeeN1
EmployeeN2 = "Akhilesh" // here a copy of employeeN1 is sended and made changes in it
console.log(EmployeeN1);
console.log(EmployeeN2);

let location1 = {
     area : "Juhu" ,
     Company : "Astrack"
}

let location2 = location1

location2.area = "Bandra"   // Now in this new object location2 , we have to change the area and to access the area in 
//  first object we write it after a dot (.)
// And since object is an non primitive datatype then the original memory of area in Heap is changed from Juhu to Bandra
  console.log(location1);

  console.log(location2);