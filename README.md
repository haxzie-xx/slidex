# slide-express
Express app to control slides over wifi from a remote device. 

## Installation
Install globally using npm
```
$ npm install -g slidex
```

### usage
```shell
$ slidex
# runs on default port 8080
```
```shell
$ slidex 8989
# to run on port 8989
```

_By default the app will take 8080 as the port. You can choose any port between 1024 - 65535._  

Visit the URL printed on the terminal or use the QR code to access the WebApp. Add the webApp to home screen from your browser to use it as a PWA. *Note a PWA generated in a network will be functional only for that network. If you change the network or the IP of the host gets changed, you might need to redo the above steps.

### OR

- Clone the repository
```
$ git clone https://github.com/haxzie/slidex.git
```
- cd into the repository and install dependencies
```
$ cd slidex
$ npm install
```
- run the server
```
$ npm start
```
  
## Setting up for development
- Clone the repository
```
$ git clone https://github.com/haxzie/slidex.git
```
- cd into the repository and install dependencies
```
$ cd slide-express
$ npm install
```
- run the development server
```
$ npm run dev
```
# Contributing
Pull requests are welcomed, Please address your PR for any of the issue labled as `help wanted`, or `good first issue`. If you'd like to add features please raise an issue and confirm it with the maintainers.

### Instructions
- Fork the repository to your account.
- Copy the clone url of your repository.
- Clone the repository to your machine `git clone https://github.com/YOUR_USER_NAME/slidex.git`
- Make sure you create a branch with the name as the issue you are working on `git checkout -b YOUR_BRANCH_NAME`, and make sure you are working on the same branch and not the `master`, run `git status` to know which branch you are working on, run `git branch`, your branch will be highlighted with an `*`. If you are not in your branch or want to move to another branch use `git checkout BRANCH_NAME`. 
a good branch name should explain what this branch is about or what you are working on eg. `improved_connection`, `css_animations` etc.
- Add the upstream url of original repository, follow the instructions [here](https://help.github.com/articles/configuring-a-remote-for-a-fork/)
- Make sure your repository is in sync with the original repository's master branch. Follow the instruction [here](https://help.github.com/articles/syncing-a-fork/) to know how to keep your local repository in sync.
- Finally when you have made the changes, submit a pull request through github from the original repository, choose your branch against the master of original or create a new branch.

# Dependencies
For more info on the dependencies used, visit their official pages linked below
- [Express](https://github.com/expressjs/express)
- [node-key-sender](https://github.com/garimpeiro-it/node-key-sender)
- [ip](https://github.com/indutny/node-ip)
- [qrcode-terminal](https://github.com/gtanner/qrcode-terminal)
- [socket.io](https://soket.io)