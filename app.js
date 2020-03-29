const notes = require('./notes.js')
const yargs = require('yargs');
const chalk = require('chalk');

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Add Title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Add body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }

    // handler: argv => notes.addNote(argv.title, argv.body)

});


yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true, //required
            type: 'string'
        },
        body: {
            describe: 'Body Title',
            demandOption: true,
            type: 'string'
        }
    },

    handler(argv) {
        notes.removeNote(argv.title);
    }
});
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler() {
        console.log('Reading a Note');
    }
});
yargs.command({
    command: 'list',
    describe: 'List a note',
    //builder: {
    // title: {
    //     describe: 'Note title',
    //     demandOption: true,
    //     type: 'string'
    // },
    // Body: {
    //     describe: 'Note Body',
    //     demandOption: true,
    //     type: 'string'
    // } },
    handler() {
        notes.listNotes();

    }
});


yargs.command({
    command: 'read',
    describe: 'Reading a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.ReadNote(argv.title);

    }
})


yargs.parse(); // arranged data  //console.log(yargs.argv) //the whole data with _ {}