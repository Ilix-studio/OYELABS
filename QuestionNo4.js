function Student (id, name, gender, email){
    this.id = id;
    this.name = name;
    this.gender = gender;
    this.email = email;
}
const studentInfo = new Student('1', 'Jyotish', 'male', 'jyoti22@gmail.com');
console.log(studentInfo);