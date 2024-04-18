// Given an array of objects, each object representing a person with a name and age property,
//  write a function that returns a new array containing 
// the names of all people who are 18 years old or older. const people = [
//   { name: 'Alice', age: 17 },
//   { name: 'Eunice', age: 22 },
//   { name: 'Charlie', age: 14 },
//   { name: 'Max', age: 19 },
// ];
const personsDetails=[
    {
        name:'Jina',age:17
    },
    {
        name:'Faith', age:22
    },
    {
        name:'Zippy',age:24
    },
    {
        name:'Travy',age:19 
    }
]
const agecheck=personsDetails.filter(element=>{
    return(element.age>=18)    
})
console.log(agecheck);
// Write a function that takes an array of objects, 
// where each object represents a product with a name, price, 
// and category property. The function should return an object that groups the products by their categories, 
// with the category names as keys and the arrays of products as values.

function sortedproducts(products){
    const arrangedproducts={};

    products.forEach(item => {
        if (!(item.category in sortedproducts)) {
           sortedproducts[item.category]=[];
    }
    sortedproducts[item.category].push(item);
});

    return arrangedproducts;
}
const products= [
    { name: 'Laptop', price: 1200, category: 'Electronics' },
    { name: 'Shirt', price: 25, category: 'Clothing' },
    { name: 'Headphones', price: 80, category: 'Electronics' },
    { name: 'Shoes', price: 60, category: 'Clothing' },
  ];

  console.log(sortedproducts(products));

// Given an array of objects, where each object represents a student with a name and an array of scores,
//  write a function that returns a new array containing
//   the names of all students whose average score is greater than or equal to 85.
function studentsscore(students){
    return students.filter(student=>{
        const graded=student.scores.reduce((a,b)=>a+b,0)
        return graded>=85;
    }).map(student =>student.name);
}
const students= [
    { name: 'John', scores: [90, 80, 85] },
    { name: 'Jane', scores: [95, 92, 88] },
    { name: 'Jim', scores: [70, 80, 75] },
    { name: 'Jill', scores: [85, 90, 84] },
  ];
  console.log(studentsscore(students));

//   Given an object representing a car, with properties for the make, model, year, and a method to display the car's information, write a function that takes the car object and adds a new method to the object called age. The age method should return the current age of the car based on the current year and the car's year property. 


  const car = {
    make: 'Ford',
    model: 'Ranger',
    year: 2023,
    displaying: function() {
      console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
    },
    age: function() {
      const agenow = new Date().getFullYear();
      const  ageOfcar=agenow- this. year;
      return ageOfcar
    }
  };
  
  console.log(car.age());
  
 






  






