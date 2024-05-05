
runClock();/*Create and call a JavaScript function that keeps track of the current day and time */
setInterval("runClock()", 1000);/*Delay one command or run a command at a specified interval*/

/*Include a countdown function*/
function runClock() {
      /* Store the current date and time */
   var currentDay = new Date();
   var dateStr = currentDay.toLocaleDateString();/*Convert between a number and a text*/
   var timeStr = currentDay.toLocaleTimeString();

   /*Display the current date and time*/
   document.getElementById("dateNow").innerHTML = dateStr + "<br />" + timeStr;

   /* Calculate the days until October 1st */
   var newEvent = new Date("October 1, 2024");
   var daysLeft = (newEvent - currentDay)/(1000*60*60*24);

   /* Calculate the hours left in the current day */
   var hrsLeft = (daysLeft - Math.floor(daysLeft))*24;

   /* Calculate the minutes and seconds left in the current hour */
   var minsLeft = (hrsLeft - Math.floor(hrsLeft))*60;
   var secsLeft = (minsLeft - Math.floor(minsLeft))*60;

   /* Display the time left until New Year's Eve */
   document.getElementById("days").textContent = Math.floor(daysLeft);/*Use a Math method*/
   document.getElementById("hrs").textContent = Math.floor(hrsLeft);
   document.getElementById("mins").textContent = Math.floor(minsLeft);
   document.getElementById("secs").textContent = Math.ceil(secsLeft);

}
alert("Hello, welcome to my page!");/*Send an alert using JavaScript*/