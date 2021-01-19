$(document).ready(function() {
  $("form#favorite").submit(function(event) {
    event.preventDefault();
    
    const favoriteThings = [$("#favorite-thing1").val(), $("#favorite-thing2").val(), $("#favorite-thing3").val(), $("#favorite-thing4").val()];
    const newFavoriteThings =  [];
    newFavoriteThings.push(favoriteThings[1], favoriteThings[0], favoriteThings[2]);

    $("#new-favorite-things").show();
    $("#new-favorite-thing1").text(newFavoriteThings[0]);
    $("#new-favorite-thing2").text(newFavoriteThings[1]);
    $("#new-favorite-thing3").text(newFavoriteThings[2]);

  });
});