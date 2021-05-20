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
      const hundredths = (difference ? Math.floor(difference.getMilliseconds() / 10) : )
  }
}