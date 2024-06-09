var but3 = 0;
document.addEventListener('click', function (event) {
  const highlightedText = event.target;
  // Check if the element has the class 'highlight'
  // Create an option button if it doesn't exist already
  const slides1 = document.getElementsByClassName('highlight');
  for (let i = 0; i < slides1.length; i++) {
    if(slides1[i].classList.contains('active')){
      slides1[i].classList.remove('active');
    }
  }
  var z=0;
  if (!document.querySelector('.hover-option-button') && highlightedText.classList.contains('highlight')) {
    for (z = 0; z < slides1.length; z++) {
      if(slides1[z].innerHTML==highlightedText.innerHTML){
        slides1[z].classList.add('active');
        break;
      }
    }
    let div = document.createElement('div');
    document.body.appendChild(div);
    div.classList.add('editors');
    let button1 = document.createElement('image');
    button1.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-EBDtcPGGt4v6NLCKjMtbXTo1Q9dH2daC6A&s';
    div.appendChild(button1);
    button1.classList.add('hover-option-button-hover');

    let button2 = document.createElement('image');
    button2.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCV4-uJdU1jbdPehq8FrubStFsGVDG9M0FZg&s';
    div.appendChild(button2);
    button2.classList.add('hover-option-button-hover');
    
    let button3 = document.createElement('image');
    button3.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1NwmH4k2nx9NtfSVweYSAQ_10hw1GggdEwg&s';
    div.appendChild(button3);
    button3.classList.add('hover-option-button-hover');


    var rect = slides1[z].getBoundingClientRect();

    var pageX = rect.left + (window.pageXOffset || document.documentElement.scrollLeft);
    var pageY = rect.top + (window.pageYOffset || document.documentElement.scrollTop);

    div.style.position = 'absolute';
    div.style.top = `${pageY + 25}px`; 
    div.style.left = `${pageX + 25}px`; 

    document.addEventListener('click', function () {
      if (div) {
        div.remove();
      }
    }, { once: true });

    if(but3){
      but3=0;
      document.getElementsByClassName('hover-option-button-hover')[2].click();
    }

    button1.addEventListener('click',()=>{
      let div2 = document.createElement('div');
      div2.classList.add('buttonelements');
      
      let buttons1 = document.createElement('div');
      div2.appendChild(buttons1);
      buttons1.style.backgroundColor = '#FFDC74';
      buttons1.classList.add('hover-option-button');
      
      
      let buttons2 = document.createElement('div');
      div2.appendChild(buttons2);
      buttons2.style.backgroundColor = '#FBAC87';
      buttons2.classList.add('hover-option-button');

      let buttons3 = document.createElement('div');
      div2.appendChild(buttons3);
      buttons3.style.backgroundColor = '#F3A6C8';
      buttons3.classList.add('hover-option-button');

      let buttons4 = document.createElement('div');
      div2.appendChild(buttons4);
      buttons4.style.backgroundColor = '#AEB5FF';
      buttons4.classList.add('hover-option-button');

      let buttons5 = document.createElement('div');
      div2.appendChild(buttons5);
      buttons5.style.backgroundColor = '#81E3E1';
      buttons5.classList.add('hover-option-button');

      let buttons6 = document.createElement('div');
      div2.appendChild(buttons6);
      buttons6.style.backgroundColor = '#95C8F3';
      buttons6.classList.add('hover-option-button');

      let buttons7 = document.createElement('div');
      div2.appendChild(buttons7);
      buttons7.style.backgroundColor = '#B3E561';
      buttons7.classList.add('hover-option-button');
      
      div2.style.position = 'absolute';
      div2.style.top = `${pageY + 25}px`; 
      div2.style.left = `${pageX + 25}px`;

      document.body.appendChild(div2);
      div2.focus();
      div.remove();

      document.addEventListener('click', function (e) {
        if (div2 && !div.contains(e.target) && e.target!=slides1[z]) {
          slides1[z].classList.remove('active');
          div2.remove();
        }
      });

      var highlights3 = JSON.parse(localStorage.getItem('highlights')) || [];
      highlights3.forEach((h,i) => {
      if(h.url==window.location.href && h.text==highlightedText.innerHTML){
        const slides = document.getElementsByClassName('highlight');
        for (let i = 0; i < slides.length; i++) {
          var d = slides.item(i);
          if(d.innerHTML==h.text) break;
        }
        const bts = document.getElementsByClassName('hover-option-button');
        for(let j=0; j< bts.length ; j++){
          if(bts[j].style.backgroundColor==d.style.backgroundColor){
            bts[j].style.border = "2px solid white";
            break;
          }
        }
        buttons1.addEventListener('click',()=>{
          d.style.backgroundColor=buttons1.style.backgroundColor;
          highlights3[i].colour = buttons1.style.backgroundColor;
          localStorage.setItem('highlights', JSON.stringify(highlights3));
        });
        buttons2.addEventListener('click',()=>{
          d.style.backgroundColor=buttons2.style.backgroundColor;
          highlights3[i].colour = buttons2.style.backgroundColor;
          localStorage.setItem('highlights', JSON.stringify(highlights3));
        });
        buttons3.addEventListener('click',()=>{
          d.style.backgroundColor=buttons3.style.backgroundColor;
          highlights3[i].colour = buttons3.style.backgroundColor;
          localStorage.setItem('highlights', JSON.stringify(highlights3));
        });
        buttons4.addEventListener('click',()=>{
          d.style.backgroundColor=buttons4.style.backgroundColor;
          highlights3[i].colour = buttons4.style.backgroundColor;
          localStorage.setItem('highlights', JSON.stringify(highlights3));
        });
        buttons5.addEventListener('click',()=>{
          d.style.backgroundColor=buttons5.style.backgroundColor;
          highlights3[i].colour = buttons5.style.backgroundColor;
          localStorage.setItem('highlights', JSON.stringify(highlights3));
        });
        buttons6.addEventListener('click',()=>{
          d.style.backgroundColor=buttons6.style.backgroundColor;
          highlights3[i].colour = buttons6.style.backgroundColor;
          localStorage.setItem('highlights', JSON.stringify(highlights3));
        });
        buttons7.addEventListener('click',()=>{
          d.style.backgroundColor=buttons7.style.backgroundColor;
          highlights3[i].colour = buttons7.style.backgroundColor;
          localStorage.setItem('highlights', JSON.stringify(highlights3));
        });
        return;
      }
      });
    });



    button2.addEventListener('click', function () {
      div.remove();
      const highlights2 = JSON.parse(localStorage.getItem('highlights')) || [];
      highlights2.forEach((h,i) => {
      if(h.url==window.location.href && h.text==highlightedText.innerHTML && h.textarea==0){
        highlights2[i].textarea=1;
        localStorage.setItem('highlights', JSON.stringify(highlights2));
        let textarea = document.createElement('textarea');
        textarea.classList.add('hover-textarea');
      
        textarea.style.position = 'absolute';
        textarea.style.top = `${pageY+25}px`;
        textarea.style.left = `${pageX+25}px`;
        textarea.style.backgroundColor = h.colour;
        textarea.value = highlights2[i].textareaText;
      
        
        document.body.appendChild(textarea);
        textarea.focus();
      
        textarea.addEventListener('blur', function () {
          highlights2[i].textareaText=textarea.value;
          textarea.remove();
          highlights2[i].textarea=0;
          localStorage.setItem('highlights', JSON.stringify(highlights2));
        });
      };
    });
      return;
    });


    button3.addEventListener('click',()=>{
      div.remove();
      result = confirm("Do you really want to delete such a beautiful highlighted text???");
      var highlights2 = JSON.parse(localStorage.getItem('highlights')) || [];
      highlights2.forEach((h,i) => {
      if(h.url==window.location.href && h.text==highlightedText.innerHTML && result){
        const slides = document.getElementsByClassName('highlight');
        for (let i = 0; i < slides.length; i++) {
          var d = slides.item(i);
          if(d.innerHTML==h.text) d.style.backgroundColor = 'transparent';
        }
        highlights2.splice(i,1);
        localStorage.setItem('highlights', JSON.stringify(highlights2));
        slides1[z].classList.remove('active');
        return;
      }
      });
    });
  }
});


