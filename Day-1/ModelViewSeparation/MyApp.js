function MyApp(){
	this.init = function(){
		window.calculator = new SalaryCalculator();
		var v1 = new SalaryCalcultorView(window.calculator, $("#divView1"));
		v1.init();
		var v2 = new SalaryCalcultorView(window.calculator, $("#divView2"));
		v2.init();
		console.log("application initialized");
		console.log("try executing the following code in console...");
		console.log("'window.calculator.basic(30000)'");
	}
}