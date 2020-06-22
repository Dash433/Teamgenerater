
class Engineer{
    constructor(name,id,email,github){
        this.name=name;
        this.id=id;
        this.email=email
        this.github=github  
    }
    getName(){
        return this.name;
    }
    getGithub(){
        return this.github
    }
    getId(){
        return this.id;
    }
    getEmail(){
        return this.email;
    }
    getRole(){
        return  "Engineer"
    }
}
module.exports=Engineer