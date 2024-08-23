import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import DNA from './ClassLoader'
import CustomToast from './Toast/CustomToast';
import  CustomHeart  from './CustomHeart';
import { CiUmbrella } from "react-icons/ci";
function CustomCard({name,designation}) {
  return (
    <Card style={{ width: '18rem' }}>
   
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {designation}
        </Card.Text>
        <DNA visible={true} height={"150"} width= {"70"} ></DNA>
        {/* <Button variant="primary">Go somewhere</Button> */}
        <CustomToast></CustomToast>
    <CustomHeart></CustomHeart>
    <CiUmbrella />
        {/* <Heart></Heart> */}
      </Card.Body>
    </Card>
  );
}

export default CustomCard;