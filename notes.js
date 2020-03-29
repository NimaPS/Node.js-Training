const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => {
    return " my Notes...";
}
const loadNote = () => {
    try {
        const dataBuffer = fs.readFileSync('note.json')
        const dataJSON = dataBuffer.toString()
        const data = JSON.parse(dataJSON);
        return data

    } catch (e) {
        return []
    }
}

const addNote = (title, body) => {
    const notes = loadNote();
    const duplicateNotes = notes.filter(note => note.title === title)

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        fs.writeFileSync('note.json', JSON.stringify(notes))
        console.log(chalk.bgGreen.black('New note added!'))
    } else {
        console.log(chalk.bgRed.black('Note title taken!'))
    }
}
const saveNotes = notes => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('note.json', dataJSON)
}


const removeNote = title => {

    const notes = loadNote();
    const notesToKeep = notes.filter(note => note.title !== title)
    const toCheck = notes.filter(note => note.title === title) // or if (notes.length >notesToKeep.length){...} ... 
    saveNotes(notesToKeep);


    if (toCheck.length !== 0) // or if (notes.length >notesToKeep.length){...} ...
        console.log(chalk.bgGreen.black('Note removed!'))
    else
        console.log(chalk.red.inverse('Note does not exist!'))
}

const listNotes = function() {
    const notes = loadNote();
    // const arr = notes;
    console.log(chalk.green.inverse(' Your notes : '))
    notes.forEach(note => console.log('Note Title: ' + note.title + ' Note Body: ' + note.body))
        // arr.forEach(note => console.log('Note Title: ' + note.title + ' Note Body: ' + note.body))
}

const ReadNote = (title) => {
    const notes = loadNote();
    //  const noteToRead = notes.filter(note => note.title === title); // ما بنفع نستخدم فلتر بالبحث لانو الفلتر حتى لو لقي النتيجة بضل مكمل فلترة لاخر عنصر للعنصر المليون مثلا!!!
    const note = notes.find(note => note.title === title)
    if (note) {
        console.log(chalk.green.inverse(' Note Title: ' + note.title + ' , Note Body: ' + note.body + '  '))
    } else
        console.log(chalk.red.inverse(' Note not found'))
}
module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    ReadNote: ReadNote
}