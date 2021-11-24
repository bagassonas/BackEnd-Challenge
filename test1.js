/**
 * Direction:
 * Return a formatted array of sessions with list of classes & students
 * 
 * Expected Result:
 * [
 *  {
 *    session_id: 1,
 *    time: '09:00',
 *    classes: [
 *      {
 *        class_id: 1,
 *        name: 'A',
 *        students: [
 *          { student_id: 1, name: 'Adi' },
 *          { student_id: 1, name: 'Budi' },
 *        ],
 *      },
 *      {
 *        class_id: 2,
 *        name: 'B',
 *        students: [
 *          { student_id: 3, name: 'Bayu' },
 *          { student_id: 4, name: 'Dharma' },
 *        ],
 *      },
 *    ],
 *  },
 *  {
 *    session_id: 2,
 *    time: '10:00',
 *    classes: [
 *      {
 *        class_id: 3,
 *        name: 'C',
 *        students: [
 *          { student_id: 5, name: 'Surya' },
 *          { student_id: 6, name: 'Maha' },
 *        ],
 *      },
 *      {
 *        class_id: 4,
 *        name: 'D',
 *        students: [
 *          { student_id: 7, name: 'Dede' },
 *          { student_id: 8, name: 'Edi' },
 *        ],
 *      },
 *    ],
 *  },
 * ];
 */

const sessions = [
  { session_id: 1, time: '09:00', student: { student_id: 1, name: 'Adi' }, class: { class_id: 1, name: 'A' } },
  { session_id: 2, time: '10:00', student: { student_id: 5, name: 'Surya' }, class: { class_id: 3, name: 'C' } },
  { session_id: 2, time: '10:00', student: { student_id: 8, name: 'Edi' }, class: { class_id: 4, name: 'D' } },
  { session_id: 2, time: '10:00', student: { student_id: 7, name: 'Dede' }, class: { class_id: 4, name: 'D' } },
  { session_id: 1, time: '09:00', student: { student_id: 3, name: 'Bayu' }, class: { class_id: 2, name: 'B' } },
  { session_id: 1, time: '09:00', student: { student_id: 2, name: 'Budi' }, class: { class_id: 1, name: 'A' } },
  { session_id: 1, time: '09:00', student: { student_id: 4, name: 'Dharma' }, class: { class_id: 2, name: 'B' } },
  { session_id: 2, time: '10:00', student: { student_id: 6, name: 'Maha' }, class: { class_id: 3, name: 'C' } },
];

function result(sessions) {
  // Your Code Here
  const newSess = [];

  const mapSessions = new Map();

  for (const item of sessions) {
    if(!mapSessions.has(item.session_id)){
      mapSessions.set(item.session_id, true);    // set any value to map
      newSess.push({
        session_id: item.session_id,
        time: item.time
      });
    }
  }

  const mapClass = new Map();

  for (const session of newSess) {
    session.classes = [];
    for (const item of sessions) {
      if (item.session_id != session.session_id) continue;

      if(!mapClass.has(item.class.class_id)){
        mapClass.set(item.class.class_id, true);

        session.classes.push(item.class)
      }
    }
  }

  const mapStudent = new Map();

  for (const session of newSess) {
    for (const classes of session.classes) {
      classes.students = [];

      for (const item of sessions) {
        if (item.session_id != session.session_id || item.class.class_id != classes.class_id) continue;

        if (!mapStudent.has(item.student.student_id))
        {mapStudent.set(item.student.student_id, true);
        
        classes.students.push(item.student)
      }
      }
    }
  }

  return newSess
}

// console.log(result(sessions));
console.dir(result(sessions), { depth: null })
