var a = ["Orange" , "Apple" , "Grapes" , "Mango" , "Pomegranate"];
a[2] = "raspberry";
a[10] = "pineapple";
console.log(a);
var c = ["Potato" , "Onion" , "Chilli" , "Ladyfinger" , "Peas"]
c.push("tomato");
console.log(c);
c.pop();
console.log(c);
c.shift();
a.unshift("Abc");
console.log(c);
var b = c.slice(0,2);
c.splice(1,3);
console.log(c);
console.log(b);
for (var i = 0; i < 10;i++) {
    console.log("ABC" + i);
}
var d = ["one" , "two" , "three" , "four" , "five" , "six"];
var e = d.indexOf("six");
console.log(e);
for (var i = 0; i < a.length; i++) {
    console.log(d[i]);
    if("three" ==d[i]){
        alert("word found");
        break;
    }
}

var city = false ;
for ( var i = 0 ; i < 4 ; i++ );
if ( city == true[i] ) {

    alert ("this city is clean");
}
if(city ===false) {
    alert("this city is not clean")
}
