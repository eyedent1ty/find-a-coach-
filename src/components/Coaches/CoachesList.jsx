import CoachesItem from './CoachesItem';

const coaches = [
  {
    id: 1,
    name: 'John Daniel Del Monte',
    rate: 300,
    occupation: 'Student Mentor',
    skills: ['frontend', 'backend']
  },
  {
    id: 2,
    name: 'Stephanie Joy Falame',
    rate: 450,
    occupation: 'Student Nursing',
    skills: ['nursing', 'rle', 'career']
  }
];

function CoachesList() {
  return (
    <ul className="space-y-6">
      {coaches.map((coach) => (
        <CoachesItem key={coach.id} coach={coach} />
      ))}
    </ul>
  );
}

export default CoachesList;
