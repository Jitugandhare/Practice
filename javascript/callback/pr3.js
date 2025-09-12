function fun(name,callback){
    console.log("Hello",name);
    callback()
}

function goodBye(){
  console.log("GoodBye!")
}

fun("jitu",goodBye)