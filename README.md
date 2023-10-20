# Netflix GPT

Like Netflix but with GPT superpowers..

- built using Vite, ReactJs, Redux Toolkit, Tailwind CSS, Material UI Icon, TMDB API and Open AI GPT.
- This project aims to replicate the core functionality of a movie straming app, allowing users to search for movies genres using open AI GPT
- check out the app <a href='https://movieapp-clone.vercel.app/'>here</a>

## Creating a Test User

To create a test user for our application, follow these steps:

1. Visit the registration page at [https://movieapp-clone.vercel.app/](https://movieapp-clone.vercel.app/).
2. Fill out the registration form with the following details:
   - **Username**: Netflix
   - **Email**: netflix@gmail.com
   - **Password**: Netflix@123
3. Click the "Register" button to create the test user account.
4. You can now use the provided credentials to log in and test the application.

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

# Creation

- npm create vite@latest
- Configured TailwindCSS
- Header
- Routing
- Login Form/ Sign Up Form
- Form Validation
  - use Regex
  - useRef()
  - Firebase Authentication
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
- Main Container
  - custom Hooks
  - fetch Data for Movie Data and Tailer Data
  - Build Redux Store
  - update store with movie Data
  - Embedded the Youtube video and make it autoplay and mute
- Secondary Container
  - TMDB Image CDN Url
  - Build Movie List
  - custom hooks for movie list
- GPT Search Feature
  - Built GPT custom hook
  - Toggle GPT component from header
  - GPT search Bar
    - (FEATURE) Multi-language Feature
  - fetched GPTMovieSuggestion by using openAi
    - Reused MovieList component to build Movie Suggsetion
- Memoization
- Added .env file
- Responsive UI
