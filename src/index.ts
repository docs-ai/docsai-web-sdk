import { buttonStyles, iframeStyles } from "./styles";

const DOCS_AI_URL = 'http://localhost:3000/'

function toggleChat() {
  const chatIframe = document.getElementById('chat-iframe');
  if (chatIframe) {
    chatIframe.style.display = chatIframe.style.display === 'block' ? 'none' : 'block';
  }
}

function getChatChatButton(primaryColor? : string) {
  const chatButton = document.createElement('button');
  chatButton.id = 'chat-button';
  chatButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" style="margin-top: 4px;" viewBox="0 0 24 24" height="25" width="25" fill="currentColor" class="w-6 h-6"><path fill-rule="evenodd" d="M12 2.25c-2.429 0-4.817.178-7.152.521C2.87 3.061 1.5 4.795 1.5 6.741v6.018c0 1.946 1.37 3.68 3.348 3.97.877.129 1.761.234 2.652.316V21a.75.75 0 001.28.53l4.184-4.183a.39.39 0 01.266-.112c2.006-.05 3.982-.22 5.922-.506 1.978-.29 3.348-2.023 3.348-3.97V6.741c0-1.947-1.37-3.68-3.348-3.97A49.145 49.145 0 0012 2.25zM8.25 8.625a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zm2.625 1.125a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875-1.125a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z" clip-rule="evenodd" /></svg>';
  Object.assign(chatButton.style, buttonStyles)
  if (primaryColor) { 
    chatButton.style.backgroundColor = primaryColor;
  }
  chatButton.addEventListener('click', toggleChat);
  return chatButton;
}

function createChatIframe(projectId: string) {
  const chatIframe = document.createElement('iframe');
  chatIframe.id = 'chat-iframe';
  chatIframe.src = `${DOCS_AI_URL}chat/${projectId}`;
  Object.assign(chatIframe.style, iframeStyles)
  return chatIframe;
}


export function initDocsAI(projectId: string, primaryColor?: string) {
  if (typeof window !== "undefined") {
    const root = document.createElement('div');
    root.id = 'docsai-root';
    root.className = 'docsai-root';
    root.appendChild(getChatChatButton(primaryColor));
    root.appendChild(createChatIframe(projectId));
    document.body.appendChild(root);
  }
}

if (typeof window !== "undefined") {
  window.initDocsAI = initDocsAI;
}