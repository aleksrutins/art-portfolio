import React, {lazy, Suspense} from 'react';
import Spinner from 'react-bootstrap/Spinner';
import ReactDOM from 'react-dom';
const App = lazy(() => import('./components/App'));
const loader = () => <Spinner animation="border" style={{marginLeft: "50%", marginRight: "50%", marginTop: "50%", marginBottom: "50%"}} />
ReactDOM.render(<Suspense fallback={loader()}><App/></Suspense>, document.querySelector("main"));