//Première ACTION demande le nom en javasript

var prenom=prompt("Entre ton prénom ;)")
$(document).ready(function() {
	
	
/*Second ACTION avec apparition et disparition des boutons
madification texte et changement de couleur*/

	$('#boutonDemarrage').click(function() {
        $('#boutonSecond').css('visibility','visible');
		$('#fondDroite').css('visibility','visible');
		$('#boutonDemarrage').css('visibility','hidden');
		$('h1').css('font-size','3em');
		$('h1').text('Je léve un verre à cette journée mémorable !').css('color',' 	fuchsia ');
		$('#son01')[0].play();
    });
	
/*Trosiéme ACTION avec apparition et disparition des boutons
madification texte et changement de couleur*/	
	
	 $('#boutonSecond').click(function() {
        $('#boutonTrois').css('visibility','visible');
		$('#fondDroite').css('visibility','hidden');
		$('#fondGauche').css('visibility','visible');
		$('#boutonSecond').css('visibility','hidden');
		$('h1').css('font-size','4em').css('color','lime');
		$('h1').text('OUIIII ! je sais, c\'est énorme !');
		$('#son03')[0].play();
    });

/*Quatrième ACTION avec apparition de tous les boutons, avec modifications
modification des textes et changement de couleur + son final*/	

	 $('#boutonTrois').click(function() {
		 
		$('h1').text('Ce n\'est pas ton anniversaire !');
		$('h1').css('font-size','5em').css('color','red');
	 // image central
        $('#fondDroite').css('visibility','visible');
		$('#fondGauche').css('visibility','visible');
		$('#fond').css('justify-content','center');
		
	//bouton central, avec désactivation du click
		$('#boutonDemarrage').css('visibility','visible').css('background','orange','border-right','#CC5500','border-bottom','#CC5500').off('click');			
		$('#prenom').text('Mais on t\'aime quand même '+prenom+', passe une bonne journée').css('font-size','3em').css('color','blue');
		
	//bouton gauche, avec désactivation du click
		$('#boutonSecond').css('visibility','visible').css('background','PURPLE','border-right','#9400D3','border-bottom','#9400D3').off('click');			
		$('#prenomGauche').text('Joyeux non-Anniversaire !').css('font-size','2em').css('color','yellow');
		
	//bouton gauche, avec désactivation du click
		$('#boutonTrois').css('background','green','border-right','#6B8E23','border-bottom','#6B8E23');			
		$('#prenomDroit').text('ENCORE PLUS DE BRUIT !').css('font-size','2em').css('color','red');
	
	
		
		$('#son01')[0].play();
		$('#son05')[0].play();
		$('#son04')[0].play();
    });
	
}); 