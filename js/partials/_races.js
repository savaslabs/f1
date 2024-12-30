const races =  [
  {
    title: "Australia",
    startDate: "2025-03-14",
    endDate: "2025-03-16",
    round: 1,
    laps: 58,
    raceName: "TBC",
    trackName: "Albert Park Circuit",
    countryCode: "au",
    km: 5.278,
    trackFile: "australia.svg",
    customMapWidth: 51,
    customStartWeight: 58,
    customEndWeight: 37,
  },
  {
    title: "China",
    startDate: "2025-03-21",
    endDate: "2025-03-23",
    round: 2,
    laps: 56,
    raceName: "TBC",
    trackName: "Shanghai International Circuit",
    countryCode: "cn",
    km: 5.451,
    trackFile: "china.svg",
    customStartWeight: 104,
    customEndWeight: 83,
    customMapWidth: 45,
  },
  {
    title: "Japan",
    startDate: "2025-04-04",
    endDate: "2025-04-06",
    round: 3,
    laps: 53,
    raceName: "TBC",
    trackName: "Suzuka International Racing Course",
    countryCode: "jp",
    km: 5.807,
    trackFile: "japan.svg",
    customStartWeight: 96,
    customEndWeight: 84,
    customMapWidth: 45,
  },
  {
    title: "Bahrain",
    startDate: "2025-04-11",
    endDate: "2025-04-13",
    round: 4,
    laps: 57,
    raceName: "TBC",
    trackName: "Bahrain International Circuit",
    countryCode: "bh",
    km: 5.412,
    trackFile: "bahrain.svg",
    customStartWeight: 72,
    customEndWeight: 52,
  },
  {
    title: "Saudi Arabia",
    startDate: "2025-04-18",
    endDate: "2025-04-20",
    round: 5,
    laps: 50,
    raceName: "TBC",
    trackName: "Jeddah Corniche Circuit",
    countryCode: "sa",
    km: 6.174,
    trackFile: "saudi-arabia.svg",
    customStartWeight: 45,
    customEndWeight: 37
  },
  {
    title: "Miami",
    startDate: "2025-05-02",
    endDate: "2025-05-04",
    round: 6,
    laps: 57,
    raceName: "TBC",
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
    startDate: "2025-05-16",
    endDate: "2025-05-18",
    round: 7,
    laps: 63,
    raceName: "TBC",
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
    startDate: "2025-05-23",
    endDate: "2025-05-25",
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
    title: "Spain",
    startDate: "2025-05-31",
    endDate: "2025-06-01",
    round: 9,
    laps: 66,
    raceName: "TBC",
    trackName: "Circuit de Barcelona-Catalunya",
    countryCode: "es",
    km: 4.675,
    trackFile: "spain.svg",
    customMapWidth: 45,
    customStartWeight: 109,
    customEndWeight: 71,
  },
  {
    title: "Canada",
    startDate: "2025-06-13",
    endDate: "2025-06-15",
    round: 10,
    laps: 70,
    raceName: "TBC",
    trackName: "Circuit Gilles-Villeneuve",
    countryCode: "ca",
    km: 4.361,
    trackFile: "canada.svg",
    customMapWidth: 52,
    customStartWeight: 78,
    customEndWeight: 52,
  },

  {
    title: "Austria",
    startDate: "2025-06-27",
    endDate: "2025-06-29",
    round: 11,
    laps: 71,
    raceName: "TBC",
    trackName: "Red Bull Ring",
    countryCode: "at",
    km: 4.318,
    trackFile: "austria.svg",
    customStartWeight: 74,
    customEndWeight: 57,
  },
  {
    title: "Great Britain",
    startDate: "2025-07-04",
    endDate: "2025-07-06",
    round: 12,
    laps: 52,
    raceName: "TBC",
    trackName: "Silverstone Circuit",
    trackFile: "britain.svg",
    countryCode: "gb",
    km: 5.891,
    customStartWeight: 44,
    customEndWeight: 30,
  },
  {
    title: "Belgium",
    startDate: "2025-07-25",
    endDate: "2025-07-27",
    round: 13,
    laps: 44,
    raceName: "TBC",
    trackName: "Circuit de Spa-Francorchamps",
    countryCode: "be",
    km: 7.004,
    trackFile: "belgium.svg",
    customStartWeight: 74,
    customEndWeight: 54,
    customMapWidth: 47,
  },
  {
    title: "Hungary",
    startDate: "2025-08-01",
    endDate: "2025-08-03",
    round: 14,
    laps: 70,
    raceName: "TBC",
    trackName: "Hungaroring",
    countryCode: "hu",
    km: 4.381,
    trackFile: "hungary.svg",
    customStartWeight: 67,
    customEndWeight: 54,
  },

  {
    title: "Netherlands",
    startDate: "2025-08-29",
    endDate: "2025-08-31",
    round: 15,
    laps: 72,
    raceName: "TBC",
    trackName: "Circuit Zandvoort",
    countryCode: "nl",
    km: 4.259,
    trackFile: "netherlands.svg",
    customStartWeight: 46,
    customEndWeight: 35,
  },
  {
    title: "Italy",
    startDate: "2025-09-05",
    endDate: "2025-09-07",
    round: 16,
    laps: 53,
    raceName: "TBC",
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
    startDate: "2025-09-19",
    endDate: "2025-09-21",
    round: 17,
    laps: 51,
    raceName: "TBC",
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
    startDate: "2025-10-03",
    endDate: "2025-10-05",
    round: 18,
    laps: 61,
    raceName: "TBC",
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
    startDate: "2025-10-17",
    endDate: "2025-10-19",
    round: 19,
    laps: 56,
    raceName: "TBC",
    trackName: "Circuit of the Americas",
    countryCode: "us",
    km: 5.513,
    trackFile: "unitedstates.svg",
    customStartWeight: 44,
    customEndWeight: 30,
  },
  {
    title: "Mexico",
    startDate: "2025-10-24",
    endDate: "2025-10-26",
    round: 20,
    laps: 71,
    raceName: "TBC",
    trackName: "Autódromo Hermanos Rodríguez",
    countryCode: "mx",
    km: 4.304,
    trackFile: "mexico.svg",
    customStartWeight: 85,
    customEndWeight: 62,
  },
  {
    title: "Brazil",
    startDate: "2025-11-07",
    endDate: "2025-11-09",
    round: 21,
    laps: 71,
    raceName: "TBC",
    trackName: "Autódromo José Carlos Pace",
    countryCode: "br",
    km: 4.309,
    trackFile: "brazil.svg",
    customStartWeight: 91,
    customEndWeight: 68,
  },
  {
    title: "Las Vegas",
    startDate: "2025-11-20",
    endDate: "2025-11-22",
    round: 22,
    laps: 50,
    raceName: "TBC",
    trackName: "Las Vegas Strip Circuit",
    countryCode: "us",
    km: 6.120,
    trackFile: "lasvegas.svg",
    customStartWeight: 61,
    customEndWeight: 43,
  },
  {
    title: "Qatar",
    startDate: "2025-11-28",
    endDate: "2025-11-30",
    round: 23,
    laps: 57,
    raceName: "TBC",
    trackName: "Lusail International Circuit",
    countryCode: "qa",
    km: 5.418,
    trackFile: "qatar.svg",
    customStartWeight: 100,
    customEndWeight: 78,
  },
  {
    title: "Abu Dhabi",
    startDate: "2025-12-05",
    endDate: "2025-12-07",
    round: 24,
    laps: 58,
    raceName: "TBC",
    trackName: "Yas Marina Circuit",
    countryCode: "ae",
    km: 5.281,
    trackFile: "abudhabi.svg",
    customStartWeight: 60,
    customEndWeight: 33,
    customMapWidth: 50,
  }
];
