var React = require('react');
var Clock = require('Clock');
var Controls = require('Controls');

var Timer = React.createClass({
    getInitialState: function() {
        return {
            time: 0,
            countdownStatus: 'paused'
        }
    },
    componentDidUpdate: function (prevProps, prevState) {
        if(this.state.countdownStatus !== prevState.countdownStatus) {
            switch(this.state.countdownStatus) {
                case 'started':
                    this.startTimer();
                    break;
                case 'paused':
                    clearInterval(this.timer);
                    this.timer = undefined;
                    break;
                case 'stopped':
                    // this.state.countdownStatus = 'paused';
                    this.state.time = 0;
                    break;
            }
        }
    },
    componentWillUpdate: function (nextProps, nextState) {
        if(this.state.countdownStatus !== nextState.countdownStatus) {
            switch(nextState.countdownStatus) {
                case 'stopped':
                    nextState.countdownStatus = 'paused';
                    nextState.time = 0;
                    break;
            }
        }
    },
    startTimer: function () {
        this.timer = setInterval(() => {
            var newTime = this.state.time + 1;
            this.setState({
                time: newTime,
                countdownStatus: 'started'
            })
            console.log(newTime)
        }, 1000);
    },
    handleStatusChange: function (newStatus) {
        this.setState({countdownStatus: newStatus});
    },
    render: function() {
        return (
            <div>
                <h1 className="page-title">Timer component</h1>
                <Clock totalSeconds={this.state.time} />
                <Controls countdownStatus={this.state.countdownStatus} onStatusChange={this.handleStatusChange}/>
            </div>
        )
    }
});
    

module.exports = Timer;