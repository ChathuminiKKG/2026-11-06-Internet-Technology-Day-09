// {
//     var customerName = "Saman";
//     let address = "walana";
//     console.log(address);
// }

// console.log(customerName);
// console.log(address);

// const address = "walana";
// address = "panadura";

// const numbers = [10, 20, 30];
// console.log(numbers);
// numbers = "Hee";

// console.log(numbers);


// const numbers = [10, 20, 30, 40, 50, 60, 70, 80];

// console.log(numbers[6]); // 6th index eka print karanawa

// numbers[numbers.length - 1] = 100; // last nub eka update karanawa

// numbers.push(90); // aluth nub ekak add karanawa

// numbers.pop(); // anthima nub eka remove karanawa

// console.log(numbers.toReversed()); // reverse karala new array ekak return karanawa

// console.log(numbers.toSorted()); // sort karala new array ekak return karanawa

// console.log(numbers.length); // elements gaana print karanawa

// numbers.unshift(500); // mulata nub eka add wenawa

// numbers.shift();  // palaweni nub eka remove wela yanawa

// console.log(numbers.indexOf(100)); // nub eke index eka print karanawa

// console.log(numbers);

// const array = [];

// function submitNumber() {
//     const input = document.getElementById("inputField").value;

//     let detail = {
//         ArrayInfo: input
//     };

//     array.push(detail);
//     console.log(array);

//     loadArray();
// }

// function loadArray() {
//     const arrayDisplay = document.getElementById("arrayDisplayField");
// }

// function pushNum() {
//     const numberInput = document.getElementById("inputField").value;
//     array.push({ ArrayInfo: numberInput });
//     loadArray();
// }



// ---------------- Method types ------------------

// ---------- step 01 -------------------
// function getSum(num1, num2) {
//     return num1 + num2;
// }

// ---------- step 02 -------------------
// let getSum = function(num1, num2) {
//     return num1 + num2;
// }

// ---------- step 03 -------------------
// let getSum = (num1, num2) => {
//     return num1 + num2;
// }

// ---------- step 04 -------------------
// let getSum = num1 => {
//     return num1;
// }

// ---------- step 05 -------------------
// let getSum = num1 => num1;

// console.log(getSum(10, 20));



// ---------------------------------------

// const nameList = ["saman", "kamal", "sunil", "wimal"];

// nameList.forEach(cName => console.log(cName));


// --------------------------------------------
// const empSalary = [75000, 30000, 25000, 90000, 150000];

// const newSalary = empSalary.map(salary => salary * 2);
// console.log(newSalary);


// --------------------------------------------
// const nameList = ["saman", "kamal", "sunil", "wimal"];

// const newList = nameList.map(name => "welcome " + name);
// console.log(newList);

// const productList = [
//     {
//         id: 1,
//         name: "bun",
//         price: 350
//     },
//     {
//         id: 2,
//         name: "car",
//         price: 750
//     },
//     {
//         id: 3,
//         name: "Milk",
//         price: 820
//     },
//     {
//         id: 4,
//         name: "Rice",
//         price: 1200
//     }
// ];

// const newprice = productList.map(item => item.price * 0.15 + item.price);
// console.log(newprice);

// -------- SweetAlert ----------
function showAlert() {
    Swal.fire({
  title: "Drag me!",
  icon: "success",
  draggable: true
});
}