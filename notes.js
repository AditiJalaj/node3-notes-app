const fs=require('fs');
const chalk=require('chalk')

const getNotes=()=>{return "Your notes..."}

const addNote=(title,body)=>
{
    const notes=loadNotes()
    const duplicateNotes=notes.filter=((note) => note.title === title)
    
    if (duplicateNotes.length===0){
        notes.push({
            title:title,
            body:body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse("New note added"))
    }
    else{
        console.log(chalk.red.inverse('Note title taken!'))
    }
    
}
const removeNote=(title)=>{
    const notes=loadNotes()
    const find=notes.find((f)=>f.title===title)
    debugger
    if(find){
        notes.pop({
            find
        })
    }
    

    else{
        console.log(chalk.red.inverse("Note doesnt exist"))
    }
    saveNotes(notes)
}

const listNotes=()=>{
    
    const notes=loadNotes()
    console.log(chalk.inverse("your notes..."))
    notes.forEach((t)=>{
        console.log(t.title)
    })

}
const readNote=(title)=>{
    const notes=loadNotes()
    const find=notes.find((f)=>f.title===title)
    if(find){
        console.log(chalk.inverse(find.title))
        console.log(find.body)
    }
    else
    {
        console.log(chalk.red.inverse("Note not found"))
    }

}

    

const saveNotes=(notes)=>{
    const dataJSON=JSON.stringify(notes)
    fs.writeFileSync=('notes.json',dataJSON)
}
const loadNotes=()=>{
    try{

        const dataBuffer=fs.readFileSync('notes.json')
        const dataJSON=dataBuffer.toString()
         return JSON.parse(dataJSON)
    }
    catch(e){
        return []
    }
    
}

module.exports={
    getNotes:getNotes,
    addNote:addNote,
    removeNote:removeNote,
    listNotes:listNotes,
    readNote:readNote
}
