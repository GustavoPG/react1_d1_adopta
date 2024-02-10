import MyBadge from "./Tags";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '/src/css/MyCard.css';

//Componente Card
const MyCard = ({ myCardSrc, myCardName, myCardDescription, textBadge, colorBadge }) => {
  return (
    <div className="col-auto">
      <Card style={{ width: '20rem' }}>
        <Card.Img variant="top" src={myCardSrc} />
        <Card.Body>
          <Card.Title className="text-center">{myCardName}</Card.Title>
          <Card.Text>
            {myCardDescription}
          </Card.Text>
          <MyBadge text={textBadge} color={colorBadge} />
        </Card.Body>
      </Card>
    </div>
  );
};

export default MyCard;