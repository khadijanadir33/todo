const con=require('./db_connexion')

con.query("CREATE DATABASE IF NOT EXISTS db_todo",err=>{
    if(err)
    {
     throw err
    }
    else 
    console.log('database created');
})
con.query("USE db_todo",err=>{
    if(err)
    {
     throw err
    }
    else 
    console.log('database selected');
})
con.query("CREATE TABLE IF NOT EXISTS tb_todo(id INT AUTO_INCREMENT PRIMARY KEY ,champ1 varchar(25) not null)",err=>{
    if(err)
    {
     throw err
    }
    else 
    console.log('table created');
})