import Card from '../Card/Card';
import Badge from '../Badge/Badge';
import Button from '../Button/Button';

import johnDaniel from '../../assets/john_daniel.jpg';

function CoachesItem({ coach }) {
  const { name, occupation, rate, skills } = coach;

  return (
    <li className="max-w-screen-sm mx-auto">
      <Card className="flex flex-col h-full md:flex-row md:justify-center md:space-x-12">
        {/* Left */}
        <section className="flex justify-center items-center">
          <img src={johnDaniel} className="h-28 rounded-full md:h-36" />
        </section>

        {/* Right */}
        <section className="text-center space-y-8">
          <div>
            <h2 className="text-3xl font-bold">{name}</h2>
            <h3>{occupation}</h3>
          </div>

          <ul className="flex justify-center space-x-1">
            {skills.map((skill) => (
              <li className="uppercase" key={skill}>
                <Badge>{skill}</Badge>
              </li>
            ))}
          </ul>

          <div className="flex justify-center space-x-1">
            <Button>Contact</Button>
            <Button>View Details</Button>
          </div>
        </section>
      </Card>
    </li>
  );
}

export default CoachesItem;
