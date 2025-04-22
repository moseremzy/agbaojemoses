$(document).ready(function(){
   
   //PUT COPYRIGHT

   let date = new Date()
   
   $("#copyright").text(`Copyright © ${date.getFullYear()} Moses Agbaoje`)



   //WRITER 

   let displayer = document.getElementById("span_writer")
    
   let text =  "FULL-STACK DEVELOPER"

   let counter = 0;
   
   let milliseconds = 100; //during rewrite or clearing, it will take each letter 200 milliseconds
   
   let seconds_for_rewrite_completion = 200 * (text.length + 10)//findout total seconds all the letters will take to rewrite

   let type = ""

   
  
   function rewrite() {
     
      if (counter < text.length && type === "write") { //rewrite
           
         displayer.textContent += text[counter]

         counter++;
           
         setTimeout(rewrite, milliseconds);

      } else if (counter >= 0 && type === "clear") { //clear

         displayer.textContent = displayer.textContent.slice(0, counter);

         counter--;

         setTimeout(rewrite, milliseconds);

      } else { //reset

        counter = 0

        type = ""

      }
     
    }
    
    
    
    function rewrite_clear () {
    
      counter = 0

      type = "write"

      displayer.textContent = ""

      rewrite()
      
      setTimeout(() => { //ensuring rewrite runs completely before clear() starts

      counter = text.length - 1

      type = "clear"

      rewrite()
      
      }, seconds_for_rewrite_completion)
      
    }
    
    
    
   (function () {
    
       rewrite_clear()
    
       setInterval(() => {
    
       rewrite_clear()
       
    }, seconds_for_rewrite_completion * 2) 
    
    })()


    document.addEventListener("visibilitychange", function () {
      
      if (document.visibilityState === "visible") {
         
          rewrite_clear()
         
      }

     })


   });   


   



   //SCROLL TO SECTIONS   

   function scroll_to (section) {

   let tab_clicked = $(`#${section}`);

   let all_tabs = $('.tab')

   let counter = 0;


   while (counter < all_tabs.length) {

      if (all_tabs[counter].id !== section) {
         
         all_tabs[counter].style = "color: white"

      } else {

         all_tabs[counter].style = "color: gray"

      }

      counter++;

   }

   let about_section = $(".second_section");

   let projects_section = $(".third_section");

   let skills_section = $(".fifth_section");

   let services_section = $(".sixth_section");

   let contact_section = $(".seventh_section");

   tab_clicked.css("color", "gray");

   
   

      switch (section) {

         case "About":

            about_section[0].scrollIntoView({

               behavior: "smooth", // or "auto" or "instant"
           
               block: "start" // or "end"
             
            });
            
         break;

         case "projects":

            projects_section[0].scrollIntoView({

               behavior: "smooth", // or "auto" or "instant"
           
               block: "start" // or "end"
             
            });
            
         break;

         case "skills":

            skills_section[0].scrollIntoView({

               behavior: "smooth", // or "auto" or "instant"
           
               block: "start" // or "end"
             
            });
            
         break;

         case "services":

            services_section[0].scrollIntoView({

               behavior: "smooth", // or "auto" or "instant"
           
               block: "start" // or "end"
             
            });
            
         break;

         case "contact":

            contact_section[0].scrollIntoView({

               behavior: "smooth", // or "auto" or "instant"
           
               block: "start" // or "end"
             
            });
            
         break;
      
      }
     
   }
   

