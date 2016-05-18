// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by react-quickform.js.
import { name as packageName } from "meteor/react-quickform";

// Write your tests here!
// Here is an example.
Tinytest.add('react-quickform - example', function (test) {
  test.equal(packageName, "react-quickform");
});
