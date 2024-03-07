// index.js

// Infinity Notes - A versatile note-taking application designed to streamline your workflow and enhance productivity.

// Functionality for Infinity Notes
class InfinityNotes {
    constructor() {
        this.notes = [];
        this.categories = [];
    }

    // Method to create a new note
    createNote(title, content, category) {
        const note = {
            title: title,
            content: content,
            category: category
        };
        this.notes.push(note);
    }

    // Method to create a new category
    createCategory(categoryName) {
        this.categories.push(categoryName);
    }

    // Method to list all notes
    listNotes() {
        console.log("All Notes:");
        this.notes.forEach(note => {
            console.log(`Title: ${note.title} | Category: ${note.category}`);
            console.log(note.content);
            console.log("--------------------------");
        });
    }
}

// Example usage:
const infinityNotesApp = new InfinityNotes();

// Creating a new category
infinityNotesApp.createCategory("Work");

// Creating a new note
infinityNotesApp.createNote("Meeting Agenda", "1. Discuss project updates\n2. Plan for upcoming deadlines", "Work");

// Listing all notes
infinityNotesApp.listNotes();
