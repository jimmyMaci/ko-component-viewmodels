var DropDownViewModel = function(data) {
  var self = this;
  self.label = ko.observable(data.label || ""); // the label for the select tag
  self.selectedValue = ko.observable(data.selectedValue || ""); // the selected value
  self.options = ko.observableArray(data.options); // all the options for the select tag
  self.optionsText = ko.observable(data.optionsText || ""); // the html value that sees the user
  self.optionsValue = ko.observable(data.optionsValue || ""); // the html id
  self.optionsCaption = ko.observable(data.optionsCaption || "");
  self.onSelectionChanged = data.onSelectionChanged; // callback for selection changes
  self.selectedValue.subscribe(function(newValue) {
    self.onSelectionChanged(newValue);    
  });
}
