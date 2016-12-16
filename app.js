function App(n,m,s){
  this.name = n;
  this.memeory = m;
  this.state = s;

  this.open =function(){
    this.state = "active";
  };
  this.close =function(){
    this.state = null;
    this.memory = 0;
  };
  this.sleep =function(){
    if(this.state == "active"){
      this.memeory = this.memory/2;
      this.state = "sleep";
    }
  };
  this.active =function(){
    if(this.state == "sleep"){
      this.memory = this.memory*2;
      this.state = "active";
    }
  };
}
