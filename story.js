var storystring
document.body.style.background = "url(new.jpg) no-repeat ";
document.body.style.backgroundSize = "cover";
document.body.style.fontFamily = "police";


//function user(){
  var prenom = prompt("Entrez votre prénom").fontcolor("blue");
  var age = prompt("Entrez votre date de naissance").fontcolor("navy");
  var home = prompt("Entrez le lieu où vous habitez actuellement").fontcolor("green");
  var work = prompt("Indiquez en quoi consiste votre travail ou activité principale ").fontcolor("white");
  var passion = prompt("Entrez vos centres d'intérêts").fontcolor("orange");
  //var sprenom = prenom.split(" ");
  //var sage = age.split(" ");
  //var shome = prenom.split(" ");
  //var swork = work.split(" ");
  //var spassion = passion.split(" ");
  //prenom.style.color: "blue";
  //document.getElementsById("prenom").style.color="blue";
  storystring="L'action se déroula un " + age + " dans la ville de " + home + ". Une journée qui au premier abord semblait normal. Une personne du nom de " + prenom + " s'affairait à " + work + "comme à l'habitude dans le cadre de son travail. Cette personne reçut une invitation anonyme à un concert de son groupe préféré. En effet " + prenom + " adorait " + passion + " et souhaitait faire partie d'un groupe. La fin de sa journée de travail approcha et " + prenom + " hésita toujours à aller au concert dont il ne connaissait pas l'identité de la personne l'ayant invité. La curiosité prena le dessus et nous voici au début du concert. Les riffs de guitare saturés mélé aux cris du public retentissais à des centaines de mètre à la ronde." + prenom + " tenta de chercher la personne en question. Quelques temps après plus un bruit lourd retentit et plus de son ni d'éclairage. Le groupe sur scène alla demander à l'ingé son ce qui se passe. Il donna l'air de ne rien savoir. Soudain une lumière apparu sur scène et un individu prena le micro. Désolé pour l'interruption, je vais demander à " + prenom + " de venir nous rejoindre sur scène." + prenom + " se senta géné et heureux à la fois car il allais rejoindre les membres de son groupe préféré ce soir, le jour de son anniversaire, à" + home + "la ville où il vit. C'est là que " + prenom + "reconnu une personne avec qui il eut une aventure avec le groupe. C'était cette personne qui l'avait invité et souhaitais reprendre contact avec" + prenom ;  
  //alert("L'action se déroula un " + age + " dans la ville de " + home + ". Une journée qui au premier abord semblait normal. Une personne du nom de " + prenom + " s'affairait à "+ work + ");
  //}
//user();

 var hldr = document.getElementById("story");
hldr.style.color = "#99ccff";
hldr.innerHTML=storystring;


//hldr.getElementsByTagName("")[0].style.color = "red";
