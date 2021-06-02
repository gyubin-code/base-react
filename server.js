const express = require('express');
const bodyParser=require('body-parser');
const app=express();
const port=process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//자바 스크립트의 데이터 배열을 보내겠다.(응답) json형태로 변환해서client에게 전송한다.
app.get("/api/customers",(req,res)=> {
    res.send([
        {
            'id':1,
            'image':'https://placeimg.com/64/64/any',
            'name':'이규빈',
            'birthday':'980428',
            'gender':'여자',
            'job':'대학생'
          
          },{
            'id':2,
            'image':'https://placeimg.com/64/64/any',
            'name':'오경택',
            'birthday':'961212',
            'gender':'남자',
            'job':'대학원생'
          
          }
    ]);
});

app.listen(port,()=> console.log(`listening on port ${port}`));