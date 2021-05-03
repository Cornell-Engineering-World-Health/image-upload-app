/** [Image] is an image object created from an image uri, a list of labels,
 *  and a metadata object 
*/
class Image {
  constructor(image_uri, labels, metadata) {
    this.image_uri = image_uri;
    this.labels = labels;
    this.metadata = metadata;
  }
}

/** [Metadata] is a data object created from a user_id, data object, and
 *  a location string, as well as any other relevant metadata.
*/
class Metadata {
  constructor(email, user_id, date, location) {
    this.email = email;
    this.user_id = user_id;
    this.date = date;
    this.location = location;
  }
}
