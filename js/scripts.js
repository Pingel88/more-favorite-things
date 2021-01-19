$(document).ready(function() {
  $("form#favorite").submit(function(event) {
    event.preventDefault();
    
    const favoriteThings = [$("#favorite-thing1").val(), $("#favorite-thing2").val(), $("#favorite-thing3").val(), $("#favorite-thing4").val()];
    // favoriteThings.push($("#favorite-thing1").val());
    // favoriteThings.push($("#favorite-thing2").val());
    // favoriteThings.push($("#favorite-thing3").val());
    // favoriteThings.push($("#favorite-thing4").val());
    console.log(favoriteThings);
  });
});