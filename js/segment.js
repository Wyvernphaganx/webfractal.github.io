
class Segment {
  
    constructor(a, b) {
      this.a = a.copy()
      this.b = b.copy()
    }
    
   generate() {
      let child = [];
      
      let v = p5.Vector.sub(this.b, this.a)
      v.div(3)
      
     
      let b1 = p5.Vector.add(this.a, v)
      child[0] = new Segment(this.a, b1)
      
      
      let a1 = p5.Vector.sub(this.b, v)
      child[3] = new Segment(a1, this.b)
      
      v.rotate(-PI/3)
      let c = p5.Vector.add(b1,v)
  
      
      child[1] = new Segment(b1, c)
      
      child[2] = new Segment(c, a1)
      return child
    }
    
    show() {
      stroke(sCol)
      strokeWeight(5)
      line(this.a.x, this.a.y, this.b.x, this.b.y)
    }
  }