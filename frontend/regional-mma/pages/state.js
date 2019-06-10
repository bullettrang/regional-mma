import { withRouter } from 'next/router';


const State = withRouter(props => (
  <div className="State">
    <h1>{props.router.query.state}</h1>
    <div>
      <p>State PAGE.</p>
    </div>
    <style jsx>{`
        .State {
          padding:1em;
          box-sizing: inherit;
          text-align:center;
        }
        `}
      </style>
  </div>
));

export default State;