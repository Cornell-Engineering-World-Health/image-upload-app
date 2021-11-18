/** [Image] is an image object created from an image uri, a list of labels
 */
export class Image_object {
  constructor(image_uri, labels) {
    this.image_uri = image_uri;
    this.labels = labels;
  }
}
