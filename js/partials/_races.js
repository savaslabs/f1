const races =  [
  {
    title: "Bahrain",
    startDate: "2024-02-29",
    endDate: "2024-03-02",
    round: 1,
    laps: 57,
    raceName: "Formula 1 Gulf Air Bahrain Grand Prix 2024",
    trackName: "Bahrain International Circuit",
    countryCode: "bh",
    km: 5.412,
    trackFile: "bahrain.svg",
    customStartWeight: 72,
    customEndWeight: 52,
  },
  {
    title: "Saudi Arabia",
    startDate: "2024-03-07",
    endDate: "2024-03-09",
    round: 2,
    laps: 50,
    raceName: "Formula 1 STC Saudi Arabian Grand Prix 2024",
    trackName: "Jeddah Corniche Circuit",
    countryCode: "sa",
    km: 6.174,
    trackFile: "saudi-arabia.svg",
    customStartWeight: 45,
    customEndWeight: 37
  },
  {
    title: "Australia",
    startDate: "2024-03-22",
    endDate: "2024-03-24",
    round: 3,
    laps: 58,
    raceName: "Formula 1 Rolex Australian Grand Prix 2024",
    trackName: "Albert Park Circuit",
    countryCode: "au",
    km: 5.278,
    trackFile: "australia.svg",
    customMapWidth: 51,
    customStartWeight: 58,
    customEndWeight: 37,
  },
  {
    title: "Japan",
    startDate: "2024-04-05",
    endDate: "2024-04-07",
    round: 4,
    laps: 53,
    raceName: "Formula 1 MSC Cruises Japanese Grand Prix 2024",
    trackName: "Suzuka International Racing Course",
    countryCode: "jp",
    km: 5.807,
    trackFile: "japan.svg",
    customStartWeight: 96,
    customEndWeight: 84,
    customMapWidth: 45,
  },
  {
    title: "China",
    startDate: "2024-04-19",
    endDate: "2024-04-21",
    round: 5,
    laps: 56,
    raceName: "Formula 1 Lenovo Chinese Grand Prix 2024",
    trackName: "Shanghai International Circuit",
    countryCode: "cn",
    km: 5.451,
    trackFile: "china.svg",
    customStartWeight: 104,
    customEndWeight: 83,
    customMapWidth: 45,
  },
  {
    title: "Miami",
    startDate: "2024-05-03",
    endDate: "2024-05-05",
    round: 6,
    laps: 57,
    raceName: "Formula 1 Crypto.com Miami Grand Prix 2024",
    trackName: "Miami International Autodrome",
    countryCode: "us",
    km: 5.412,
    trackFile: "miami.svg",
    customStartWeight: 108,
    customEndWeight: 61,
    customMapWidth: 56,
  },
  {
    title: "Emilia-Romagna",
    startDate: "2024-05-17",
    endDate: "2024-05-19",
    round: 7,
    laps: 63,
    raceName: "Formula 1 MSC Cruises Gran Premio del Made in Italy e Dell’Emila-Romagna 2024",
    trackName: "Autodromo Enzo e Dino Ferrari",
    countryCode: "it",
    km: 4.909,
    trackFile: "emilia.svg",
    customStartWeight: 37,
    customEndWeight: 25,
    customMapWidth: 45,
  },
  {
    title: "Monaco",
    startDate: "2024-05-24",
    endDate: "2024-05-26",
    round: 8,
    laps: 78,
    raceName: "Formula 1 Grand Prix de Monaco 2024",
    trackName: "Circuit de Monaco",
    countryCode: "mc",
    km: 3.337,
    trackFile: "monaco.svg",
    customMapWidth: 35,
    customStartWeight: 75,
    customEndWeight: 48,
    customMapWidth: 45,
  },
  {
    title: "Canada",
    startDate: "2024-06-07",
    endDate: "2024-06-09",
    round: 9,
    laps: 70,
    raceName: "Formula 1 AWS Grand Prix du Canada 2024",
    trackName: "Circuit Gilles-Villeneuve",
    countryCode: "ca",
    km: 4.361,
    trackFile: "canada.svg",
    customMapWidth: 52,
    customStartWeight: 78,
    customEndWeight: 52,
  },
  {
    title: "Spain",
    startDate: "2024-06-21",
    endDate: "2024-06-23",
    round: 10,
    laps: 66,
    raceName: "Formula 1 Aramco Grand Premio de España 2024",
    trackName: "Circuit de Barcelona-Catalunya",
    countryCode: "es",
    km: 4.675,
    trackFile: "spain.svg",
    customMapWidth: 45,
    customStartWeight: 109,
    customEndWeight: 71,
  },
  {
    title: "Austria",
    startDate: "2024-06-28",
    endDate: "2024-06-30",
    round: 11,
    laps: 71,
    raceName: "Formula 1 Qatar Airways Austrian Grand Prix 2024",
    trackName: "Red Bull Ring",
    countryCode: "at",
    km: 4.318,
    trackFile: "austria.svg",
    customStartWeight: 74,
    customEndWeight: 57,
  },
  {
    title: "Great Britain",
    startDate: "2024-07-05",
    endDate: "2024-07-07",
    round: 12,
    laps: 52,
    raceName: "Formula 1 Qatar Airways British Grand Prix 2024",
    trackName: "Silverstone Circuit",
    trackFile: "britain.svg",
    countryCode: "gb",
    km: 5.891,
    customStartWeight: 44,
    customEndWeight: 30,
  },
  {
    title: "Hungary",
    startDate: "2024-07-19",
    endDate: "2024-07-21",
    round: 13,
    laps: 70,
    raceName: "Formula 1 Hungarian Grand Prix 2024",
    trackName: "Hungaroring",
    countryCode: "hu",
    km: 4.381,
    trackFile: "hungary.svg",
    customStartWeight: 67,
    customEndWeight: 54,
  },
  {
    title: "Belgium",
    startDate: "2024-07-26",
    endDate: "2024-07-28",
    round: 14,
    laps: 44,
    raceName: "Formula 1 Rolex Belgian Grand Prix 2024",
    trackName: "Circuit de Spa-Francorchamps",
    countryCode: "be",
    km: 7.004,
    trackFile: "belgium.svg",
    customStartWeight: 74,
    customEndWeight: 54,
    customMapWidth: 47,
  },
  {
    title: "Netherlands",
    startDate: "2024-08-23",
    endDate: "2024-08-25",
    round: 15,
    laps: 72,
    raceName: "Formula 1 Heineken Dutch Grand Prix 2024",
    trackName: "Circuit Zandvoort",
    countryCode: "nl",
    km: 4.259,
    trackFile: "netherlands.svg",
    customStartWeight: 46,
    customEndWeight: 35,
  },
  {
    title: "Italy",
    startDate: "2024-08-30",
    endDate: "2024-09-01",
    round: 16,
    laps: 53,
    raceName: "Formula 1 Pirelli Gran Premio d’Italia 2024",
    trackName: "Autodromo Nazionale Monza",
    countryCode: "it",
    km: 5.793,
    trackFile: "italy.svg",
    customStartWeight: 126,
    customEndWeight: 80,
    customMapWidth:45,
  },
  {
    title: "Azerbaijan",
    startDate: "2024-09-13",
    endDate: "2024-09-15",
    round: 17,
    laps: 51,
    raceName: "Formula 1 Qatar Airways Azerbaijan Grand Prix 2024",
    trackName: "Baku City Circuit",
    countryCode: "az",
    km: 6.003,
    trackFile: "azerbaijan.svg",
    customMapWidth: 51,
    customStartWeight: 52,
    customEndWeight: 33,
  },
  {
    title: "Singapore",
    startDate: "2024-09-20",
    endDate: "2024-09-22",
    round: 18,
    laps: 61,
    raceName: "Formula 1 Singapore Airlines Singapore Grand Prix 2024",
    trackName: "Marina Bay Street Circuit",
    countryCode: "sg",
    km: 5.063,
    trackFile: "singapore.svg",
    customStartWeight: 56,
    customEndWeight: 33,
    customMapWidth: 45,
  },
  {
    title: "United States",
    startDate: "2024-10-18",
    endDate: "2024-10-20",
    round: 19,
    laps: 56,
    raceName: "Formula 1 Pirelli United States Grand Prix 2024",
    trackName: "Circuit of the Americas",
    countryCode: "us",
    km: 5.513,
    trackFile: "unitedstates.svg",
    customStartWeight: 44,
    customEndWeight: 30,
  },
  {
    title: "Mexico",
    startDate: "2024-10-25",
    endDate: "2024-10-27",
    round: 20,
    laps: 71,
    raceName: "Formula 1 Gran Premio de la Ciudad de México 2024",
    trackName: "Autódromo Hermanos Rodríguez",
    countryCode: "mx",
    km: 4.304,
    trackFile: "mexico.svg",
    customStartWeight: 85,
    customEndWeight: 62,
  },
  {
    title: "Brazil",
    startDate: "2024-11-01",
    endDate: "2024-11-03",
    round: 21,
    laps: 71,
    raceName: "Formula 1 Lenovo Grande Prêmio de São Paulo 2024",
    trackName: "Autódromo José Carlos Pace",
    countryCode: "br",
    km: 4.309,
    trackFile: "brazil.svg",
    customStartWeight: 91,
    customEndWeight: 68,
  },
  {
    title: "Las Vegas",
    startDate: "2024-11-21",
    endDate: "2024-11-23",
    round: 22,
    laps: 50,
    raceName: "Formula 1 Heineken Silver Las Vegas Grand Prix 2024",
    trackName: "Las Vegas Strip Circuit",
    countryCode: "us",
    km: 6.120,
    trackFile: "lasvegas.svg",
    customStartWeight: 61,
    customEndWeight: 43,
  },
  {
    title: "Qatar",
    startDate: "2024-11-29",
    endDate: "2024-12-01",
    round: 23,
    laps: 57,
    raceName: "Formula 1 Qatar Airways Qatar Grand Prix 2024",
    trackName: "Lusail International Circuit",
    countryCode: "qa",
    km: 5.418,
    trackFile: "qatar.svg",
    customStartWeight: 100,
    customEndWeight: 78,
  },
  {
    title: "Abu Dhabi",
    startDate: "2024-12-06",
    endDate: "2024-12-08",
    round: 24,
    laps: 58,
    raceName: "Formula 1 Etihad Airways Abu Dhabi Grand Prix 2024",
    trackName: "Yas Marina Circuit",
    countryCode: "ae",
    km: 5.281,
    trackFile: "abudhabi.svg",
    customStartWeight: 60,
    customEndWeight: 33,
    customMapWidth: 50,
  }
];
