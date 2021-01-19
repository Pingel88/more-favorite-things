$(document).ready(function() {
  $("form#favorite").submit(function(event) {
    event.preventDefault();
    
    const favoriteThings = [$("#favorite-thing1").val(), $("#favorite-thing2").val(), $("#favorite-thing3").val(), $("#favorite-thing4").val()];
    const newFavoriteThings =  [];
    newFavoriteThings.push(favoriteThings[1], favoriteThings[0], favoriteThings[2]);

    $("#new-favorite-things").show();


    $(".language-result").text("C#");
  });
});