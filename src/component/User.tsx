type UserProps = {
  user: {
    name: string;
    age: number;
    isRegisterd: boolean;
    lang: string[];
  };
};

const User = ({ user }: UserProps) => {
  return (
    <div style={{ textAlign: 'center', border: '1px solid', margin: '0.5rem' }}>
      <h2>{user.name}</h2>
      <h2>{user.age} years old</h2>
      {user.isRegisterd ? <p>Registered User</p> : <p>Not Registerd User</p>}
      <p>
        Spacks:
        {user.lang.map((language, index) => {
          return <span key={index}> {language} </span>;
        })}
      </p>
    </div>
  );
};

export default User;
