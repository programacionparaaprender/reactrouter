import * as React from 'react';
import { Route } from 'react-router';
import Users from './users'
import Contact from './contact'
import Notfound from './notfound'
import Counter from './counter.js'
import Vieja from './juegos/vieja/index.js';
import GoogleMap from './google/GoogleMap.js';
import Layout from './components/Layout'
export default () => (
    <Layout>
        <Route path="/googlemaps" component={GoogleMap} />
        <Route path="/vieja" component={Vieja} />
        <Route path="/users" component={Users} />
        <Route path="/contact" component={Contact} />
        <Route path="/counter" component={Counter} />
        <Route component={Notfound} />
    </Layout>
); 