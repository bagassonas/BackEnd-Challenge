/**
 * Direction:
 * Remove key that have null or undefined value
 *
 * Expected Result:
 * [
 *   { session_name: 'first test', classes: [{ students: [{ student_name: 'budi' }] }] },
 *   { classes: [{ class_name: 'second class', students: [{ student_name: 'adi' }] }] },
 * ]
 */
const data = [
  { session_name: 'first test', classes: [{ class_name: undefined, students: [{ student_name: 'budi' }] }] },
  { session_name: null, classes: [{ class_name: 'second class', students: [{ student_name: 'adi' }] }] },
];

const removeNulls = (obj) => {
  var isArray = obj instanceof Array;
  for (var k in obj) {
    if (obj[k] == null) isArray ? obj.splice(k, 1) : delete obj[k];
    else if (typeof obj[k] == "object") removeNulls(obj[k]);
  }
}

function result(data) {
  // Your Code Here
  removeNulls(data)
  return data
}

// console.log(result(data));
console.dir(result(data), { depth: null })
