# Pierre, Papier, Ciseaux 🪨📄✂️

Un jeu simple de Pierre-Papier-Ciseaux jouable dans le navigateur, en HTML/CSS/JavaScript vanilla.

## Aperçu

Affrontez l'ordinateur sur une manche de 5 tours. À chaque tour, choisissez Pierre, Papier ou Ciseaux : l'ordinateur joue aléatoirement, le score s'actualise, et un vainqueur est annoncé à la fin des 5 tours, avec possibilité de rejouer.

## Fonctionnalités

- Interface simple et responsive (HTML/CSS)
- Logique de jeu en JavaScript pur, sans dépendance
- Suivi du score joueur / ordinateur
- Partie en 5 manches avec annonce du gagnant
- Bouton "Restart" pour relancer une partie

## Utilisation

Aucune installation n'est nécessaire. Ouvrez simplement le fichier `index.html` dans un navigateur pour jouer.

## Structure du projet

```
RockPaperScissors/
├── index.html   # Structure et style de la page
├── main.js      # Logique du jeu
└── README.md
```

## Règles du jeu

- Pierre bat Ciseaux
- Ciseaux bat Papier
- Papier bat Pierre

Le joueur avec le plus de victoires après 5 manches remporte la partie.
