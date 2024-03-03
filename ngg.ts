// importing all packages 
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
//creating the welcome function to welcome the user

async function  welcome ():Promise<void>{

let glitch = chalk.blueBright(chalkAnimation.neon('G U E S S   T H E   N U M B E R'));


    
  await new Promise<void>((resolve)=>{
    
    setTimeout(() => {
                    
        console.log(  glitch);

        
                     resolve(); 
                   
                }, 3000);
                

   
    

})

    
}


    


await welcome(); // welcoming the user 
async function game(){
let rounds = await inquirer.prompt([{
    name : 'round',
    type : 'number',
    message : 'How many rounds you want to play'
}])

function GetRandNo(max : number , min : number):number{
    let r =( Math.floor(Math.random() * (max - min +1)) + min);
    return r;
}
let range = await inquirer.prompt([{
    name : 'min',
    type : 'number',
    message : 'Enter the minimum number in between a number is generated so you can guess',
    validate: (min) => {
        const parsedNumber = parseFloat(min);
        const isNumber = !isNaN(parsedNumber) && Number.isInteger(parsedNumber);
  
        return isNumber ? true : 'Please enter a valid number.';
      },
},{
    name : 'max',
    type : 'number',
    message : 'Also enter the maximum one',
    validate: (max) => {
        const parsedNumber = parseFloat(max);
        const isNumber = !isNaN(parsedNumber) && Number.isInteger(parsedNumber);
  
        return isNumber ? true : 'Please enter a valid number.';
      },

}
])
let ran =GetRandNo(range.max , range.min);
let userIn = await inquirer.prompt([{
    name : 'userInput',
    type : 'number',
    message : 'Enter your guess'
}]);

for(let i = 0 ; i<rounds.round-1 ; i ++){
    let userIn = await inquirer.prompt([{
        name : 'userInput',
        type : 'number',
        message : 'Enter your guess',
        validate: (userInput) => {
            const parsedNumber = parseFloat(userInput);
            const isNumber = !isNaN(parsedNumber) && Number.isInteger(parsedNumber);
      
            return isNumber ? true : 'Please enter a valid number.';
          },

    }]);
    let index = 6;
    if(userIn.userInput == ran){
        console.log(chalk.green('Congratulations! you have guessed it correctly'));
        break;

    }else if (Math.abs(ran - userIn.userInput) < index){
        console.log(chalk.yellow('You are too close'));
       

    }
    else  {
        console.log(chalk.redBright('You are too far '))
        
    }
    }
   
}

do{
    await game();
    var con = await inquirer.prompt([{
        name:'continue',
        type : 'string',
        message :'if you want to continue press Y or if you want to exit press any key'
    }])
}
while(con.continue=='y')
    






