class Game{
    constructor(){
        this.title = createElement('h2');
        this.greeting = createElement('h2');
        this.button1=createButton('Play A Game');
        this.playerId = createElement('h3');
        this.button2= createButton('Get Help To Start A Buisness');
        this.button3= createButton('Give Help To Start A Buisness');
        this.button4= createButton('Chat With A Friend');
        this.button5= createButton('Date And Time');
        this.button6= createButton('To Do List');
        this.button7= createButton('Notification Centre');
        
    }
    display(){
        this.title.html("Quick Messenger");
        this.title.position(350, 50);
        this.title.style('font-size', '70px');
        this.title.style('color', 'skyblue');

        this.greeting.html("Hello " + player.name + " :-)");
        this.greeting.position(360, 150);
        this.greeting.style('font-size', '50px');
        this.greeting.style('color', 'Blue');

        this.button1.position(370,330);
        this.button1.style('width', '200px');
        this.button1.style('height', '40px');
        this.button1.style('background', 'lightblue');

        this.button2.position(370,400);
        this.button2.style('width', '200px');
        this.button2.style('height', '40px');
        this.button2.style('background', 'lightblue');

        this.button3.position(370,470);
        this.button3.style('width', '200px');
        this.button3.style('height', '40px');
        this.button3.style('background', 'lightblue');

        this.button4.position(370,540);
        this.button4.style('width', '200px');
        this.button4.style('height', '40px');
        this.button4.style('background', 'lightblue');

        this.button5.position(370,610);
        this.button5.style('width', '200px');
        this.button5.style('height', '40px');
        this.button5.style('background', 'lightblue');

        this.button6.position(370,680);
        this.button6.style('width', '200px');
        this.button6.style('height', '40px');
        this.button6.style('background', 'lightblue');

        this.button7.position(370,750);
        this.button7.style('width', '200px');
        this.button7.style('height', '40px');
        this.button7.style('background', 'lightblue');

        this.playerId.html("Your Player Id Is : " + playerCount);
        this.playerId.position(360,220);
        this.playerId.style('font-size', '40px');
        
    }
    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })

    }

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }
    async start() {
            if (gameState === 0) {
                player = new Player();
                var playerCountRef = await database.ref('playerCount').once("value");
                if (playerCountRef.exists()) {
                    playerCount = playerCountRef.val();
                    player.getCount();
                }
                form = new Form()
                form.display();
            }

        }
    
    play(){
        
                form.hide();
                game.display();
                Player.getPlayerInfo();
                 drawSprites();

    }

    end(){
       console.log("Game Ended");
    }
}