class Ground{
  constructor(x,y,w,h){//Constructor con argumentos 
      
    //Opciones del motor matter.js que se le asignara a este cuerpo
      let options = {
          isStatic:true
      };

      //Asignar el cuerpo especifico de nuestro motor 
      this.body = Bodies.rectangle(x,y,w,h,options);
      this.w = w;
      this.h = h;

      //Agregar alnuevo mundo "este" cuerpo
      World.add(world, this.body);
  }

  //Función para mostrar el cuerpo en el programa 
  show(){
      //Almacenamos la posición del objeto
      var pos = this.body.position;
      push(); //Push captura la nueva posición 
          rectMode(CENTER);
          stroke(255);
          fill(127);
          rect(pos.x, pos.y, this.w, this.h);//Asignamos figura del cuerpo
      pop(); //Vuelve a la posición anterior 
  }
}


