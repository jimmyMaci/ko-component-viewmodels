var TabsViewModel = function() {
  var self = this;
  self.selectedTab = ko.observable();
  self.tabs = ko.observableArray([]);
  self.addTab = addTab;

  function addTab(newTab) {
    var nt = new Tab(newTab.name, self.selectedTab, newTab.content);
    self.tabs().push(nt);
  }
  
  var Tab = function(name, selected, content) {
    var self = this;
    self.name = name;
    self.content = content;
    self.isSelected = ko.computed(function() {
      return self === selected();
    }, self);
  }
}
