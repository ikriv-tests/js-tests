/* using bind() may lead to unexpected results */
'use strict'

var logger = {
    messages: [],
    log(text) {  this.messages.push(text); },
    out(level, text) { this.log(level.toUpperCase() + ": " + text); },
    clear() { console.log("Messages logged: " + this.messages.length); this.messages = []; }
};

function doStuff(out) {
    out("debug", "this is a test");
}

doStuff(logger.out.bind(logger));  // Logs to logger.messages
logger.clear();                    // Messages logged: 1

doStuff(logger.out.bind(console)); // Logs to console, bypass logger.messages
logger.clear();                    // Messages logged: 0

doStuff(logger.out.bind(Math)); // Logs nowhere; attempts to calculate logarithm of some text instead
logger.clear();                 // Messages logged: 0
