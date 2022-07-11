const fs = require('fs');
const readline = require('readline');



const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout, 
});



rl.question('Please Input Your Answer JSON file: ' , (answer) => {
    rl.question('Please Input Your Validation JSON file: ' , (validation) => {
        const datas = {
            answer: answer,
            validation: validation,
        };
        
        try{
            const loadStudent = () =>{
                const student = JSON.parse(fs.readFileSync(`./answer/${datas.answer}`));
                return student;
            }
            const loadKey = () =>{
                const validation = JSON.parse(fs.readFileSync(`./${datas.validation}`));
                return validation;
            }


        let score = 0;
        let wrong = 0;
        let unanswered = 0;
        for(i=1; i<=50; i++){
        if(loadStudent().answer[i] == loadKey().answer[i]){
            score += 2;
        }else if(loadStudent().answer[i] != loadKey().answer[i] && loadStudent().answer[i] != null){
            score -=1;
            wrong += 1;
        }else if(loadStudent().answer[i] == null){
            unanswered += 1;
         }
        // console.log(loadStudent().answer[i]);
        }

        console.log(`Processing ${loadStudent().student.name}\'s data...`)

        setTimeout(() =>{
            console.log(' ')
            console.log('Student\'s name: '+loadStudent().student.name)
            console.log('Class: '+loadStudent().student.class)
            console.log('Exam Date: '+loadStudent().student.exam_date)
            console.log('===================')
            
            console.log('FINAL SCORE')
            console.log('===================')
            console.log('Wrong Answer: '+wrong)
            console.log('Unanswered: '+unanswered)
            console.log('Final Score: '+score);
        },3000);
            

        // console.log(loadStudent().answer["1"]);

        // console.log(loadStudent());
        // console.log(loadValidate());
    rl.close();
}catch(err){
    console.log('no such file directory')
    rl.close();
}
    });
    });


