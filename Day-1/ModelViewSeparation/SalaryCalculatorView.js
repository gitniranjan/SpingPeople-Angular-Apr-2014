function SalaryCalcultorView(model,$root){
		this.$root = $root;
		var calculator = model;
		var that = this;
		this.init = function(){
			calculator.addChangeSubscriber('salary',function(){
				that.$root.find("#divResult").html(calculator.salary());	
			});
			calculator.addChangeSubscriber('basic',function(){
				that.$root.find("#txtBasic").val(calculator.basic());
			});
			calculator.addChangeSubscriber('hra',function(){
				that.$root.find("#txtHra").val(calculator.hra());
			});
			calculator.addChangeSubscriber('da',function(){
				that.$root.find("#txtDa").val(calculator.da());
			});
			calculator.addChangeSubscriber('tax',function(){
				that.$root.find("#rangeTax").val(calculator.tax());
				that.$root.find("#spanTax").html(calculator.tax());
			});
			
			//subscribing to view changes
			this.$root.find("#txtBasic").change(function(){
				calculator.basic(parseInt(this.value,10));
			});
			this.$root.find("#txtHra").change(function(){
				calculator.hra(parseInt(this.value,10));
			})
			this.$root.find("#txtDa").change(function(){
				calculator.da(parseInt(this.value,10));
			})
			this.$root.find("#rangeTax").change(function(){
				calculator.tax(parseInt(this.value,10));
				
			})
			this.$root.find("#btnCalculate").click(function(){
				calculator.calculate();
				
			});
		}
	}	