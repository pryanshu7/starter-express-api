var app = document.getElementById('typing');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('#BeAwesome')
.pauseFor(700)
.deleteAll()
.typeString('#DoAwesome')
.pauseFor(700)
.deleteAll()
.typeString('#StayAwesome')
.pauseFor(700)
.deleteAll()
.start();