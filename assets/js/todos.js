// Check off specific todos by clicking
$("ul").on("click", "li", function(){
  $(this).toggleClass("completed");
});

// click on x to delete todo item
$("ul").on("click", "span", function(event){
      $(this).parent().fadeOut(1000,function(){
        $(this).remove();
      });
      event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
  if(event.which===13){
    // grabbing new new todo text from inpit
    var todoText = $(this).val();
    $(this).val("");
    // create a new li and add to ul
    $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
  }
});

$(".fa-book").click(function(){
  $("input[type='text']").fadeToggle();
})