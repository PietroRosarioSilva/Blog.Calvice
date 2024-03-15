document.addEventListener("DOMContentLoaded", function() {
  const chatWindow = document.getElementById('chat-window');
  const messageInput = document.getElementById('message-input');
  const sendButton = document.getElementById('send-button');

  // Carregar mensagens salvas no armazenamento local quando a página é carregada
  const savedMessages = JSON.parse(localStorage.getItem('chatMessages')) || [];
  savedMessages.forEach(message => appendMessage(message));

  sendButton.addEventListener('click', sendMessage);
  messageInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      sendMessage();
    }
  });

  function sendMessage() {
    const message = messageInput.value.trim();
    if (message !== '') {
      appendMessage(message);
      saveMessage(message);
      messageInput.value = '';
    }
  }

  function appendMessage(message) {
    const messageElement = document.createElement('div');
    messageElement.textContent = message;
    chatWindow.appendChild(messageElement);
    chatWindow.scrollTop = chatWindow.scrollHeight; // Auto-scroll to bottom
  }

  function saveMessage(message) {
    const savedMessages = JSON.parse(localStorage.getItem('chatMessages')) || [];
    savedMessages.push(message);
    localStorage.setItem('chatMessages', JSON.stringify(savedMessages));
  }
});