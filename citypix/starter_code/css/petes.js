/*
Project Name: Blank Template
Client: Your Client
Author: Your Name
Developer @GA in NYC
*/


/******************************************
/* SETUP
/*******************************************/

/* Box Model Hack */
* {
     -moz-box-sizing: border-box; /* Firexfox */
     -webkit-box-sizing: border-box; /* Safari/Chrome/iOS/Android */
     box-sizing: border-box; /* IE */
}

/* Clear fix hack */
.clearfix:after {
     content: ".";
     display: block;
     clear: both;
     visibility: hidden;
     line-height: 0;
     height: 0;
}

.clear {
  clear: both;
}

.alignright {
  float: right;
  padding: 0 0 10px 10px; /* note the padding around a right floated image */
}

.alignleft {
  float: left;
  padding: 0 10px 10px 0; /* note the padding around a left floated image */
}

/******************************************
/* BASE STYLES
/*******************************************/

body {
  color: #000;
  font-size: 12px;
  line-height: 1.4;
  font-family: Helvetica, Arial, sans-serif;
  background: url(../images/citipix_skyline.jpg) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}


/******************************************
/* LAYOUT
/*******************************************/

/* Center the container */
.container {
  width: 960px;
  margin: auto;
  padding-top: 5em;
}

header {
  background: rgba(0,0,0, .5);
  padding: 20px 0;
}

.title {
  text-align: center;
  color: #fff;
  font-size: 38px;
  font-weight: bold;
  font-family: helvetica, arial, sans-serif;
}

.title p {
  font-size: 22px;
  font-weight: normal
}

#city-type {
  color: #6b6b6c;
  font-size: 38px;
  background: #fff;
  border: 1px solid #111;
  padding: 0px 30px;
  display: inline-block;
  width: 680px;
  margin-right: 24px;
  font-family: helvetica, arial, sans-serif;
  height: 72px;
  line-height: 74px;
  vertical-align: middle;
  box-shadow: #111 0 0 20px;
}
#submit-btn {
  background: #ffe500;
  color: #000;
  font-size: 38px;
  font-weight: bold;
  text-transform: uppercase;
  border: 1px solid #111;
  text-align: center;
  display: inline-block;
  width: 250px;
  height: 72px;
  line-height: 74px;
  vertical-align: middle;
  box-shadow: #111 0 0 50px;
  font-family: helvetica, arial, sans-serif;
  cursor: pointer;
}
#submit-btn:hover {
  background: #fff600;
}

.nyc {
  background-image: url(../images/nyc.jpg)
}
.sf {
  background-image: url(../images/sf.jpg)
}
.la {
  background-image: url(../images/la.jpg)
}
.atx {
  background-image: url(../images/austin.jpg)
}
.syd {
  background-image: url(../images/sydney.jpg)
}

/******************************************
/* ADDITIONAL STYLES
/*******************************************/




