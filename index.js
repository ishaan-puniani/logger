var logger = {
	trace:function(game,roindId,module,method,data){
		console.log("trace: "+game+"-"+ roindId+ " - "+ module+" : "+method+" : ",data );
	}
}

exports = module.exports = logger;

/*const winston = require('winston')
winston.setLevels({
  trace: 0,
  input: 1,
  verbose: 2,
  prompt: 3,
  debug: 4,
  info: 5,
  data: 6,
  help: 7,
  warn: 8,
  error: 9
});

winston.addColors({
  trace: 'magenta',
  input: 'grey',
  verbose: 'cyan',
  prompt: 'grey',
  debug: 'blue',
  info: 'green',
  data: 'grey',
  help: 'cyan',
  warn: 'yellow',
  error: 'red'
});

winston.trace('Hello log files!', {  
  someKey: 'some-value'
})
winston.input('Hello log files!', {  
  someKey: 'some-value'
})
winston.verbose('Hello log files!', {  
  someKey: 'some-value'
})
winston.prompt('Hello log files!', {  
  someKey: 'some-value'
})
winston.debug('Hello log files!', {  
  someKey: 'some-value'
})
winston.info('Hello log files!', {  
  someKey: 'some-value'
})
winston.data('Hello log files!', {  
  someKey: 'some-value'
})
winston.help('Hello log files!', {  
  someKey: 'some-value'
})
winston.warn('Hello log files!', {  
  someKey: 'some-value'
})
winston.error('Hello log files!', {  
  someKey: 'some-value'
})
*/
