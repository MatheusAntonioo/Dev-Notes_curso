// Elementos
const notesContainer = document.querySelector("#notes-container");
const noteInput = document.querySelector("#note-content");
const addNoteBtn = document.querySelector(".add-note");

// Funções
function showNotes() {
  getNotes().forEach((note) => {
    const noteElement = createNote(note.id, note.content, note.fixed);
    notesContainer.appendChild(noteElement);
  });
}

function addNote() {
  const notes = getNotes();

  const noteObject = {
    id: generateId(),
    content: noteInput.value,
    fixed: false,
  };

  const noteElement = createNote(noteObject.id, noteObject.content);

  notesContainer.appendChild(noteElement);

  notes.push(noteObject);

  saveNotes(notes);

  noteInput.value = "";
}

function generateId() {
  return Math.floor(Math.random() * 10000);
}

function createNote(id, content, fixed) {
  const element = document.createElement("div");
  element.classList.add("note");

  const textarea = document.createElement("textarea");
  textarea.value = content;
  textarea.placeholder = "Adicione algum texto...";
  element.appendChild(textarea);

  // -----------------------

  const pin = document.createElement("i");
  pin.classList.add("bi");
  pin.classList.add("bi-pin");
  element.appendChild(pin);

  const xLg = document.createElement("i");
  xLg.classList.add("bi");
  xLg.classList.add("bi-x-lg");
  element.appendChild(xLg);

  const fileEarmarkPlus = document.createElement("i");
  fileEarmarkPlus.classList.add("bi");
  fileEarmarkPlus.classList.add("bi-file-earmark-plus");
  element.appendChild(fileEarmarkPlus);

  // -------------------------

  return element;
}

// Local storage
function getNotes() {
  const notes = JSON.parse(localStorage.getItem("notes") || "[]");

  return notes;
}

function saveNotes(notes) {
  localStorage.setItem("notes", JSON.stringify(notes));
}

// Eventos
addNoteBtn.addEventListener("click", () => addNote());

// Inicialização
showNotes();
