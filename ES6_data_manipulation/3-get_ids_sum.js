export default function getStudentIdsSum(students) {
  return students.reduce((sum, s) => sum + s.id, 0);
}
