const tomb=[];

for(i=0;i<20;i++)
{

    let macska=
    {

        nev:"Cirmos"+i,
        eletkor:Math.floor(Math.random()*8)+2
    }

    tomb.push(macska)

}

let c=0;
tomb.forEach(element=>{
    if(element.eletkor==2){
        console.log(tomb[c])
    }
    c++;
})
