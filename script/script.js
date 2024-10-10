// Uyga vazifa 
// 1-misol
// const workers = {
//     firstName: "Abdulaziz",
//     lastName: "Toshpulatov",
//     age: 23,
//     languages: ["js", "python", "c++", "nodejs"],
//     friends: ["Jamshid", "Abbos", "Jalol", "Mar'uf"],
// };

// function toString(workers) {
//     return `
//   firstName: ${workers.firstName}
//   lastName: ${workers.lastName}
//   age: ${workers.age}
//   languages: ${workers.languages.join(",")}
//   friends: ${workers.friends.join("+")}
//     `.trim();
// }
// console.log(toString(workers));


//  2-misol
// let n = 5;  
// let kvadratObj = {};
// for (let i = 1; i <= n; i++) {
//     kvadratObj[i] = i * i;
// }

// console.log(kvadratObj);



// 3-misol
// const workers = {
//     firstName: "Abdulaziz",
//     lastName: "Toshpulatov",
//     age: 23,
//     languages: ["js", "python", "c++", "nodejs"],
//     friends: ["Jamshid", "Abbos", "Jalol", "Mar'uf"],
//   };

//   console.log(`firstName: ${workers.firstName}`);
//   console.log(`lastName: ${workers.lastName}`);
//   console.log(`age: ${workers.age}`);
//   console.log(`languages: ${workers.languages.join(",")}`);
//   console.log(`friends: ${workers.friends.join("+")}`);

//   const keys = Object.keys(workers).length;
//   const values = Object.values(workers).length;
//   const sum = keys + values;
  
//   console.log(`Kalitlar va qiymatlar yig'indisi: ${sum}`);


// 4-misol
// const names = ["Abdulaziz", "Safarmurod", "O’rol", "Jahongir"];
// let nameLengths = {};

// for (let i = 0; i < names.length; i++) {
//     nameLengths[names[i]] = names[i].length;
// }

// console.log(nameLengths);

  

//  5-misol
// const products = {
//     "Apelsin": 10000,
//     "Olma": 12000,
//     "Mandarin": 8000,
//     "Banan": 20000
//   };

//   const totalPrice = Object.values(products).reduce((sum, price) => sum + price, 0);
//   console.log(totalPrice);
  

// 6-misol
// function checkAllKeysString(obj) {
//     const keys = Object.keys(obj);

//     for (let i = 0; i < keys.length; i++) {
//       if (typeof keys[i] !== 'string') {
//         return false;
//       }
//     }
  
//     return true;
//   }
  
//   const input = {abc: 1, 123: 2, d: 5};
//   console.log(checkAllKeysString(input)); 
  

// 7-misol
// function removeFalse(obj) {
//     const newObj = {}; 
//     Object.keys(obj).forEach(key => {
//       if (obj[key]) {
//         newObj[key] = obj[key];
//       }
//     });
  
//     return newObj; 
//   }
//   const input = { a: false, b: 12, c: true, d: 0 };
//   const output = removeFalse(input);
//   console.log(output);  
  


// 8-misol
// function getElementCounts(arr) {
//     const result = {}; 
//     for (let i = 0; i < arr.length; i++) {
//       const num = arr[i];
  
//       if (result[num]) {
//         result[num]++;
//       } else {
//         result[num] = 1;
//       }
//     }
//     return result; 
//   }
  
//   const input = [7, 8, 4, 5, 7, 5, 4, 8, 5, 4, 7, 9];
//   const output = getElementCounts(input);
//   console.log(output);  


//  9-misol
// function numberToObject(num) {
//     const strNum = String(num);
//     const result = {};
//     const classes = ['birlar', 'minglar', 'millionlar', 'milliardlar', 'trilionlar'];
//     let index = 0;
//     for (let i = strNum.length; i > 0; i -= 3) {
//       let slice = strNum.slice(Math.max(i - 3, 0), i); 
//       result[classes[index]] = slice;
//       index++;
//     }
  
//     return result;
//   }
  
//   const input = 8945472985629;
//   const output = numberToObject(input);
//   console.log(output);    
  


//  10-misol
// const books = [
//     {
//       title: "Halqa",
//       author: "Akrom Malik",
//       alreadyRead: false,
//     },
//     {
//       title: "Dunyo ishlari",
//       author: "O'tkir Hoshimov",
//       alreadyRead: true,
//     },
//     {
//       title: "Vaqtning qadri",
//       author: "Abdulfattoh Abu G'udda",
//       alreadyRead: false,
//     },
//   ];
  
//   books.forEach((book, index) => {
//     const readStatus = book.alreadyRead ? "o'qilgan" : "o'qilmagan";

//     console.log(`${index + 1}. ${book.author}ning "${book.title}" kitobi ${readStatus};`);
//   });
  


// 11-misol (ishlolmadim chatgpdan oldm.)
// const products = [
//     { name: "Product 1", price: 20000, discount: 10, quantity: 5 },
//     { name: "Product 2", price: 10000, discount: 20, quantity: 4 },
//     { name: "Product 3", price: 15000, discount: 8, quantity: 10 },
//     { name: "Product 4", price: 18000, discount: 5, quantity: 6 },
//     { name: "Product 5", price: 5000, discount: 10, quantity: 16 },
//   ];
  
//   const totalSum = products.reduce((acc, product) => {
//     const discountedPrice = product.price - (product.price * product.discount / 100);
//     return acc + (discountedPrice * product.quantity);
//   }, 0);
  
//   console.log("Umumiy summa:", totalSum);


