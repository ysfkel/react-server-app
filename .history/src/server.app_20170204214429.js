import Express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import routes from './components/routing/routes.jsx';

const app = new Express();

app.get("*", function(req, res) {
    match({ routes, location: s })
})