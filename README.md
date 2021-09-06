Projet réaliser sous react avec des Hook, Srapi et  Material Ui.

Le but arrivé a ajouter un client à la Bdd via le formulaire, sans changer de page ni faire de reload.

Sur la page principal il sera afficher le formulaire ainsi qu'un lien avec le nom du client qui enmène vers la page du détail du client.

Sur la page client sera afficher ces données perso ainsi que sa conso part mois d'eau, d 'élec et de gaz.
Quand on change le prix au m3 il faut que le prix total change à la volé.



Pour l utiliser le projet il faudra recrée l api suivante sur strapi :

Client  (7 champs)	
nom Texte 
Relation avec Consomation (Client appartient à plusieurs Consomations)	
prenom Texte 		
telephone Number 	
sexe Texte 		
poste Texte 		
age	Number 


Consomation (4 champs)
type (eau gaz electricite) Énumération
Relation  avec Client (client a plusieurs Consomations)
Relation  avec Month (Month a plusieurs Consomations)
conso Number

Month (2 champs)
nom Texte
Relation  avec Consomation (Month a plusieurs Consomations)


Il faudra aussi crée au moins un premier client via le formulaire

Enfin Dans Months il faudra crée les mois ainsi que lier des consomations au client crée ainsi que leur donner une conso. 

Pour utiliser ce code il vous faudra faire un git clone, npm install , npm install axios,npm install @material-ui/core
