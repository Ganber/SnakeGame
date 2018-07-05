
function Snake() {

    this.x = 0;
    this.y = 0;
    this.xSpeed = 1;
    this.ySpeed = 0;
    this.total = 0;
    this.tail = [];

    this.eat = function(pos) {
        var d = dist(this.x, this.y, pos.x, pos.y);

        if (d < 1){
            this.total++;
            return true;
        }
        
        return false;
    };

    this.resetGame = function() {
        this.x = 0;
        this.y = 0;
        this.xSpeed = 1;
        this.ySpeed = 0;
        this.total = 0;
        this.tail = [];
        pickLoctaion();
        score = 0;
    };

    this.gameOverMessage = function() {
        textSize(50);
        fill(255);
        text("G A M E   O V E R !", 80, 300);
    };

    // Game Over!
    this.death = function() {

        if(this.x >= width || this.y >= height || this.x < 0 || this.y < 0){ 
            this.gameOverMessage();
            noLoop();
        }

        for (var i = 0; i < this.tail.length; i++){
            var pos = this.tail[i];
            var d = dist(this.x, this.y, pos.x, pos.y);

            if (d < 1) {
                this.gameOverMessage();
                noLoop();
            }
        }
    };

    this.direction = function(_x, _y) {
        this.xSpeed = _x;
        this.ySpeed = _y;
    };

    this.update = function() {

        if (this.total === this.tail.length){
            for (var i = 0; i < this.tail.length - 1; i++)
            {
                this.tail[i] = this.tail[i + 1];
            }
        }
        this.tail[this.total - 1] = createVector(this.x, this.y);

        this.x += this.xSpeed * scl;
        this.y += this.ySpeed * scl;

        this.x = constrain(this.x, 0, width - scl);
        this.y = constrain(this.y, 0, height - scl);
    };

    this.show = function() {

        fill(255);
        for (var i = 0; i < this.tail.length; i++)
        {
            rect(this.tail[i].x, this.tail[i].y, scl, scl);
        }
        rect(this.x, this.y, scl, scl);
    };
}