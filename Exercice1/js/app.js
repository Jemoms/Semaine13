var app = angular.module('MonApp',[]);

app.controller('QuizzCtrl', function ($scope) {
	
	$scope.yolo = true;
	$scope.display = false;
    
    $scope.calculate = function () {
    	$scope.yolo = false;
        $scope.totalScore = 0;
        $scope.result;
        angular.forEach($scope.asks, function(ask) {
            $scope.display = true;
            $scope.totalScore += parseInt(ask.score);
        });
        if ($scope.totalScore > 15) {
            $scope.result = $scope.totalScore;
            $scope.profil = $scope.categories[0];
        }
        else if ($scope.totalScore > 3) {
            $scope.result = $scope.totalScore;
            $scope.profil =  $scope.categories[1];
        }
        else {
            $scope.result = $scope.totalScore;
            $scope.profil =  $scope.categories[2];
        }
        $scope.totalScore = 0;
    };
    
    $scope.reinit = function() {
        $scope.display = false;
        $scope.yolo = true;
    };
    
    

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

	$scope.asks = [
		{
			id : 1,
			label : "Aimez-vous Ruby ?",
			answers : [
				{
					label : "J'adore",
					categorie : "Nerd",
					score : 10
				},
				{
					label : "Oui",
					categorie : "Dev",
					score : 5
				},
				{
					label : "Je préfère les diamants :)",
					categorie : "Humain",
					score : 1
				}
			]
		},
		{
			id : 2,
			label : "Aimez-vous Javascript ?",
			answers : [
				{
					label : "C'est génial",
					categorie : "Nerd",
					score : 10
				},
				{
					label : "Je ne comprends pas l'AJAX",
					categorie : "Dev",
					score : 5
				},
				{
					label : "Je connais Jabba le hunt",
					categorie : "Humain",
					score : 1
				}
			]
		},
		{
			id : 3,
			label : "Pourquoi choisir AngularJS ?",
			answers : [
				{
					label : "Pour le SPA",
					categorie : "Nerd",
					score : 10
				},
				{
					label : "C'était demandé dans ma formation...",
					categorie : "Dev",
					score : 5
				},
				{
					label : "Pardon ??",
					categorie : "Humain",
					score : 1
				}
			]
		}
	];





});
