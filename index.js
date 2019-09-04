var readlineSync = require ('readline-sync')

function ageReturn(){
    var year = readlineSync.question ('which year were you born? ')
    var userage=2019-year

    if(userage <18){
        console.log('your are a minor')
    } else if(userage >=36){
        console.log('you are an elder')
    } else {
        console.log('you are a youth')
    }
}
ageReturn()
 