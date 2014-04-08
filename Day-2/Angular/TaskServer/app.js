var connect = require('connect'),
	http = require('http'),
	rest = require('connect-rest');

var currentTaskId = 3;

var tasks = [
		{id : 1, name : "Learn jQuery", isCompleted : false},
		{id : 2, name : "Explore JavaScript", isCompleted : true},
		{id : 3, name : "Master Angular.js", isCompleted : false},
	];

var app = connect()
  //.use(connect.logger('dev'))
  .use(connect.static('public'))
  .use(connect.query())
  .use(connect.json())
  .use(rest.rester());

rest.get('/tasks',function(){
	return tasks;
});
rest.get("/tasks/:id",function(request){
	console.log("request parameters = ", request.parameters);
	return tasks.filter(function(t){ return t.id === parseInt(request.parameters.id)})[0];
});
rest.post("/tasks",function(request,content){
	var newTask = {
		id : ++currentTaskId,
		name : content.taskName,
		isCompleted : false
	};
	tasks.push(newTask);
	return newTask;
});
rest.put("/tasks/:id",function(request,content){
	var task = tasks.filter(function(t){ return t.id === parseInt(request.parameters.id)})[0];
	task.name = content.name;
	task.isCompleted = content.isCompleted;
	return task;
});
http.createServer(app).listen(8080);