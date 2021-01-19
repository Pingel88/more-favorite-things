$(document).ready(function() {
  $("form#favorite").submit(function(event) {
    event.preventDefault();
    
    const favoriteThings = [];
    favoriteThings.push($("#favorite-thing1").val());
    favoriteThings.push($("#favorite-thing2").val());
    favoriteThings.push($("#favorite-thing3").val());
    favoriteThings.push($("#favorite-thing4").val());
    console.log(favoriteThings);
  });
});