const races =  [
  {
    title: "Bahrain",
    startDate: "2023-03-03",
    endDate: "2023-03-05",
    round: 1,
    laps: 57,
    raceName: "Formula 1 Gulf Air Bahrain Grand Prix 2023",
    trackName: "Bahrain International Circuit",
    countryCode: "bh",
    km: 5.412,
    trackFile: "bahrain.svg",
    customEndWeight: 49,
  },
  {
    title: "Saudi Arabia",
    startDate: "2023-03-17",
    endDate: "2023-03-19",
    round: 2,
    laps: 50,
    raceName: "Formula 1 STC Saudi Arabian Grand Prix 2023",
    trackName: "Jeddah Corniche Circuit",
    countryCode: "sa",
    km: 6.174,
    trackFile: "saudi-arabia.svg"
  },
  {
    title: "Australia",
    startDate: "2023-03-31",
    endDate: "2023-04-02",
    round: 3,
    laps: 58,
    raceName: "Formula 1 Rolex Australian Grand Prix 2023",
    trackName: "Albert Park Circuit",
    countryCode: "au",
    km: 5.278,
    trackFile: "australia.svg",
    customMapWidth: 51,
    customStartWeight: 54,
    customEndWeight: 33,
  },
  {
    title: "Azerbaijan",
    startDate: "2023-04-28",
    endDate: "2023-04-30",
    round: 4,
    laps: 100,
    raceName: "Formula 1 Azerbaijan Grand Prix 2023",
    trackName: "Baku City Circuit",
    countryCode: "az",
    km: 4.909,
    trackFile: "azerbaijan.svg",
    customMapWidth: 51,
    customStartWeight: 46,
    customEndWeight: 29,
  },
  {
    title: "Miami",
    startDate: "2023-05-05",
    endDate: "2023-05-07",
    round: 5,
    laps: 3,
    raceName: "Formula 1 Crypto.com Miami Grand Prix 2023",
    trackName: "Miami International Autodrome",
    countryCode: "us",
    km: 4.909,
    trackFile: "miami.svg",
    customEndWeight: 48,
    customMapWidth: 56
  },
  {
    title: "Emilia-Romagna",
    startDate: "2023-05-19",
    endDate: "2023-05-21",
    round: 6,
    laps: 0,
    raceName: "Formula 1 Qatar Airways Gran Premio del Made in Italy e Dell’Emila-Romagna 2023",
    trackName: "Autodromo Enzo e Dino Ferrari",
    countryCode: "it",
    km: 4.909,
    trackFile: "emilia.svg",
    customEndWeight: 25,
  },
  {
    title: "Monaco",
    startDate: "2023-05-26",
    endDate: "2023-05-28",
    round: 7,
    laps: 0,
    raceName: "Formula 1 Grand Prix de Monaco 2023",
    trackName: "Circuit de Monaco",
    countryCode: "mc",
    km: 4.909,
    trackFile: "monaco.svg",
    customMapWidth: 35,
    customStartWeight: 72,
    customEndWeight: 51,
  },
  {
    title: "Spain",
    startDate: "2023-06-02",
    endDate: "2023-06-04",
    round: 8,
    laps: 0,
    raceName: "Formula 1 AWS Grand Premio de España 2023",
    trackName: "Circuit de Barcelona-Catalunya",
    countryCode: "es",
    km: 4.909,
    trackFile: "spain.svg",
    customEndWeight: 72
  },
  {
    title: "Canada",
    startDate: "2023-06-16",
    endDate: "2023-06-18",
    round: 9,
    laps: 0,
    raceName: "Formula 1 Pirelli Grand Prix du Canada 2023",
    trackName: "Circuit Gilles-Villeneuve",
    countryCode: "ca",
    km: 14,
    trackFile: "canada.svg",
    customMapWidth: 52,
    customEndWeight: 43
  },
  {
    title: "Austria",
    startDate: "2023-06-30",
    endDate: "2023-07-02",
    round: 10,
    laps: 0,
    raceName: "Formula 1 grosser preis von österreich 2023",
    trackName: "red bull ring",
    countryCode: "at",
    km: 14,
    trackFile: "austria.svg",
    customStartWeight: 72,
    customEndWeight: 53
  },
  {
    title: "Great Britain",
    startDate: "2023-06-07",
    endDate: "2023-06-09",
    round: 11,
    raceName: "Formula 1 Aramco British Grand Prix 2023",
    trackName: "Silverstone Circuit",
    countryCode: "gb"
  },
  {
    title: "Hungary",
    startDate: "2023-06-21",
    endDate: "2023-06-23",
    round: 12,
    raceName: "Formula 1 Qatar Airways Hungarian Grand Prix 2023",
    trackName: "Hungaroring",
    countryCode: "hu",
    trackFile: "hungary.svg",
  },
  {
    title: "Belgium",
    startDate: "2023-06-28",
    endDate: "2023-06-30",
    round: 13,
    raceName: "Formula 1 Belgian grand prix 2023",
    trackName: "circuit de spa-francorchamps",
    countryCode: "be",
    trackFile: "belgium.svg",
  },
  {
    title: "Netherlands",
    startDate: "2023-07-25",
    endDate: "2023-07-27",
    round: 14,
    raceName: "Formula 1 Heineken dutch grand prix 2023",
    trackName: "circuit zandvoort",
    countryCode: "nl",
    trackFile: "netherlands.svg",
  },
  {
    title: "Italy",
    startDate: "2023-10-01",
    endDate: "2023-10-03",
    round: 15,
    raceName: "Formula 1 Pirelli gran premio d’italia 2023",
    trackName: "autodromo nazionale monza",
    countryCode: "it",
    trackFile: "italy.svg",
    customStartWeight: 120,
    customEndWeight: 78,
  },
  {
    title: "Japan",
    startDate: "2023-09-22",
    endDate: "2023-09-24",
    round: 17,
    laps: 0,
    raceName: "Formula 1 lenovo japanese grand prix 2023",
    trackName: "suzuka international racing course",
    countryCode: "jp",
    km: 4.909,
    customStartWeight: 86,
    customEndWeight: 60
  },
  {
    title: "Las Vegas",
    startDate: "2023-10-16",
    endDate: "2023-10-18",
    round: 22,
    laps: 0,
    raceName: "Formula 1 Heineken silver Las vegas grand prix 2023",
    trackName: "Las vegas",
    countryCode: "us",
    km: 4.909
  },
];