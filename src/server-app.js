import Express from 'express';
import path from 'path'
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import routes from './components/routing/routes.jsx';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

process.env.NODE_ENV = 'DEV';

const app = new Express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(Express.static(path.join(__dirname, "public")));

app.get("*", function(req, res) {
            match({ routes, location: req.url }, function(err, redirectLocation, renderProps) {

                console.log('renderProps',renderProps)
                    if (err) {
                        return res.status(500).send(err.message);
                    }
                    //if there is a redirection, pass it back to express to handle
                    if (redirectLocation) {
                        return res.redirectLocation(302, redirectLocation.pathname + redirectLocation.search);
                    }

                     // `RouterContext` is what the `Router` renders. `Router` keeps these
    // `props` in its state as it listens to `browserHistory`. But on the
    // server our app is stateless, so we need to use `match` to
    // get these props before rendering.

                    //if we have render props, render routes
                    // if we got props then we matched a route and can render
                    if (renderProps) {

                        /**
                         * FOR MATERIAL UI
                         */
                               global.navigator = {
                                    userAgent: req.headers['user-agent']
                                };
                                console.log('>>>>>>>> navigator.userAgent')
                                console.log(navigator.userAgent)
                                const muiTheme = getMuiTheme({userAgent: req.headers['user-agent']});

                          /**
                           * END MATERIAL UI CONFIG
                           * */      

                              let html = renderToString( 
                                         <MuiThemeProvider muiTheme={muiTheme}>
                                         < RouterContext {...renderProps }/>
                                                </MuiThemeProvider>
                            );

                            return res.render("index", { html });
                        }
                        return res.status(404).send("not Found");
                    });
            });


        const PORT = process.env.PORT || 9000;

        app.listen(PORT, error => {
            if (error) {
                return console.error(error);
            }
            console.log(`Express server litenning on port ${PORT} localhost`);
        })