// 12-misol
// const obj = {
//     "it": 20,
//     "mushuk": 10,
//     "sigir": 200,
//     "tovuq": 2
//   };
  
//   const result = [];
  
//   for (const key in obj) {
//     result.push(key, obj[key]);
//   }
  
//   console.log(result);


//  13-misol (ishlolmadim chatgpdan oldim.)
// const grades = [
//     { name: "Fizika", grade: 4, kredit: 6 },
//     { name: "Matematika", grade: 5, kredit: 6 },
//     { name: "Tarix", grade: 4, kredit: 4 },	
//     { name: "Dasturlash", grade: 5, kredit: 8 },
//     { name: "Kibrxavfsizlik", grade: 4, kredit: 8 },
//   ];
  
//   function calculateGPA(grades) {
//     let totalPoints = 0;
//     let totalCredits = 0;
  
//     grades.forEach(course => {
//       totalPoints += course.grade * course.kredit;
//       totalCredits += course.kredit;
//     });
  
//     return totalCredits > 0 ? (totalPoints / totalCredits).toFixed(2) : 0;
//   }
  
//   const gpa = calculateGPA(grades);
//   console.log("GPA:", gpa);


// 14-misol (ishlolmadim chatgpdan oldim.)
// const rightAnswers = { 1: "B", 2: "A", 3: "C", 4: "D", 5: "B", 6: "C", 7: "A", 8: "D", 9: "A", 10: "B" };
// const myAnswers = { 1: "C", 2: "A", 3: "D", 4: "D", 5: "B", 6: "C", 7: "B", 8: "C", 9: "A", 10: "C" };

// let correctCount = 0;
// let incorrectCount = 0;

// for (let question in rightAnswers) {
//   if (myAnswers[question] === rightAnswers[question]) {
//     correctCount++;
//   } else {
//     incorrectCount++;
//   }
// }

// console.log("To'g'ri javoblar soni:", correctCount);
// console.log("Noto'g'ri javoblar soni:", incorrectCount);


// 15-misol
// function getValues(n) {
//     const obj = { a: 2, b: 3, c: 4, d: 6 };
//     const result = {};
  
//     for (const key in obj) {
//       result[key] = obj[key] * n;
//     }
  
//     return result;
//   }
  
//   let n = 3;
//   const res = getValues(n);
//   console.log(res);


// 16-misol (ishlolmadim chatgpdan oldim.)
// const product = {
//     name: "Iphone 14",
//     company: {
//       name: "Apple",
//       price: "200 mlrd",
//       founder: {
//         firstName: "Steve",
//         lastName: "Jobs",
//         birthDate: 1950,
//       },
//     },
//   };
  
//   const {
//     name: productName,
//     company: {
//       name: companyName,
//       price: companyPrice,
//       founder: {
//         firstName: founderFirstName,
//         lastName: founderLastName,
//         birthDate: founderBirthDate,
//       },
//     },
//   } = product;
  
//   console.log("Mahsulot nomi:", productName);
//   console.log("Kompaniya nomi:", companyName);
//   console.log("Kompaniya narxi:", companyPrice);
//   console.log("Asoschining ismi:", founderFirstName);
//   console.log("Asoschining familiyasi:", founderLastName);
//   console.log("Asoschining tug'ilgan sanasi:", founderBirthDate);


// 17-misol



// 18-misol
// const students = [
//     { name: "Demir", score: 85 },
//     { name: "Shahzod", score: 90 },
//     { name: "Eshmat", score: 78 },
//     { name: "Maqsad", score: 88 },
//   ];

//   const gradedStudents = students.map(student => {
//     let grade;
  
//     if (student.score >= 90 && student.score <= 100) {
//       grade = 5;
//     } else if (student.score >= 80 && student.score < 90) {
//       grade = 4;
//     } else if (student.score >= 70 && student.score < 80) {
//       grade = 3;
//     } else {
//       grade = 2;
//     }
  
//     return {
//       ...student,
//       grade: grade,
//     };
//   });

//   console.log("Yangilangan o'quvchilar massivi:", gradedStudents);


// 19-misol
// const students = [
//     { name: "Demir", score: 85 },
//     { name: "Shahzod", score: 90 },
//     { name: "Eshmat", score: 78 },
//     { name: "Maqsad", score: 88 },
//   ];

//   const gradedStudents = students.map(student => {
//     let grade;
  
//     if (student.score >= 90 && student.score <= 100) {
//       grade = 5;
//     } else if (student.score >= 80 && student.score < 90) {
//       grade = 4;
//     } else if (student.score >= 70 && student.score < 80) {
//       grade = 3;
//     } else {
//       grade = 2;
//     }
  
//     const isPassed = student.score >= 70;

//     return {
//       ...student,
//       grade: grade,
//       isPassed: isPassed,
//     };
//   });

//   console.log("Yangilangan o'quvchilar massivi:", gradedStudents);



// 20-misol
// const pupils = [
//     { name: "Elbek", protcent: 95 },
//     { name: "Zafar", protcent: 78 },
//     { name: "Aziz", protcent: 83 },
//     { name: "Jasur", protcent: 88 },
//     { name: "Bobur", protcent: 66 },
//     { name: "Kamron", protcent: 75 },
//   ];

//   let passedCount = 0;
//   let failedCount = 0;
  
//   pupils.forEach(pupil => {
//     if (pupil.protcent >= 70) {
//       passedCount++;
//     } else {
//       failedCount++;
//     }
//   });
 
//   console.log("Imtihondan o'tganlar soni:", passedCount);
//   console.log("Imtihonda o'ta olmaganlar soni:", failedCount);