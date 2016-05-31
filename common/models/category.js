module.exports = function(Category) {
	Category.greet = function(msg, cb) {
	      process.nextTick(function() {
	        msg = msg || 'hello world';
	        cb(null, 'Sender says ' + msg + ' to receiver');
	      });
	    };
};
