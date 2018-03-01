var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Timer = require('Timer');

describe('Timer', () => {
    it('should exists', () => {
        expect(Timer).toExist();
    });

    it('timer works', (done) => {
        var timer = TestUtils.renderIntoDocument(<Timer />);
        timer.startTimer();
        expect(timer.state.time).toBe(0);
        setTimeout(
            () => {
                expect(timer.state.time).toBe(2);
                expect(timer.state.countdownStatus).toBe('started');
                done();
            }, 2001
        )
            
    });

    it('pause works', (done) => {
        var timer = TestUtils.renderIntoDocument(<Timer />);
        timer.state.time = 10;
        timer.state.countdownStatus = 'paused';

        
        setTimeout(
            () => {
                expect(timer.state.countdownStatus).toBe('paused');
                expect(timer.state.time).toBe(10);
                done();
            }, 3001
        )
    });
});