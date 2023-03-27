class car{
    constructor(brand, model){
        this.brand = brand
        this.model = model
        this.speed = 0
        this.motion = 'The car is not moving'
    }

    checkMotion(speed){
      return  speed > 0 ? this.motion = 'The car is moving' :  this.motion =  'The car is not moving'
    }

    accelerate(speed){
        this.checkMotion(speed)
       return this.speed = speed
    }

    brake(speed){
        let brk = this.speed -= speed
        this.checkMotion(brk)
        return brk
    }

    emergencyBrake(){
        this.checkMotion(0)
        return this.speed = 0
    }

    status(){
        return `car${this.brand} ${this.model} is moving ${this.speed} and status is ${this.motion}`
    }

}

const bmw = new car('bmw', 'e92')

bmw.accelerate(100)
bmw.brake(20)

console.log(bmw.status())