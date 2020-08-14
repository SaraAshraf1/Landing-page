	/**
	 * 
	 * Manipulating the DOM exercise.
	 * Exercise programmatically builds navigation,
	 * scrolls to anchors from navigation,
	 * and highlights section in viewport upon scrolling.
	 * 
	 * Dependencies: None
	 * 
	 * JS Version: ES2015/ES6
	 * 
	 * JS Standard: ESlint
	 * 
	 */

	/**
	 * Define Global Variables
	 * 
	 */
	 const sections = document.querySelectorAll('section')
	 const navList= document.getElementById("navbar__list")
	/**
	 * End Global Variables
	 * Start Helper Functions
	 * 
	 */



	/**
	 * End Helper Functions
	 * Begin Main Functions
	 * 
	 */

	// build the nav
	function addSections(){
		var li;
		for(let item of sections){

			li+=`<li data-nav="${item.id}" class="menu__link ">${item.dataset.nav}</li>`
		};
		navList.innerHTML=li
	};

	// Add class 'active' to section when near top of viewport
	function setActive(section){
		//get the active nav button
		var active =document.querySelector(`[data-nav="${section.id}"]`)
	   //set the active nav button as active
	   active.classList.add('your-active-class');
	   active.style.color='#fff'

	   const headers =document.querySelectorAll('.menu__link')
	 // set other nav buttons as inactive
	 for(let item of headers)
	 {
	 	if (item.dataset.nav!=active.dataset.nav&item.classList.contains('your-active-class')){
	 		item.classList.remove('your-active-class')
	 		item.style.color='#000'
	 	}
	 }

	        //set the active section as active
	        section.classList.add('your-active-class');
	           // set other sections as inactive
	           for(let item of sections)
	           {
	           	if(item.id!=section.id & item .classList.contains('your-active-class')){
	           		item.classList.remove('your-active-class')
	           	}

	           }


	       }

	// Scroll to anchor ID using scrollTO event
	function scrollToClick(){
		navList.addEventListener('click',function (event){
			const clicked=document.querySelector('#'+event.target.dataset.nav)
			clicked.scrollIntoView();
			setActive(clicked);
		});
	}

	/**
	 * End Main Functions
	 * Begin Events
	 * 
	 */

	// Build menu 
	addSections();

	// Scroll to section on link click
	scrollToClick();

	// Set sections as active
	//its in scrollToClick()

