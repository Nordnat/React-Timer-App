var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Countdown = require('Countdown');

describe('Coundtown', () => {
    it('Should exists', () => {
        expect(Countdown).toExist();
    });

    describe('hendleSetCoundown', () => {
        it('should set state to count and countdownStatus', (done) => {
            var coundtown = TestUtils.renderIntoDocument(<Countdown />);
            coundtown.hendleSetCountdown(10);

            expect(coundtown.state.count).toBe(10);
            expect(coundtown.state.countdownStatus).toBe('started');

            setTimeout(
                () => {
                    expect(coundtown.state.count).toBe(9);
                    done();
                }, 1001
            )
        });
        it('count will not be negative number', (done) => {
            var coundtown = TestUtils.renderIntoDocument(<Countdown />);
            coundtown.hendleSetCountdown(1);

            setTimeout(
                () => {
                    expect(coundtown.state.count).toBe(0);
                    done();
                }, 3001
            )
        })
    });
})