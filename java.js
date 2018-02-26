var alphabetArrayrot13 = 'abcdefghijklmnopqrstuvwxyzabcdefghijklm'.split('');
var alphabetArray = 'abcdefghijklmnopqrstuvwxyz'.split('');

function encode1()
{
    var inputTextMix = document.getElementById("message1").value;
    var inputText = inputTextMix.toLowerCase();
    var cipherText = [];
    var str = document.getElementById("outputtext1").innerHTML;
    var res = str.replace ("decoded", "encoded");
   
   //iterates through the input
    for(var i=0;i<inputText.length;i++){
     //if the input is not in the alphabetarray then
        if(alphabetArrayrot13.indexOf(inputText[i])===-1){
         //push inut into output
            cipherText.push(inputText[i]);   
        }
        //if not
        else{
         //itterate though the alphabet
            for(var j=0; j<alphabetArrayrot13.length;j++){
             //checks if the letter of iteration is in alpahbetarry
                if(inputText[i]===alphabetArrayrot13[j]){
                 //if so adds 13 to the index of the alphabet and pushes the character at that point to output
                    cipherText.push(alphabetArrayrot13[j+13]);
                }
            }
        }
    }
 //replace putputtext message between encoded and decoded
 document.getElementById("outputtext1").innerHTML = res;
	document.getElementById("output1").innerHTML = cipherText.join("");
}

function decode1()
{
    var inputTextMix = document.getElementById("message1").value;
    var inputText = inputTextMix.toLowerCase();
    var cipherText = [];
    var str = document.getElementById("outputtext1").innerHTML;
    var res = str.replace ("encoded", "decoded");
    
        for(var i=0;i<inputText.length;i++){
        if(alphabetArrayrot13.indexOf(inputText[i])===-1){
            cipherText.push(inputText[i]);   
        }
        else{
            for(var j=0; j<alphabetArrayrot13.length;j++){
                if(inputText[i]===alphabetArrayrot13[j]){
                    cipherText.push(alphabetArrayrot13[j-13]);
                }
            }
        }
    }
 //replace putputtext message between encoded and decoded
 document.getElementById("outputtext1").innerHTML = res;
	document.getElementById("output1").innerHTML = cipherText.join("");
}

function encode2()
{
    var inputTextMix = document.getElementById("message2").value;
    var inputText = inputTextMix.toLowerCase();
    var tempText = "";
    var str = document.getElementById("outputtext2").innerHTML;
    var res = str.replace ("decoded", "encoded");
    
    for(i = 0; i <inputText.length; i++){
                tempText += enc(inputText[i]);
    }
    //replace putputtext message between encoded and decoded
    document.getElementById("outputtext2").innerHTML = res;
    document.getElementById("output2").innerHTML = tempText;
    function enc(x){
        switch(x){
        case "a" :
            return "{";
            break;
        case "b" :
            return "0";
            break;
        case "c" :
            return "4";
            break;
        case "d" :
            return ">";
            break;
        case "e" :
            return "=";
            break;
        case "f" :
            return "(";
            break;
        case "g" :
            return "$";
            break;
        case "h" :
            return "!";
            break;
        case "i" :
            return ".";
            break;
        case "j" :
            return "|";
            break;
        case "k" :
            return "-";
            break;
        case "l" :
            return "@";
            break;
        case "m" :
            return "&";
            break;
        case "n" :
            return "*";
            break;
        case "o" :
            return ":";
            break;
        case "p" :
            return ";";
            break;
        case "q" :
            return "?";
            break;
        case "r" :
            return "'";
            break;
        case "s" :
            return "}";
            break;
        case "t" :
            return ")";
            break;
        case "u" :
            return "[";
            break;
        case "v" :
            return "^";
            break;
        case "w" :
            return "]";
            break;
        case "x" :
            return "`";
            break;
        case "y" :
            return "+";
            break;
        case "z" :
            return ",";
            break;
        case " " :
            return " ";
        break;
        default:
            return x;
        }
    }
}

