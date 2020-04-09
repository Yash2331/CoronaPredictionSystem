var questions = [
    'What is your name ?',
    'What\'s your age?',
    'Please select your gender: <br> Male <br> Female <br> Others',
    'What is your body temperature? <br>Normal(96-98.6 F)<br>High(98.6-102 F)<br>Very High(>102 F)',
    'Do you have dry cough?(yes/no)',
    'Are you experiencing diminished or loss of smell & taste?(yes/no)',
    'Do you have a sore throat?(yes/no)',
    'Are you feeling weakness or feel any change in your appetite?(yes/no)',
    'Having any difficulty in breathing?(yes/no)',
    'Select from below (only option number) <br>1.No travel history and no contact with covid-19 exposed person <br>2.Close contact with the confirmed case of covid-19<br>3.History of travel or meeting in covid-19 affected areas in last 14 days',
    'Have been admitted in hospital recently due to medical conditions?(yes/no)',
    'How have your symptoms progressed over last 48 hours? <br>(only option number)<br>1.Improved <br>2.No change <br>3.Worsened'    
];
var num = 0;
var age = 0;
var gender = "";
var temp ="";
var cough ="";
var anosmia= "";
var throat = "";
var weak="";
var breath="";
var travel=""; //1 2 3
var med = "";
var cond ="";
var corona ="";
var message ="";

var inputBox = document.querySelector("#ans");
var output = document.querySelector("#result");
output.innerHTML = questions[num];

function showResponse() {
  var input = inputBox.value;

  if(input == "") {
   
    
  }else {
  if(num == 0) {
    output.innerHTML = `Hello ${input}`;
    inputBox.value = "";
    inputBox.setAttribute("placeholder", "");
    num++;
    setTimeout(changeQuestion, 1500);
  }
   else if(num == 1)
    {
    if( isNaN(input) )
    {
      inputBox.value = "";
      alert('Please enter valid age!');
    }
    else
    {
    output.innerHTML = ` `;
    age = inputBox.value ;
    inputBox.value = "";
    inputBox.setAttribute("placeholder", "");
    num++;
    setTimeout(changeQuestion, 200);
    }
    
  } 
  else if(num == 2) {
    arr=["female","FEMALE", "Female", "male","MALE","Male","OTHERS","Others", "others"];
    if(!arr.includes(input))
    {
      inputBox.value = "";
      alert('Please use camel case, all capital or small letters!');  
    }
    else
    {
    output.innerHTML = ` `;
    gender = inputBox.value;
    inputBox.value = "";
    inputBox.setAttribute("placeholder", "");
    num++;
    setTimeout(changeQuestion, 200);
  
    }
    } else if(num == 3) {
      arr=["normal", "NORMAL", "Normal", "High", "high", "HIGH", "Very High", "VERY HIGH", "very high"];
      if(! arr.includes(input) )
    {
      inputBox.value = "";
      alert('Please use camel case, all capital or small letters!');  
      
    }
      
    else
    {
      output.innerHTML = ``;
      temp = inputBox.value;
      inputBox.value = "";
      inputBox.setAttribute("placeholder", "");
      num++;
      setTimeout(changeQuestion, 200);
  
    } 
   }
  else if(num == 4){
    arr=["yes", "Yes", "YES","NO","no","No"];
    if(!arr.includes(input))
    {
      inputBox.value = "";
      alert('Please use camel case, all capital or small letters!');  
      
    }
    else
    {
    output.innerHTML = ``;
    cough = inputBox.value;
    inputBox.value = "";
    inputBox.setAttribute("placeholder", "");
    num++;
    setTimeout(changeQuestion, 200);
    }
    
  }
  else if(num == 5){
    
    if(!arr.includes(input))
    {
      inputBox.value = "";
      alert('Please use camel case, all capital or small letters!');  
      
    }
    else
    {
     output.innerHTML = ``;
    anosmia = inputBox.value;
    inputBox.value = "";
    inputBox.setAttribute("placeholder", "");
    num++;
    setTimeout(changeQuestion, 200);

    }
    
  }
  else if(num == 6){
    if(!arr.includes(input))
    {
      inputBox.value = "";
      alert('Please use camel case, all capital or small letters!');  
      
    }
    else
    {
    output.innerHTML = ``;
    throat = inputBox.value;
    inputBox.value = "";
    inputBox.setAttribute("placeholder", "");
    num++;
    setTimeout(changeQuestion, 200);
    }    
    
  }

  else if(num == 7){
    
    if(!arr.includes(input))
    {
      inputBox.value = "";
      alert('Please use camel case, all capital or small letters!');  
      
    }
    else
    {
    output.innerHTML = ``;
    weak = inputBox.value;
    inputBox.value = "";
    inputBox.setAttribute("placeholder", "");
    num++;
    setTimeout(changeQuestion, 200);
    } 
  }

  else if(num == 8){
    
    if(!arr.includes(input))
    {
      inputBox.value = "";
      alert('Please use camel case, all capital or small letters!');  
      
    }
    else
    {
    output.innerHTML = ``;
    breath = inputBox.value;
    inputBox.value = "";
    inputBox.setAttribute("placeholder", "");
    num++;
    setTimeout(changeQuestion, 200);
    } 
    }
  
    else if(num == 9){
    
      if(isNaN(input)&&input<4&&input>0)
      {
        inputBox.value = "";
        alert('Please enter correct option!');  
        
      }
      else
      {
      output.innerHTML = ``;
      travel = inputBox.value;
      inputBox.value = "";
      inputBox.setAttribute("placeholder", "");
      num++;
      setTimeout(changeQuestion, 200);
      } 
    }
   
    else if(num == 10){
      if(!arr.includes(input))
      {
        inputBox.value = "";
        alert('Please use camel case, all capital or small letters!');  
        
      }
      else
      {
      output.innerHTML = ``;
      med = inputBox.value;
      inputBox.value = "";
      inputBox.setAttribute("placeholder", "");
      num++;
      setTimeout(changeQuestion, 200);
      } 
    }
     
    else if(num == 11){
    
      if(isNaN(input)&&input<4&&input>0)
      {
        inputBox.value = "";
        alert('Please enter correct option!');  
        
      }
      else
      {
      output.innerHTML = ``;
      cond = inputBox.value;
      inputBox.value = "";
      inputBox.setAttribute("placeholder", "");
      num=12;
      setTimeout(changeQuestion, 200);
      } 
    }

  }
}





