/*Object Methods in JavaScript can be accessed by using functions. Functions in JavaScript are stored as property values. The objects can also be called without using brackets (). 

In a method, ‘this’ refers to the owner object.
Additional information can also be added along with the object method.

Syntax: objectName.methodName()

Properties: A function may be divided into different property values, which are then combined and returned together. 
For Ex: The student function contains the properties: 

name
class
section
Return Value: It returns methods/functions stored as object properties.
*/

// Object creation
let student = {
	name: "Martin",
	class: "12th",
	section: "A",

	studentDetails: function () {
		return this.name + " " + this.class
			+ " " + this.section + " ";
	}
};
// Display object data
console.log(student.studentDetails());


// Example 2: This example uses storing property values and accessing without bracket (). 

// Object creation
let student2 = {
    name: "Martin",
    class: "12th",
    section: "A",
 
    student2Details: function () {
        return this.name + " " + this.class
            + " " + this.section + " ";
    }
};
// Display object data
console.log(student2.student2Details);

// Example 3: Using function definition as property value and accessing with additional details.
// Object creation
let student3 = {
	name: "Martin",
	class: "12th",
	section: "A",

	student3Details: function () {
		return this.name + " " + this.class
			+ " " + this.section + " ";
	}
};

// Display object data
console.log("STUDENT " + student3.student3Details());






