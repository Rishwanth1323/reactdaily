import {Heading} from './Components/Heading'
import { Images } from './Components/Images'
import {recipe} from './Data/Data'
import { CustomList } from './Components/CustomList'
import {Example} from './Components/Example'

function App() {
  return (
    <>


    {
      recipe.map(
        (each,index)=>{
          return(

            <div key={index}>
              <Heading size={1} content={each.name} />
              <Images src={each.image} />
              <Heading size={3} content={"INGRIDIENTS TO PREPARE"}/>
              <CustomList list={each.ingredients}/>
              <Heading size={3} content={"INSTRUCTIONS"} />
              <CustomList list={each.instructions}/>
              {/* <Heading>THIS IS RISHWANTH</Heading>
              <Example content={"blabla"}>
                {/* This is a CHILDRED 
                 */}
                 {/* <Heading size={1} content={each.name} /> */}
                 {/* <h1>la lala laa la</h1>
                </Example> */} */}


            <hr />

            </div>
          )
        }
      )
    }

    </>
  )
}

export default App
