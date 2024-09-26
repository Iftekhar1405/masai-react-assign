import './App.css';

function App() {
  interface Person {
    name: string;
    age: number;
  }

  interface Student extends Person {
    studentId: number;
    course: string;
    semester: number;
  }

  interface Staff extends Person {
    staffId: number;
    department: string;
    position: string;
  }

  const student: Student = {
    name: 'John Doe',
    age: 20,
    studentId: 101,
    course: 'Computer Science',
    semester: 5,
  };

  const staff: Staff = {
    name: 'Jane Smith',
    age: 35,
    staffId: 201,
    department: 'IT',
    position: 'Professor',
  };

  return (
    <>
      <h1>Student Information</h1>
      <p>Name: {student.name}</p>
      <p>Age: {student.age}</p>
      <p>Student ID: {student.studentId}</p>
      <p>Course: {student.course}</p>
      <p>Semester: {student.semester}</p>

      <h1>Staff Information</h1>
      <p>Name: {staff.name}</p>
      <p>Age: {staff.age}</p>
      <p>Staff ID: {staff.staffId}</p>
      <p>Department: {staff.department}</p>
      <p>Position: {staff.position}</p>
    </>
  );
}

export default App;