function highlightText(colour) {
  const url = window.location.href;
  const selection = window.getSelection();
  if (!selection.rangeCount) return;
  var len = selection.toString().length;
  const range = selection.getRangeAt(0);
  var parentElement = range.commonAncestorContainer;
  if (parentElement.nodeType === Node.TEXT_NODE) {
    parentElement = parentElement.parentNode;
  }
  function calculateOffsets(range, parentElement) {
    var htmlContent = parentElement.innerHTML.toString();
    var startContainerHTML = '';
    if (range.startContainer.nodeType === Node.TEXT_NODE) {
      startContainerHTML = range.startContainer.nodeValue;
    } else {
      startContainerHTML = range.startContainer.outerHTML || range.startContainer.innerHTML;
    }
    startContainerHTML = startContainerHTML.toString();
    while(startContainerHTML[startContainerHTML.length-1]==" " || startContainerHTML[startContainerHTML.length-1]==String.fromCharCode(160)){
      startContainerHTML = startContainerHTML.substring(0,startContainerHTML.length-1);
    }
    while(startContainerHTML[0]==" " || startContainerHTML[0]==String.fromCharCode(160)){
      startContainerHTML = startContainerHTML.substring(1,startContainerHTML.length-1);
    }


    // Serialize the content of the range end container
    var endContainerHTML = '';
    if (range.endContainer.nodeType === Node.TEXT_NODE) {
      endContainerHTML = range.endContainer.nodeValue;
    } else {
      endContainerHTML = range.endContainer.outerHTML || range.endContainer.innerHTML;
    }
    endContainerHTML = endContainerHTML.toString();
    while(endContainerHTML[endContainerHTML.length-1]==" " || endContainerHTML[endContainerHTML.length-1]==String.fromCharCode(160)){
      endContainerHTML = endContainerHTML.substring(0,endContainerHTML.length-1);
    }
    while(endContainerHTML[0]==" " || endContainerHTML[0]==String.fromCharCode(160)){
      endContainerHTML = endContainerHTML.substring(1,endContainerHTML.length-1);
    }
    
    // Calculate the start offset
    var startOffset = range.startOffset;
    var temp = htmlContent;
    var check=0;
    for(let i=0;i<htmlContent.length;i++){
      if(htmlContent[i]=='<') check=1;
      else if(htmlContent[i]=='>') check=0;
      if(i==htmlContent.indexOf(startContainerHTML) && check==1){
        startOffset+=htmlContent.indexOf(startContainerHTML)+startContainerHTML.length;
        htmlContent=htmlContent.substring(htmlContent.indexOf(startContainerHTML)+startContainerHTML.length,htmlContent.length);
        i=0;
      }
      else if(i==htmlContent.indexOf(startContainerHTML) && check==0){
        startOffset+=i;
        break;
      }
    }
    htmlContent=temp;
    // for(let i=0;i<startOffset;i++){
    var array = [...htmlContent.matchAll('<span class="highlight"[^>]+>')];
    
    for(let j=0;j<array.length;j++){
      startOffset-=array[j].toString().length;
      startOffset-=7;
    }
    // }
    var endOffset = startOffset+len;
    // Return the end offset
    return {
        startOffset: startOffset,
        endOffset: endOffset
    };
}

  // Calculate the start offset relative to the parent element
  var offsets = calculateOffsets(range, parentElement);
  const startContainerXPath = getXPath(range.startContainer);
  const endContainerXPath = getXPath(range.endContainer);
  const highlight = {
    startContainerXPath: startContainerXPath,
    startOffset: offsets.startOffset,
    endContainerXPath: endContainerXPath,
    endOffset: offsets.endOffset
  };
  const span = document.createElement('span');
  span.style.backgroundColor = colour;
  span.className = 'highlight';
  const fragment = range.cloneContents();
  span.appendChild(fragment);
  range.deleteContents();
  range.insertNode(span);
  var text = span.innerHTML;
  saveHighlight(colour,url,text,range,highlight);
}

