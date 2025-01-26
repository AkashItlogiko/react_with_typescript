type userProps = { name: string; age: number; isRegisterd: boolean };

const User = ({ name, age, isRegisterd }: userProps) => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h2>{name}</h2>
      <h2>{age} years old</h2>
      {isRegisterd ? <p>Registered User</p> : <p>Not Registerd User</p>}
    </div>
  );
};

export default User;
