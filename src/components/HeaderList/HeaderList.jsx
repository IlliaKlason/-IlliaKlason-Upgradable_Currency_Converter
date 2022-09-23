import { List, Text } from './HeaderListStyled';

const HeaderList = ({ currency, location }) => {
  const locationConverter = curr => curr * currency[location];
  const list = ['UAH', 'USD', 'EUR'];
  return (
    <List>
      {list.map(item => {
        const UAH = item === 'UAH' && location === 'UAH';
        const EUR = item === 'EUR' && location === 'EUR';
        const value = UAH || EUR ? 1.0 : locationConverter(currency[item]);
        return (
          <li key={item}>
            <Text>{item}</Text>
            <Text>{value.toFixed(3)}</Text>
          </li>
        );
      })}
    </List>
  );
};
export default HeaderList;
