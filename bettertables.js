$(function(){

  //Mobile responsive table
  var mTable = $("#testTable");
  var mTableThead = $(mTable).find("th");
  $(mTableThead).each(function(idx, val) {
    var thval = $(this).text();
    var dataRows = $(mTable).find("tbody").find("tr");
    $(dataRows).each(function(){
      var n = idx + 1;
      var dataCell = $(this).find(":nth-child(" + n +")");
      var dataLabel = $("<b>").html(thval);
      $(dataCell).prepend(dataLabel);
    });
  });

  //Fixed header table
  var fixedHeadTable = $("#testTableContainer");
  $(fixedHeadTable).css("overflow-y", "auto");
  $(fixedHeadTable).scroll(function () {
    $(fixedHeadTable).find("thead").css("transform", "translate(0," + $(fixedHeadTable).scrollTop() + "px)");
  });
});
