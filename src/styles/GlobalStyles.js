import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  ul, li, h1, h2, h3, p, button { margin: 0; padding: 0; background: #fefefe; }
  ul { list-style: none;  }
  button { background: transparent; border: 0; outline: 0 }

  body {
    background-image: url("https://s3.amazonaws.com/odeassa1014/images/90s-pattern-retro-wallpaper-pattern-wallpaper_lcc6_gz.jpg");
    background-attachment: fixed;
    height: 100vh;
    margin: 0 auto;
    max-width: 500px;
    overscroll-behavior: none;
    width: 100%; 
    box-shadow: 0 0 50px #ccc;
    
      
      
     
  }

  #app {
    box-shadow: 0 0 10px rgba(0, 0, 0, .05);
    overflow-x: hidden;
    min-height: 100vh;
    padding-bottom: 10px;
    background: #fefefe;
  }

 
  body::-webkit-scrollbar {
    width: 0.3em;
}
 
body::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
}
 
body::-webkit-scrollbar-thumb {
  background-color: darkgrey;
  outline: 0.5px solid slategrey;
  border-radius: 30px;
}

}

ul::-webkit-scrollbar {
  width: 0.1em;
  height: 0.5em;
  border-radius: 30px;
  
}

ul::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
  border-radius: 30px;
}

ul::-webkit-scrollbar-thumb {
background-color: darkgrey;
opacity: .5;

border-radius: 30px;
}






`
