const mysql=require("mysql")
const connexion=mysql.createConnection({
    host:"localhost",
    user: "root",
    password: "",
    database:'db_todo'
})
connexion.connect(err=>{if(err)
    throw err
    else console.log("connected successfully")
       
})
module.exports=connexion;