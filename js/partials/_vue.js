var app = new Vue({
  el: '#app',
  data: {
    
    races: races,
    letterTests: letterTests
    
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
      
      if (letters > 0 && letters < 3) {
        startWidth = 150;
        endWidth = 150;
      } else if (letters == 3) {
          startWidth = 150;
          endWidth = 130;
      } else if (letters == 4) {
        startWidth = 113;
        endWidth = 80;
      } else if (letters == 5) {
        startWidth = 103;
        endWidth = 74;
      } else if (letters == 6) {
        startWidth = 80;
        endWidth = 54;
      } else if (letters == 7) {
        startWidth = 75;
        endWidth = 46;
      } else if (letters == 8) {
        startWidth = 69;
        endWidth = 48;
      } else if (letters == 9) {
        startWidth = 54;
        endWidth = 41;
      } else if (letters == 10) {
        startWidth = 48;
        endWidth = 32;
      } else if (letters == 11) {
        startWidth = 40;
        endWidth = 27;
      } else if (letters == 12) {
        startWidth = 41;
        endWidth = 26;
      } else if (letters == 13) {
        startWidth = 43;
        endWidth = 28;
      } else if (letters == 14) {
        startWidth = 37;
        endWidth = 25;
      } else {
        startWidth = 35;
        endWidth = 25;
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
          — 
          <time>${endDay}</time>
        `;
      } else {
        return `
          <time>${startMonth} ${startDay}</time>
          —
          <time>${endMonth} ${endDay}</time>
        `;
      }
    },

    padNumber(number,padAmount) {
      return String(number).padStart(2,'0')
    },

    getRowCount(race) {
      let count = 0;
      if (race.raceName) {
        count++;
      }
      if (race.trackName || race.km) {
        count++;
      }
      return count;
    }
  },

  computed: {

  },

  mounted: function() {
    jqueryActions();
  }

});
