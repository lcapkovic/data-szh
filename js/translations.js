angular.module('registries')
.config(['$translateProvider', function($translateProvider) {
	$translateProvider.preferredLanguage('sk');
	$translateProvider.translations('sk', {
		"schema.people.baseData": "Základné informácie",
		"schema.people.identifier": "Identifikačné číslo",
		"schema.people.registrationID": "Registračné číslo",
		"schema.people.name": "Meno",
		"schema.people.surName": "Priezvisko",
		"schema.people.state.of.person":"Stav osoby",

		"schema.people.profile.yes":"Áno",
		"schema.people.profile.no":"Nie",
		"schema.people.state.of.person.active":"Aktívna",
		"schema.people.state.of.person.inactive":"Neaktívna",
		"schema.people.state.of.referee.active":"Aktívny",
		"schema.people.state.of.referee.inactive":"Neaktívny",
		"schema.people.state.of.coach.active":"Aktívny",
		"schema.people.state.of.coach.inactive":"Neaktívny",
		"schema.people.state.of.officer.active":"Aktívny",
		"schema.people.state.of.officer.inactive":"Neaktívny",
		"schema.people.state.of.medic.active":"Aktívny",
		"schema.people.state.of.medic.inactive":"Neaktívny",
		"schema.people.state.of.statistic.active":"Aktívny",
		"schema.people.state.of.statistic.inactive":"Neaktívny",
		"schema.people.state.of.agent.active":"Aktívny",
		"schema.people.state.of.agent.inactive":"Neaktívny",
		"schema.people.state.of.player.active":"Aktívny",
		"schema.people.state.of.player.inactive":"Neaktívny",

		"schema.people.bornName": "Rodné priezvisko",
		"schema.people.title.before":"Titul pred",
		"schema.people.title.after":"Titul za",
		"schema.people.birthDate":"Dátum narodenia",
		"schema.people.gender":"Pohlavie",
		"schema.people.gender.man": "Muž",
		"schema.people.gender.woman": "Žena",
		"schema.people.isPlayer":"Je hráč",
		"schema.people.isCoach":"Je tréner",
		"schema.people.isReferee":"Je rozhodca",
		"schema.people.isOfficer":"Je funkcionár",
		"schema.people.isMedic":"Je zdravotník",
		"schema.people.isStatistic":"Je štatista",
		"schema.people.nationality":"Štátna príslušnosť",
		"schema.people.photo":"Fotografia",
		"schema.people.photoInfo":"Fotografie",
		"schema.people.email":"E-mail",
		"schema.people.mobileNumber":"Mobil",
		"schema.people.phoneNumber":"Telefón",
		"schema.people.country":"Štát",
		"schema.people.zipCode":"PSČ",
		"schema.people.city":"Obec",
		"schema.people.houseNumber":"Číslo domu",
		"schema.people.street":"Ulica",
		"schema.people.contactInfo":"Kontaktné údaje",
		"schema.people.bankInfo":"Fakturačné údaje",
		"schema.people.bankAccount":"Číslo účtu",
		"schema.people.bankCode":"Kód banky",
		"schema.people.iban":"IBAN",
		"schema.people.swift":"SWIFT",
		"schema.people.otherInfo":"Ostatné údaje",
		"schema.people.idCardNumber":"Číslo OP",
		"schema.people.passportNumber":"Číslo pasu",
		"schema.people.isPhotoPublic":"Je fotka verejná",
		"schema.people.note":"Poznámka",
		"schema.people.language":"Jazykové znalosti",
		"schema.people.playerLicense":"Číslo HL",
		
		"schema.stadium.type.hall":"Hala",
		"schema.stadium.type.playground":"Ihrisko",
		"schema.stadium.type.stadium":"Štadión",
		"schema.stadium.surface.natural":"Prírodný",
		"schema.stadium.surface.artificial":"Umelý",
		
		"schema.club.state.active":"Aktívny",
		"schema.club.state.inactive":"Neaktívny",
		"schema.club.notPaying.yes":"Áno",
		"schema.club.notPaying.no":"Nie",

		"schema.association.state.active":"Aktívny",
		"schema.association.state.inactive":"Neaktívny",
		"schema.association.notPaying.yes":"Áno",
		"schema.association.notPaying.no":"Nie",
		
		"schema.transfer.typ.transfer":"Prestup",
		"schema.transfer.typ.hosting":"Hosťovanie",
		"schema.transfer.typ.alternating.start":"Striedavý štart",
		"schema.transfer.typ.foreign.transfer":"Zahr. prestup",
		"schema.transfer.state.approved":"Schválený",
		"schema.transfer.state.unapproved":"Neschváleny",
		"schema.transfer.state.cancel":"Storno",
		"schema.transfer.state.in.process":"V riešení",
		"schema.transfer.active.yes":"Áno",
		"schema.transfer.active.no":"Nie",
		
		"schema.competition.gender.man":"Muž",
		"schema.competition.gender.woman":"Žena",
		
		"schema.org.logoInfo":"Logo",
		"schema.org.logo":"Logo",
		"schema.org.baseData":"Základné údaje",
		"schema.org.name":"Registrovaný názov organizácie",
		"schema.org.identifier":"Identifikátor",
		"schema.org.contactInfo":"Kontaktné údaje",
		"schema.org.street":"Ulica",
		"schema.org.houseNumber":"Číslo domu",
		"schema.org.city":"Obec",
		"schema.org.zipCode":"PSČ",
		"schema.org.country":"Štát",
		"schema.org.phoneNumber":"Telefón",
		"schema.org.mobileNumber":"Mobil",
		"schema.org.email":"E-mail",
		"schema.org.bankInfo":"Fakturačné údaje",
		"schema.org.merchantName":"Obchodný názov spoločnosti",
		"schema.org.statutarOrgan":"Štatutárny orgán",
		"schema.org.stateOfOrganization":"Stav organizácie",
		"schema.org.ico":"IČO",
		"schema.org.dic":"DIČ",
		"schema.org.icDPH":" Číslo IČ DPH",
		"schema.org.country.icDPH":" Kód štátu pre IČ DPH",
		"schema.org.bankAccount":"Číslo účtu",
		"schema.org.bankCode":"Kód banky",
		"schema.org.bank":"Názov banky",
		"schema.org.iban":"IBAN",
		"schema.org.swift":"SWIFT",
		"schema.org.otherInfo":"Ostatné informácie",
		"schema.org.note":"Poznámka",
		"schema.org.view":"Organizácia",
		
		"schema.member.title": "Môj profil",
		"schema.member.view":"Profil člena"
	});
	
	$translateProvider.translations('cz', {
		"schema.people.baseData": "Základné informácie",
		"schema.people.identifier": "Identifikačné číslo",
		"schema.people.registrationID": "Registračné číslo",
		"schema.people.name": "Meno",
		"schema.people.surName": "Priezvisko",
		"schema.people.state.of.person":"Stav osoby",

		"schema.people.profile.yes":"Áno",
		"schema.people.profile.no":"Nie",
		"schema.people.state.of.person.active":"Aktívna",
		"schema.people.state.of.person.inactive":"Neaktívna",
		"schema.people.state.of.referee.active":"Aktívny",
		"schema.people.state.of.referee.inactive":"Neaktívny",
		"schema.people.state.of.coach.active":"Aktívny",
		"schema.people.state.of.coach.inactive":"Neaktívny",
		"schema.people.state.of.officer.active":"Aktívny",
		"schema.people.state.of.officer.inactive":"Neaktívny",
		"schema.people.state.of.medic.active":"Aktívny",
		"schema.people.state.of.medic.inactive":"Neaktívny",
		"schema.people.state.of.statistic.active":"Aktívny",
		"schema.people.state.of.statistic.inactive":"Neaktívny",
		"schema.people.state.of.agent.active":"Aktívny",
		"schema.people.state.of.agent.inactive":"Neaktívny",
		
		"schema.people.bornName": "Rodné priezvisko",
		"schema.people.title.before":"Titul pred",
		"schema.people.title.after":"Titul za",
		"schema.people.birthDate":"Dátum narodenia",
		"schema.people.gender":"Pohlavie",
		"schema.people.gender.man": "Muž",
		"schema.people.gender.woman": "Žena",
		"schema.people.isPlayer":"Je hráč",
		"schema.people.isCoach":"Je tréner",
		"schema.people.isReferee":"Je rozhodca",
		"schema.people.isOfficer":"Je funkcionár",
		"schema.people.isMedic":"Je zdravontík",
		"schema.people.isStatistic":"Je štatista",
		"schema.people.nationality":"Štátna príslušnosť",
		"schema.people.photo":"Fotografia",
		"schema.people.photoInfo":"Fotografie",
		"schema.people.email":"E-mail",
		"schema.people.mobileNumber":"Mobil",
		"schema.people.phoneNumber":"Telefón",
		"schema.people.country":"Štát",
		"schema.people.zipCode":"PSČ",
		"schema.people.city":"Obec",
		"schema.people.houseNumber":"Číslo domu",
		"schema.people.street":"Ulica",
		"schema.people.contactInfo":"Kontaktné údaje",
		"schema.people.bankInfo":"Fakturačné údaje",
		"schema.people.bankAccount":"Číslo účtu",
		"schema.people.bankCode":"Kód banky",
		"schema.people.iban":"IBAN",
		"schema.people.swift":"SWIFT",
		"schema.people.otherInfo":"Ostatné údaje",
		"schema.people.idCardNumber":"Číslo OP",
		"schema.people.passportNumber":"Číslo pasu",
		"schema.people.isPhotoPublic":"Je fotka verejná",
		"schema.people.note":"Poznámka",
		"schema.people.language":"Jazykové znalosti",
		"schema.people.playerLicense":"Číslo HL",
		
		"schema.stadium.type.hall":"Hala",
		"schema.stadium.type.playground":"Ihrisko",
		"schema.stadium.type.stadium":"Štadión",
		"schema.stadium.surface.natural":"Prírodný",
		"schema.stadium.surface.artificial":"Umelý",
		
		"schema.club.state.active":"Aktívny",
		"schema.club.state.inactive":"Neaktívny",
		"schema.club.notPaying.yes":"Áno",
		"schema.club.notPaying.no":"Nie",

		"schema.association.state.active":"Aktívny",
		"schema.association.state.inactive":"Neaktívny",
		"schema.association.notPaying.yes":"Áno",
		"schema.association.notPaying.no":"Nie",
		
		"schema.transfer.typ.transfer":"Prestup",
		"schema.transfer.typ.hosting":"Hosťovanie",
		"schema.transfer.typ.alternating.start":"Striedavý štart",
		"schema.transfer.typ.foreign.transfer":"Zahr. prestup",
		"schema.transfer.state.approved":"Schválený",
		"schema.transfer.state.unapproved":"Neschváleny",
		"schema.transfer.state.cancel":"Storno",
		"schema.transfer.state.in.process":"V riešení",
		"schema.transfer.active.yes":"Áno",
		"schema.transfer.active.no":"Nie",
		
		"schema.competition.gender.man":"Muž",
		"schema.competition.gender.woman":"Žena",
		
		"schema.org.logoInfo":"Loga",
		"schema.org.logo":"Logo",
		"schema.org.baseData":"Základné údaje",
		"schema.org.name":"Registrovaný názov organizácie",
		"schema.org.identifier":"Identifikátor",
		"schema.org.contactInfo":"Kontaktné údaje",
		"schema.org.street":"Ulica",
		"schema.org.houseNumber":"Číslo domu",
		"schema.org.city":"Obec",
		"schema.org.zipCode":"PSČ",
		"schema.org.country":"Štát",
		"schema.org.phoneNumber":"Telefón",
		"schema.org.mobileNumber":"Mobil",
		"schema.org.email":"E-mail",
		"schema.org.bankInfo":"Fakturačné údaje",
		"schema.org.merchantName":"Obchodný názov spoločnosti",
		"schema.org.statutarOrgan":"Štatutárny orgán",
		"schema.org.stateOfOrganization":"Stav organizácie",
		"schema.org.ico":"IČO",
		"schema.org.dic":"DIČ",
		"schema.org.icDPH":" Číslo IČ DPH",
		"schema.org.country.icDPH":" Kód štátu pre IČ DPH",
		"schema.org.bankAccount":"Číslo účtu",
		"schema.org.bankCode":"Kód banky",
		"schema.org.bank":"Názov banky",
		"schema.org.iban":"IBAN",
		"schema.org.swift":"SWIFT",
		"schema.org.otherInfo":"Ostatné informácie",
		"schema.org.note":"Poznámka",
		"schema.org.view":"Organizácia",

		"schema.member.title": "Môj profil",
		"schema.member.view":"Profil člena"
	});
}]);