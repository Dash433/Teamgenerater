
class Manager{
    constructor(name,id,email,office){
        this.name=name;
        this.id=id;
        this.email=email
        this.office=office  // GitHub username
   }
    getName(){
        return this.name;
    }
    getOfficeNumber(){
        return this.office
    }
    getId(){
        return this.id;
    }
    getEmail(){
        return this.email;
    }
    getRole(){
        return  "Manager"
    }
}
module.exports=Manager