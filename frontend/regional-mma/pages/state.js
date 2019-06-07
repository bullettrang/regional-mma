import { withRouter } from 'next/router';
import Layout from '../components/learn/MyLayout.js';

const State = withRouter(props => (
  <Layout>
    <h1>{props.router.query.state}</h1>
    <p>This is the blog post content.</p>
  </Layout>
));

export default State;