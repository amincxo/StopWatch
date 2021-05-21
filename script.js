class state {
    constructor(startTimestamp, difference, suspended){
    this.startTimestamp = startTimestamp;
    this.difference = difference;
    this.suspended = suspended;
    }

    static ready() {
        return new state(null,0,0);
    }
}

class Stopwatch {
    constructor(state){
        this.state = state;
        this.requestAnimationId = null
        this.handleClickStart = this.handleClickStart.bind(this);
        document
            .getElementById("start")
            .addEventListener("click" , this.handleClickStart);
        this.handleClickStart = this.handleClickStart.bind(this);
        document
            .getElementById("start")
            .addEventListener("click" , this.handleClickStart);
        this.handleClickStart = this.handleClickStart.bind(this);
        document
            .getElementById("start")
            .addEventListener("click" , this.handleClickStart);
        this.tick = this.tick.bind(this);
        this.render();
    }

    static ready() {
        return new Stopwatch(state.ready());
    }

    setState(newState) {
        this.state = { ...this.state, ...newState};
        this.render();
    }

    tick() {
        this.setState({
            difference: new Date( new Date() - this.state.startTimestamp)
        })
        this.requestAnimationId = requestAnimationFrame(this.tick);
    }

    handleClickStart() {
        if(this.state.startTimestamp){
            // Prevent multi clicks on start
        return;
        }
    this.setState({
        startTimestamp : new Date() - this.state.suspended,
        suspended = 0
    })
    this.requestAnimationId = requestAnimationFrame(this.tick);
  }

  handleClickstop() {
      cancelAnimationFrame(this.requestAnimationId);
      this.setState({
          startTimestamp: null,
          suspended: this.state.difference
      });
  }

  handleClickReset(){
      cancelAnimationFrame(this.requestAnimationId);
      this.setState(State.ready());
  }

  render(){
      const {difference} = this.state;
      const hundredths = (difference
            ? Math.floor(difference.getMilliseconds() / 10)
        : 0
      )
        .toString()
        .padstsart(2,"0");
        const seconds = (difference 
            ? Math.floor(difference.getseconds())
        : 0
      )
        .toString()
        .padstsart(2,"0");
        const minutes = (difference 
            ? Math.floor(difference.getMinutes())
        : 0
      )
        .toString()
        .padstsart(2,"0");
        //render screen
        document.getElementById("minutes").textContent = minutes;
        document.getElementById("seconds").textContent = seconds;
        document.getElementById("hundredths").textContent = hundredths;

        
  }
}

const STOPWATCH = Stopwatch.ready();