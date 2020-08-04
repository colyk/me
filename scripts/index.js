const MIN_CONTENT_ID = 1;
const MAX_CONTENT_ID = 3;
let id = document.location.href.split('#')[1];
let currentContentId = id ? id[0] : 1;
const navigator = document.getElementById('navigator');
updateNavigator()
document.addEventListener('wheel', jumpToNextBlock);
navigator.addEventListener('mouseup', updateNavigatorActive);

function jumpToNextBlock(e) {
  if (e.wheelDeltaY > 0)
    currentContentId--;
  else
    currentContentId++;
  currentContentId = Math.min(currentContentId, MAX_CONTENT_ID);
  currentContentId = Math.max(currentContentId, MIN_CONTENT_ID);

  const id = `${currentContentId}content`;
  document.location.href = document.location.href.split('#')[0] + '#' + id;
  scrollTo(document.getElementById(id));
  updateNavigator();
}

function scrollTo(element) {
  window.scroll({ left: 0, top: (currentContentId - 1) * element.height });
}

function updateNavigator() {
console.log('updateNavigator')
  const items = navigator.getElementsByClassName('item');
  for (let i = 0; i < items.length; i++) {

    if (items[i].href.split('#')[1][0] == currentContentId) {
      items[i].classList.add('selected');
    }
    else {
      items[i].classList.remove('selected');

    }
  }
}

function updateNavigatorActive(e) {
  if (!e.target.parentElement.href)
    return;
  const items = navigator.getElementsByClassName('item');
  for (let i = 0; i < items.length; i++) {
    items[i].classList.remove('selected');
  }
  e.target.parentElement.classList.add('selected');
}
