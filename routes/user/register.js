const req = require("express/lib/request")
const res = require("express/lib/response")
/**
 * 
 * @param {req} request 
 * @param {res} response 
 */
module.exports.execute = (request, response)=>{
    response.send(`<!DOCTYPE html>
    <html>
      <head>
        <meta charSet="utf-8"/>
        <meta http-equiv="x-ua-compatible" content="ie=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
        <title>is-a.dev | Free domain registration for software devs</title>
        <style>
          html, body {
            --header-bg: #0f0c19;
            --accent: #4e3aA3;
            --body-fg: #2f2c39;
    
            margin: 0;
            padding: 0;
            background-color: #efefef;
            color: var(--body-fg);
    
            font-family: Arial, Helvetica, sans-serif;
          }
          body * { box-sizing: border-box; line-height: 1.5em; }
    
          a, a:visited { color: var(--accent); }
          a:hover { opacity: 0.8; }
        </style>
      </head>
      <body>
        <style>
          header {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            background-color: var(--header-bg);
            color: #d8dee9;
          }
    
          .domain {
            display: flex;
            justify-content: flex-start;
            letter-spacing: 1px;
            font-size: 1.5em;
          }
          .domain-name {
            position: relative;
          }
    
          @keyframes domain-fade {
            0% { opacity: 0; }
            12% { opacity: 1; }
            25% { opacity: 0; }
          }
    
          .domain .name {
            padding: 0 .3em 3px;
            transform: translateY(-1px);
            background-color: #fff;
            color: var(--accent);
            font-weight: bold;
          }
    
          .domain-name div {
            opacity: 0;
            --duration: 4s;
            animation: domain-fade var(--duration) ease-in-out infinite;
          }
          .domain-name div:nth-child(1) { animation-delay: 0s; }
          .domain-name div:nth-child(2) { animation-delay: 1s; }
          .domain-name div:nth-child(3) { animation-delay: 2s; }
          .domain-name div:nth-child(4) { animation-delay: 3s; }
        </style>
        <header>
          <div class="domain">
            <img src="https://raw.githubusercontent.com/is-a-dev/register/main/media/banner.png" style="max-width: 1000px; width: 100%; display: block;" />
          </div>
        </header>
    
        <style>
          main {
            padding: 1em;
            margin: 1em auto;
            max-width: 1000px;
          }
    
          h1 {
            font-size: 2em;
            margin: 0;
            padding: 1em 0 0.2em 0;
            border-bottom: 1px solid #ddd;
          }
        </style>
        <main>
          <h1>Register An Account</h1>
          <form id="registration">
              <input type="text" id="email" placeholder="Email">
              <br>
              <input type="password" id="password" placeholder="Password">
              <br>
              <input type="submit" value="Register">
          </form>
        </main>

        <script>
        const form = document.getElementById('registration');
        form.addEventListener('submit', registerUser)

        async function registerUser(event) {
          event.preventDefault()
          const email = document.getElementById('email').value;
          const password = document.getElementById('password').value;

          const result = await fetch('/users/authentication/api/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email,
            password
          })
          }).then(resp => res.json())

        }
        </script>
      </body>
    </html>`)
}