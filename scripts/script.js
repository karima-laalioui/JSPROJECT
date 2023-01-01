var courses = [{
    image: './assets/images_courses/javascriptDef.png',
    title: 'what is javascript?',
    category: 'JS',
    price: 9.9
},
{
    image: './assets/images_courses/htmlBasics.PNG',
    title: 'basics of HTML',
    category: 'HTML',
    price: 5.9
},
{
    image: './assets/images_courses/htmlElements.png',
    title: 'HTML elements and tags',
    category: 'HTML',
    price: 9.9
},
{
    image: './assets/images_courses/cssSelectors.jpg',
    title: 'CSS selectors',
    category: 'CSS',
    price: 69.9
},
{
    image: './assets/images_courses/javascriptVariables.png',
    title: 'variables and data type of javascript',
    category: 'JS',
    price: 19.9
},
{
    image: './assets/images_courses/javascriptOperators.png',
    title: 'Javascript operators and conditions',
    category: 'JS',
    price: 29.9
},
{
    image: './assets/images_courses/htmlAttrVal.jpg',
    title: 'HTML attributes and values',
    category: 'HTML',
    price: 19.9
},
{
    image: './assets/images_courses/cssProperties.png',
    title: 'CSS properties',
    category: 'CSS',
    price: 29.9
},
{
    image: './assets/images_courses/javascriptObjects.png',
    title: 'Javascript objects and arrays',
    category: 'JS',
    price: 39.9
},
{
    image: './assets/images_courses/cssMesures.png',
    title: 'mesures and unites of CSS',
    category: 'CSS',
    price: 19.9
},
{
    image: './assets/images_courses/cssAnimation.png',
    title: 'CSS animations',
    category: 'CSS',
    price: 19.9
},
{
    image: './assets/images_courses/javascriptFunctions.png',
    title: 'The basics of javascript',
    category: 'JS',
    price: 29.9
},
{
    image: './assets/images_courses/javascriptEvents.png',
    title: 'javascript events',
    category: 'JS',
    price: 59.9
},
{
    image: './assets/images_courses/cssColors.png',
    title: 'css colors',
    category: 'css',
    price: 29.9
},
{
    image: './assets/images_courses/phpBasics.png',
    title: 'getting started with php',
    category: 'php',
    price: 15.9
},
{
    image: './assets/images_courses/javascriptFunctions2.png',
    title: 'functions and loops with javascript',
    category: 'JS',
    price: 19.9
},
{
    image: './assets/images_courses/phpDataBase.png',
    title: 'connecting to database using PHP',
    category: 'PHP',
    price: 29.9
},
{
    image: './assets/images_courses/phpCRUD.png',
    title: 'manipulating crud using php',
    category: 'php',
    price: 45.9
},
{
    image: './assets/images_courses/javascriptDOM.png',
    title: 'DOM the power of javascript',
    category: 'JS',
    price: 23.9
}
]


// display all items when page loads
window.addEventListener("DOMContentLoaded", function() {
    diplayMenuItems(courses);
});


function diplayMenuItems(CoursesItems) {
    let displayMenu = CoursesItems.map(function(item) {
        return `<div class="menu1-item" id="affichage">
        <div class="courses-preview">
        <img src=${item.image} alt="${item.title}" class="photo" />
        </div>
        <div class="courses-information">
        <h3 class="courses_title">${item.title}</h3>
        <div id="separator">
        <span class="category">${item.category.toUpperCase()}</span>
        <span class="price">$${item.price}</span>
        </div>
        </div>
        </div>`;
    });
    // cat.style.outlineColor
    displayMenu = displayMenu.join("");
    document.querySelector('.container-courses').innerHTML = displayMenu;
}
var cat=document.getElementById('cat');

var tabC=[courses.map((item)=>{
    return item.category.toUpperCase();
})]
var categories=['All',...new Set(...tabC)];
categories.forEach((item) => {
    //l.innerHTML+="<button class=\"button-value\" onclick=\"filtrerc(\'"+item+"\')\"> "+item+" </button>"
    cat.innerHTML+= '<li class="listOfCat">'+item.toLocaleUpperCase()+'</li>';
    // return `<li>${item.toLocaleUpperCase()}</li>`;
});




const tab=[courses.map((item)=>{

    return item.price;
}    )]
const price_range=document.getElementById("price_range");
var price=[...new Set(...tab)];
var minprice=Math.min(...price);
var maxprice=Math.max(...price);
price_range.setAttribute("min",minprice)
price_range.setAttribute("max",maxprice)
const listOfCat=document.getElementsByClassName("listOfCat")
listOfCat[0].addEventListener("click", function filterCatALL(){
    diplayMenuItems(courses);
    }
) 
listOfCat[1].addEventListener('click', function filterCatJS(){
    courses.forEach(item => {
            const filterByCat=courses.filter(item=>item.category===listOfCat[1].innerHTML);
            console.log(filterByCat)
            diplayMenuItems(filterByCat);
    });
}) 
listOfCat[2].addEventListener("click", function filterCatHTML(){
    courses.forEach(item => {
            const filterByCat=courses.filter(item=>item.category===listOfCat[2].innerHTML);
            console.log(filterByCat)
            diplayMenuItems(filterByCat);
    });
}) 
listOfCat[3].addEventListener('click', function filterCatCSS(){
    courses.forEach(item => {
            const filterByCat=courses.filter(item=>item.category===listOfCat[3].innerHTML);
            console.log(filterByCat)
            diplayMenuItems(filterByCat);
    });
}) 
listOfCat[4].addEventListener('click', function filterCatPHP(){
    courses.forEach(item => {
            const filterByCat=courses.filter(item=>item.category===listOfCat[4].innerHTML);
            console.log(filterByCat)
            diplayMenuItems(filterByCat);
    });
}) 

function filterprice(newVal){
    courses.forEach(item => {
        const filterbyprice=courses.filter(item=>item.price<=price_range.value);
        diplayMenuItems(filterbyprice);
    });
}


const searchInput = document.getElementById("Search");
const itemsList = document.getElementById("courses-ul");

searchInput.addEventListener("keyup", filterItems);
var test=document.querySelectorAll(".menu1-item");
function filterItems() {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredItems = courses.filter(item => item.title.toLowerCase().includes(searchTerm));
    var countShownItemsViaSearchBar=0
    const unfilteredItems = courses.filter(item => !item.title.toLowerCase().includes(searchTerm));
            //itemsList.innerHTML = "";
            var affi=document.getElementById('affichage');
            const nofoundCourses=document.querySelector(".container-courses")
            filteredItems.forEach(item => {
                console.log(item.title)
                
                console.log(countShownItemsViaSearchBar)
                countShownItemsViaSearchBar+=1

                nofoundCourses.classList.remove('no-found-courses')
            });
            if (countShownItemsViaSearchBar!=0) {
            }
            diplayMenuItems(filteredItems);
            console.log(countShownItemsViaSearchBar)
            //affi.style.display="block"
            // unfilteredItems.forEach(item => {
            //     affi.style.display="none"
                
            // });
            if (countShownItemsViaSearchBar===0) {
                // document.getElementById('container-courses').innerHTML="No Item found"
                
                nofoundCourses.classList.add('no-found-courses')
                // nofoundCourses.style.backgroundImage=url("./assets/images_courses/cssColors.png")

            }

            
}