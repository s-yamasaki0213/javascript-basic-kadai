let num = 2;

const square = (num) =>{
    let resault = 2;

    if(num == 0){

        resault = 1;

    }else{

        for(let i = 1; i < num; i++){
            resault *= 2;
            console.log(i);
        }

    }
    
    return resault;
}

console.log (square(num));