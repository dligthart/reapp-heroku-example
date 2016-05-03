# Running reapp on heroku

Run your reapp project using Express on 

# Install
- Copy server.js to your project workdir.
- Copy Procfile to your project workdir.
- npm install express --save

## Build
  
  - reapp build web

## Run
  
  - node server
  
## Deploy

Set the heroku NODE_ENV environment variable to 'production' or change the value in server.js.
  
  - heroku config:set NODE_ENV=production

Deploy:
  - git add server.js
  - git add Procfile
  - git commit -a -m 'run on heroku'
  - git push heroku master

# Sources
- http://reapp.io/
- https://toolbelt.heroku.com/