function rreport()
{
  
  if(travel == 2 || travel == 3)
  {
    if(temp=="High" || temp !="HIGH" ||temp!="high")
    {
      if(weak=="YES"||weak=="yes"||weak=="Yes")
      {
        if(anosmia=="Yes"||anosmia=="YES"||anosmia=="yes")
        {
          if(breath=="Yes"||breath=="YES"||breath=="yes")
          {
            corona = "Very High";
          }
          else if(breath=="NO"||breath=="No"||breath=="no")
          {
            corona= "Very High";
          }
        }
        else if(anosmia=="NO"||anosmia=="No"||anosmia=="no")
        {
          if(breath=="Yes"||breath=="YES"||breath=="yes")
          {
            corona = "Very High";
          }
          else if(breath=="NO"||breath=="No"||breath=="no")
          {
            corona= "high";
          }
        }
      }
      else if(weak=="NO"||weak=="No"||weak=="no")
      {
        if(anosmia=="Yes"||anosmia=="YES"||anosmia=="yes")
        {
          if(breath=="Yes"||breath=="YES"||breath=="yes")
          {
            corona = "Very High";
          }
          else if(breath=="NO"||breath=="No"||breath=="no")
          {
            corona= "Very High";
          }
        }
        else if(anosmia=="NO"||anosmia=="No"||anosmia=="no")
        {
          if(breath=="Yes"||breath=="YES"||breath=="yes")
          {
            corona = "Very High";
          }
          else if(breath=="NO"||breath=="No"||breath=="no")
          {
            corona= "high";
          }
        }
      }
    }
    else
    {
      if(weak=="YES"||weak=="yes"||weak=="Yes")
      {
        if(anosmia=="Yes"||anosmia=="YES"||anosmia=="yes")
        {
          if(breath=="Yes"||breath=="YES"||breath=="yes")
          {
            corona = "Very High";
          }
          else if(breath=="NO"||breath=="No"||breath=="no")
          {
            corona= "Very High";
          }
        }
        else if(anosmia=="NO"||anosmia=="No"||anosmia=="no")
        {
          if(breath=="Yes"||breath=="YES"||breath=="yes")
          {
            corona = "Very High";
          }
          else if(breath=="NO"||breath=="No"||breath=="no")
          {
            corona= "Very High";
          }
        }
      }
      else if(weak=="NO"||weak=="No"||weak=="no")
      {
        if(anosmia=="Yes"||anosmia=="YES"||anosmia=="yes")
        {
          if(breath=="Yes"||breath=="YES"||breath=="yes")
          {
            corona = "Very High";
          }
          else if(breath=="NO"||breath=="No"||breath=="no")
          {
            corona= "Very High";
          }
        }
        else if(anosmia=="NO"||anosmia=="No"||anosmia=="no")
        {
          if(breath=="Yes"||breath=="YES"||breath=="yes")
          {
            corona = "Very High";
          }
          else if(breath=="NO"||breath=="No"||breath=="no")
          {
            corona= "Very High";
          }
        }
      }
    }
  
  
  }
  else if(travel==1)
  {
    if(temp=="High" || temp =="high" ||temp=="HIGH")
    {
      if(weak=="YES"||weak=="yes"||weak=="Yes")
      {
        if(anosmia=="Yes"||anosmia=="YES"||anosmia=="yes")
        {
          if(breath=="Yes"||breath=="YES"||breath=="yes")
          {
            corona = "Very High";
          }
          else if(breath=="NO"||breath=="No"||breath=="no")
          {
            corona= "Very High";
          }
        }
        else if(anosmia=="NO"||anosmia=="No"||anosmia=="no")
        {
          if(breath=="Yes"||breath=="YES"||breath=="yes")
          {
            corona = "high";
          }
          else if(breath=="NO"||breath=="No"||breath=="no")
          {
            corona= "medium";
          }
        }
      }
      else if(weak=="NO"||weak=="No"||weak=="no")
      {
        if(anosmia=="Yes"||anosmia=="YES"||anosmia=="yes")
        {
          if(breath=="Yes"||breath=="YES"||breath=="yes")
          {
            corona = "high";
          }
          else if(breath=="NO"||breath=="No"||breath=="no")
          {
            corona= "medium";
          }
        }
        else if(anosmia=="NO"||anosmia=="No"||anosmia=="no")
        {
          if(breath=="Yes"||breath=="YES"||breath=="yes")
          {
            corona = "low";
          }
          else if(breath=="NO"||breath=="No"||breath=="no")
          {
            corona= "low";
          }
        }
      }
    }
    else if(temp=="Normal" || temp =="NORMAL" ||temp=="normal")
    {
      if(weak=="YES"||weak=="yes"||weak=="Yes")
      {
        if(anosmia=="Yes"||anosmia=="YES"||anosmia=="yes")
        {
          if(breath=="Yes"||breath=="YES"||breath=="yes")
          {
            corona = "high";
          }
          else if(breath=="NO"||breath=="No"||breath=="no")
          {
            corona= "medium";
          }
        }
        else if(anosmia=="NO"||anosmia=="No"||anosmia=="no")
        {
          if(breath=="Yes"||breath=="YES"||breath=="yes")
          {
            corona = "low";
          }
          else if(breath=="NO"||breath=="No"||breath=="no")
          {
            corona= " Very low";
          }
        }
      }
      else if(weak=="NO"||weak=="No"||weak=="no")
      {
        if(anosmia=="Yes"||anosmia=="YES"||anosmia=="yes")
        {
          if(breath=="Yes"||breath=="YES"||breath=="yes")
          {
            corona = "medium";
          }
          else if(breath=="NO"||breath=="No"||breath=="no")
          {
            corona= "low";
          }
        }
        else if(anosmia=="NO"||anosmia=="No"||anosmia=="no")
        {
          if(breath=="Yes"||breath=="YES"||breath=="yes")
          {
            corona = "low";
          }
          else if(breath=="NO"||breath=="No"||breath=="no")
          {
            corona= "Very Low";
          }
        }
      }
    }
    
    
  }

}
   