function decode2()
{
 var inputTextMix = document.getElementById("message2").value;
    var inputText = inputTextMix.toLowerCase();
    var tempText = "";
    var str = document.getElementById("outputtext2").innerHTML;
    var res = str.replace ("encoded", "decoded");
    for(i = 0; i <inputText.length; i++){
                tempText += dec(inputText[i]);
    }
    //replace putputtext message between encoded and decoded
    document.getElementById("outputtext2").innerHTML = res;
    document.getElementById("output2").innerHTML = tempText;
    
    //very simple function that replaces each individual letter with a corrosponding letter
   function dec(x){
       switch(x){
        case "{" :
            return "a";
            break;
        case "0" :
            return "b";
            break;
        case "4" :
            return "c";
            break;
        case ">" :
            return "d";
            break;
        case "=" :
            return "e";
            break;
        case "(" :
            return "f";
            break;
        case "$" :
            return "g";
            break;
        case "!" :
            return "h";
            break;
        case "." :
            return "i";
            break;
        case "|" :
            return "j";
            break;
        case "-" :
            return "k";
            break;
        case "@" :
            return "l";
            break;
        case "&" :
            return "m";
            break;
        case "*" :
            return "n";
            break;
        case ":" :
            return "o";
            break;
        case ";" :
            return "p";
            break;
        case "?" :
            return "q";
            break;
        case "'" :
            return "r";
            break;
        case "}" :
            return "s";
            break;
        case ")" :
            return "t";
            break;
        case "[" :
            return "u";
            break;
        case "^" :
            return "v";
            break;
        case "]" :
            return "w";
            break;
        case "`" :
            return "x";
            break;
        case "+" :
            return "y";
            break;
        case "," :
            return "z";
            break;
        case " " :
            return " ";
        break;
        default:
            return x;  
    }
   
   }
}

function encode3()
{
 //is used for both encode and decode button
    var inputTextMix = document.getElementById("message3").value;
    var inputText = inputTextMix.toLowerCase();
    var cipherText = [];
    var letter;
    var letterAt;
    var newCharAt;
    var str = document.getElementById("outputtext3").innerHTML;
    var res = str.replace ("decoded", "encoded");
    
    //iterates through input
   for(var i=0;i<inputText.length;i++){
    //stores current letter of iteration in i
      letter = inputText[i];
    //finds [i]'s number(index) in alphabet array
      letterAt = alphabetArray.indexOf(letter);
    //if [i] is in alphabet array (array's start at 0) carry out if statement
      if(letterAt > -1){
    /*inverts A's to Z's by getting 25(length of alphabet inc 0) -1 - the index of the
      letter stored in [i] and saves it in variable newCharAt*/
       newCharAt = alphabetArray.length-1-letterAt;
    //adds new letter to cipher output
       cipherText +=alphabetArray[newCharAt];
      }
      else{
    //if the input is -1 (undefined) then add input into output accordingly
       cipherText += letter;
      }
    }
    //replace putputtext message between encoded and decoded
    document.getElementById("outputtext3").innerHTML = res;
    document.getElementById("output3").innerHTML = cipherText;

}

function encode4()
{
  var alphabetArray2 = "nopqrstuvwxyzabcdefghijklm".split('');
  var inputTextMix = document.getElementById("message4").value;
  var inputText = inputTextMix.toLowerCase();
  var cipherText = [];
  var letter;
  var letter2;
  var letterAt;
  var str = document.getElementById("outputtext4").innerHTML;
  var res = str.replace ("decoded","encoded");
  
  //iterates through input
  for(var i=0;i<inputText.length;i++){
   //stores current letter of interation from i
   letter = inputText[i]
   //stores the index of letter
   letterAt = alphabetArray.indexOf(letter);
   //if there is an index stored in letterat then
   if(letterAt > -1){
    //using index of first letter grabs the letter at same index of second alphabet array
    letter2 = alphabetArray2[letterAt];
    //pushes letter into the output
    cipherText += letter2;
   }
    else{
     //if character is not in alphabet then push to output anyway
     cipherText += letter;
    }
   }
   document.getElementById("outputtext4").innerHTML = res;
   document.getElementById("output4").innerHTML = cipherText;
  }
  
function decode4()
{
  var alphabetArray2 = "mopqrstuvwxyzabcdefghijklm".split('');
  var inputTextMix = document.getElementById("message4").value;
  var inputText = inputTextMix.toLowerCase();
  var cipherText = [];
  var letter;
  var letter2;
  var letterAt;
  var str = document.getElementById("outputtext4").innerHTML;
  var res = str.replace ("encoded","decoded");
  
  for(var i=0;i<inputText.length;i++){
   letter = inputText[i]
   letterAt = alphabetArray2.indexOf(letter);
   if(letterAt > -1){
    letter2 = alphabetArray[letterAt];
    cipherText += letter2;
   }
    else{
     cipherText += letter;
    }
   }
   document.getElementById("outputtext4").innerHTML = res;
   document.getElementById("output4").innerHTML = cipherText;
  }