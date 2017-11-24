let sessions=
{
    "user1": "a3dcb4d229de6fde0db5686dee47145d",
    "user2": "7b71d9fdfe5b15a2d1a4968c195f93ae"
}

let users=
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

function getsession(sess)
{
   return new Promise((resolve,reject)=>
   setTimeout(()=>
   {
       if(!sessions[sess]){return reject(new Error("Session not foound"));}
       return resolve(sessions[sess]);
   },1000));
}

function getuser(us)
{
   return new Promise((resolve,reject)=>
   setTimeout(()=>
   {
       if(!users[us]){return reject(new Error("User not foound"));}
       return resolve(users[us]);
   },1000));
}

getsession('user1')
      .then((result)=>{document.writeln("||||||UserSession: ",result);
      return getuser(result);
       })
      .then((res)=>{document.writeln("||");
        document.writeln("User name=> ",res.name);
        document.writeln("User points=>  ",res.points); 
       })
      .catch(err=>{console.error(err);});
