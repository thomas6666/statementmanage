/******************************************************
inputmagnifier.js - v1.0
2016 @wanglei
******************************************************/
function inputMagnifier(inputSelector) {
  var input = $(inputSelector);
  if(input == null) {
    return;
  }

  //Add magnifier div
  var divText = "<div class='magnifier'></div>";
  input.after(divText);

  input.each(function(i) {
  	var $this = $(this);
  	var magnifier = $this.next(".magnifier");
  	if(magnifier == null) {
  		return;
  	}
  	//Set position of magnifier div
	  var inputPos = $this.offset();
	  var inputOffsetParentPos = $this.offsetParent().offset();
	  var top = inputPos.top - inputOffsetParentPos.top - 50;
	  var left = inputPos.left - inputOffsetParentPos.left;
	  magnifier.css({top: top, left: left});

	  //Show/hide magnifier div
	  $this.focus(function() {
	    var inpText = $(this)[0].value;
	    if(inpText == "") {
	      return;
	    }
	    magnifier.fadeIn("fast");
	  });
	  $this.blur(function() {
	    var inpText = $(this)[0].value;
	    if(inpText == "") {
	      return;
	    }
	    magnifier.fadeOut("fast");
	  });

	  //Text synchronization
	  $this.keyup(function() {
	    var inpText = $(this)[0].value;
	    var magText = magnifier.html();
	    if(magText == "" && inpText != "") {
	      magnifier.fadeIn("fast");
	      magnifier.html(inpText);
	    } else if(magText != "" && inpText != "") {
	      magnifier.html(inpText);
	    } else if(inpText == "") {
	      magnifier.fadeOut("fast");
	      magnifier.html("");
	    }
	  });
  });
}
