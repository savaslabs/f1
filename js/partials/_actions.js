function jqueryActions() {

  let controller = new ScrollMagic.Controller({loglevel: 3});


  $('section.race').each(function() {
    var currentScreen = this;
    const raceHeight = parseInt($(this).height()) + 20;
    new ScrollMagic.Scene({ 
      triggerElement: currentScreen,
      offset: 20,
      duration: raceHeight
    })
    .on('enter', function () {
        const currentRaceID = '#' + this.triggerElement().id;
        // console.log(currentRaceID);
        const raceTitle = $(currentRaceID).find('.title');
        const startingFontWeight = raceTitle.attr('start-width');
        const finalFontWeight = raceTitle.attr('end-width');
        raceTitle.css('font-variation-settings', '"wdth" ' + finalFontWeight);
        $(currentRaceID).addClass('active');
    })
    .on('leave', function () {
      const formerRaceID = '#' + this.triggerElement().id;
      // console.log(currentRaceID);
      const raceTitle = $(formerRaceID).find('.title');
      const startingFontWeight = raceTitle.attr('start-width');
      const finalFontWeight = raceTitle.attr('end-width');
      raceTitle.css('font-variation-settings', '"wdth" ' + startingFontWeight);
      $(formerRaceID).removeClass('active');
  })
    //.addIndicators()
    .addTo(controller);
  });

}