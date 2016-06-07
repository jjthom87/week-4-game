   $( document ).ready(function() { 
    var numberToGuess = Math.floor((Math.random() * 102) + 10);
    var counter = 0;
    var zircon = Math.floor((Math.random() * 12) + 1);
    var sapphire = Math.floor((Math.random() * 12) + 1);
    var ruby = Math.floor((Math.random() * 12) + 1);
    var crystal = Math.floor((Math.random() * 12) + 1);
    var wins = 0;
    var losses = 0;

    $('#number').text(numberToGuess);

    $("#crystalImage").click(function() {
    update(crystal);
    });
    $("#crystalImage2").click(function() {
    update(sapphire);
    });
    $("#crystalImage3").click(function() {
    update(ruby);
    });
    $("#crystalImage4").click(function() {
    update(zircon);
    });

    var reset = function () {
      numberToGuess =  Math.floor((Math.random() * 102) + 10);
      $('#number').text(numberToGuess);
      counter = 0;
      $('#yourNumber').text(counter);
      zircon = Math.floor((Math.random() * 12) + 1);
      sapphire = Math.floor((Math.random() * 12) + 1);
      ruby = Math.floor((Math.random() * 12) + 1);
      crystal = Math.floor((Math.random() * 12) + 1);
    }

    function update(crystals) {
      counter += crystals;
      $('#yourNumber').empty();
      $('#yourNumber').append(counter);

      if (counter > numberToGuess) {
        losses++;
        $('#lossez').html(losses);
        $('#end').html("You Lose").fadeIn(1000).fadeOut(1000);
        reset();
      } else if (counter == numberToGuess) {
        wins++;
        $('#winz').html(wins);
        $('#end').html("You Win").fadeIn(1000).fadeOut(1000);
        reset();
      };

    };

  });