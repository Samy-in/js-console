
// DOM = Document Object Model.
// So we know in console of an browser if we console.log(window) this shows everything like our location,type of the document
// etc. so we need tofocus on printing console.dir(documents) = to see all the hidden documents.

//1. document.getElementById('any name inside an element or class name') this is used in console to know.
//2. To take out the content of any div in html for react purpose we use,
// document.textContent  &  document.innerHTML  &  document.innerText   All of this have different meanings   

// So .textContent shows all the data (including hidden data) inside this document.
//but .innerText shows only the visible data on the output.
// Now .innerHTML this shows the data including the html tags inside the data so that we know what line is hidden by
// which syntax.

// ***************** learn about Query selector ***************************
// document.querySelector('mention any name of the class or tags')
// Ex. document.querSelector('h1') this says give me h1 tags and whatever is written inside it.
// But this .querySelector will only give the first h1 tag from up to down.
// 3. To find or to modify an id in html, we can use querySelector but write '#' before writing any title.
// like .querySelector('#title')
// To access class with this method we use '.' before the class name
//like.querySelector('.heading')

// With help of querySelectors we can access even ordered or unordered list.

// Remember querySelector gives only one value which can be a div or a title etc.

// 4. Now .querySelectorAll will give all the values but we have to specify which value do i want.
// Ex. if we write to pass h1 tags then it gives an array like structure called 'NodeList[]'
// Inside this there will be the values so we have to specify the index which we want to change the style .
// then we write            myh1[1].style.background = "blue"

// This NodeList can use features like foreach but not map function because it not a proper array.

// Nodelist and HtmlCollection is not an array but somewhat similar.
// To convert them into an array we use Array.From(inside this mention the name or variable) 
// Now you can store it in a variable and access the functions like maps,Foreach etc

// Now writing script in html is always after the body tag ends.
// So first Q. Select this parent class from Dom.html and store it in variable