function messag()
{
  if(corona == "Very High"|| corona=="high")
  {
    if(cough=="Yes"||cough=="YES"||cough=="yes")
    {
      if(throat=="Yes"||throat=="YES"||throat=="yes")
      {
        if(med=="Yes"||med=="YES"||med=="yes")
        {
          message ="You have been exposed to Novel Covid-19. <br> We strictly advise you to isolate yourself and seek medical help immediately!";
        }
        else if(med=="No"||med=="no"||med=="NO")
        {
          message ="You have been exposed to Novel Covid-19. <br> We strictly advise you to isolate yourself and seek medical help immediately!";
        }
      }
      else if(throat=="No"||med=="no"||med=="NO")
      {
        if(med=="Yes"||med=="YES"||med=="yes")
        {
          message ="You have been exposed to Novel Covid-19. <br> We strictly advise you to isolate yourself and seek medical help immediately!";
        }
        else if(med=="No"||med=="no"||med=="NO")
        {
          message ="You have been exposed to Novel Covid-19. <br> We strictly advise you to isolate yourself and seek medical help immediately!";
        }
      }
    }
    else if(cough =="No"||cough=="no"||cough=="NO")
    {
      if(throat=="Yes"||throat=="YES"||throat=="yes")
      {
        if(med=="Yes"||med=="YES"||med=="yes")
        {
          message ="You have been exposed to Novel Covid-19. <br> We strictly advise you to isolate yourself and seek medical help immediately!";
        }
        else if(med=="No"||med=="no"||med=="NO")
        {
          message ="You have been exposed to Novel Covid-19. <br> We strictly advise you to isolate yourself and seek medical help immediately!";
        }
      }
      else if(throat=="No"||med=="no"||med=="NO")
      {
        if(med=="Yes"||med=="YES"||med=="yes")
        {
          message ="You have been exposed to Novel Covid-19. <br> We strictly advise you to isolate yourself and seek medical help immediately!";
        }
        else if(med=="No"||med=="no"||med=="NO")
        {
          message ="You have been exposed to Novel Covid-19. <br> We strictly advise you to isolate yourself and seek medical help immediately!";
        }
      }
    }
  }

  
  if(corona == "high")
  {
    if(cough=="Yes"||cough=="YES"||cough=="yes")
    {
      if(throat=="Yes"||throat=="YES"||throat=="yes")
      {
        if(med=="Yes"||med=="YES"||med=="yes")
        {
          message ="You might have been exposed to Novel Covid-19. <br> We strictly advise you to isolate yourself and seek medical help immediately!";
        }
        else if(med=="No"||med=="no"||med=="NO")
        {
          message ="You might have been exposed to Novel Covid-19. <br> We strictly advise you to isolate yourself and seek medical help immediately!";
        }
      }
      else if(throat=="No"||med=="no"||med=="NO")
      {
        if(med=="Yes"||med=="YES"||med=="yes")
        {
          message ="You might have been exposed to Novel Covid-19. <br> We strictly advise you to isolate yourself and seek medical help immediately!";
        }
        else if(med=="No"||med=="no"||med=="NO")
        {
          message ="You might have been exposed to Novel Covid-19. <br> We strictly advise you to isolate yourself and seek medical help immediately!";
        }
      }
    }
    else if(cough =="No"||cough=="no"||cough=="NO")
    {
      if(throat=="Yes"||throat=="YES"||throat=="yes")
      {
        if(med=="Yes"||med=="YES"||med=="yes")
        {
          message ="You might have been exposed to Novel Covid-19. <br> We strictly advise you to isolate yourself and seek medical help immediately!";
        }
        else if(med=="No"||med=="no"||med=="NO")
        {
          message ="You might have been exposed to Novel Covid-19. <br> We strictly advise you to isolate yourself and seek medical help immediately!";
        }
      }
      else if(throat=="No"||med=="no"||med=="NO")
      {
        if(med=="Yes"||med=="YES"||med=="yes")
        {
          message ="You might have been exposed to Novel Covid-19. <br> We strictly advise you to isolate yourself and seek medical help immediately!";
        }
        else if(med=="No"||med=="no"||med=="NO")
        {
          message ="You might have been exposed to Novel Covid-19. <br> We strictly advise you to isolate yourself and seek medical help immediately!";
        }
      }
    }
  }
  else if(corona=="low" || corona=="Very low")
  {
    if(cough=="Yes"||cough=="YES"||cough=="yes")
    {
      if(throat=="Yes"||throat=="YES"||throat=="yes")
      {
        if(med=="Yes"||med=="YES"||med=="yes")
        {
          message ="Take rest and be calm, you just have a common flu/infection! Avoid taking cold beverages.<br> Seek medical help if you are feeling very sick.";
        }
        else if(med=="No"||med=="no"||med=="NO")
        {
          message ="Take rest and be calm, you just have a common flu/infection! Avoid taking cold beverages.<br> Seek medical help if you are feeling very sick.";
        }
      }
      else if(throat=="No"||med=="no"||med=="NO")
      {
        if(med=="Yes"||med=="YES"||med=="yes")
        {
          message ="Take rest and be calm, you just have a common flu/infection! Drink warm water for your sore throat and avoid taking cold beverages for some time. Seek medical help if you are feeling very sick.";
        }
        else if(med=="No"||med=="no"||med=="NO")
        {
          message ="Take rest and be calm, you just have a common flu/infection! Avoid taking cold beverages.<br> Seek medical help if you are feeling very sick.";
        }
      }
    }
    else if(cough =="No"||cough=="no"||cough=="NO")
    {
      if(throat=="Yes"||throat=="YES"||throat=="yes")
      {
        if(med=="Yes"||med=="YES"||med=="yes")
        {
          message ="Take rest and be calm, you just have a common flu/infection! Avoid taking cold beverages and drink warm water for your sore throat.<br> Seek medical help if you are feeling very sick.";
        }
        else if(med=="No"||med=="no"||med=="NO")
        {
          message ="Take rest and be calm, you just have a common flu/infection! Avoid taking cold beverages and drink warm water for your sore throat.<br> Seek medical help if you are feeling very sick.";
        }
      }
      else if(throat=="No"||med=="no"||med=="NO")
      {
        if(med=="Yes"||med=="YES"||med=="yes")
        {
          message ="Take rest and be calm, you just have a common flu/infection! Avoid taking cold beverages.<br> Seek medical help if you are feeling very sick.";
        }
        else if(med=="No"||med=="no"||med=="NO")
        {
          message ="Take rest and be calm, you just have a common flu/infection! Avoid taking cold beverages.<br> Seek medical help if you are feeling very sick.";
        }
      }
    }
  }


}


function changeQuestion() {
 
  
  if(num == 12) {
    if(temp=="VERY HIGH" || temp=="very high"||temp=="Very High"){
      temp="high";
    }
    rreport();
    messag();
    document.getElementById("mes").innerHTML = message + "<br>";
    output.innerHTML = "<center>Covid19 Possibility<br><font color='red'>"+corona;
    document.getElementById('ans').style.display = 'none';
  }
  else{
    inputBox.setAttribute("placeholder", "Enter your response");
    output.innerHTML = questions[num];
  }
 
} 


$(document).on('keypress', function(e) {
  if(e.which == 13) {
   
    showResponse();
    
  }
})


$( "#ans" ).focus();
