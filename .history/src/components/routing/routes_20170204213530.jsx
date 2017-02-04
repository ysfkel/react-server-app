





const routes=(
                <Route path="/" component={App}>
                  <IndexRoute component={Home}/>
                  <Route path="home" component={Home}/>
                  <Route path="autos" component={Autos}/>
                  <Route path="auto/:id" component={AutoDetails} />
                </Route>  
);

exp