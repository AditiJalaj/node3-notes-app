// const a=require('./utils.js')
// const sum=a(4,-2);
// console.log(sum);


// const validator=require('validator')
const chalk=require('chalk');
const yargs=require('yargs');
const notes=require('./notes.js')
// const msg=notes.getNotes();
// console.log(msg)


// console.log(validator.isEmail('gmail.com'))
// console.log(validator.isURL('https//mead.io'))
// console.log(chalk.blue.inverse('Success!'));
//Customize yargs version as _
  yargs.version('1.1.0')


  //Add , remove, read , list notes
//create add command
yargs.command({
    command:'add',
    describe:'Add a new note',
    builder:{
        title:{
            descibe:'Note title',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'Note Body',
            demandOption:true,
            type:'string'
        }
    },
    handler: (argv)=>{
        notes.addNote(argv.title,argv.body);
    }

})
//CReate REMOVE command
yargs.command({
    command:'remove',
    describe:'Remove a note',
    builder:{
        title:{
            describe:"Note title",
            demandOption:true,
            type:'string'
        }
    },
    handler(args){
        notes.removeNote(args.title)
    }
})

//Create Read command
yargs.command({
    command:'read',
    describe:'Read a note',
    builder:{
        title:{
            describe:"Note title",
            demandOption:true,
            type:'string'
        }
    },
    handler(args){
       notes.readNote(args.title)
    }
})

//Create List command
yargs.command({
    command:'list',
    describe:'List your notes',
    handler:()=>{
        notes.listNotes();
    }
})

//  console.log(process.argv)
 //console.log(yargs.argv)  //PRINTING THIS IS AMUST
 //OR USE 
 yargs.parse()
// if(command==='add'){
//     console.log("Adding note!");
// }
// else if(command==='remove'){
//     console.log('Removing Note!')
// }
