    const readline=require("readline");
     let balance = 5000;

        function deposit_amount(){
        return new Promise((resolve)=>{
            const a = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
            });
            a.question("enter deposit amount :", (amount) => {
                amount=Number(amount);
                balance = balance + amount;
                
                resolve("amount deposited:"+ amount+"\nbalance:" +balance);
                 a.close();
            });
             
        });
        }
        function withdraw(){
            
            return new Promise((resolve,reject)=>{
                const a=readline.createInterface({
                    input:process.stdin,
                    output:process.stdout
                });
                a.question("enter withdraw amount:",(amount)=>{
                    amount=(Number) (amount);
                if(amount>balance){
                    reject("Insufficient Balance");
                }
                else{
                    balance = balance - amount;
                    resolve("Withdrawal Successful:" + amount + "\nBalance:"+balance);
                }
                 a.close();
                });
               
            });
        }
module.exports = {
  deposit_amount,
  withdraw
};