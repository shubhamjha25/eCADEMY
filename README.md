 <p align="center">
  <img src="https://github.com/shubhamjha25/eCADEMY/blob/main/src/logo.PNG" />
</p>

<br />

# eCADEMY 
- eCADEMY (e-ACADEMY) is a web-based open-source, modular, object-oriented and dynamic learning environment.
- It's completely built on React backed with Firebase.
- Material UI has been used for designing the layout.
- It is made keeping in mind the idea of Google Classroom

<br />

## TECHNOLOGY STACK
<img align="left" alt="REACT" width="45x" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png" />
<img align="left" alt="MATERIAL-UI" width="45px" src="https://github.com/SandeepKrSuman/SandeepKrSuman/blob/main/assets/materialui.png" />
<img align="left" alt="CSS3" width="45px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png" />
<img align="left" alt="FIREBASE" width="45px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/firebase/firebase.png" />
<img align="left" alt="Figma" width="45px" src="https://4.bp.blogspot.com/-LiJZ5I8E7K8/XIe_GeI5glI/AAAAAAAAIuw/4Awu8j8r0P8TKBXzyxyslHEfplOlK9-6QCK4BGAYYCw/s1600/icon%2Bfigma%2Bvector.png" />

<br /><br />
<br />

## KEY FEATURES
- User Logs in with Google (Firebase Google Authentication)
- User can **create a class**
- User can **post** something [as of now, only text messages] in his/her respective created class
- User can **join a class**
- User can **view** the announcements **posted** by the **course/class creator** (i.e., the teacher) 

<br />

## PROJECT SETUP
**1.** Fork [this](https://github.com/shubhamjha25/eCADEMY) repository. 🍴 <br />

**2.** Clone the forked repository on your local machine by writing the following command on your terminal: 👨🏻‍💻 <br />
```
git clone https://github.com/<your_user_name>/eCADEMY.git
```

**3.** Navigate to the project directory :file_folder: .

```
cd eCADEMY
```

**4.** Go to [Firebase](https://firebase.google.com) Console and Create a New Project

**5.** Enable _User Authentication_ and _Firestore Database_.

**6.** Put Your Firebase API Access Keys inside ./src/firebase.js (or you may store them as the environment variables)
```
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID",
    measurementId: "YOUR_MEASUREMENT_ID"
};
```

**7.** Install the necessary _node_modules_
```
npm install
```

**8.** Run the `localhost` server
```
npm start
```

After this complete setup, you will find that your react sever is up and running on the port **3000** which can be accessed through [http://localhost:3000/](http://localhost:3000/) <br />
You are good to go! 👍

<br /> 

## WIP
Some tasks are still pending. A few are listed below : 
- [ ] Add Attatchments (PDFs, Docs, Images)
- [ ] User Comments
- [ ] **Mark as Completed** Feature
- [ ] Course/Classroom Recommendation (Popular Ones)
- [ ] UI Enhancement

<br />

## CONTRIBUTION GUIDELINES
If you want to add a new feature, fix any typo feel free to do so. All sorts of contributions are welcomed. Just a few simple steps given which if followed properly makes the things a lot more easier for both the ends. 😎

**1.**  Fork [this](https://github.com/shubhamjha25/eCADEMY) repository.

**2.**  Clone your forked copy of the project.

```
git clone https://github.com/<your_user_name>/eCADEMY.git
```

**3.** Navigate to the project directory :file_folder: .

```
cd eCADEMY
```

**4.** Add a reference(remote) to the original repository.

```
git remote add upstream https://github.com/shubhamjha25/eCADEMY.git 
```

**5.** Check the remotes for this repository.

```
git remote -v
```

**6.** Always take a pull from the upstream repository to your main branch to keep it at par with the main project(updated repository).

```
git pull upstream main
```

**7.** Create a new branch.

```
git checkout -b <your_branch_name>
```

**8.** Perfom your desired changes to the code base.

**9.** Track your changes:heavy_check_mark: .

```
git add . 
```

**10.** Commit your changes .

```
git commit -m "Relevant Message"
```

**11.** Push the committed changes in your feature branch to your remote repo.

```
git push -u origin <your_branch_name>
```

**12.** To create a pull request, click on `compare and pull requests`.

**13.** Add appropriate title and description to your pull request explaining your changes and efforts done.

**14.** Click on `Create Pull Request`.


**15.** Voila :exclamation: You have made a PR to the **eCADEMY** :boom: . It is up and ready to be merged.

<br />

## SUPPORTING
Since I'm more of a Tea lover, You don't need to **Buy me a Coffee** 😜. <br />
A Simple Star ⭐ to this project repo is enough to keep me motivated for days.

<br />

## LICENSE
This project is under <a href="https://en.wikipedia.org/wiki/MIT_License">MIT License</a>. Copyright (c) 2021 **Shubham Jha**
