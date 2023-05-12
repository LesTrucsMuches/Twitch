      1 - créer un nouvel overlay streamelement - https://streamelements.com/dashboard/overlays
      2 - faire le + en bas et ajouter "static/custom -> custom widget"
      3 - cliquer sur le custom widget à gauche et cliquer sur "open editor"
      4 - remplacer chaque section par ces fichiers :
            section HTML   -> index.html
            section CSS    -> style.css
            section JS     -> script.js
            section FIELDS -> fields.json
            section DATA   -> ne pas toucher
      5 - renommer l'overlay en haut à gauche 
      6 - faire SAVE en haut à droite 
      7 - à gauche du bouton "preview" cliquer sur le bouton pour copier l'url du widget
      8 - insérer l'overlay dans obs comme source navigateur.


      Facultatif :
            1- Le widget utilise un site web externe afin que le bot StreamElement puisse
            envoyer des messages dans le tchat, car de base le widget n'a pas l'option.
            Pour ce faire il faut s'incrire au site https://jebaited.net/ et générer
            un token de type "botMsg". ensuite il faudra copier ce token dans les options 
            du widget.
            2- par défaut il y a un son de "tick" mais vous pouvez ajouter votre propre son.

      Les commandes ci-dessous seront maintenant disponible via le tchat, par défaut 
      que les modérateurs et le broadcaster peuvent utiliser la commande !roulette.

      !roulette 
      cette commande va démarrer un chrono de 60sec
      laissant les vieweurs le temps de faire la commande
      !join pour s'ajouter à la roulette. la roulette va
      démarrer automatiquement après 60sec.

      !roulette <nombre>
      si un <nombre> est indiqué après la commande
      le chrono sera ajusté selon ce nombre au lieu 
      du 60 sec par défaut.

      !roulette choix1 choix2 ... 
      en indiquant plus de 2 arguments après
      la commande, la roulette va démarrer automatiquement
      avec ces choix.

      !join
      après avoir démarré une roulette avec la commande (!roulette)
      ou (!roulette nombre), les vieweurs pourront s'ajouter à la
      roulette avec cette commande.

