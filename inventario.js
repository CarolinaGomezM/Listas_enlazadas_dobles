class Inventario{
    constructor(){
        this.primero = null;
        this.ultimo = null;
        this.cont = 0;
    }

    buscar(codigo){
        let aux = this.primero;
        while(aux != null){
            if(aux.codigo === codigo){
                return aux;
            }
            aux = aux.siguiente;
        }
        return null;
       
}

    conseguirPosicion(codigo){
        let posicion = 0;
        let aux = this.primero;
        while(aux != null){
            if(aux.codigo === codigo){
                return posicion;
            }
            posicion++;
            aux = aux.siguiente;
        }
        return -1;
    } 



    añadir(producto){
        let temp=null;
        if(this.primero==null){
            this.primero=producto;
            this.cont++;
            return true;
        }else if(producto.obtenerCodigo() < this.primero.obtenerCodigo()){
            temp=this.primero;
            producto.siguiente=temp;
            temp.anterior=producto;
            this.primero=producto;
            this.cont++;
            return true;
        }else{
            temp=this.primero;
            while(temp.siguiente!=null && temp.obtenerCodigo() < producto.obtenerCodigo()){
                temp=temp.siguiente;
            }
            if(producto.obtenerCodigo() < temp.obtenerCodigo()){
                producto.siguiente=temp;
                producto.anterior=temp.anterior;
                temp.anterior.siguiente=producto;
                temp.anterior=producto;
                this.cont++;
                return true;
            }else if(producto.obtenerCodigo()>temp.obtenerCodigo()){
                producto.anterior=temp;
                temp.siguiente=producto;
                this.cont++;
                return true;
            }
        }
        return false;
    }   
 
    
    
    
    lista(){
      let res="";
      let aux = this.primero;
      while(aux != null){
          res += aux.obtenerDetalles() + "<br>";
          aux = aux.siguiente;
      }
      return res;
    }

    listainverso(){
      let listadoInverso="";
      let auxListado = "";
      let aux = this.primero;
      while(aux != null){
          auxListado = listadoInverso;
          listadoInverso = "<br>";
          listadoInverso += aux.obtenerDetalles() + auxListado ;
  
      
          aux = aux.siguiente;
      }
      return listadoInverso;
    }

    eliminar(codigo){
        let del= null;
        let inicio = this.primero.siguiente;
        let pos = this.buscar(codigo);

        if (pos == null){
            return false;
        }
        console.log(this.cont);
       if(this.primero.obtenerCodigo() == codigo && this.cont == 1){
        del = this.primero;
        this.primero = inicio;
        this.cont--;
        return true;
    }  
       if(this.primero.obtenerCodigo() === codigo){
        this.primero.siguiente.anterior = null;
        this.primero = this.primero.siguiente;
        this.cont--;
        return true;
       } 
       
       let v_primero=this.primero;
       let v_primero_s=this.primero.siguiente;

       while(v_primero_s!=null){
              if(v_primero_s.obtenerCodigo() === codigo && v_primero_s.siguiente == null){
                v_primero.siguiente = null;
                del = v_primero_s;
                del.v_primero = null; 
                this.cont--;
                return true;
              }
            
             else if(v_primero_s.obtenerCodigo()==codigo){
                v_primero.siguiente=v_primero.siguiente.siguiente;
                v_primero_s.siguiente.anterior=v_primero;
               del=v_primero_s;
               del.siguiente=null;
               del.anterior=null;
               return true;
           }else{
               v_primero=v_primero_s;
               v_primero_s=v_primero_s.siguiente;
           }
           
        }

        return false;
            
   
    }
}

