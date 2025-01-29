const fs=require("fs");
function fileRead(err,data)//this  body gets triggered after the file is read
{
    console.log(data);
}
fs.readFile("a.txt","utf-8",fileRead);