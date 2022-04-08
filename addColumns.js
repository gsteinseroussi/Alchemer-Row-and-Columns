//Developed by Garrett Stein-Seroussi
//Keep the following code the same unless noted

$(document).ready(function () {
  const totalMessage = "Total:";

  //change columnHeader_NUM_ to the correct number (example: columnHeaderOne)
  //change _COLUMN_TITLE_ to your column title in quotation marks, case sensitive
  //change any instance of totalCol_NUM_ to match columnHeader_NUM_
  const columnHeader_NUM_ = "SAMPLE";

  $("input[title='" + columnHeader_NUM_ + "']")
    .last()
    .after("<br><br>" + totalMessage + "<span class='totalCol_NUM_'>0</span>");

  $("input[title='" + columnHeader_NUM_ + "']").ready(function () {
    let sum = 0;
    $("input[title='" + columnHeader_NUM_ + "']").each(function () {
      let each = $(this).val() * 1;
      sum += each;
      $(".totalCol_NUM_").text(sum);

      updateGrandTotal();
    });
  });

  $("input[title='" + columnHeaderOne + "']").blur(function () {
    let each = $(this).val() * 1;
    sum += each;
    $(".totalCol_NUM_").text(sum);
    updateGrandTotal();
  });
});

updateGrandTotal = function () {
  //copy the following line for each column you have, changing _NUM_ accordingly
  const int_NUM_ = parseInt($(".totalCol_NUM_").text());

  //add the numbers together below
  //for example, if you have three columns, intOne + intTwo + intThree
  const gTotal = int_NUM_;
  $(".grandTotal").text(gTotal);
};
