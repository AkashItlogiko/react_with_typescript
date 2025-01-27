import { useState } from 'react';
import './App.css';

type User = {
  id: number;
  name: string;
  email: string;
};

const App = () => {
  const [user, setUser] = useState<User>({} as User); ////akhane amader useState hook ar sathe <User>  User likhechi mane amader user state ar value ta User ar moddhe theke ja ashbe shudhu tai eee hobe ar baite kono kichu diye jodi ami amader user state take update korte chai amader setUser() function take call kore jemon string , number , boolean mane true false ai dhoroner data diye jodi amader user state take update korte chai amader setUser() function take call kore tahole amader error dekhabe karon amader useState hook ar sathe <User> aita add kore diyechi mane amader User ar value diyei shudhu amader user state ta update hobe ta chara oono kono data diye amader user state ta update kora jabe na and useState() hook ar moddhe ami ({} as User) diye amader user state take initialize kore diyechi mane amader user state ar value ta porthom aaa empty {} object thakbe tai amra {} as User likhechi mane User ke {} empty string hishebe prothom aa amader user state ar moddhe initialize kore debe.

  const handleAddUser = () => {
    setUser({ id: 1, name: 'Akash', email: 'akash@gmail.com' });
  };
  return (
    <div style={{ textAlign: 'center' }}>
      <button onClick={handleAddUser}>AddUser</button>
      <p>{user.name}</p>
    </div>
  );
};

export default App;
