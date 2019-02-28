$(".addItem").click(function(event){
    event.preventDefault();
    let textInput =  $("#textInput").val();
    $(".shopList").append(` 
                            <li class="listElement">
                                <div>
                                    ${textInput}
                                </div>
                                <button type="submit" class="check button">
                                    check
                                </button>
                                <button type="submit" class="delete button">
                                    delete
                                </button>
                            </li>`);
});

$("body").on("click", ".check", function(event) {
    event.preventDefault();

    $(this).parent().children("div").toggleClass("checked");
});

$("body").on("click", ".delete", function(event) {
    event.preventDefault();

    $(this).parent().remove();
});