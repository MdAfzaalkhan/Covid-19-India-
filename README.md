# Project Title
Covid 19 | India Tracker 
Created By : Md Afzaal Khan;

# API's Used 
Api's which are provided in documentation was deprecated.
API's Used in this project to collect data are:
For State Wise Data :- https://data.covid19india.org/data.json
For District Wise Data :- https://data.covid19india.org/v4/min/data.min.json

These API's are used from official site of apicovid19inida :https://data.covid19india.org/

# Third Party Modules Used
Material UI -- Please install all modules from here "mui.com/material-ui/getting-started/installation/"
Axios -- "npm i axios"
React Scroll -- "npm i react-scroll"
For Maps -- "npm i react-datamaps-india"
CountUp -- "npm i countup"
Email js -- "npm i emailjs-com"

After installing all these modules we can run our project.

# Tasks Completed

As a User you can view Stats of States inside Table with number of patients confirmed,active,recovered,deaths till date.
As a User you can view Stats of Districts inside subtable of states (Inside Districts Citizens who have taken First and Second Dose of Vaccine is Shown because not enough data was there to show about patients)
As a User you can Search data with state name in search field
As a User you can Share State Data with anyone via Email
As a User you can view number of patients confirmed with respect to state name in Map
As a User you can sort state data in table with respect to Ascending or Descending Order

# Project Overview

Left side there is vertical Navbar which consists of two MUI icons i.e Home and search icon as you click on searchicon it will automatically scroll page to search bar and when you click home tab or icon it will scroll you back to the top.
Right Side of the page starts with a simple header with image and project title below title there are four cards which shows us the data of total number of patients confirmed,active,recovered,deaths in India till date viz 13-Aug-2021. Count up effect is given to numbers which are displayed in cards by using third party module named as count-up you can install it as mentioned in above section.
Below Cards there is a map of our country India which is used with help of third party module named as react data maps india you can install as mentioned in above section. Different colours shows the number of patients where there is light colour there are less number of patients and where there is darkest colour, that region have highest number of patients. Hover over any state to see number of confirmed patients in that region.
After Map there is a search bar where you can search states with respect to their names.
Below search bar, data of states is shown in form of table which consists of number of COVID cases confirmed,recovered,active,deaths at extreme left of table in every row there is a drop down icon which will show sub table which consists of district names of that state and number of citizens which have taken dose-1 and dose-2 of vaccination in last 7 days.
In Head Row of state table every head column consists of two arrows facing up and down respectively by clicking up arrow data will be shown in ascending order means from lowest to highest and by clicking down arrow data will be sorted in descending order means it willbe displayed from maximum to minimum.
At extreme right of every row there is a share icon by clicking it, user can share data of that particular row to other via Gmail app, it is done by using third party module named as Emailjs.

