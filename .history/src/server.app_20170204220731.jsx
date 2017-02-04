import Express from 'express';
import path from 'path'
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import routes from './components/routing/routes.jsx';

const app = new Express();
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(Express)

app.get("*", function(req, res) {
            match({ routes, location: req.url }, function(err, redirectLocation, renderProps) {
                    if (err) {
                        return res.status(500).send(err.message);
                    }
                    //if there is a redirection, pass it back to express to handle
                    if (redirectLocation) {
                        return res.redirectLocation(302, redirectLocation.pathname + redirectLocation.search);
                    }

                    //if we have render props, render routes
                    if (renderProps) {
                        let html = renderToString( < RouterContext {...renderProps}/>);
                        //render view
                        return res.render("app",{html});
                    }
                    return res.status(404).send("not Found");
                    });
            })