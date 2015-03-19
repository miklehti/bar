# bar
baarisofta:

Kansiorakenne ja mitä mikäkin tekee:
1. Client
	1.1 app
		1.1.1. account
			1.1.1.1. login
					- login.controller.js
						baariApp moduuli, kontrolleri.
						$scope.login ja
						$scope.loginOauth => facebook logini
					- login.css => vain facen logo
					- login.html = login sivun näkymä, URL http://localhost:9000/login => pitää tutkia router
			1.1.1.2. settings
					- settings.controller.js
						=> voi vaihtaa salasanan
					- settings.html
			1.1.1.3. signup
					- signup.controller.js => rekisteröityä käyttäjäksi
					- signup.html
			- accounts.js
				ahaa, eli tässä on nyt routing tälle kansiolle eli kun mennään login, settings tai signup niin mikä html ja controller
		1.1.2. admin
			- admin.controller.js => hakee käyttäjät ja voi deletoida niitä
			- admin. => roskiksen tyyli
			- admin.html => adminin sivu
			- admin.js => routing
		1.1.3. main  => eli etusivu. Hakee kannasta "makeita juttuja kuten Development Tools jne."
			- main.controller.js
			- main.controller.spec.js
			- main.css
			- main.html
			- main.js
		- app.css => jotain ihmeellistä tyyliä?
		- app.js => itse pää app.js mistä homma lähtee
	1.2. assets => kuvat
	1.3. bower_components => bowerin kamaa
	1.4. components => servicet!
		1.4.1. auth
			-auth.service.js => Autentikoinnin tiedot
			-user.service.js => Userin tiedot
		1.4.2. modal ???
			-modal.css
			- modal.html
			- modal.service.html
		1.4.3. mongoose-error???
		1.4.4. navbar
			=> Nav baarin napit ja toiminnallisuudet
	-.htaccess Apache configuration file
	-.jshintrc joku konffi??
	- favicon.ico ??
	- index.html => appin juuri html minne kaikki palaset ujutetaan...
	- robots.txt ???
2. e2e Protractor
3. node_modules node.js moduuleja kuten grunt ja express
4. server
	4.1. api
			4.1.1. thing
				-index.js
					hmm, voisiko olla mistä express alkaa on routeria ja alempi kontrolleria kutsutaan
				-thing.controller.js
					hmm, voisiko olla palvelimen controlleri joka hoitaa CRUDia
				-thing.model.js
				'modeli'
				-thing.spec.js
				testit
			4.1.2. user
				-index.js
				-user.controller.js
				-user.model.js
				-user.mode.spec.js
	4.2. auth
		4.2.1. facebook
		4.2.2. local
	-app.js => täältä alkaa palvelin


	- selvitä miten palvelin toimii.
	- selvitä mistä palvelin tietää että ollaan kirjauduttu?
	- tuo tietoa esiin näytölle esim. thingien . => done	
	- miten lisään less tms. tähän projektiin jos haluan
	- mikä on mongoose => ORM Mongolle, helppo.
	- tee oma end to end toiminto (Awesome things).
	- mikä on socket.io? => joku .js kirjasto, voi lähettää tietoa vaikka positiosta livenä. tms. Vielä pitää katsoa lisää-
	- tee oma schema (usersin ja things lisäksi)
	- http://www.docmagilligans.com/blog/ => kiva sivu!xg65w




