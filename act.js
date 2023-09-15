let driverUnknown = prompt("Hello there, Who do you want to assist you today?");
alert("Arlright, " + driverUnknown + " will assist you on your needs");
console.log(driverUnknown)
     
    // if (driverUnknown == Hugh){
    //     alert("Alright, " + driverUnknown + " will assist you on your needs");
    // }else {
    //     alert("Alright, Owen will assist you on your needs")
    // }
function Driver(driverUnknown, age, workExperience){
    this.driverUnknown = driverUnknown;
    this.age = age;
    this.workExperience = workExperience;
    this.driveMyCar = function(){
        document.write(`${this.driverUnknown} is your driver
        ${this.age} years old
        ${this.workExperience} of experience`)
    }
    this.carWash = function(){
        document.write(`${this.driverUnknown} is your driver
        ${this.age} is your driver
        ${this.workExperience}of experience`)
    }
}
    const driverknown1 = new Driver(driverUnknown, 42, "12 years")
    const driverKnown2 = new Driver(driverUnknown, 39, "7 years")
