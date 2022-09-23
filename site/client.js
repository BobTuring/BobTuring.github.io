const page = document.getElementById("page");
if (!document.getElementById("pageHeader")) {
  page.innerHTML = `<div class="pageHeader" id="pageHeader">
    <a href="../index.html" data-hotkey="KeyH">[<u>H</u>ome]</a>
  </div>` + page.innerHTML;
}
const hotkeyList = document.getElementById("hotkeys");
const pageHeader = document.getElementById("pageHeader");
if (hotkeyList) {
  document.addEventListener("keypress", e => {
    let target = "_self";
    if (e.shiftKey) {
      target = "_blank";
    }
    if (parseInt(e.code.substring(5)) > 0 && !(hotkeyList.children.length < parseInt(e.code.substring(5)))) {
      let listItem = hotkeyList.children[parseInt(e.code.substring(5)) - 1];
      if (listItem.href) {
        window.open(listItem.href, target);
      }
    } else if (pageHeader) {
      [...pageHeader.children].forEach(child => {
        if (child.getAttribute("data-hotkey") == e.code != undefined) {
          window.open(child.href, target);
        }
      });
    }
  });
}