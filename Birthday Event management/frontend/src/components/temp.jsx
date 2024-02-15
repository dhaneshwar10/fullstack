import {Panel} from "rsuite"
import PropTypes from 'prop-types';



const Comp = ({name,content,Image}) => (
    <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: 300 }}>
      <img src={Image} height="240"/>
      <Panel header={name}>
        <p>
          <small>
          {content}
          </small>
        </p>
        {/* <button id='butn'>{}</button> */}
      </Panel>
    </Panel>
  );
  Comp.propTypes={
    name:PropTypes.string.isRequired,
    Image:PropTypes.string.isRequired,
    content:PropTypes.string.isRequired,
    // butx:PropTypes.string.isREquired
  }
  export default Comp;  