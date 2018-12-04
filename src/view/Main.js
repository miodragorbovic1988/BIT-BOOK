import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Feed } from './components/Feed';
import { SinglePagePost } from './components/SinglePagePost';

const Main = () => {
    return (
        <div className="mainContent">
            <Switch>
                {/* /post/333 */}
                <Route path="/post/:type/:postId" component={SinglePagePost} />
                <Route path="/feed" component={Feed} />
                <Route path="/" component={Feed} />
            </Switch>
        </div>
    )
}

export { Main }