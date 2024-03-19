export enum Status {
  LOADING = 'loading',
  SUCCES = 'succes',
  ERROR = 'error'
}

export enum MessagesType {
  NOTIFICATION = 'notification',
  MESSAGES = 'messages'
}

export enum DataBasePath {
  JOBS = 'jobs',
  EXPENSES = 'expenses'
}

export enum RoutersPaths {
  MAIN = '/',
  ABOUT = '/about',
  CARDDETAIL = '/:id',
  PRICING = '/pricing',
  ADRESS = '/adress',
  COMMUNITY = '/community',
  KOVANIKOZIRKI = '/kovani-kozirki',
  VOROTAPROFNASTILOM = '/vorota-profnastilom-kovanimi',
  VOROTAPROFNASTILOMBYID = '/vorota-profnastilom-kovanimi/:id',
  ELITNIKOVANIVOROTABYID = '/elitni-kovani-vorota/:id',
  KOVANIKOZIRKIBYID = '/kovani-kozirki/:id',
  KOVANIGRATI = '/kovani-grati',
  KOVANIZABORI = '/kovani-zabori',
  ELITNIKOVANIVOROTA = '/elitni-kovani-vorota',
  ADMIN = '/admin',
  LOGIN = '/login',
  NOFOUND = '*'
}
