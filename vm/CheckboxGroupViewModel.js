var CheckboxGroupViewModel = function(name) {
    var self = this;
    self.name = ko.observable(name);

    self.availableItems = ko.observableArray();
    self.selectedItemIds = ko.observableArray();

    self.addCheckbox = function (cb) {
    		self.availableItems.push(cb);
    };
   
    self.toggleSelection = function (item) {
        item.selected(!(item.selected()));
        return true;
    };
}
