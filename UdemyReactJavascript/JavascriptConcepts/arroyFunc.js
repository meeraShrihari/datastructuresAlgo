const profile = {
    firstName: '',
    lastName: '',
    setName: function(name) {
        let splitName = (n) => {
            let nameArray = n.split(' ');
            this.firstName = nameArray[0];
            this.lastName = nameArray[1];
            console.log(this);
        }
        splitName(name);
    }
}

profile.setName('Meera Bhaskaran');
console.log(profile.firstName);