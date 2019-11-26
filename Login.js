import React,{Component} from 'react';
import './styles.css';
import ServerData from '../api/ServerData';
import Loader from 'react-loader-spinner'


class LoginForm extends Component{
    constructor(props){
        super(props);
        this.state={
            userName:'',
            password:'',
            error:'',
            loading:true,
            token:'',
            UserID:'',
            loggedIn:false,
           
        }
    }

    componentDidMount()
    {
        const rememberMe = localStorage.getItem('rememberMe') === 'true';
        const user = rememberMe ? localStorage.getItem('token') : '';
      
    }

    renderButton(){

        return(
            <button
                className="form__submit-btn"
                onClick={this.loginUser}>
                    Login
            </button>
        )
        
    }

    renderError(){
        if(this.state.error){
            return(
                <div className="ui basic red basic label" style={{display: "block",margin: "auto",padding: "10px",margin:"20px"}}>
                    <div style={{textAlign: "center"}}>{this.state.error}</div>
                </div>
            )
        }
    }

    renderSpinner=()=>{

        if(this.state.loading)
        {
            return <Loader 
            type="Puff"
            color="#bf94e4"
            height={100}
            width={100}
            timeout={3000} />

        }
    }
    
    loginUser= async ()=>{
        if(this.state.userName && this.state.password)
        {
            this.renderSpinner();
            await ServerData.get('/DoLogin/'+this.state.userName+'/'+this.state.password)
            .then((res)=>{
                this.setState({
                        token: res.data.Token,
                        error:res.data.error,
                        loading:false,
                        UserID:res.data.UserID,
                        loggedIn:true,
                        username:res.data.UserName             
                    }); 
                });
                this.SetLocalStorage();
        }
        else{
            this.setState({
                error:"please fill out both fields"
                
            });
        }
    }

    SetLocalStorage=()=>{
        localStorage.setItem('rememberMe', true);
        localStorage.setItem('token', this.state.token);
        localStorage.setItem('userid', this.state.UserID);
        localStorage.setItem('userName', this.state.userName);
        this.RedirectToLandingPage();
    }
    
    RedirectToLandingPage=()=>{
        this.props.history.push('/courses');
    }

    
        

    render(){
        return(
           <div className="ui container">
               <div className="ui row">
                    <div className="ui column ">
                        <div className="form__field-wrapper">
                            <input
                            type="text" 
                            label="Email"
                            placeholder="email@gmail.com"
                            onChange={(e)=> this.setState({userName:e.target.value})}
                            value={this.state.email}
                            className="form__field-input"
                        />
                        <label className="form__field-label" htmlFor="username">Username</label>
                        </div>
                    </div>

                <div className="ui column ">
                    <div className="form__field-wrapper">
                        <input
                            type="password"
                            label="Password"
                            placeholder="*******"
                            onChange={(e)=> this.setState({password:e.target.value})}
                            value={this.state.password}
                            className="form__field-input"
                        />
                        <label className="form__field-label" htmlFor="password">Password</label>
                    </div>
                </div>

                <div className="ui column ">
                    {this.renderError()}
                    <div className="form__submit-btn-wrapper">
                        {this.renderButton()}  
                    </div> 
                </div>
            </div>
        </div>    
        )
    }
}


export default LoginForm;