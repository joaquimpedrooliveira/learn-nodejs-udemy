const fs = require('fs');

fetchNotes = () => {
    try {
        notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    } catch (e) { 
        return [];
    }
};

saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

addNote = (title, body) => {
    var notes = fetchNotes();
    var note = {
        title,
        body
    };

    var duplicateNotes = notes.filter((note) => note.title === title);
    
    if (duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    }
};

getAll = () => {
    return fetchNotes();
}

getNote = (title) => {
    notes = fetchNotes();
    var foundNotes = notes.filter((note) => note.title === title);
    return foundNotes[0];
}

removeNote = (title) => {
    notes = fetchNotes();
    var otherNotes = notes.filter((note) => note.title !== title);
    saveNotes(otherNotes);
    return (notes.length !== otherNotes.length);
}

logNote = (note) => {
    console.log('---');
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
}

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote,
    logNote
}