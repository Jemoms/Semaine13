var app = angular.module('MonApp',[]);

app.controller('QuizzCtrl', function ($scope) {

	$scope.categories = [
		{
			name : "Nerd",
			description : "Tu es un Nerd ! L'informatique et la programmation n'ont aucun secret pour toi !",
			score : 0
		},
		{
			name : "Dev",
			desription : "Tu es un Dev ! Tu bidouilles à droite à gauche, tu fais ce que tu peux avec les tutos que tu trouves sur le net et c'est très bien !",
			score : 0
		},
		{
			name : "humain",
			description : "Rollface on the keyboard and see what's happening ...",
			score : 0
		}
	];

	$scope.questions = [
		{
			numero : 1,
			question : "Aimez-vous Ruby ?",
			reponses : [
				{
					reponse1 : "J'adore",
					categorie : "Nerd",
					points : 10
				},
				{
					reponse2 : "Oui",
					categorie : "Dev",
					points : 10
				},
				{
					reponse3 : "Je préfère les diamants :)",
					categorie : "Humain",
					points : 10
				}
			]
		},
		{
			numero : 2,
			question : "Aimez-vous Javascript ?",
			reponses : [
				{
					reponse1 : "C'est génial",
					categorie : "Nerd",
					points : 10
				},
				{
					reponse2 : "Je ne comprends pas l'AJAX",
					categorie : "Dev",
					points : 10
				},
				{
					reponse3 : "Je connais Jabba le hunt",
					categorie : "Humain",
					points : 10
				}
			]
		},
		{
			numero : 3,
			question : "Pourquoi choisir AngularJS ?",
			reponses : [
				{
					reponse1 : "Pour le SPA",
					categorie : "Nerd",
					points : 10
				},
				{
					reponse2 : "C'était demandé dans ma formation...",
					categorie : "Dev",
					points : 10
				},
				{
					reponse3 : "Pardon ??",
					categorie : "Humain",
					points : 10
				}
			]
		},
		{
			numero : 4,
			question : "A quoi vous sert votre ordinateur ?",
			reponses : [
				{
					reponse1 : "Coder, développer et jouer",
					categorie : "Nerd",
					points : 10
				},
				{
					reponse2 : "Jouer et faire des fansites pour mes jeux !",
					categorie : "Dev",
					points : 10
				},
				{
					reponse3 : "Aller sur Facebook, twitter, instagram !",
					categorie : "Humain",
					points : 10
				}
			]
		},
		{
			numero : 5,
			question : "Kebab, Mcdo ou Subway ?",
			reponses : [
				{
					reponse1 : "Kebab !",
					categorie : "Nerd",
					points : 10
				},
				{
					reponse2 : "Kebab et Subway <3",
					categorie : "Dev",
					points : 10
				},
				{
					reponse3 : "Mcdo évidemment !",
					categorie : "Humain",
					points : 10
				}
			]
		}
	];

	$scope.calculer = function () {
	};




});
