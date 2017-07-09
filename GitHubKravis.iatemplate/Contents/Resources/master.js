/* eslint-env browser */
/* global Prism */

/**
 * Code Highlight
 */
const codeHighlight = function codeHighlight() {
  // All pre elements
  const allPreElements = document.querySelectorAll('pre');
  for (let i = 0; i < allPreElements.length; i += 1) {
    const preElement = allPreElements[i];

    const codeElement = preElement.querySelector('code');
    // If code element exist
    if (codeElement) {
      // Base Class
      const syntax = codeElement.classList[0];
      codeElement.classList.add(`language-${syntax}`);

      // Line Numbers
      if (!codeElement.classList.contains('no-line-number')) {
        preElement.classList.add('line-numbers');
      }
    }
  }
  Prism.highlightAll(true, () => {});
};

const taskBar = function taskBar() {
  const allTaskListItem = document.body.querySelectorAll('.task-list-item');

  // Group
  const allTaskList = [];
  for (let i = 0; i < allTaskListItem.length; i += 1) {
    const taskListItem = allTaskListItem[i];

    if (!allTaskList.includes(taskListItem.parentNode)) {
      // Not includes
      allTaskList.push(taskListItem.parentNode);
    }
  }

  // Add task bar
  for (let i = 0; i < allTaskList.length; i += 1) {
    const taskList = allTaskList[i];

    const allCheckbox = taskList.querySelectorAll('input[type="checkbox"]');
    const allChecked = taskList.querySelectorAll('input[checked=""]');
    const count = (allChecked.length / allCheckbox.length).toFixed(2) * 100;
    const taskBarElement = document.createElement('div');
    taskBarElement.setAttribute('class', 'task-bar');
    taskBarElement.setAttribute('data-count', `${count}%`);

    taskBarElement.setAttribute('style', `background: linear-gradient(to right, rgb(90,200,250), rgb(90,200,250) ${count}%, #f7f7f7 ${count}%, #f7f7f7);`);

    document.body.insertBefore(taskBarElement, taskList);
    // var insertedNode = parentNode.insertBefore(newNode, referenceNode);
  }
};

/**
 * Main Function
 */
const onIAWriterChange = function onIAWriterChange() {
  codeHighlight();
  taskBar();
};

document.body.addEventListener('ia-writer-change', onIAWriterChange);
