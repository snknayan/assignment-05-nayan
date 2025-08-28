/* Functions  */

//ID Element Return
function getIdElement(id) {
  const idElement = document.getElementById(id);
  return idElement;
}
//Class ELement Return
// function getClassElement(id) {
//   const classElement = document.getElementsByClassName(id);
//   return classElement;
// }
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
    const titleText = callBtn.parentNode.parentNode.childNodes[3].innerText;

    const subTitleText = callBtn.parentNode.parentNode.childNodes[5].innerText;

    const emgCallNumber = callBtn.parentNode.parentNode.childNodes[7].innerText;

    const coinText =
      callBtn.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
        .children[0].children[0].children[1].children[1].children[0].innerText;

    const totalCoin = Number(coinText) - 20;
    const currentCoin = (getIdElement("coin-point").innerText = totalCoin);

    /* const historyContainer = getIdElement("call-history-container");
    const newCart = document.createElement("div");
    newCart.innerHTML = `<div
            class="call-history mb-3 p-3 shadow-sm bg-[#FAFAFA] w-64 ml-3 rounded-lg flex justify-between items-center"
          >
            <div>
              <h2 class="text-gray-800 font-semibold">${titleText}</h2>
              <p class="text-gray-600 text-sm mt-1">${emgCallNumber}</p>
            </div>
            <div>
              <h1>time</h1>
            </div>
          </div>`;
    historyContainer.append(newCart); */

    if (currentCoin < 0) {
      alert(
        "You don't have enough coins, You need at least 20 coins to make a call!"
      );
      const currentCoin = (getIdElement("coin-point").innerText = 0);
      //Negative value chole ase tai standard hisebe 100 bosiye diyechi.
      return;
    } else {
      const historyContainer = getIdElement("call-history-container");
      const newCart = document.createElement("div");
      const now = new Date();
      const currentTime = now.toLocaleTimeString();
      newCart.innerHTML = `<div
            class="call-history mb-3 p-2 shadow-sm bg-[#FAFAFA] w-66 ml-2 mr-2 rounded-lg flex justify-between items-center"
          >
            <div>
              <h2 class="text-gray-800 text-sm font-semibold">${titleText}</h2>
              <p class="text-gray-600 text-sm mt-1">${emgCallNumber}</p>
            </div>
            <div>
              <h2 class="text-sm font-medium">${currentTime}</h2>
            </div>
          </div>`;
      historyContainer.append(newCart);
      alert(subTitleText + " : " + emgCallNumber);
    }
  });
}

//Heart Button Functionalities

const HeartBtns = document.getElementsByClassName("heart");

for (let heartBtn of HeartBtns) {
  heartBtn.addEventListener("click", function () {
    const heartText =
      heartBtn.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
        .childNodes[3].childNodes[1].childNodes[3].childNodes[1].childNodes[1]
        .innerText;

    let heartCount = Number(heartText) + 1;
    let heartTotalCount = (document.getElementById("heart-count").innerText =
      heartCount);
    heartBtn.classList.add("text-red-500");
  });
}
//Copy Functionalities

const copyBtns = document.querySelectorAll(".copy-card");
console.log(copyBtns);
for (let copyBtn of copyBtns) {
  console.log(copyBtn);
  copyBtn.addEventListener("click", function () {
    let copyCallText = copyBtn.parentNode.parentNode.childNodes[7].innerText;

    alert("Number Copied: " + copyCallText);

    const copyCountText =
      copyBtn.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
        .childNodes[3].childNodes[1].childNodes[3].childNodes[5].childNodes[1]
        .innerText;

    let copyCount = Number(copyCountText) + 1;
    document.getElementById("copy-count").innerText = copyCount;
  });
}

//Clear Section
document.getElementById("btn-clear").addEventListener("click", function () {
  const historyContainer = getIdElement("call-history-container");
  historyContainer.innerHTML = "";
});
