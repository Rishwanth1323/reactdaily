import {Heading} from './Components/Heading'
import { Images } from './Components/Images'
import {recipe} from './Data/Data'
import { CustomList } from './Components/CustomList'
import {Example} from './Components/Example'
import {Greeting} from './Components/Greeting'
import {Button} from './Components/Button'

function App() {
  const o = [{
    name:"John",
    role:"software developer"
  },
  {
    name:"ohn",
    role:"React developer"
  },
  {
    name:"town",
    role:"Angular developer"
  },
  {
    name:"mown",
    role:"Beta developer"
  }



]
  return (
    <>{
         o.map((each,index)=>{

          return (
            <div key={index}>
            <Greeting content={each.name}/>
            <Button content={each.name} role={each.role} >CLick on {each.name}</Button>
            </div>
          )
         })
      }

    </>
  )
}

export default App
