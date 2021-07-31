let fs = require("fs");
let path = require("path");

let InputArr = process.argv.slice(2);

let OptionArr = [];
let FileArr = [];

for( let i = 0; i < InputArr.length; i++ ){
    
    let FirstChar = InputArr[i].charAt(0);

    if( FirstChar == "-" ){
            OptionArr.push(InputArr[i]);
    }else{
            FileArr.push(InputArr[i]);
    }
}

for( let i = 0; i < FileArr.length; i++ ){
    
    if(fs.existsSync(FileArr[i]) == false){
        console.log("Given File doesn't Exists..! ERROR");
        return;
    }
}

let content = ""
for( let i = 0; i < FileArr.length; i++){
    content += fs.readFileSync(FileArr[i]) + "\r\n";
}

// console.log(content.split("\r\n"));
// console.log(OptionArr);

for( let i = 0; i < OptionArr.length; i++){
    let SecondChar = OptionArr[i][1];

 // Remove Break to run for Multiple Operators...!

    if( SecondChar == "s" ){
        LineBreaker(content);
        break;
    }else if( SecondChar == "n" ){
        NumberingToAllLines(content);
        break;
    }else if( SecondChar == "b" ){
        NumberingToNonEmptyLines(content);
        break;
    }else{
        console.log("Please enter valid command. To know valid commands, enter console.log(OptionaArr)");
        break;
    }
}

function LineBreaker(content){
    
    let ContentArr = content.split("\r\n");

    for( let i = 1; i < ContentArr.length; i++){
        if( ContentArr[i] == "" && ContentArr[i-1] == ""){
            ContentArr[i] = null;
        }else if(ContentArr[i] == "" && ContentArr[i-1] == null){
            ContentArr[i] = null;
        }
    }
    
    let tempArr = []
    for( let i = 0; i < ContentArr.length; i++){
        if(ContentArr[i] != null){
            tempArr.push(ContentArr[i]);
        }
        
    }
    
    console.log(tempArr.join("\n"));
}

function NumberingToAllLines(content){
    
    let ContentArr1 = content.split("\r\n");
    
    let tempArr1 = [];

    for(let i = 0; i < ContentArr1.length; i++ ){
        tempArr1.push(i + 1 + "." + ContentArr1[i]);
    }
    
    console.log(tempArr1.join("\n"));
    
}

function NumberingToNonEmptyLines(content){
    let ContentArr2 = content.split("\r\n");
    
    let tempArr2 = [];
    let j = 1;

    for(let i = 0; i < ContentArr2.length; i++ ){
        
        if(ContentArr2[i] != ""){
            tempArr2.push(j + "." + ContentArr2[i]);
            j++;
        }else{
            tempArr2.push(ContentArr2[i]);
        }
        
    }
    
    console.log(tempArr2.join("\n"));

}

