const ws = new WebSocket('ws://127.0.0.1:23456')
ws.onopen = () => {
  console.log('%c ESBuild hot reload activated ', 'background: #000; color: #00b6ff',)
}
ws.onmessage = (message) => {
  location.reload()
}
