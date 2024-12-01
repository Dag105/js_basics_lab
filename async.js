calculate(even,2,2)

function calculate (callback,a,b) {
    let result = a + b
    callback(result)
}

function even(result){

    return new Promise((resolve, reject) => {
        
        if(result % 2 == 0){
            resolve("Even number")
        }
        else{
            reject("Odd number")
        }
    })

}

async function work() {
    try{
        const evenResult = await even()
        console.log(evenResult)

    }catch(error){
        console.error(error)
    }
}

work()



