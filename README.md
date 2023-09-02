# Netflix GPT

- npm create vite@latest
- Configured TailwindCSS
- Header
- Routing
- Login Form/ Sign Up Form
- Form Validation
  - use Regex
  - useRef()
  - Firebase Setup
  - Deploying our app to production
- Create SignUp User Account
- Implement Sign In user API
- Created Redux Store with userSlice
- Implemented Sign Out feature
- Update profile
- BugFix: Sign up user displayName and profile pricture update
- BugFix: if the user is not logged in Redirect /browse to login Page and vice-cerca
- Unsubscribe to the onAuthStateChanged callback
- Add hardcoded values to the constants file
- Browse Page: using TMDB to fetch movies data
  - Register TMDB API & get access token
  - get Data deom TMDB now playing movie list API
- Build Main Container
  - custom Hooks
  - fetch Data for Movie Data and Tailer Data
  - Build Redux Store
  - update store with movie Data

# Features

- Login/Sign Up
  - Sing In/ Sing Up Form
  - Redirect to Browse Page
- Browse (after authentication)
  - Header
  - Main Movie
    - Trailer in Backgrpund
    - Title & Description
    - Movie Suggestion
      - MovieLists \* N
- NetflixGPT
  - Search Bar
  - Movie Suggestions
