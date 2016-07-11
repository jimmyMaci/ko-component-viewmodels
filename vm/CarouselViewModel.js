var CarouselViewModel = function(data) {

  var self = this;

  self.selectedImageIndex = ko.observable(data && data.selectedImageIndex || 0);
  self.imagePaths = ko.observableArray(data && data.imagePaths || []);

  self.onThumbnailSelection = function(selectedThumbnail) {
    var selectedThumbnailIndex = self.imagePaths().indexOf(selectedThumbnail);
    self.selectedImageIndex(selectedThumbnailIndex);
  };

  self.addImage = function(img) {
    self.imagePaths.push(img);
  };

}
