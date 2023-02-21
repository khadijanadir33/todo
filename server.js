const bodyParser = require('body-parser');
const express=require('express');
const app= express();
const port= process.env.PORT || 3030;
const conn=require('./db_connexion');
app.set(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

let sql="";
app.get("/",(req,res)=>{
    res.render('home.ejs')
})
app.get('/tasks', (req, res)=>{
    sql="select * from tb_todo";
    conn.query(sql,(err,result)=>{
        res.render('list.ejs',{result})
    })
})
app.get('/tasks/:id/edit', (req, res)=>{
    const id=req.params.id
    sql=`select * from tb_todo  where id= ${id}`
    conn.query(sql,(err,task)=>{
    // console.log(task[0].id);
    res.render('detail.ejs',{task})
        
    })
})
app.post('/tasks/:id/edit',(req,res,next)=>{
    const id=req.params.id
     console.log(req.body);

})
app.get('/tasks/:id/delete',(req,res)=>{
   const id=req.params.id
    sql=`delete from tb_todo where id=${id}`
    conn.query(sql,(err)=>{
        if(err)throw err
        else res.redirect('/tasks')
    })

})

app.listen(port,(err)=>{
    if (err) throw err
    else console.log("server listening on port"+port)
})