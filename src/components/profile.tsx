
import * as React from 'react';
import Card from './Card';
import Button from './Button';

interface ProfileProps {
  name: string;
  age: number;
}

const Profile: React.FC<ProfileProps> = ({ name, age }) => {
  return (
    <Card title="Profile" className="w-full max-w-sm sm:max-w-md mx-auto">
      <div className="text-center">
        <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg mb-2">Name: {name}</p>
        <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg mb-4">Age: {age}</p>
        <Button variant="primary" className="w-full sm:w-auto mt-4 px-6 py-2">Click me</Button>
      </div>
    </Card>
  );
};

export default Profile;
