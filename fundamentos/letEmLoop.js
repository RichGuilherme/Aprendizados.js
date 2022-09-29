 const funcs = []
 
 for (let i = 0; i < 10; i++){   //let só funciona dentro do laço for
    funcs.push(function(){
    console.log(i)
    })
 }
 funcs[2]()