# MongoDB updateOne with upsert and array query field

This repository demonstrates a subtle issue with MongoDB's `updateOne` method when using the `upsert` option and querying on an array field. The problem arises when attempting to insert a new document if no matching document is found. If the query field is an array, the query may not match any documents, even if there are documents with arrays that contain the query value.

## Bug Description
The provided JavaScript code uses `db.collection('users').updateOne()` to update or insert a document based on the `name` field.  However, if the `name` field is an array in the collection, the update operation will fail to find a match, even if the array contains the value specified in the query.

## Solution
The solution utilizes the `$elemMatch` operator to correctly query array elements.  This operator allows matching documents where an array contains at least one element that satisfies the specified criteria.