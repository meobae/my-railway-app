const colors = ['#ffe4f2', '#fff0f5', '#fce4ec', '#f3e5f5', '#f8bbd0'];

function changeColor() {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
}
