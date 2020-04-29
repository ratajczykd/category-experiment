const imgs = document.querySelectorAll('img');
const empties = document.querySelectorAll('.empty');
var taken = null;

//var img = new Image();
for (i = 0; i < imgs.length; i++) {
  imgs[i].addEventListener('dragstart', dragStart);
  imgs[i].addEventListener('dragend', dragEnd);
}

// Loop through empty boxes and add listeners
for (const empty of empties) {
  empty.addEventListener('dragover', dragOver);
  empty.addEventListener('dragenter', dragEnter);
  empty.addEventListener('dragleave', dragLeave);
  empty.addEventListener('drop', dragDrop);
}

// Drag Functions

function dragStart() {
  taken = this.src;
  //this.className += ' hold';
  //setTimeout(() => (this.className = 'invisible'), 0);
}

function dragEnd() {
  //this.appendChild(img);
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
  this.className += ' hovered';
}

function dragLeave() {
  this.classList.remove('hovered');
  this.classList.add('empty');
}

function dragDrop() {
  this.classList.remove('hovered', 'empty');
  for (i = 0; i < imgs.length; i++) {
    if (taken == imgs[i].src) {
      this.append(imgs[i]);
    }
  }
}
