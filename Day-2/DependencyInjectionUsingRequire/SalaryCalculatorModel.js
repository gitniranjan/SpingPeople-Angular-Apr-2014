define([],function(){
	return function SalaryCalculator(){
		var _basic = 0,
			_hra = 0,
			_da = 0,
			_tax = 0,
			_salary = 0,
			_subscribers = {};
		this.addChangeSubscriber = function(attrName,callback){
			_subscribers[attrName] = _subscribers[attrName] || [];
			_subscribers[attrName].push(callback);
		};
		function triggerChange(attrName){
			_subscribers[attrName] = _subscribers[attrName] || [];
			for(var i=0;i<_subscribers[attrName].length;i++){
				var callback = _subscribers[attrName][i];
				setTimeout(callback);
			}
		}
		this.basic = function(val){
			if (typeof val === "undefined") return _basic;
			_basic = val;
			triggerChange("basic");
		};
		this.hra = function(val){
			if (typeof val === "undefined") return _hra;
			_hra = val;
			triggerChange("hra");
		};
		this.da = function(val){
			if (typeof val === "undefined") return _da;
			_da = val;
			triggerChange("da");
		};
		this.tax = function(val){
			if (typeof val === "undefined") return _tax;
			_tax = val;
			triggerChange("tax");
		};
		this.salary = function(val){
			return _salary;
		};
		
		this.calculate = function(){
			var gross = this.basic() + this.hra() + this.da();
			_salary = gross * ((100-this.tax())/100);
			triggerChange("salary");
		}

	}

});
