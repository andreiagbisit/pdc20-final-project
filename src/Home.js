function MyButton(){
return(
<div>
    <button type="button" class="btn btn-primary">SIGN IN</button>
</div>
)
}

function UserEntry(){
    return(
        <div>
            <label for="emailForm" class="form-label">Email address:</label>
            <input type="email" class="form-control" id="emailForm" placeholder="name@example.com"/>
        <br/>
            <label for="passwordForm" class="form-label">Password:</label>
            <input type="password" class="form-control" id="passwordForm" placeholder="[password]"/>
        </div>
    )
}
export default function App(){
    return(
        <div>
            <h1>Sign In</h1>
            <br />
            <UserEntry/>
            <br />
            <MyButton/>
        </div>
    )
}