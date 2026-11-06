const login=require("./login");
const pin=require("./pin");
const bank=require("./bank");
const file=require("./file");
async function display(){
    try{
        
        async function test(){
            const a = await login();
            console.log(a);
            const b = await pin();
            console.log(b);
            const c = await bank.deposit_amount();
            console.log(c);
            const d= await bank.withdraw();
            console.log(d);
             const e = await file.write();
             console.log(e);
             const f= await file.read();
             console.log(f);

        }
        test();
       

       
    }
    catch(error){
        console.log(error);
    }
}
display();