type Users = {
    name:String;
    adress:{
        city: String;
        uf: String;
    }
};

function showWelcomeMenssage(user) {
    return `welcome ${user.name} (${user.address.city} - ${user.address.uf})`;
}

showWelcomeMenssage({
    name:"Gabriel",
    adress:{
        city: "São Paulo",
        uf: "SP"
    }
})