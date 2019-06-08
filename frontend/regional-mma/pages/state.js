import { withRouter } from 'next/router';


const State = withRouter(props => (
  <div>
    <h1>{props.router.query.state}</h1>
    <p>State PAGE.</p>
  </div>
));

export default State;