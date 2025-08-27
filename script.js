/* Functions  */

//ID Element Return
function getIdElement(id) {
  const idElement = document.getElementById(id);
  return idElement;
}
//Class ELement Return
function getClassElement(id) {
  const classElement = document.getElementsByClassName(id);
  return classElement;
}
//InnerText Return
/* function getElementText(id) {
  const subTitles = getClassElement(id);
  for (let subTitle of subTitles) {
     const subTitleText=subTitle.innertext;
  }
 
} */

/* Call Button Functionalities */
const callBtns = document.getElementsByClassName("call-card");
// console.log(callBtns);

for (let callBtn of callBtns) {
  callBtn.addEventListener("click", function () {
    // console.log("Button Clicked");
    const subTitleText = callBtn.parentNode.parentNode.childNodes[5].innerText;
    console.log(subTitleText);

    const emgCallNumber = callBtn.parentNode.parentNode.childNodes[7].innerText;
    console.log(emgCallNumber);

    const coinText = getIdElement("coin-value").innerText;
    let coinValue = Number(coinText) - 20;
    coinText.innerText = coinValue;
    console.log(coinValue);

    alert(subTitleText + " :" + emgCallNumber);
  });
}
