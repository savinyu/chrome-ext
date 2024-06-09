var Dates = [];
const setDOMInfo = info => {
  Dates = [];
  console.log(info);
  for(let i=0;i<info.length;i++){
    Dates.push(info[i].Date);
    let div1 = document.createElement('div');
    let span = document.createElement('span');
    let p = document.createElement('p');
    div1.classList.add('HighlightedText');
    div1.setAttribute("id",info[i].id.toString()+"*");
    div1.style.backgroundColor = info[i].colour;
    if(info[i].colour == "#95C8F3" || info[i].colour == 'rgb(149, 200, 243)') div1.style.color = 'rgb(14 105 182)';
    else if(info[i].colour == "#FFDC74" || info[i].colour == 'rgb(255, 220, 116)') div1.style.color = 'rgb(176 137 20)';
    else if(info[i].colour == "#FBAC87" || info[i].colour == 'rgb(251, 172, 135)') div1.style.color = 'rgb(158 63 18)';
    else if(info[i].colour == "#F3A6C8" || info[i].colour == 'rgb(243, 166, 200)') div1.style.color = 'rgb(206 30 108)';
    else if(info[i].colour == "#AEB5FF" || info[i].colour == 'rgb(174, 181, 255)') div1.style.color = 'rgb(20 34 179)';
    else if(info[i].colour == "#81E3E1" || info[i].colour == 'rgb(129, 227, 225)') div1.style.color = 'rgb(10 158 155)';
    else if(info[i].colour == "#B3E561" || info[i].colour == 'rgb(179, 229, 97)') div1.style.color = 'rgb(89 136 13)';
    span.innerText = info[i].Date;
    p.innerText = info[i].innerText+'\n\nComment: '+info[i].textareaText;
    p.style.backgroundColor = div1.style.backgroundColor;
    span.style.backgroundColor = div1.style.backgroundColor;
    let button = document.createElement('button');
    button.innerText = "Copy";
    button.classList.add("bt");
    button.setAttribute("id",info[i].id);
    div1.appendChild(button);
    div1.appendChild(p);
    div1.appendChild(span);
    document.body.appendChild(div1);
  };
  attachEventListeners();
};


const attachEventListeners = () => {
  const bts = document.getElementsByClassName('bt');
  for (let i = 0; i < bts.length; i++) {
    bts[i].addEventListener("click", () => {
      console.log(bts[i]);
      let doc = document.getElementById(bts[i].getAttribute('id').toString() + "*");
      let value = doc.querySelector('p').innerText;
      console.log(doc);
      navigator.clipboard.writeText(value);
    });
  }

  const keywordInput = document.getElementById('keyword');
  if (keywordInput) {
    keywordInput.addEventListener('input', searchDivs);
  }

  const dateSelect = document.getElementById('dateSelect');
  if (dateSelect) {
    dateSelect.addEventListener('change', sortDivs);
  }

  const download = document.getElementById('download');
  if (download) {
    download.addEventListener('click', popup);
  }
};



// Once the DOM is ready...
window.addEventListener('DOMContentLoaded', () => {
  // ...query for the active tab...
  chrome.tabs.query({
    active: true,
    currentWindow: true
  }, tabs => {
    // ...and send a request for the DOM info...
    chrome.tabs.sendMessage(
        tabs[0].id,
        {from: 'popup', subject: 'DOMInfo'},
        // ...also specifying a callback to be called 
        //    from the receiving end (content script).
        setDOMInfo);
  });
});




async function popup(){
  let value = prompt("To Download in .txt format=> Enter '1'\nTo Download in .html format=> Enter '2'\nTo Download in .pdf format=> Enter '3'","")
  if(value=="1"){
    let color = [];
    let divs = document.getElementsByClassName('HighlightedText');
    for(let j=0;j<divs.length;j++){
      if(divs[j].style.backgroundColor == "#95C8F3" || divs[j].style.backgroundColor == 'rgb(149, 200, 243)') color[j] = 'Blue';
    else if(divs[j].style.backgroundColor == "#FFDC74" || divs[j].style.backgroundColor == 'rgb(255, 220, 116)') color[j] = 'Yellow';
    else if(divs[j].style.backgroundColor == "#FBAC87" || divs[j].style.backgroundColor == 'rgb(251, 172, 135)') color[j] = 'Red';
    else if(divs[j].style.backgroundColor == "#F3A6C8" || divs[j].style.backgroundColor == 'rgb(243, 166, 200)') color[j] = 'Pink';
    else if(divs[j].style.backgroundColor == "#AEB5FF" || divs[j].style.backgroundColor == 'rgb(174, 181, 255)') color[j] = 'Purple';
    else if(divs[j].style.backgroundColor == "#81E3E1" || divs[j].style.backgroundColor == 'rgb(129, 227, 225)') color[j] = 'Cyan';
    else if(divs[j].style.backgroundColor == "#B3E561" || divs[j].style.backgroundColor == 'rgb(179, 229, 97)') color[j] = 'Green';
    }
    console.log(Array.from(divs));
    let textContent = Array.from(divs).map((h, k) => {
      if (!h.classList.contains('hide')) {
          return `(Colour:[${color[k]}]) ${h.querySelector('p').innerText} (Saved on: ${h.querySelector('span').innerText})`;
      } else {
          return '';
      }
    }).filter(item => item !== '').join('\n\n');
    console.log(textContent);
    let blob = new Blob([textContent], { type: 'text/plain' });
    let url = URL.createObjectURL(blob);
    let a = document.createElement('a');
    a.href = url;
    a.download = 'highlights.txt';
    a.click();
    URL.revokeObjectURL(url);
  }
  else if(value=="2"){
    let divs = document.getElementsByClassName('HighlightedText');
    let textContent = Array.from(divs).map((h, k) => {
      if (!h.classList.contains('hide')) {
          return h.outerHTML;
      } else {
          return '';
      }
    }).filter(item => item !== '').join('\n');
    let blob = new Blob([textContent], { type: 'text/plain' });
    let url = URL.createObjectURL(blob);
    let a = document.createElement('a');
    a.href = url;
    a.download = 'highlights.html';
    a.click();
    URL.revokeObjectURL(url);
  }
  else if(value=="3"){
    document.body.style.fontSize='20px';
    document.getElementsByClassName('navbar')[0].style.display = 'none';
    let d = document.getElementsByClassName('bt');
    for(let i=0;i<d.length;i++) d[i].style.visibility = "hidden";
    await html2pdf().from(document.body).save('output.pdf');
    for(let i=0;i<d.length;i++) d[i].style.visibility = "visible";
    document.getElementsByClassName('navbar')[0].style.display = 'flex';
    document.body.style.fontSize='';
  }
  else{
    alert("Your entered value matches with none option\nPlease try again and enter a valid input.")
  }
}



