let session=
{
    "user1": "a3dcb4d229de6fde0db5686dee47145d",
    "user2": "7b71d9fdfe5b15a2d1a4968c195f93ae"
}

let user=
{
    "a3dcb4d229de6fde0db5686dee47145d" : {
            "name": "User1",
            "points": 500

    },

    "7b71d9fdfe5b15a2d1a4968c195f93ae" : {
            "name": "User2",
            "points": 300

    }
}


/*const fs = require('fs');
const  user1 = 'user1',user2 = 'user2';

var info1;
fs.readFile('/session.txt','utf8',(err,data)=>
{
    if(err){return console.error("Error session.txt")}
    return info1=JSON.parse(data);
}
);

var info2;
fs.readFile('/users.txt','utf8',(err,data)=>
{
    if(err){return console.error("Error users.txt")}
    return info2=JSON.parse(data);
}
);*/


function getsession(sess,calback)
{
    return setTimeout(()=>{
    if(!session[sess])
    {
        calback(null,new Error("Don't find data "));
    }
    else { calback(session[sess],null); }},1000);
}

function getuser(us, calback1)
{
 return setTimeout(()=> { 
    if(!user[us])
    {
         calback1(null,new Error("Don't find data "));
    }
    else{calback1(user[us] ,null);}
    },1000)   
}


getsession("user2",(res,err)=>
{
   if(err){console.error(err);}
   else{
        document.writeln("||||||UserSession  :  ",res);
        getuser(res,(ress,err)=>
        {
            if(err) console.error(err);
            else 
            {
                document.writeln("||");
                document.writeln("User name=>  ",ress.name);
                document.writeln("User points=> ",ress.points)
            };
        });
}
});