function saveHighlight(colour,url,text,range,highlight) {
const highlights = JSON.parse(localStorage.getItem('highlights')) || [];
highlights.push({
    colour : colour,
    url: url,
    text: text,
    startOffset: highlight.startOffset,
    endOffset: highlight.endOffset,
    parentXPath: getXPath(range.commonAncestorContainer),
    textarea : 0,
    textareaText : "Enter your notes here",
    innerText : range.toString(),
    id: new Date().toString()
});
localStorage.setItem('highlights', JSON.stringify(highlights));
}


function getXPath(element) {
const paths = [];
for (; element && element.nodeType == 1; element = element.parentNode) {
    let index = 0;
    for (let sibling = element.previousSibling; sibling; sibling = sibling.previousSibling) {
    if (sibling.nodeType == Node.DOCUMENT_TYPE_NODE) continue;
    if (sibling.nodeName == element.nodeName) ++index;
    }
    const tagName = element.nodeName.toLowerCase();
    const pathIndex = (index ? `[${index + 1}]` : '');
    paths.splice(0, 0, tagName + pathIndex);
}
return paths.length ? '/' + paths.join('/') : null;
}

const highlights = JSON.parse(localStorage.getItem('highlights')) || [];
highlights.forEach(h => {
  if(h.url==window.location.href) restoreHighlight(h);
});

