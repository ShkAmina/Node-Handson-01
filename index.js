
const http=require("http")
const port=3001;
const jsonobject=[{
    Whatisnodejs:"NodeJs is single threaded non blocking oprations",
},
]
const app=http.createServer((req,res)=>{
    if(req.url=="/"){
        res.write("<html>");
        res.write("<body>");
        res.write("<h1>What is node js</h1>");
        res.write("<p>NodeJs is single threaded non blocking oprations</p>");
        res.write("</body>");
        res.write("</html>");
        res.end()
    }
    else if(req.url=="/post"){
        res.write("post api")
        res.end();
    }
    else if(req.url==="/fetchAPI"){
        const data=JSON.stringify(jsonobject);
        res.write(data);
        res.end()

    }
});
app.listen(port,()=>{
    console.log(`server is running in the port no. ${port}`);
})