// document.getElementById('keyword').addEventListener('input', searchDivs);
function searchDivs() {
  console.log("Searching");
  // Get the keyword from the input field
  const keyword = document.getElementById('keyword').value.toLowerCase();

  // Get all div elements
  const divs = document.getElementsByClassName('HighlightedText');

  // Loop through all div elements
  for (let i = 0; i < divs.length; i++) {
      const div = divs[i].querySelector('p');
      console.log(div);
      // Check if the inner text of the div contains the keyword
      if (div.innerText.toLowerCase().includes(keyword)) {
        console.log("IF");
          // Add highlight class to the div
          divs[i].classList.remove('hide');
      } else if(keyword !="") {
        console.log("ELSE");
          // Remove highlight class from the div
          divs[i].classList.add('hide');
      }
  }
}


// Add event listener to the select field to trigger the sort on change
// document.getElementById('dateSelect').addEventListener('change', sortDivs);
function sortDivs() {
  console.log("DATEEEEEING")
  // Get the selected date from the select field
  const selected = document.getElementById('dateSelect').value;
  if(selected == 'Date'){

    // const divs = document.getElementsByClassName('HighlightedText');
    // let temp = divs.length;
    // // Show divs that have a span element with inner text containing the selected date
    // for(let j=0;j<temp;j++){
    //   divs[j].parentNode.removeChild(divs[j]);
    // }
    // console.log(divs);

    // window.document.dispatchEvent(new Event("DOMContentLoaded", {
    //   bubbles: true,
    //   cancelable: true
    // }));

    console.log(document.body.innerHTML);
    console.log(document.getElementsByClassName('navbar')[0]);
    document.body.innerHTML = document.getElementsByClassName('navbar')[0].outerHTML;
    console.log(document.body.innerHTML);
    chrome.tabs.query({
      active: true,
      currentWindow: true
    }, tabs => {
      // ...and send a request for the DOM info...
      chrome.tabs.sendMessage(
          tabs[0].id,
          {from: 'popup', subject: 'DOMInfo'},
          // ...also specifying a callback to be called 
          //    from the receiving end (content script).
          setDOMInfo);
    });
  }



  else if(selected=='style'){
    // Get all div elements
    const divs = document.getElementsByClassName('HighlightedText');
    var temp = Array.from(divs);
    // for(let j=0;j<divs.length;j++){

    // Function to get the background color of an element
    function getBackgroundColor(element) {
      return window.getComputedStyle(element).backgroundColor;
    }
    // Sort the divs based on their background color
    const sortedDivs = temp.sort((a, b) => {
        const colorA = getBackgroundColor(a);
        const colorB = getBackgroundColor(b);
        return colorA.localeCompare(colorB);
    });
    const body = document.body;
    sortedDivs.forEach(div => body.appendChild(div));

    // if(divs[j].style.backgroundColor == "#95C8F3" || divs[j].style.backgroundColor == 'rgb(149, 200, 243)') div1.style.color = 'rgb(14 105 182)';
    // else if(divs[j].style.backgroundColor == "#FFDC74" || divs[j].style.backgroundColor == 'rgb(255, 220, 116)') div1.style.color = 'rgb(176 137 20)';
    // else if(divs[j].style.backgroundColor == "#FBAC87" || divs[j].style.backgroundColor == 'rgb(251, 172, 135)') div1.style.color = 'rgb(158 63 18)';
    // else if(divs[j].style.backgroundColor == "#F3A6C8" || divs[j].style.backgroundColor == 'rgb(243, 166, 200)') div1.style.color = 'rgb(206 30 108)';
    // else if(divs[j].style.backgroundColor == "#AEB5FF" || divs[j].style.backgroundColor == 'rgb(174, 181, 255)') div1.style.color = 'rgb(20 34 179)';
    // else if(divs[j].style.backgroundColor == "#81E3E1" || divs[j].style.backgroundColor == 'rgb(129, 227, 225)') div1.style.color = 'rgb(10 158 155)';
    // else if(divs[j].style.backgroundColor == "#B3E561" || divs[j].style.backgroundColor == 'rgb(179, 229, 97)') div1.style.color = 'rgb(89 136 13)';
  // }
  }
}


