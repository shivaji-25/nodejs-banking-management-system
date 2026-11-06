const data=require("readline");
function pin(){
    return new  Promise((resolve,reject)=>{
        const a=data.createInterface({
            input:process.stdin,
            output:process.stdout
        });
        a.question("enter the pin: ",(pin)=>{
            let org_pin="2007";
            if(pin===org_pin){
                resolve("pin verfied");
            }
            else{
                reject("pin invalid");
            }
            a.close();
        });
    });
}
module.exports=pin;