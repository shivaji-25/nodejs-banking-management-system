const a=require("fs");
function write(balance) {
  const c = a.writeFileSync(
    "bank.txt",
    "User : Shivaji\nBalance :" + balance + "\nStatus : Success",
  );
}
function read(){
    const b = a.readFileSync("bank.txt", "utf8");
    return b;
}
module.exports={
    write,
    read
}
