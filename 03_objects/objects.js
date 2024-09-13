// singleton 
// object.create()


//objects literals 

 /* const Jsuser = {
  name : "deepak",
  age :18,
  location : "kolkata",
  email : "deepakongo@gmail.com",
  isloggeedIn : false,
  lastlogindays : ["monday "," tuesday" , "friday" , "sunday"]

}

console.log(Jsuser.age)

Jsuser.age = 21

Object.freeze(Jsuser) // now no one can change the value of my object

Jsuser.age = 31
console.log(Jsuser)


// actual way to print is console.log(Jsuser.[email])  ........... using square bracket is important

*/

 const Object1 = {1:"a",2:"b",3:"c"}

 const Object2 = {8:"a",9:"b",6:"c"}

 const Obj3 = Object.assign(Object1, Object2) // to combine

 console.log(Obj3)

 const Obj4 = {...Object1,...Object2} // to spread 

 console.log(Obj4)
