//Developed by Garrett Stein-Seroussi
//Keep the following code the same unless noted

$(document).ready(function () {
  //this code adds a unique id # to each row
  $("tr").each(function (index, value) {
    $(this).attr("id", index);

    //Starting after the header row, it adds an area to display the total of each row
    if (index > 0) {
      $(this).append(
        "<br>" + "Total:" + "<span class = totalRow" + index + ">0</span>"
      );
    }
  });
});

//The rest of the code will allow it to add the input values together
//copy the following code for each row you have
//replace _ROW_TITLE_ with your row title
//increment '.totalRow_NUM_ as needed, for example '.totalRow1'

$('input[aria-label*="_ROW_TITLE_"]').ready(function () {
  let rowSum = 0;
  $('input[aria-label^="_ROW_TITLE_"]').each(function () {
    let each = $(this).val() * 1;
    rowSum += each;
    $(".totalRow_NUM_").text(rowSum);
  });
});

$('input[aria-label*="_ROW_TITLE_"]').blur(function () {
  let rowSum = 0;
  $('input[aria-label^="_ROW_TITLE_"]').each(function () {
    let each = $(this).val() * 1;
    rowSum += each;
    $(".totalRow_NUM_").text(rowSum);
  });
});
