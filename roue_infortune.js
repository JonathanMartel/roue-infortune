//Créer votre propre roue de l'infortune en changeant les divers choix, vous pouvez même en ajouter ou en enlever.
// Les choix sont proposés par le SPPCM.

(function () {
    window.addEventListener("load",  ()=> {
        let data = {
            element: document.querySelector('.roue'),
            choix: [
                {
                   label: '<h1>Vous avez perdu</h1><p>Vous accumulez le remplacement de 3 collègues différents : Une seule préparation, mais 3 plans de cours différents, tant pis pour vous !</p>',
                   couleur: '#FF0000'
                },
                {
                    label: '<h1>Vous avez perdu</h1><p>Vous n’aurez qu’une tâche à temps partiel, pour une 7e année d’affilée.</p>',
                    couleur: '#FFaaaa'
                },
                {
                    label: '<h1>Vous avez perdu</h1><p>Vous travaillez 125 % à l’automne, de peur de ne rien avoir à l’hiver.</p>',
                    couleur: '#FF0000'
                },
                {
                    label: '<h1>Vous avez perdu</h1><p>Vous obtenez un temps plein cette session, mais en combinant des tâches dans 3 cégeps.</p>',
                    couleur: '#FFaaaa'
                },
                    {
                    label: '<h1>Vous avez perdu</h1><p>Il y a eu une sur-embauche dans votre discipline à la dernière session. Les permanents devront travailler plus et vous n’avez plus de tâche.</p>',
                    couleur: '#FF0000'
                },
                {
                    label: '<h1>Vous avez perdu</h1><p>Il y a une baisse de clientèle. Meilleure chance dans quelques années.</p>',
                    couleur: '#FFaaaa'
                },
                {
                    label: '<h1>Vous avez gagné!</h1><p>Vous obtenez votre permanence !</p>',
                    couleur: '#00FF00'
                },
                {
                    label: '<h1>Vous avez perdu</h1><p>Impossible de scinder la tâche. Elle sera octroyée à quelqu’un d’autre.</p>',
                    couleur: '#FF0000'
                }
                ,
                {
                    label: '<h1>Vous avez perdu</h1><p>Vous vous faites dépasser en ancienneté.</p>',
                    couleur: '#FFaaaa'
                },
                {
                    label: '<h1>Vous avez perdu</h1><p>Une charge à temps plein vous est offerte alors que vous en avez accepté une à temps partiel ailleurs.</p>',
                    couleur: '#FF0000'
                },
                {
                    label: '<h1>Vous avez perdu</h1><p>Le nouveau remplacement est incompatible avec votre horaire. Il sera octroyé à quelqu’un avec moins d’ancienneté que vous.</p>',
                    couleur: '#FFaaaa'
                },
                {
                    label: '<h1>Vous avez perdu</h1><p>Vous obteniez une charge de cours. La session commençait avant-hier.</p>',
                    couleur: '#FF0000'
                },
                {
                    label: '<h1>Vous avez perdu</h1><p>Un MED débarque dans votre cégep. Votre poste, ce sera pour une autre fois.</p>',
                    couleur: '#FFaaaa'
                },
                {
                    label: '<h1>Vous avez perdu</h1><p>Cette session vous devez travailler à la formation continue, vous n’aurez pas droit à des congés de maladie.</p>',
                    couleur: '#FF0000'
                },
                {
                    label: '<h1>Vous avez perdu</h1><p>Votre collègue est en arrêt de travail. Remplacez-le et ajoutez sa correction à la vôtre.</p>',
                    couleur: '#FFaaaa'
                },
                {
                    label: '<h1>Vous avez perdu</h1><p>Vous enseignez en première session, plusieurs étudiants lâchent votre cours. Votre Ci et votre salaire diminuent.</p>',
                    couleur: '#FF0000'
                },
                {
                    label: '<h1>Vous avez perdu</h1><p>Et non, on n’ouvre pas de poste sur des cours multi ici !</p>',
                    couleur: '#FFaaaa'
                }
            ],
       }

       let spin = new Spinner(data);  
    });   
})()