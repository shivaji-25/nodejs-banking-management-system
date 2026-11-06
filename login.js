const a=require("readline");
function login(){
    return new Promise((resolve,reject)=>{
        const data=a.createInterface({
            input:process.stdin,
            output:process.stdout
        });
        data.question("enter the username",(name)=>{
            let org="shivaji";
            if(name===org){
                resolve("login successful");
            }
            else{
                reject("invalid username");
            }
            data.close();
        });
    });

}

module.exports=login;