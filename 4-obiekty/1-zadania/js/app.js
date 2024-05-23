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



//2

const currentUser = {
    name: 'Ania',
    surname: 'Nowak',
    email: 'an@poczta.pl',
    www: 'anna.pl',
    userType: 'admin',
    isActive: '',
    show() {
        console.log(`${this.name} ${this.surname}, ${this.email}, ${this.www}, ${this.userType}, active: ${this.isActive}`);
    },
    setActive(active) {
     this.isActive = active;
}
}
currentUser.setActive(false)
currentUser.show()


//3

const book = {
    title: 'Little Prince',
    author: 'Johny Col',
    pageCount: 127,
    publisher: 'Public Book',
    // showDetails() {
    //     for(let key in book) {
    //         console.log(`${key}: ${book[key]}`);
    //     }
    // }
    showDetails() {
    //     for(const key of Object.keys(book)) {
    //         console.log(key);
    //     }
    // }
    for(const key of Object.entries(book)) {
        console.log(key);
    }
    }
}

book.showDetails();



//4
const spaceShip = {
name: 'Enterprise',
currentLocation: 'Earth',
flyDistance: 0,
flyTo(place, distance) {
    this.currentLocation = place;
    this.flyDistance = distance;
},
showInfo() {
    console.log(`Informacje o statku: 
    Statek ${this.name}
    doleciał do miejsca ${this.currentLocation}
    Statek przeleciał już całkowity dystans ${this.flyDistance}`);
}
}

spaceShip.flyTo('Saturn', '2000km')
spaceShip.showInfo();