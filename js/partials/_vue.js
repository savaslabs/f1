var app = new Vue({
  el: '#app',
  data: {
    
    races: races,

    letterTests: [
      {
        title: "A",
        startDate: "1111-11-11",
        endDate: "1111-11-11",
        round: 1,
        laps: 99,
        raceName: "Vestland Norway",
        trackName: "Letter Test",
        countryCode: "no",
        km: 6.66
      },
      {
        title: "Iz",
        startDate: "1111-11-11",
        endDate: "1111-11-13",
        round: 2,
        laps: 99,
        raceName: "An Island In Croatia",
        trackName: "Letter Test",
        countryCode: "hr",
        km: 6.66
      },
      {
        title: "Ayr",
        startDate: "1111-11-11",
        endDate: "2222-02-22",
        round: 3,
        laps: 99,
        raceName: "Ontario Canada",
        trackName: "Letter Test",
        countryCode: "ca",
        km: 6.66
      },
      {
        title: "Axum",
        startDate: "1111-11-11",
        endDate: "2222-02-22",
        round: 4,
        laps: 99,
        raceName: "Ethiopia",
        trackName: "Letter Test",
        countryCode: "et",
        km: 6.66
      },
      {
        title: "Italy",
        startDate: "2023-10-01",
        startDate: "2023-10-03",
        round: 5,
        laps: 0,
        raceName: "One of the best Hitman levels",
        trackName: "Letter Test",
        countryCode: "us",
        km: 4.909
      },
      {
        title: "Canada",
        startDate: "2023-10-01",
        startDate: "2023-10-03",
        round: 6,
        laps: 0,
        raceName: "It's a country, not a city",
        trackName: "Letter Test",
        countryCode: "us",
        km: 4.909
      },
      {
        title: "Belgium",
        startDate: "1111-11-11",
        endDate: "2222-02-22",
        round: 7,
        laps: 99,
        raceName: "Beer & Chocolate",
        trackName: "Letter Test",
        countryCode: "be",
        km: 6.66
      },
      {
        title: "Hi There",
        startDate: "1111-11-11",
        endDate: "2222-02-22",
        round: 8,
        laps: 99,
        raceName: "I couldn't think of a city with 8 characters",
        trackName: "Letter Test",
        countryCode: "us",
        km: 6.66
      },
      {
        title: "Las Vegas",
        startDate: "2023-10-16",
        endDate: "2023-10-18",
        round: 9,
        laps: 0,
        raceName: "Formula 1 Heineken silver Las vegas grand prix 2023",
        trackName: "Las vegas",
        countryCode: "us",
        km: 4.909
      },
      {
        title: "Netherlands",
        startDate: "1111-11-11",
        endDate: "2222-02-22",
        round: 11,
        laps: 99,
        raceName: "French Fries & Mayonnaise",
        trackName: "Letter Test",
        countryCode: "nl",
        km: 6.66
      },
      {
        title: "Minneapolis",
        startDate: "1111-11-11",
        endDate: "2222-02-22",
        round: 13,
        laps: 99,
        raceName: "Ethiopia",
        trackName: "Letter Test",
        countryCode: "us",
        km: 6.66
      },
      
    ],
  },

  methods: {

    titleStyle(race) {
      const self = this;
      const wdth = self.getTitleWidths(race).startWidth;
      // const wdth = 50;
      
      styleObject = {
        fontVariationSettings: `"wdth" `+wdth
      };

      return styleObject;

    },

    getTitleWidths(race) {
      const letters = race.title.length;
      let startWidth = 25;
      let endWidth = 40;
      
      if (letters > 0 && letters < 4) {
        startWidth = 150;
        endWidth = 150;
      } else if (letters == 4) {
        startWidth = 100;
        endWidth = 80;
      } else if (letters == 5) {
        startWidth = 98;
        endWidth = 91;
      } else if (letters == 6) {
        startWidth = 73;
        endWidth = 62;
      } else if (letters == 7) {
        startWidth = 67;
        endWidth = 46;
      } else if (letters == 8) {
        startWidth = 69;
        endWidth = 60;
      } else if (letters == 9) {
        startWidth = 54;
        endWidth = 34;
      } else if (letters == 10) {
        startWidth = 48;
        endWidth = 35;
      } else if (letters == 11) {
        startWidth = 42;
        endWidth = 38;
      } else if (letters == 12) {
        startWidth = 41;
        endWidth = 31;
      } else if (letters == 13) {
        startWidth = 40;
        endWidth = 28;
      } else if (letters == 14) {
        startWidth = 33;
      }
      if (race.customStartWeight) {
        startWidth = race.customStartWeight;
      }

      if (race.customEndWeight) {
        endWidth = race.customEndWeight;
      }

      return {
        startWidth: startWidth,
        endWidth: endWidth
      }
    },

    trackMapStyles(customMapWidth) {
      if (customMapWidth) {
        const styleObject = {
          width: customMapWidth+"%"
        }
        return styleObject;
      }
    },

    prettyDateRange(first,second) {
      const allMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ]
      const startDate = new Date(first);
      const endDate = new Date(second);
      const startMonth = allMonths[startDate.getMonth()];
      const startDay = String(startDate.getUTCDate()).padStart(2,'0')
      const endMonth = allMonths[endDate.getMonth()];
      const endDay = String(endDate.getUTCDate()).padStart(2,'0')
      //const startDay = startDate.getUTCDate();
      if (first == second) {
        return `<time>${startMonth} ${startDay}</time>`;
      } else if (startMonth == endMonth) {
        return `
          <time>${startMonth} ${startDay}</time>
          - 
          <time>${endDay}</time>
        `;
      } else {
        return `
          <time>${startMonth} ${startDay}</time>
          - 
          <time>${endMonth} ${endDay}</time>
        `;
      }
    },

    padNumber(number,padAmount) {
      return String(number).padStart(2,'0')
    }
  },

  computed: {

  },

  mounted: function() {
    jqueryActions();
  }

});
