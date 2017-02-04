import Express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import routes from './components/routing/routes.jsx';

const app = new Express();

app.get("*", function(req, res) {
    match({ routes, location: req.url }, function(err, redirectLocation, renderProps) {
        if (err) {
            return res.status(500).send(err.message);
        }
        //if there is a redirection, pass it back to express to handle
        if (redirectLocation) {
            return res.redirectLocation(302, redirectLocation.pathname + )
        }
    });
})