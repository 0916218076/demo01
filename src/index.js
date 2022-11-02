import React from 'react';
import ReactDOM from 'react-dom';

function App() {
    return hi(
        <div>
            <h1> Hello Everyone !</h1>
            <h2>My name's Tai</h2>
        </div>,
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
