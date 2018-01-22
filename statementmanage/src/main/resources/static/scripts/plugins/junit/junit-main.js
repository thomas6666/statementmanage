require(["domReady"],function(domReady){
	domReady(function(){
		window.setTimeout(function(){
		  if(window.__karma__){
			    //junit report.
		        //window.__karma__.start();
			    //HtmlReporter
			  	var jasmineEnv = window.jasmine.getEnv();
			    jasmineEnv.addReporter(new jasmine.HtmlReporter());
			    jasmineEnv.execute();
		  }
		},500);
	});
});
