<!DOCTYPE html>
<html lang="en" >
<head>
  <meta charset="UTF-8">
  <title>Calculation</title>
  <link rel="stylesheet" href="ps.css">
<style>
  @import url(https://fonts.googleapis.com/css?family=Lato);
html, body {
  padding: 0;
  margin: 0;
  height: 100%;
}

html {
  font: 1em/1.5 "Lato", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizelegibility;
}

body {
  font-size: 1.3em;
  
}

header {
  height: 100%;
  position: relative;
  overflow: hidden;
  background: url("ps.jpg") center no-repeat;
  background-size: cover;
}
header .content {
  position: absolute;
  background: none;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
}

header hgroup {
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  display: inline-block;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  color: #fff;
  border: 5px solid #fff;
  padding: .5em 3em;
  background-color: rgba(0, 0, 0,0.5);
  z-index: 2;
}
header .overlay {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: url("ps.jpg") center no-repeat;
  background-size: cover;
  z-index: 0;
  opacity: 0;
}
p{
  text-shadow: 2px 2px grey;
  
}
input {
  background: none;
	outline: none;
  border: none;
  color: white;
  font: 15px;
}


.btn-group .button {
  background-color: white;
  border: 1px solid green;
  color: black;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  border-radius: 15px;
  margin-left: 5px;
  font-size: 16px;
  cursor: pointer;
 
}

.btn-group .button:not(:last-child) {
  border-right: none; 
}

.btn-group .button:hover {
  background-color: grey;
}

body::-webkit-scrollbar {
  width: 10px;
  background-color: rgb(255, 255, 255);
  
}
 
body::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}
 
body::-webkit-scrollbar-thumb {
  background-color: rgb(0, 0, 0);
  outline: 1px solid slategrey;
  border-radius: 20px;
}
  </style>

</head>
<body>
  <?php 
      
  require_once "Classes/PHPExcel.php";

  $tmpfname = "data.xlsx";
  $excelReader = PHPExcel_IOFactory::createReaderForFile($tmpfname);
  $excelObj = $excelReader->load($tmpfname);
  $worksheet = $excelObj->getSheet(0);


    
  for($row = 250 ; $row <= 270; $row++) 
  {
      $st = $worksheet->getCell('B'.$row)->getValue();
      $c ='Total number of confirmed cases in India';
      if($st == $c )
      {
          $india = $worksheet->getCell('C'.$row)->getValue();         
          break;    
      }
  }
     
  
?>
  

<center><p>PREDICTION SYSTEM<br> Scroll down to know how the system works...!</p></center>
<header>
  <div class="content">
    <hgroup>
      <b>Enter the number of days for which you want to find the predicted number of cases!</b>
       
  
        <br>
  <input class="ans" id="X" placeholder="number of days"  required> <br><br>
  <script>
  var date1, date2;
           date1 = new Date();
         //  document.write(""+date1);
           date2 = new Date( "Jan 30, 2020 00:00:01" );
           //document.write("<br>"+date2);
           // get total seconds between two dates
           var res = Math.abs(date1 - date2) / 1000;
           var days = Math.floor(res / 86400);//no. of days of infection till now
           var totl = "<?php echo $india;?>";
          totl = totl.replace(/\D/g,'');
            //  t=64 , k=?, p(i)=1,P(t)=latest data
          //P(t) = P(i)*e^(kt)
          var k = Math.log(totl-1);
          k=k/days;
  
          var inf;
          var death;
          var avg = (0.4+1.3+3.6)/3;
          
          
  function day()
  {
    var ti = document.getElementById("X").value;
    
    if(!ti || isNaN(ti))
    {
    alert("Please enter valid number of days");
  
    }
    
    else
    {
    var ttl = totl*Math.exp(k*ti);
    var dd =  (ttl* avg)/100;
    document.getElementById("Ans").innerHTML += "<br>Total number of cases after "+ ti +" days::> " + Math.round(ttl);
    document.getElementById("Ans").innerHTML += "<br>Deaths::> " + Math.round(dd);
    
    }
    
 
  }
  </script>

<div class="btn-group">
  <button id="Submit" class="button" onclick="day()">Submit</button>
  <a href='finalMap.php' target="_blank"  class="button"> India Map</a>

</div>

 
  <p id="Ans"></p>


  
<script>

      
  for(var t=15;t<30;t+=5)
  {
      //using the formula again P(t) = P(i)*e^(kt) with value k for t =15 and so on..
      inf = totl*Math.exp(k*t);
      document.getElementById("Ans").innerHTML += "<br>Total number of cases after"+ t +" days::> " + Math.round(inf);
      death = (inf* avg)/100;
      document.getElementById("Ans").innerHTML += "<br>Death ::> " + Math.round(death);
      

  }      
  
</script>



    </hgroup>
  </div>
  <div class="overlay"></div>
</header>
<style>
  #mid{
    background: white;
    width: 100px;
    height: 100px;
  }

  </style>

<div id="mid">


</div>



<section class="site">

<p><font size="5"> The first case of corona was reported on 30 january and its about almost around 60 days and the number of cases has rose above 2500 therefore  
        by the exponential growth formula <strong> P(t) = P(i)*e^(kt) </strong>, <br>k is found to be <strong>0.05662166666 (~0.06) </strong>. <br>Now for the worst 
      case, lets say the virus continues for the next 20 days,then the infected people number will rise -to <strong>2500*e^(0.06*20) = 8300 </strong>.
      <br>The death percentage varies differently therefore we have tried to represent it by taking the average death percentage of 3 age groups i.e. 40-49 years,
      50-59 and 60-69 years. <br> The system here takes the latest number of corona cases to calculate the growth rate of covid cases. 
      <strong> Note: The risk increases with the increase in the age, therefore the senior citizens need proper care until and 
      unless a cure is found for this deadly disease. </strong></br>
  </font></p>
    
    

</section>
<!-- partial -->
  <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script><script  src="ps.js"></script>

</body>
</html>