// Function to restore highlights
function restoreHighlight({colour, url, text, startOffset, endOffset, parentXPath,textarea,textareaText,innerText,id,Date}) {
  const parent = document.evaluate(parentXPath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
  if (!parent) return;
  if(startOffset<0) startOffset=0;
    var inner = parent.innerHTML;
    var array1 = [...inner.matchAll('<span class="highlight"[^>]+>')];
    for(let j=0;j<array1.length;j++){
      startOffset+=array1[j].toString().length+7;
    }

    var temp = startOffset;
    if(text[0]=='<' || text[1]=='<'){
      while((inner[startOffset]!='<' && inner[startOffset]!='>') && startOffset>0){
        startOffset--;
      }
    }
    var x = temp-startOffset;
    if(inner[startOffset]=='>' && (text[0]=='<' || text[1]=='<') && temp>startOffset){
      while(inner[startOffset]!='<' && startOffset>0){
        startOffset--;
      }
      x=temp-startOffset-x;
      startOffset = temp;
      let tag2 = text.match("<[a-zA-Z]");
      let tag = tag2.toString();
      tag= tag.substring(1,tag.length);
      inner = inner.substring(0, startOffset) +"</"+tag+">"+"<span class='highlight' style='background-color:"+colour+"'>"+text+"</span> "+inner.substring(text.length+startOffset-x-1,inner.length);
    }
    else{
      if(inner[startOffset-1]==text[0]) startOffset--;
      issue=0;
      for(let i=text.length+startOffset;i<inner.length-1;i++){
        if(inner[i]=='<' && inner[i+1]!='/') break;
        else if(inner[i]=='<' && inner[i+1]=='/'){
          issue=1;
          var tag2 = inner.substring(i,i+10).match("<[^<]+>").toString();
          
          var array = [...text.matchAll('<'+tag2.substring(2,tag2.length-1)+'[^>]+>')];
          
        }
      }
      if(issue) inner = inner.substring(0, startOffset) +"<span class='highlight' style='background-color:"+colour+"'>"+text+"</span>"+array[array.length-1]+inner.substring(text.length+startOffset-tag2.length,inner.length);
      else inner = inner.substring(0, startOffset) +"<span class='highlight' style='background-color:"+colour+"'>"+text+"</span>"+inner.substring(text.length+startOffset,inner.length);
    }
    parent.innerHTML = inner;
}

chrome.runtime.sendMessage({
  from: 'content',
  subject: 'showPageAction',
});

// Listen for messages from the popup.
chrome.runtime.onMessage.addListener((msg, sender, response) => {
  if ((msg.from === 'popup') && (msg.subject === 'DOMInfo')) {

    var domInfo = [];
    const highlights = JSON.parse(localStorage.getItem('highlights')) || [];
    highlights.forEach(h => {
      if(h.url==window.location.href) domInfo.push(h);
    });
    response(domInfo);
  }
});


// Implementing Keyborad Shortcuts by listening messsage from background.js
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === "toggle_highlight") {
    highlightText("#FFDC74");
  } 
  else if (request.action === "clear_highlights") {
    deleteHighlight();
  }
});
async function deleteHighlight() {
  // Implement the logic to clear all highlights
  const slides2 = document.getElementsByClassName('highlight');
  for (let i = 0; i < slides2.length; i++) {
    if(slides2[i].classList.contains('active')){
      but3=3;
      await slides2[i].click();
      break;
    }
  }
}
