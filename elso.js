const tomb=[];

for(let i =0;i<10;i++){
    tomb.push(Math.random()*100);
}

tomb.sort();

for(let i=0;i<tomb.length;i++){
    console.log(tomb[i])
}
