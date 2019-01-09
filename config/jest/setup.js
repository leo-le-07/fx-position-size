import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import momentTz from 'moment-timezone';
import moment from 'moment';
import 'jest-enzyme';
import MockDate from 'mockdate';

configure({ adapter: new Adapter() });

beforeEach(() => {
  MockDate.set(moment('2000-01-01 02:43:46 +0000', 'YYYY-MM-DD HH:mm:ss Z'));
});

afterEach(() => {
  MockDate.reset();
});
