var anotherObject = {
    cool: function(){
        console.log("cool!");
    }
};

var myObject = Object.create(anotherObject);

myObject.doCool = function(){
    this.cool(); //internal delegation
};

myObject.doCool();