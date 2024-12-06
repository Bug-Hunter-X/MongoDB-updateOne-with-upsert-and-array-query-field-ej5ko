```javascript
const query = { name: { $elemMatch: { $eq: 'John Doe' } } };
const update = { $set: { age: 30 } };

db.collection('users').updateOne(query, update, { upsert: true });
```
This revised code uses the `$elemMatch` operator within the query to search for an array element that matches the specified value.  Now, the `upsert` option will function correctly, inserting a new document if no matching element is found in the `name` array.