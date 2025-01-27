type UserDemoProps = {
  users: {
    id: number;
    name: string;
    email: string;
    age: number;
  }[];
};

const UserDemo = ({ users }: UserDemoProps) => {
  return (
    <div>
      {users.map(user => {
        const { id, name, age, email } = user;
        return (
          <div key={id}>
            <h2>Id :{id}</h2>
            <h2>Name :{name}</h2>
            <h2>Age :{age}</h2>
            <h2>Email@ :{email}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default UserDemo;
