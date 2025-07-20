const input = document.getElementById('todoInput');
const button = document.getElementById('addBtn');
const list = document.getElementById('todoList');

button.addEventListener('click', () => {
  const taskText = input.value.trim();

  if (taskText === '') {
    alert('Please enter a task!');
    return;
  }

  const li = document.createElement('li');
  li.textContent = taskText;

  // ✅ Mark as complete on click
  li.addEventListener('click', () => {
    li.classList.toggle('completed');
  });

  const checkbox = document.createElement('checkbox');
  checkbox.type ='checkbox';

  checkbox.addEventListener('change',()=>{
    li.classList.toggle('completed',checkbox.checked);
  });

  // ❌ Add delete button
  const delBtn = document.createElement('button');
  delBtn.textContent = '✖';
  delBtn.classList.add('delete-btn');
  delBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // prevent triggering complete toggle
    li.remove();
  });

  ;
  li.appendChild(delBtn);
  list.appendChild(li);
  input.value = '';
});