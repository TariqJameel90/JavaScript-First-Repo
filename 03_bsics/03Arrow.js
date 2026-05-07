const user ={
    username: 'tariq',
    price : 100,

    welcomeMessage : function(){
        console.log(`Welcome ${this.username} to our website`);
    }

}

function chai(){
    console.log(this);
}

chai();