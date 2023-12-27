import { answers } from '../answers';

execute();

export function execute() {
  const newDiv = createNewDiv();
  document.addEventListener('selectionchange', handleSelectionChange);

  function createNewDiv() {
    const div = document.createElement('div');
    div.style.position = 'absolute';
    div.style.bottom = '0';
    div.style.right = '0';
    div.style.background = 'white';
    div.style.padding = '2px';
    div.style.zIndex = '9999';
    document.body.appendChild(div);
    return div;
  }

  function handleSelectionChange() {
    const selectedText = window.getSelection().toString();

    // Проверка, что выделенный текст не пустой
    if (selectedText) {
      const answer = findAnswer(selectedText);
      showTextOverlay(answer);
    } else {
      hideTextOverlay();
    }
  }

  function findAnswer(selectedText) {
    // Поиск ответа по ключевым словам в вопросах
    for (const key in answers) {
      const question = answers[key].q.toLowerCase();
      if (question.includes(selectedText.toLowerCase())) {
        return answers[key].a;
      }
    }
    return '';
  }

  function showTextOverlay(selectedText) {
    newDiv.innerText = selectedText;
    newDiv.style.display = 'block';
  }

  function hideTextOverlay() {
    newDiv.style.display = 'none';
  }
}
