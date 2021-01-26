import React from 'react';
import './login.css'
import ImgLogin from './img/imgLogin.jpg'

function Login(){
    return(
        <div class="container--aplication" >

        <div class="container--img">
            <img  className="img--login" src={ImgLogin}/>
        </div>
        
        <div class="container--login">
    
            <div class="login--inter" style={{margin:"auto"}}>
    
              <form>
                  <h1>Login: </h1>
                  <div class="form-group">
                    <label for="exampleInputEmail1">Email:</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" required />
          
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">Senha:</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" name="senha" required />
                  </div>
                
                    <div className="botao">
                    <button type="submit" class="btn--entrar">Entrar</button>
                    </div>
        
                </form>
                
          </div>
        </div>
    
      </div>
    )
}

export default Login;