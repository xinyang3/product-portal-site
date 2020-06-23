/**
 * @description 将代码copy至粘贴板中
 * @param {*} text
 * @date 2020/6/16 
 */

export default function copyTextClip (text) {
  var input = document.createElement('input');
  input.type = "text";
  input.id = "copy-id-" + Math.round(Math.random() * (2 << 20));
  // input.hidden = true;
  // input.style.display = 'none';

  input.style.position = 'absolute';
  input.style.left = '-200px'
  input.style.top = '-200px'

  var body = document.querySelector('body');
  body.appendChild(input);

  input.setAttribute('value', text);
  input.select();

  try {
    var re = document.execCommand('copy');
    if (!re) {
      console.log('copy failed !')
    }
  } catch (e) {
    console.warn(e)
  }

  body.removeChild(input);
}