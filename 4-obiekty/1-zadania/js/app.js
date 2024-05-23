const rectangle = {
    height: 5,
    width: 3,
    showArea() {
        let area = this.height * this.width
        console.log(`Prostokąt ma szerokość ${this.width} i wysokość ${this.height}. Jego pole to ${area}`); 
    }
}
const circle = {
    radius: 9,
    showArea() {
        let area = this.radius * 2;
        console.log(`Koło ma promień ${this.radius}. Jego pole to ${area}`); 
    }
}

rectangle.showArea()
circle.showArea()