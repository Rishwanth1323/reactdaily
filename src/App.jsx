import { Heading } from './Components/Heading';
import { Images } from './Components/Images';
import { recipe } from './Data/Data';
import { CustomList } from './Components/CustomList';
import { Example } from './Components/Example';
import CustomCard from './Components/CustomCard';
import { data } from './Data/Nddata';

function App() {
  return (
    <>
      {data.map((i, index) => (
        <div key={index}>
          <CustomCard name={i.name} designation={i.designation} />
        </div>
      ))}
    </>
  );
}

export default App;
