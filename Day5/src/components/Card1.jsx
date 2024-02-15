import { Panel } from 'rsuite';
import PropTypes  from 'prop-types';

const Card1 = ({Image,name,content}) => (
  <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: 240,fontWeight:'bolder',fontSize:20}}>
    <img src={Image} height="240" />
    <Panel header={name}>
      <p>
        <small style={{fontSize:15}}>
          {content}
        </small>
      </p>
    </Panel>
  </Panel>
);

Card1.propTypes={
    name:PropTypes.string.isRequired,
    content:PropTypes.string.isRequired,
    Image:PropTypes.string.isRequired
}
export default Card1;