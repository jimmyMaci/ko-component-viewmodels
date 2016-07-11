var TreeNodeViewModel = function (data) {
	var self = this;
	self.id = data.id;
	self.parentid = data.parentid;
	self.children = [];
	
	self.addChild = function (child) {
		self.children.push(child);
    };
};
