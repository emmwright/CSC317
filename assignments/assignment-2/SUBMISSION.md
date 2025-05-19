
##PROJECT SUBMISSION##

EMMA WRIGHT, ID: 924406493
Github username: emmwright
Assignment 2

Description: This project was to create a website in HTML of your portfolio including your name, contact, education, experience, about me, projects and contact info. The objectives were to show an understanding of HTML, show correct structure, syntax, semantics and more. 
Key asks were completing all 4 parts which were code quality and structure, content completeness, functionality and usability and submission and technical requirements. 

Approach: I started from top to bottom to begin with and followed each part of the instructions. After I completed parts 1 and 2, I did mess around with the structure, colours, background colour, and centering the page but then removed this as I wasn't sure I was supposed to do that, but either way, it helped my knowledge with HTML.
For my final page, I tried to stick to exact instructions and added the contact me box, which was optional; I also followed the professor's page layout in some places. 

Code explanation: 

(1)
I would describe this block as a setup/head section that ensures the webpage is structured correctly. It is used for search engines to find you, titles your page, and sets the icon at the top of the webpage to what you would like. 

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Emma Wright - Portfolio </title>

             <!-- for search engines -->
             <meta name="description" content="Emma Wright's Portfolio">
             <meta name="keywords" content="Emma Wright, Student, Portfolio, Computer Science, Web Development, HTML">
        <!-- for icon at the top of the browser -->
        <link rel="icon" type="Image-icon" href="favicon.ico">
    </head>




(2)
This is everything (not incl above) that is before the main, it contains navigation links which would always go high up to prevent people from having to scroll through your page to look for something in particular. It also contains an introduction.

              <nav>
                <ul>
                    <!-- links to other sections in the page -->
                    <li><a href="#aboutme">Link to about me</a></li>
                    <li><a href="#education">Link to education</a></li>
                    <li><a href="#experience">Link to experience</a></li>
                    <li><a href="#projects">Link to projects</a></li>
                    <li><a href="#contactmeform">Link to contact me</a></li>
                    <li><a href="#contacts"> Link to contact info</a></li>
                </ul>
            </nav>
            <br>
            <br>
            <br>
               <img src="birmingham-england-10.jpg" alt="Birmingham, England" style="width: 300px; height: 200px;">
               <img src="Untitled.jpg" alt="Birmingham, Bull" style="width: 300px; height: 200px;">           
            <img src="SFState_H_rgb-1024x268.jpg" alt="SF State Logo" style="width: 605px; height: 180px;">
            <br>
            <div style="display: flex; margin-left: 200px;">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12623.235176282926!2d-122.49024022917285!3d37.7241657243239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7db005c0e281%3A0xa57a7c9f946a45d3!2sSan%20Francisco%20State%20University!5e0!3m2!1sen!2sus!4v1739905060012!5m2!1sen!2sus" width="220" height="140" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        <br>




(3)
The code after that is everything in main which are the sections that the navigation links go to, which contain information stated in the nav links. 
(I don't think you would want me to paste my whole main in here so here is just one of those) 

<main>
                <section id="aboutme">
                   <h2>About Me</h2>
                       <p>My name is Emma Wright, I am currently pursuing a Batchelor's degree in Computer Science at San Francisco State University.  <br> I am from Birmingham, England.</p>
                       <p>I moved to the United States 7 years ago as an Au Pair and then decided to further my education and opportunities. <br> I have an associates degree in computer science and another in liberal arts in science and math.</p>
                </section>
               <br>

(4)
The remainder of the code of contact info with links that can be clicked on (Linkedin, phone).
Then at the end there is a copyright notice. 


