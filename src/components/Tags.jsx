import Badge from 'react-bootstrap/Badge';

//Componente Badge
const MyBadge = ({ color, text }) => {
  return (
    <h4 className='text-center'><Badge bg={color}>{text}</Badge></h4>
  );
};

export default MyBadge;