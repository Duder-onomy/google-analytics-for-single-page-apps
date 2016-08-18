'use strict';

module.exports = {
    page : sendPageView,
    sendEvent : sendEvent,
    sendVideoPlayEvent : sendVideoPlayEvent
};

function sendEvent(eventCategory, eventAction, eventLabel) {
    window.ga('send', {
        hitType: 'event',
        eventCategory: eventCategory,
        eventAction: eventAction,
        eventLabel: eventLabel
    });
}

function sendVideoPlayEvent(eventLabel) {
    window.ga('send', {
        hitType: 'event',
        eventCategory: 'Videos',
        eventAction: 'play',
        eventLabel: eventLabel
    });
}

function sendPageView(pageRoute) {
    window.ga('set', 'page', pageRoute.model.name);
    window.ga('send', 'pageview');
}